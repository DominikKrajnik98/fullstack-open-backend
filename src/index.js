const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
//app.use(cors())
app.use(express.static('build'))

let persons = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
]

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/api/persons', (req, res) => res.json(persons))

app.get('/info', (req, res) => {
    const date = new Date()
    const size = persons.length
    res.send(`
    <div>
        <p>Phonebook has info for ${size} people</p>
        <p>${date}</p>
    </div>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person)
        return res.json(person)
    res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const generateId = () =>{
    min = 0
    max = 1000000
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if(!body.name || !body.number){
        return res.status(400).json({
            error: 'content missing'
        })
    }
    if(persons.find(personToFind => personToFind.name === body.name)){
        return res.status(409).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))