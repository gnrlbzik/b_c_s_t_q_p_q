import {combineReducers, createStore} from 'redux';
import {
    DELETE_APPOINTMENT,
    UPDATE_APPOINTMENT,
    SET_APPOINTMENT_DETAILS_ID
} from './appointments-actions';

// reducers
function appointments (state = [], action) {
    switch (action.type) {
        case DELETE_APPOINTMENT:
            return state.filter((appointment) => {
                return appointment.appointmentId !== action.appointmentId;
            });
            break;
        case UPDATE_APPOINTMENT:
            if (typeof action.appointmentData.appointmentId === undefined) {
                return state;
            }
            let didNotFindItem = true;
            const newState = state.map((appointment) => {
                if (appointment.appointmentId === action.appointmentData.appointmentId) {
                    didNotFindItem = false;
                    return Object.assign({},appointment,action.appointmentData);
                }
                return appointment;
            });
            if (didNotFindItem) {
                newState.push(action.appointmentData);
            }
            return newState;
            break;
        default:
            return state;
    }
}

function appointmentDetails (state = {}, action) {
    switch (action.type) {
        case SET_APPOINTMENT_DETAILS_ID:
            return {
                appointmentId: action.appointmentId
            };
            break;
        default:
            return state;
    }
}

const allReducers = combineReducers({ appointments, appointmentDetails });

const appointmentsStore = createStore(allReducers);

export default appointmentsStore;
