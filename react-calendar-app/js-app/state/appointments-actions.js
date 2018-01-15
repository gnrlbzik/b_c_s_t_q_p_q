// actions constants
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const SET_APPOINTMENT_DETAILS_ID = 'SET_APPOINTMENT_DETAILS_ID';

// actions creators
export function deleteAppointment (appointmentId) {
    return {
        type: DELETE_APPOINTMENT,
        appointmentId
    };
}

export function updateAppointment (appointmentData) {
    return {
        type: UPDATE_APPOINTMENT,
        appointmentData
    };
}

export function setAppointmentDetailsId (appointmentId) {
    return {
        type: SET_APPOINTMENT_DETAILS_ID,
        appointmentId
    };
}
