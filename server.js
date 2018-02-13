const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// app.get('/', function(req, res){
//     res.send('<h1>App is working with Nodemon</h1>')
// });

// app.get('/test', (req, res) => {
//     res.send('<h1>This is a test route.</h1>')
// });

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

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(9000, () => {
    console.log('App running on PORT:' + PORT);
});

