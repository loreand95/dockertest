const express = require('express')
const cors = require('cors')
const reviews = require('./examples/reviews.json')

const app = express()
const port = 3007

app.use(cors())

const serviceName = 'reviewservice';
const prefix = `/${serviceName}/rest`;

app.get('/', (req, res) => {
  res.send({name:serviceName})
})

app.get(`${prefix}/movies/:id`, (req, res) => {
  res.send(reviews)
})

app.listen(port, () => {
  console.log(`Unifake app listening at http://localhost:${port}`)
})