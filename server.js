const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json( {'msg': 'I eat chickens!'})
});

app.listen( 8080, () => {
    console.log('server is ready')
} );