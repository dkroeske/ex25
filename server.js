const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json( {'msg': 'I don\'t eat chickens alive!'})
});

// Define Port
const port = process.env.PORT || 8080;

app.listen( port , () => {
    console.log('server is ready!')
} );