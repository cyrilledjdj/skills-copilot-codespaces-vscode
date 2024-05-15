// Create web Server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile(commentsPath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments file');
            return;
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    fs.readFile(commentsPath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments file');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(newComment);
        fs.writeFile(commentsPath, JSON.stringify(comments), err => {
            if (err) {
                res.status(500).send('Error writing comments file');
                return;
            }
            res.send(comments);
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});