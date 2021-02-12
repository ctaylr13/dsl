import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AllTricks from '../components/TrickList/AllTricks';
import Header from './Header';
import Home from './Home';
import MyTricks from '../components/TrickList/TrickList';
import NewPractice from '../components/Practice/NewPractice';
import NewRoutine from '../components/Practice/NewRoutine';
import Practice from '../components/Practice/Practice';
import Random from '../components/Random/Random';
import SessionLog from '../components/Practice/SessionLog';
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
                    <Route path="/practice/log" exact={true} component={SessionLog} />
                    <Route path="/practice/new" exact={true} component={NewPractice} />
                    <Route path="/practice/routine/new" exact={true} component={NewRoutine} />
                    <Route path="/random" exact={true} component={Random} />
                    <Route path="/list" exact={true} component={TrickList} />
                    <Route path="/list/all" exact={true} component={AllTricks} />
                    <Route path="/list/my" exact={true} component={MyTricks} />
                </div>
            </Router>
        </div>
    );
};

export default App;