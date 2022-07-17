const express = require('express');
const path = require('path');
const app = express();
app.use('/static', express.static('static'));

app.use(express.urlencoded())
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/status', (req, res) => {
    res.end('this our website verion:1.0');
    // res.render('home');
    // console.log("You are in website")
})

app.get('/', (req, res) => {
    // res.end('this our website');
    res.render('demo');
    // console.log("You are in website")
})
app.get('/home', (req, res) => {
    // res.end('this our website');
    res.render('home');
    // console.log("You are in website")
})
app.get('/content', (req, res) => {
    // res.end('this our website');
    res.render('./content');
    // console.log("You are in website")
})
app.post('/contect', (req, res) => {

    res.end("our data is store in database")
})
app.set("port", 3000);
app.listen(3000, () => {
    console.log(`server listen on port http://localhost:${3000}`);
})
