// actions constants
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const OPEN_APPOINTMENT_DETAILES = 'OPEN_APPOINTMENT_DETAILES';

// actions creators
export function createAppointment (appointmentData) {
    return {
        type: CREATE_APPOINTMENT,
        appointmentData
    };
}

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

export function retrieveAppointmentDetails (appointmentData) {
    return {
        type: OPEN_APPOINTMENT_DETAILES,
        appointmentData
    };
}
