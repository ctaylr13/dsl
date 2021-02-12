import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Route path="/" exact={true} component={Home} />
                </div>
            </Router>
        </div>
    );
};

export default App;