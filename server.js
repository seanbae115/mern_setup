const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', function(req, res){
    res.send('<h1>App is working!</h1>')
});

app.get('/test', (req, res) => {
    res.send('<h1>This is a test route.</h1>')
});

app.listen(9000, () => {
    console.log('App running on PORT:' + PORT);
});

