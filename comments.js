// Create Web Server
// Use Express
// Use Node.js

// Import express module
const express = require("express");

// Create an express application
const app = express();

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Initialize comments array
let comments = [
    {
        id: 1,
        username: "Alice",
        comment: "Hello World!",
    },
    {
        id: 2,
        username: "Bob",
        comment: "Welcome to the world of Node.js!",
    },
    {
        id: 3,
        username: "Charlie",
        comment: "Express.js is a great web server framework!",
    },
];

// GET /comments
// Return all comments
app.get("/comments", (req, res) => {
    // Set the Content-Type HTTP header to application/json
    res.setHeader("Content-Type", "application/json");

    // Return the comments array as a JSON response
    res.send(comments);
});

// POST /comments
// Create a new comment
app.post("/comments", (req, res) => {
    // Get the username and comment from the request body
    const { username, comment } = req.body;

    // Get the maximum id of the comments array
    const id = comments.reduce((maxId, comment) => {
        return comment.id > maxId ? comment.id : maxId;
    }, 0);

    // Create a new comment object
    const newComment = {
        id: id + 1,
        username: username,
        comment: comment,
    };

    // Add the new comment object to the comments array
    comments.push(newComment);

    // Set the Content-Type HTTP header to application/json
    res.setHeader("Content-Type", "application/json");

    // Return the new comment object as a JSON response
    res.send(newComment);
});

// Start the web server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
}); 