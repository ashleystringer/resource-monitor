const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const schema = new Schema({
    file: {type: String, required: true}
});

module.exports = mongodb.resource('program', schema);