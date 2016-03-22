// Third party dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Internal dependencies.
import './index.css';

// UI main component.
class Main extends React.Component {

    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('contactform'));
