import React from 'react';
import LogInScreen from 'components/login/LogIN';
import HomeScreen from 'components/home/HomeScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    /* Link, */
    Redirect,
} from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LogInScreen} />
                    <Route exact path="/home" component={HomeScreen} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
