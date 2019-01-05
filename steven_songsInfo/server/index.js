const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// GET request to render index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// GET request to db
// only rendering one row from databse for now
// need to write random num generator
// to only GET one id per rendering of client

const ranNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.get('http://localhost:3001/api/songs-info', (req, res) => {
  db.SongsInfo.findAll({
    where: {
      id: ranNum(0, 10)
    }
  })
    .then(data => {
      res.json(data).status(200);
    })
    .catch(err => {
      console.log('server GET request not working', err);
    });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

module.exports = app;
