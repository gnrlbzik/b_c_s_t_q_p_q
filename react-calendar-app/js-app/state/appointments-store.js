import {combineReducers, createStore} from 'redux';
import {
    CREATE_APPOINTMENT,
    DELETE_APPOINTMENT,
    UPDATE_APPOINTMENT
} from './appointments-actions';

// reducers
function appointments (state = [], action) {
    switch (action.type) {
        case CREATE_APPOINTMENT:
            const id = Date.now();
            const {
                name,
                dateTime,
            } = action.appointmentData;
            return [
                ...state,
                {
                    id,
                    name,
                    dateTime
                }
            ];
            break;
        case DELETE_APPOINTMENT:
            return state.filter((appointment) => {
                return appointment.id !== action.appointmentId;
            });
            break;
        case UPDATE_APPOINTMENT:
            return state.map((appointment) => {
                if (appointment.id === action.appointmentData.id) {
                    return Object.assign({},appointment,action.appointmentData);
                }
                return appointment;
            });
            break;
        default:
            return state;
    }
}

const allReducers = combineReducers({ appointments });

const appointmentsStore = createStore(allReducers);

export default appointmentsStore;
