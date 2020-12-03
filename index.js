const express = require("express");
const {partials} = require("handlebars");
const hbs = require("express-handlebars");
var app=express();


app.engine('hbs',hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partial'
}))

app.set('view engine','hbs');

app.use(express.static(__dirname+'/'))

var task1 = require('./routes/task1')
app.use('/task1',task1)


app.use(function(req,res){
    res.status(404).send("Error: Request not found")
})


app.use(function(error,req,res,next){
    res.status(500).send("Error: Eternal Server Error")
})

app.listen(5000,()=>{
    console.log("Server is listening as port 5000...")
})