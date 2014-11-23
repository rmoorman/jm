var Fluxxor = require('fluxxor');

var UserStore = require('./stores/user/UserStore'),
    UserActions = require('./stores/user/UserActions');

    var stores = {
        UserStore: new UserStore()
    }
    var actions = {
        UserActions: UserActions
    }
    
module.exports = new Fluxxor.Flux(stores, actions);