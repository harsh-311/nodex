const express = require('express');
const path = require('path');
const app = express();
app.use('/static', express.static('static'));
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testharsh', { useNewUrlParser: true, useUnifiedTopology: true });
// const contectSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     Address: String,
//     number: String
// });
// const Contect = mongoose.model('Contect', contectSchema);
app.use(express.urlencoded())
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
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
//    var mydata=new Contect(req.body);
//    mydata.save().then(()=>{
    res.end("our data is store in database")
//    }).catch(()=>{
//     res.end("our data can not be store in database");
//    })
    // res.render('content');
    
})

app.listen(80, () => {
    console.log(`server listen on port http://localhost:${80}`);
})
