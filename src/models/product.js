'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'O campo title é obrigatório'],

    },
    slug: {
        type: String,
        required: [true, 'O campo slug é obrigatório'],
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'O campo description é obrigatório'],
    },
    price: {
        type: Number,
        required: [true, 'O campo price é obrigatório'],
    },
    active: {
        type: Boolean,
        required: [true, 'O campo active é obrigatório'],
        default: true
    },
    tags: [{
        type: String,
        required: [true, 'O campo tags é obrigatório'],
    }]
});


module.exports = mongoose.model('Product', schema);