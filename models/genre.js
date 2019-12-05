const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const genreSchema = new Schema({
    name : {
        type : String,
        required : true   
    },
    create_date: {
        type : Date,
        default : Date.now
    }})
const Genre =  module.exports = mongoose.model('Genre', genreSchema)

// Get Genres 

module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit)
}

// Add Genres
module.exports.addGenres = function(genre, callback){
    Genre.create(genre, callback)
}

// Update 
module.exports.updateGenres = function(id, options, genre, callback){
    const query = {_id : id}
    const update = {
        name : genre.name
    }
    Genre.findByIdAndUpdate(query, update, options, callback)
}

// Delete 
module.exports.deleteGenres = function(id, callback){
    const query = {_id : id}
    Genre.remove(query, callback)
}
