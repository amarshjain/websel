const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebsiteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    developer: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    iconurl: {
        type: String
    },
    techStack : {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    responsive : {
        type: Boolean,
        required: true
    },
    githublink : {
        type: String
    },
    priceRange: {
        type: String
    }
});

module.exports = Website = mongoose.model('website', WebsiteSchema);