const path = require('path')
const express = require('express')
const data = require('./db/fakedata.json')
const app = express()

const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/api/all', (req,res) => {
  res.json(data)
})

if (process.env.NODE_ENV === 'production'){
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })
}

app.use(express)
app.listen( PORT, () => {
  console.log(`Listening on port ${PORT}`)
})