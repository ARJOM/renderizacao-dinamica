const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const db = [
    {name: 'Ricart', description: 'Programador'},
    {name: 'Jennifer', description: 'Programadora'},
    {name: 'Nicolas', description: 'Professor de história'}
]


function index(req, res) {
  res.send(db)
}

app.use(cors())
app.get('/', index)
app.listen(port, () => console.log(`Server running on port ${port}!`))