/** @jsx React.DOM */

var React = require("react");
var Application = require("../app/Application");
var ApplicationFactory = React.createFactory(Application);
var html = require("../app/prerender.html");

module.exports = function(scriptUrl, styleUrl, commonsUrl) {
	var application = React.renderToString(<ApplicationFactory />);
	return html.replace("STYLE_URL", styleUrl).replace("SCRIPT_URL", scriptUrl).replace("COMMONS_URL", commonsUrl).replace("CONTENT", application);
};
