const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const schema = new Schema({
    thread_id: {type: Number, required: true},
    start_time: {type: Date, required: true},
    end_time: {type: Date, required: true}
});

module.exports = mongodb.resource('thread', schema);