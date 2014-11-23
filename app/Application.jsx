var React = require("react"),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Flux = require('Flux');

var Application = React.createClass({
	render: function() {
		return (
            <div>
                <RouteHandler/>
            </div>
      );
	},
    statics: {
        willTransitionTo: function(transition, params) {
            if (!Flux.store('UserStore').getIsLoggedIn() && !transition.path == '/login') {
                transition.redirect('login');
            }
        }
    }
});

module.exports = Application;