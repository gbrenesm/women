require('dotenv').config()

const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const cors         = require('cors');

require('./config/mongoose');

const usersRouter = require('./routes/users');

const app = express();

// Middelwares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: ["http://localhost:3001"],
  credentials: true
}))

const womanRouter  = require('./routes/woman');
const dataRouter   = require('./routes/data');
const recordRouter = require('./routes/record');

app.use('/api/woman', womanRouter);
app.use('/api/data', dataRouter);
app.use('/api/record', recordRouter);
app.use('/users', usersRouter);

module.exports = app;