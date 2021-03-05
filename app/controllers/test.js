const {
  ResourceController,
  Action,
  model,
  models,
  service
} = require ('@onehilltech/blueprint');

/**
 * @class test
 */
module.exports = ResourceController.extend ({
  name: 'test',
  Call: model('call'),
  tests: service(),
  init(){
    console.log("Init");
  },
  getAll(){
    return Action.extend({
      execute(req, res){
          const data = this.controller.tests.tests;
          this.controller.Call.find((err, docs)=>{
            if(err){
              console.log("Error");
            }else{
              console.log("No issue");
            }
          });
          //res.status(200).json({data});
      }
    });
  }
});
