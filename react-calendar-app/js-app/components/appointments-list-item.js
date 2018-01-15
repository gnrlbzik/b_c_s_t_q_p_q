import React from 'react';

const AppointmentListItem = ({
    appointmentData,
    handleEditAppointmentButtonClick,
    handleDeleteAppointmentButtonClick,
    shouldDisableActionButtons
}) => (
    <li>
        {appointmentData.appointmentId} - {appointmentData.date} - {appointmentData.title}
        <button disabled={shouldDisableActionButtons} onClick={handleEditAppointmentButtonClick.bind(this, appointmentData.appointmentId)}>Edit</button>
        <button disabled={shouldDisableActionButtons} onClick={handleDeleteAppointmentButtonClick.bind(this, appointmentData.appointmentId)}>Delete</button>
    </li>
);

export default AppointmentListItem;
