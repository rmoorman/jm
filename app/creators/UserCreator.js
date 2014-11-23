var JamaInterace = require('./../api/JamaInterface'),
    Flux = require('./../Flux'),
    Promise = require('bluebird');

var UserCreator = {
    authenticateUser: function(username, password) {
        return new Promise(function(resolve, reject) {
            JamaInterace.user.authenticate(username, password, function(err, userInfo) {    

                if (err) {
                    reject();
                } else {
                    Flux.actions.UserActions.loginSuccess(userInfo);
                    resolve(userInfo); 
                }
            });
        });
    }
}

module.exports = UserCreator;