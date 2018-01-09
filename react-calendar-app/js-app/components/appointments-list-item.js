import React from 'react';

const AppointmentListItem = ({
    appointmentData,
    handleUpdateAppointmentButtonClick,
    handleDeleteAppointmentButtonClick,
    shouldDisableActionButtons
}) => (
    <li>
        {appointmentData.dateTime} - {appointmentData.name}
        <button disabled={shouldDisableActionButtons} onClick={handleUpdateAppointmentButtonClick.bind(this, appointmentData.id)}>Edit</button>
        <button disabled={shouldDisableActionButtons} onClick={handleDeleteAppointmentButtonClick.bind(this, appointmentData.id)}>Delete</button>
    </li>
);

export default AppointmentListItem;
