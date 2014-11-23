var React = require('react'),
    _ = require('lodash'),
    UserCreator = require('./../creators/UserCreator'),
    Router = require('react-router'),
    Material = require('material-ui'),
    Input = Material.Input,
    PaperButton = Material.PaperButton;

require('./../sass/styles.sass');

var Login = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function() {
        //Load from local sttorage? Some other persistence
        return {
            username: '',
            password: '',
            rest:''            
        };
    },
    handleClick: function() {
        //This violates some flux anti patterns just so we can handle transitions after login
        UserCreator.authenticateUser(this.state.username, this.state.password).then(_.bind(function() {
            this.transitionTo('/')

        }, this)).error(_.bind(function() {
            //ERROR LOGGING IN
        }, this))
    },
    handleChange: function(scope, e) {
        var state = {};
        state[scope] = e.target.value;
        this.setState(state);
    },
    render: function() {
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <img src="img/jamalogo128.png"/>
                    </div>
                    <Input name="username" type="text" placeholder="Username" value={this.state.username} onChange={_.bind(this.handleChange, this, 'username')}/>
                    <Input name="password" type="password" placeholder="Password" value={this.state.password} onChange={_.bind(this.handleChange, this, 'password')}/>
                    <Input name="rest" type="text" placeholder="Rest URL" value={this.state.rest} onChange={_.bind(this.handleChange, this, 'rest')}/>
                    <PaperButton 
                        type="FLAT"
                        onClick={this.handleClick} 
                        label="Login" />
                </div>
            </div>
        );
    }
});

module.exports = Login;