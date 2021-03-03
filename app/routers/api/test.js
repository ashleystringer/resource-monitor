const {Router} = require('@onehilltech/blueprint');

module.exports = Router.extend({
    specification: {
        '/tests':{
            get: {action: 'test@getAll'}
        }
    }
});