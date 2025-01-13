const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3001;

// bring in the data
const videogames = require('./data/videogames');

// middleware
app.use(morgan('dev'));
app.use(express.json()); // create and populate req.body
// app.use(cors()); // anyone can make requests to our server
app.use(express.static('../frontend/build'));

// GET /api/videogames
app.get('/api/videogames', (req, res) => {
  const videogameArr = Object.values(videogames);
  res.json(videogameArr);
});

// POST /api/videogames
app.post('/api/videogames', (req, res) => {
  // grab the info from the body
  const { title, releaseYear, genre } = req.body;

  // create a new video game object
  const id = Math.random().toString(36).substring(2, 6); // generate a random 4 char string

  const videogame = {
    id,
    title,
    releaseYear: Number(releaseYear),
    genre,
  };

  videogames[id] = videogame;

  console.log(videogames);

  // do something with the user/request
  res.status(201).json(videogame);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
