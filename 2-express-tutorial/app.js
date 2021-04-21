const express = require('express')
const app = express()

// establish listening port, go ahead and log that we're running
app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})

// when we recieve get requests at '/', fire callback and send resp with status 200 and the text 'Home Page'
app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

// when we recieve any method request at any path that isn't above, send back a 404 and a not found message.
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>')
})