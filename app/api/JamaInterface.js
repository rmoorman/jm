var JamaInterface = {
    user: {
        authenticate: function(username, password, cb) {
            cb(null, {
                username: username,
                hash: btoa(username + ':' + password),
                id: 1,
                name: 'hdao'
            });
        }
    }
}

module.exports = JamaInterface;