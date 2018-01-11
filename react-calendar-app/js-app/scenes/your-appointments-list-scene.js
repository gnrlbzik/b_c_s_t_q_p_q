import React from 'react';
import AppointmentListItem from './../components/appointments-list-item';
import AppointmentDetailsView from './../components/appointment-details-view';
import { find as _find } from 'lodash';

// actions
import {
    deleteAppointment,
    updateAppointment,
    setAppointmentDetailsId
} from './../state/appointments-actions';

// stores
import appointmentsStore from './../state/appointments-store';

export default class YourAppointmentsListScene extends React.Component {
    constructor() {
        super();
        this.handleAppointmentsStoreChange = this.handleAppointmentsStoreChange.bind(this);
        this.handleCreateAppointmentButtonClick = this.handleCreateAppointmentButtonClick.bind(this);
        this.handleSaveAppointmentDataButtonClick = this.handleSaveAppointmentDataButtonClick.bind(this);
        this.handleAppointmentDetailsViewCancelButtonClick = this.handleAppointmentDetailsViewCancelButtonClick.bind(this);
        this.handleEditAppointmentButtonClick = this.handleEditAppointmentButtonClick.bind(this);
        this.state = appointmentsStore.getState();
    }

    handleAppointmentsStoreChange() {
        this.setState(appointmentsStore.getState());
    }

    componentWillMount() {
        this.unsubscribeFromAppointmentsStore = appointmentsStore.subscribe(this.handleAppointmentsStoreChange);
    }

    componentWillUnmount() {
        this.unsubscribeFromAppointmentsStore();
        delete this.unsubscribeFromAppointmentsStore;
    }

    handleCreateAppointmentButtonClick() {
        appointmentsStore.dispatch(setAppointmentDetailsId(Date.now()));
    }

    handleSaveAppointmentDataButtonClick(appointmentData) {
        const isAppointmentValid = this.validateAppointmentData(appointmentData);
        if (!isAppointmentValid.isValid) {
            alert(isAppointmentValid.messages.join('\n'));
            return;
        }
        appointmentsStore.dispatch(setAppointmentDetailsId(null));
        appointmentsStore.dispatch(updateAppointment(appointmentData));
    }

    handleAppointmentDetailsViewCancelButtonClick() {
        appointmentsStore.dispatch(setAppointmentDetailsId(null));
    }

    handleEditAppointmentButtonClick(appointmentId) {
        appointmentsStore.dispatch(setAppointmentDetailsId(appointmentId));
    }

    handleDeleteAppointmentButtonClick(appointmentId) {
        appointmentsStore.dispatch(deleteAppointment(appointmentId));
    }

    getListOfAppointments(list) {
        return list.map((appointmentData, index) => {
            return (
                <AppointmentListItem
                    key={index}
                    appointmentData={appointmentData}
                    handleEditAppointmentButtonClick={this.handleEditAppointmentButtonClick}
                    handleDeleteAppointmentButtonClick={this.handleDeleteAppointmentButtonClick}
                    shouldDisableActionButtons={!!this.state.appointmentDetails.appointmentId}
                />
            );
        });
    }

    getAppointmentDataById(appointmentId) {
        return _find(this.state.appointments, { appointmentId }) || { appointmentId };
    }

    validateAppointmentData(appointmentData) {
        const validity = {
            isValid: true,
            messages: []
        };
        const appointmentWithMatchingDate = _find(this.state.appointments, { 'date':  appointmentData.date});

        if (typeof appointmentData.title === undefined || appointmentData.title.length === 0) {
            validity.isValid = false;
            validity.messages.push('Please provide title for your appointment');
        }

        if (typeof appointmentData.date === undefined || appointmentData.date.length === 0) {
            validity.isValid = false;
            validity.messages.push('Please provide date for your appointment');
        }

        if (appointmentWithMatchingDate && (appointmentWithMatchingDate.appointmentId !== appointmentData.appointmentId)) {
            validity.isValid = false;
            validity.messages.push('Can not create two different appointment on same date');
        }

        const appDate = new Date(appointmentData.date);
        const today = new Date();

        if (appDate.getMonth() === today.getMonth() && appDate.getDate() > today.getDate() || appDate.getMonth() > today.getMonth()) {
            validity.isValid = false;
            validity.messages.push('Date can not be before today');
        }

        return validity;
    }

    render() {
        return (
            <div>
                <h1>Your Appointments List</h1>
                {(this.state.appointments.length > 0) ? (
                    <div>
                        <ul>
                            {this.getListOfAppointments(this.state.appointments)}
                        </ul>
                    </div>
                ) : null}

                {(!this.state.appointmentDetails.appointmentId && this.state.appointments.length > 0) ? (
                    <button onClick={this.handleCreateAppointmentButtonClick}>Add another appointment</button>
                ) : null}

                {(!this.state.appointmentDetails.appointmentId && this.state.appointments.length === 0) ? (
                    <div>You have no saved appointments. You should <button onClick={this.handleCreateAppointmentButtonClick}>create one</button>!</div>
                ) : null}

                {(this.state.appointmentDetails.appointmentId) ? (
                    <AppointmentDetailsView
                        appointmentData={this.getAppointmentDataById(this.state.appointmentDetails.appointmentId)}
                        handleSaveAppointmentDataButtonClick={this.handleSaveAppointmentDataButtonClick}
                        handleCancelButtonClick={this.handleAppointmentDetailsViewCancelButtonClick} />
                ) : (
                    null
                )}
            </div>
        );
    }
};
