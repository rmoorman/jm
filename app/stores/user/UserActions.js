var UserConstants = require('./UserConstants');

var UserActions = {
    setUserInfo: function(payload) {
        this.dispatch(UserConstants.SET_USER_INFO, payload);
    },
    loginSuccess: function(payload) {
        this.dispatch(UserConstants.USER_LOGIN_SUCCESS, payload);
    }
}

module.exports = UserActions;