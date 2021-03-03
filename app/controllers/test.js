const {
  ResourceController,
  Action,
  model
} = require ('@onehilltech/blueprint');

/**
 * @class test
 */
module.exports = ResourceController.extend ({
  name: 'test',
  Call: model('call'),
  init(){
    console.log("Init");
  },
  getAll(){
    return Action.extend({
      execute(req, res){
          console.log("getAll");
          //Call
      }
    });
  }
});
