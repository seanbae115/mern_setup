const express = require('express');
const PORT = process.env.PORT || 9000;
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', function(req, res){
    res.send('<h1>App is working with Nodemon</h1>')
});

app.get('/test', (req, res) => {
    res.send('<h1>This is a test route.</h1>')
});

app.get('/api/get-user', (req, res) => {
    res.send({
        username: 'Sean115',
        email: 'sean@gmail.com',
        name: 'Sean'
    });
});

app.get('/api/get-articles', (req, res) => {
    res.send(['article-1', 'article-2', 'article-3']);
})

app.listen(9000, () => {
    console.log('App running on PORT:' + PORT);
});

