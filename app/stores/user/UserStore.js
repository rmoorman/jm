var Fluxxor = require('fluxxor'),
    Const = require('./UserConstants'),
    Immutable = require('immutable');

var UserStore = Fluxxor.createStore({

    initialize: function() {
        this.data = Immutable.fromJS({
            loggedIn: false,
            userInfo: {}
        })
        this.bindActions(
            Const.SET_USER_INFO, this.setUserInfo,
            Const.USER_LOGIN_SUCCESS, this.loginSuccess
        )
    },
    loginSuccess: function(payload) {
        this.setIsLoggedIn(true);
        this.emit('change');

    },
    getIsLoggedIn: function() {
        return this.data.get('loggedIn');
    },
    setIsLoggedIn: function(loggedIn) {
        this.data.set('loggedIn', loggedIn);
    },
    getUserInfo: function() {
        return this.data.get('userInfo');
    },
    setUserInfo: function(payload) {
        this.data = this.data.set('userInfo', payload);
        this.emit('change');
    }
});

module.exports = UserStore;