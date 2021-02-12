import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Practice from '../components/Practice/Practice';
import Random from '../components/Random/Random';
import TrickList from '../components/TrickList/TrickList';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/practice" exact={true} component={Practice} />
                    <Route path="/random" exact={true} component={Random} />
                    <Route path="/list" exact={true} component={TrickList} />
                </div>
            </Router>
        </div>
    );
};

export default App;