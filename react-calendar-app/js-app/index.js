import './index.scss';
import React from 'react';
import { render } from 'react-dom';

// scenes
import YourAppointmentsListScene from './scenes/your-appointments-list-scene'

// root component
const AppRoot = () => (
    <YourAppointmentsListScene />
);

render(<AppRoot />, document.getElementById('app-root'));
