const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

// Index page
app.get('/',(req,res)=>{
    res.render('index')
})

// Port Listen
app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
})