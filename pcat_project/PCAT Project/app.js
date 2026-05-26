const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Photo = require('./models/Photo');

const app = express();

//connect to database
mongoose
  .connect('mongodb://localhost/pcat-db')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

//teplate engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', { photos });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photo', async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    console.log('Photo created:', photo);
    res.redirect('/');
  } catch (err) {
    console.error('Error creating photo:', err);
    res.status(500).send('Error creating photo');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
