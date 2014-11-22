var React = require("react"),
    Router = require('react-router');

var ApplicationRouting = require("../app/Routes")

Router.run(ApplicationRouting, function (Handler) {
  React.render(<Handler/>, document.body);
});