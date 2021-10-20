import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/login";
import Main from "./pages/main";
import SetLogo from "./pages/setLogo";

const LoggedOutRoutes = () => (
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/setLogo" component={SetLogo} />
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