import React from 'react';

export default class AppointmentDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClickButton = this.handleOnClickButton.bind(this);
    }

    handleOnClickButton() {
        this.props.handleSaveAppointmentDataButtonClick({
            name: this.refs.appointmentTitleValue.value,
            dateTime: this.refs.appointmentDateValue.value
        });
    }

    render() {
        const {
            handleSaveAppointmentDataButtonClick,
            handleCancelButtonClick
        } = this.props;
        return (
            <div id="appointment-details">
                <h2>New Apppointment</h2>
                <label htmlFor="appointment-title">Title:
                    <input id="appointment-title" type="text" ref="appointmentTitleValue" />
                </label>
                <label htmlFor="appointment-date">Date:
                    <input id="appointment-date" type="date" ref="appointmentDateValue" />
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
