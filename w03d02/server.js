const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

const movies = require('./data/movies');

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev')); // logger
app.use(express.urlencoded({ extended: false })); // creates and populates req.body

//////////////
// READ
//////////////

app.get('/movies', (req, res) => {
  const templateVars = {
    movies,
  };

  res.render('movies', templateVars);
});

//////////////
// CREATE
//////////////

// GET /movies/new
app.get('/movies/new', (req, res) => {
  res.render('new-movie-form');
});

// POST /movies
app.post('/movies', (req, res) => {
  // pull the information off of req.body
  const director = req.body.director;
  const title = req.body.title;
  const genre = req.body.genre;
  const year = Number(req.body.year);

  // generate a random id
  const id = Math.random().toString(36).slice(2); // generate a random alpha-numeric string

  // create a new movie object
  const newMovie = {
    id: id,
    director: director,
    genre: genre,
    title: title,
    year: year,
  };

  // update the movies object
  movies[id] = newMovie;

  console.log(movies);

  // what do we do?
  res.redirect('/movies'); // tells the browser to make a GET request
});

//////////////
// DELETE
//////////////

app.post('/movies/:id/delete', (req, res) => {
  // grab the info from the url
  const movieId = req.params.id;

  // delete the key/value pair from movies
  delete movies[movieId];

  // redirect the user back to the movies page
  res.redirect('/movies');
});

//////////////
// UPDATE
//////////////

// GET /movies/:id/edit
app.get('/movies/:id/edit', (req, res) => {
  const movieId = req.params.id;
  const movie = movies[movieId];

  const templateVars = {
    movie
  };

  res.render('edit-form', templateVars);
});

// POST /movies/:id/edit
app.post('/movies/:id/edit', (req, res) => {
  const movieId = req.params.id;

  // pull the information off of req.body
  const director = req.body.director;
  const title = req.body.title;
  const genre = req.body.genre;
  const year = Number(req.body.year);

  // update the existing object with the new values
  movies[movieId].director = director;
  movies[movieId].title = title;
  movies[movieId].genre = genre;
  movies[movieId].year = year;

  // redirect somewhere
  res.redirect('/movies');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
