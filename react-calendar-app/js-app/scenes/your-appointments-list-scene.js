import React from 'react';
import AppointmentListItem from './../components/appointments-list-item';
import AppointmentDetailsView from './../components/appointment-details-view';

// actions
import {
    createAppointment,
    deleteAppointment,
    updateAppointment
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
        this.handleUpdateAppointmentButtonClick = this.handleUpdateAppointmentButtonClick.bind(this);
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
        this.setState({
            showAppointmentDetailsForm: true
        });
    }

    handleSaveAppointmentDataButtonClick(appointmentData) {
        appointmentsStore.dispatch(createAppointment(appointmentData));
        this.setState({
            showAppointmentDetailsForm: false
        });
    }

    handleAppointmentDetailsViewCancelButtonClick() {
        this.setState({
            showAppointmentDetailsForm: false
        });
    }

    handleUpdateAppointmentButtonClick(appointmentId) {
        this.setState({
            showAppointmentDetailsForm: true
        });
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
                    handleUpdateAppointmentButtonClick={this.handleUpdateAppointmentButtonClick}
                    handleDeleteAppointmentButtonClick={this.handleDeleteAppointmentButtonClick}
                    shouldDisableActionButtons={this.state.showAppointmentDetailsForm}
                />
            );
        });
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

                {(!this.state.showAppointmentDetailsForm && this.state.appointments.length > 0) ? (
                    <button onClick={this.handleCreateAppointmentButtonClick}>Add another appointment</button>
                ) : null}

                {(!this.state.showAppointmentDetailsForm && this.state.appointments.length === 0) ? (
                    <div>You have no saved appointments. You should <button onClick={this.handleCreateAppointmentButtonClick}>create one</button>!</div>
                ) : null}

                {(this.state.showAppointmentDetailsForm) ? (
                    <AppointmentDetailsView
                        handleSaveAppointmentDataButtonClick={this.handleSaveAppointmentDataButtonClick}
                        handleCancelButtonClick={this.handleAppointmentDetailsViewCancelButtonClick} />
                ) : (
                    null
                )}
            </div>
        );
    }
};
