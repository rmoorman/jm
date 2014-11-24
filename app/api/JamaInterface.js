var JamaAPI = require('jama-rest-api'),
    APIInstance = new JamaAPI({restURL: '', username: '', password: ''});

var JamaInterface = {

    user: {
        authenticate: function(restUrl, username, password) {
            APIInstance.authenticate(restUrl, username, password);
            return APIInstance.users.current();
        }
    }
}

module.exports = JamaInterface;