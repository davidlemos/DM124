const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://davidlemos:dm124@cluster0-lbuc4.mongodb.net/deliveries?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true
  }
);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/deliveries', require('./api/routes/deliveries'));
app.use(require('./api/middleware/not-found'));

module.exports = app;
