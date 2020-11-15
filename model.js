var mongoose = require('mongoose');
// Setup schema
var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});
// Export Quote model
var Quote = module.exports = mongoose.model('quote', schema);
module.exports.get = function (callback, limit) {
    Quote.find(callback).limit(limit);
}