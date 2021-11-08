const express = require('express')
const cors = require('cors')
const actors = require('./examples/actors.json')
const actor = require('./examples/actor.json')

const app = express()
const port = 3005

app.use(cors())

const serviceName = 'movieservice';
const prefix = `/${serviceName}/rest`;

app.get('/', (req, res) => {
  res.send({name:serviceName})
})

app.get(`${prefix}/actors/:id`, (req, res) => {
  res.send(actor)
})

app.get(`${prefix}/movies/:id/actors`, (req, res) => {
  res.send(actors);
})

app.listen(port, () => {
  console.log(`Unifake app listening at http://localhost:${port}`)
})