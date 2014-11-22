/** @jsx React.DOM */

var React = require("react");

// Basic styling
require("./style.styl");

// render top-level react component
var Application = React.createClass({
	render: function() {
		return <span className="this-iss"/>;
	}
});
module.exports = Application;