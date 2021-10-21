import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/login";
import Main from "./pages/main";

const LoggedOutRoutes = () => (
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route path="/" component={Main} exact />
    </Switch>
)

const Router = ({ isLoggedIn }) => {
    return (
        <>
            {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </>
    )
}

export default Router;