 // Load express


 //imports your dependecies
const express = require('express');
const todoDB = require('./data/todo-db')

// Create our express app
// Where routes live
const app = express();

app.set('view engine', 'ejs')

app.get('/todos', function(req,res){
    //res.send('Testing todos index')
    res.render('todos/index', {
        title: "All Todos Index Page", 
        favNum: 37, todos: 
        todoDB.getAll()})
    //res.render method
    // two arguments
    //path to template assume local host/ views all your jv data is embeded
})

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/home', function(req,res){
  //res.send('<h1>Hello World!</h1>');
  res.render('home')
})

app.post('home', function(req,res){
    res.send('<h1>Summer Home</h1>')
})

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
}); 