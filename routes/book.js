const express = require('express')
const Book = require('../models/book')
const route = express.Router()

route.get('/', (req, res) => {
    Book.getBooks((err, books)=>{
        if(err){
            throw err;
        }
        res.json(books)
    })
})
route.get('/:id', (req, res) => {
    Book.getBook( (req.params.id), (err, book) =>{
        if(err){
            throw err;
        }
        res.json(book)
    })
})
route.post('/', (req,res) => {
    const genre = req.body;
    Book.addBook(genre,(err, book)=>{
        if(err){
            res.status(400).json({error : 'This is an error'})
        }
        res.json(book)
    })
})
route.put('/:id', (req,res) => {

    const book = req.body
    console.log(book)

    Book.updateBook(req.params.id, book ,{},(err, book)=>{
        if(err){
            res.status(400).json({error : 'This is an error'})
            //console.log(book)
        }
        res.json(book)
    })
})
route.delete('/:id', (req,res) => {
    const id = req.params.id

    Book.deleteBooks(id,(err, genre)=>{
        if(err){
            res.status(400).json({error : 'This is an error'})
            console.log(genre)
        }
        res.json({ message : 'successfully deleted'})
        console.log('deleted')
    })
})

module.exports = route