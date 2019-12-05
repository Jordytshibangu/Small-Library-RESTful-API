const express = require('express')
const Genre = require('../models/genre')
const route = express.Router()

route.get('/', (req, res) => {
    Genre.getGenres((err, genres)=>{
        if(err){
            throw err;
        }
        res.json(genres)
    })
})
route.get('/:id', (req, res) => {

    Genre.findById(req.params.id, (err, genre)=>{
        if(err){
            throw err;
        }
        res.json(genre)
    })
})
route.post('/', (req,res) => {
    const genre = req.body;
    Genre.addGenres(genre,(err, genre)=>{
        if(err){
            res.status(400).json({error : 'This is an error'})
            console.log(genre)
        }
        res.json(genre)
    })
})
route.put('/:id', (req,res) => {
    const genre = req.body
    console.log(genre)

    Genre.updateGenres(req.params.id, genre ,{},(err, genre)=>{
        if(err){
            res.status(400).json({error : 'This is an error'})
            console.log(genre)
        }
        res.json(genre)
    })
})
route.delete('/:id', (req,res) => {
    const id = req.params.id

    Genre.deleteGenres(id,(err, genre)=>{
        if(err){
            res.status(400).json({error : 'This is an error'})
            console.log(genre)
        }
        res.json({ message : 'successfully deleted'})
        console.log('deleted')
    })
})

module.exports = route