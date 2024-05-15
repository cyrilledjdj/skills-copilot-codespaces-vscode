// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments.json file
const comments = require('./comments.json');

// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Create a GET route that returns a specific comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(c => c.id === parseInt(id));
  res.send(comment);
});

// Create a POST route that adds a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    username: 'new_user',
    comment: 'This is a new comment'
  };
  comments.push(newComment);
  res.send(newComment);
});

// Create a PUT route that updates a specific comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(c => c.id === parseInt(id));
  comment.username = 'updated_user';
  comment.comment = 'This comment has been updated';
  res.send(comment);
});

// Create a DELETE route that deletes a specific comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(c => c.id === parseInt(id));
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});