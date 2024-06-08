const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connection open.')
    })
    .catch(err => {
        console.log(`An error has occurred:\n${err}`)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})