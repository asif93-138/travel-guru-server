const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const places = require('./places.json');
const hotels = require('./hotels.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send(places)
  })

app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('data for id :', id)
    const place = places.find(x => x.id === id) || {};
    res.send(place)
})

app.get('/hotels', (req, res) => {
  res.send(hotels)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})