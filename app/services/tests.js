const { Service, computed } = require ('@onehilltech/blueprint');

module.exports = Service.extend({
    _tests: null,
    tests: computed({
        get () { return this._tests; }
    }),
    init(){
        this._super.call (this, ...arguments);
        this._tests = [
            {
                type: 'tests',
                name: '01'
            },
            {
                type: 'tests',
                name: '02'
            }
        ];
    }
});