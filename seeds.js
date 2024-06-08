const mongoose = require('mongoose')
const Product = require('./models/Product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection open.')
    })
    .catch(err => {
        console.log(`An error has occurred:\n${err}`)
    })

const seed = [
    {
        name: 'Organic Goddes Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedles Watermelon',
        price: 3.99,
        category: 'fruit',
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    }
]

Product.insertMany(seed)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
