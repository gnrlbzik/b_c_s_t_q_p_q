import React from 'react';

export default class AppointmentDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClickButton = this.handleOnClickButton.bind(this);
    }

    handleOnClickButton() {
        this.props.handleSaveAppointmentDataButtonClick({
            title: this.refs.appointmentTitleValue.value,
            date: this.refs.appointmentDateValue.value,
            appointmentId: this.props.appointmentData.appointmentId
        });
    }

    render() {
        const {
            appointmentData,
            handleCancelButtonClick
        } = this.props;
        return (
            <div id="appointment-details">
                <h2>New Apppointment</h2>
                <label htmlFor="appointment-title">Title:
                    <input id="appointment-title" type="text" ref="appointmentTitleValue" defaultValue={appointmentData.title} />
                </label>
                <label htmlFor="appointment-date">Date:
                    <input id="appointment-date" type="date" ref="appointmentDateValue" defaultValue={appointmentData.date} />
                </label>

                <button onClick={this.handleOnClickButton}>Save Appointment</button>

                <button onClick={handleCancelButtonClick}>Cancel</button>
            </div>
        );
    }
}


//     ({
//     handleSaveAppointmentDataButtonClick,
//     handleCancelButtonClick
// }) => {
//     return (
//         <div id="appointment-details">
//             <h2>New Apppointment</h2>
//             <label htmlFor="appointment-title">Title:
//                 <input id="appointment-title" type="text" ref="appointmentTitleValue" />
//             </label>
//             <label htmlFor="appointment-date">Date:
//                 <input id="appointment-date" type="date" ref="appointmentDateValue" />
//             </label>
//             <button onClick={handleSaveAppointmentDataButtonClick}>Save Appointment</button>
//             <button onClick={handleCancelButtonClick}>Cancel</button>
//         </div>
//     );
// };
