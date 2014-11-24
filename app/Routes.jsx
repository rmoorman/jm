var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App = require('./Application'),
    Login = require('./user/Login');
    
var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={Login} />
        <DefaultRoute handler={Login}/>
    </Route>
);



module.exports = routes;