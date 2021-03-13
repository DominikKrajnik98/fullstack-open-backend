const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() =>{
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    })

const personSchema = new mongoose.Schema({
    name : String, 
    number : String,
})

personSchema.set('toJSON',{
    transform: (document,returnedOject) =>{
        returnedOject.id = returnedOject._id.toString()
        delete returnedOject._id
        delete returnedOject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)