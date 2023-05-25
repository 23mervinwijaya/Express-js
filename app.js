const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

// Index page
app.get('/',(req,res)=>{
    res.render('index')
})

// About page
app.get('/about',(req,res)=>{
    res.render('about')
})

// Contact Page
app.get('/contact',(req,res)=>{
    res.render('contact')
})

//404 page
app.use('/',(req,res)=>{
    res.status(404);
    res.send('<h1>404 : Page Not Found</h1>');
})

// Port Listen
app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
})