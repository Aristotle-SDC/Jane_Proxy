const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('./public'));
app.use(/\/\d+\//, express.static('./public'));

// jane's component
app.use('/api/jane/player/:id', (req, res) => {
  var url = `http://localhost:5000/api/jane/player/${req.params.id}`;
  req.pipe(request(url)).pipe(res);
});

// steven's component
app.use('/api/songs-info/:id', (req, res) => {
  var url = `http://localhost:3001/api/songs-info/${req.params.id}`;
  req.pipe(request(url)).pipe(res);
});

// justin's component


// thom's component
app.use('/api/comments', (req, res) => {
  var url = 'http://localhost:3003/api/comments';
  req.pipe(request(url)).pipe(res);
});
app.get('/api/comments', (req, res) => {
  db.GetAllComments( 
    (err,comments) => {
      if (err) {throw err}
      else {res.send(comments);}
    }
  );
 
});

app.post('/api/comments', (req,res) => {
  db.AddOne(req.body,
    (err,comment) => {
      if (err) {console.log('error in express');throw err;}
      else {
        console.log(comment);
        res.send(200,comment.insertId)}
        // ^ Send insertId to client
        // so that client can automatically add the correct comment
    }
  )
})

app.use('/api/tracks', (req, res) => {
  var url = 'http://localhost:3003/api/singleComment';
  req.pipe(request(url)).pipe(res);
});

app.use('/api/tracks', (req, res) => {
  var url = 'http://localhost:3003/api/comments';
  req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
