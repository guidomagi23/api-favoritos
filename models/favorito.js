'use strict'

var mongooes = require('mongoose');
var Schema = mongooes.Schema;

var FavoritoSchema = Schema({
    title: String,
    description: String,
    url: String
});

module.exports = mongooes.model('Favorito', FavoritoSchema);