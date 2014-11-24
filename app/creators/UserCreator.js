var JamaInterace = require('./../api/JamaInterface'),
    Flux = require('./../Flux'),
    Promise = require('bluebird');

var UserCreator = {
    authenticateUser: function(restUrl, username, password) {
        return new Promise(function(resolve, reject) {
            JamaInterace.user.authenticate(restUrl, username, password).end(function(err, res) {
                if (err) {
                    return reject();
                }

                Flux.actions.UserActions.setUserInfo(res.body.data);
                resolve(res.body.data)

            });
        });
    }
}

module.exports = UserCreator;