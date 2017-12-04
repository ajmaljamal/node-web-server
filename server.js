const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view_engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) =>{
  var now = new Date().toString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
})
app.get('/home', (req, res)=>{
  // res.send('Hello Express!');
  // res.send({
  //   name:'Ajmal',
  //   likes: [
  //     'Reading',
  //     'Travelling'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res)=>{
  // res.send({
  //   address: [
  //     'Malappuram',
  //     'Kerala'
  //   ]
  // });
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
})

app.listen(3000, ()=>{
  console.log('Server is up on port 3000');
});
