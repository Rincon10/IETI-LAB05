import React from 'react';
import LogInScreen from 'components/login/LogIN';

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
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
