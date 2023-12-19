const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('static'));

const counterFilePath = path.join(__dirname, 'counter.json');

let counter = {
    home: 0,
    about: 0
};

if (fs.existsSync(counterFilePath)) {
    counter = JSON.parse(fs.readFileSync(counterFilePath, 'utf-8'));
}

app.use((req, res, next) => {
    if (req.path === '/') {
        counter.home++;
    } else if (req.path === '/about') {
        counter.about++;
    }
    fs.writeFileSync(counterFilePath, JSON.stringify(counter));
    next();
});

app.get('/', (req, res) => {
    res.render('index', { counter: counter.home });
});

app.get('/about', (req, res) => {
    res.render('about', { counter: counter.about });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});