const mongoose = require('mongoose')

const URI = 'mongodb://localhost/web-jobs-nodejs'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB is connected')
})
