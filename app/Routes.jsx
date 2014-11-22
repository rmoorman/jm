var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    App = require('./Application');
    
var routes = (
    <Route name="app" path="/" handler={App}>
    </Route>
);



module.exports = routes;