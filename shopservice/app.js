const express = require('express')
const cors = require('cors')
const movies = require('./examples/movies.json')
const movie = require('./examples/movie.json')

const app = express()
const port = 3006

app.use(cors())

const serviceName = 'shopservice';
const prefix = `/${serviceName}/rest`;

app.get('/', (req, res) => {
  res.send({name:serviceName})
})

app.get(`${prefix}/movies`, (req, res) => {
  res.send(movies)
})

app.get(`${prefix}/movies/:id`, (req, res) => {
  res.send(movie);
})

app.post(`${prefix}/movies/:id/buy`, (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`Unifake app listening at http://localhost:${port}`)
})