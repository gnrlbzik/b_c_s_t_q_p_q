import './index.scss';
import React from 'react';
import { render } from 'react-dom';

class AppRoot extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div>Main App Component</div>);
    }
}
export default App;

render(<AppRoot />, document.getElementById('app-root'));
