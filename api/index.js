const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express.js on Vercel!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Ini data JSON dari Express di Vercel' });
});


module.exports = app;
