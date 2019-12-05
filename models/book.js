const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const bookSchema = new Schema({
    title : {
        type : String,
        required : true   
    },
    genre: {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    author : {
        type : String,
        required : true
    },
    create_date : {
        type : Date,
        default : Date.now
    },
    publisher : {
        type : String
    },
    pages : {
        type : Number
    },
    image_url : {
        type : String
    },
    buy_url : {
        type : String

    }

})
const Book =  module.exports = mongoose.model('Book', bookSchema)

// Get Books 

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit)
}

// Get Book

module.exports.getBook = function(id, callback){
    Book.findById(id, callback)
}
// Add Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback)
}
// Update 
module.exports.updateBook = function(id, options, book, callback){
    const query = {_id : id}
    const update = {
        title : book.title,
        genre : book.genre,
        description : book.description,
        author : book.author,
        publisher : book.publisher,
        pages : book.pages,
        image_url : book.image_url,
        buy_url : book.buy_url

    }
    Book.findByIdAndUpdate(query, update, options, callback)
}
// Delete 
module.exports.deleteBooks = function(id, callback){
    const query = {_id : id}
    Book.remove(query, callback)
}


