var React = require("react"),
    Router = require('react-router');

var ApplicationRouting = require("../app/Routes")



function deviceReady() {
    Router.run(ApplicationRouting, function (Handler) {
        React.render(<Handler/>, document.body);
    });  
}
if (window.cordova) {
    document.addEventListener('deviceready', deviceReady, false);
} else {
    deviceReady();
}