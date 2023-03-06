const express = require('express');
const expressHbs = require("express-handlebars");
const hbs = require('hbs');
const app = express();
const port = 3000;
app.engine("hbs", expressHbs.engine(
  {
      layoutsDir: "views/layouts", 
      defaultLayout: "layout",
      extname: "hbs"
  }
));
app.use(express.static('lib'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: 'layout' });
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index', {
      username: req.query.username === undefined ? 'Никто' : req.query.username
  });
});
app.get('/blog', (req, res) => {
  res.render('blog', {
      username: req.query.article === undefined ? 'Все' : req.query.username
  });
});
app.get('/location', (req, res) => {
  res.render('location', {
      username: req.query.city === undefined ? 'Не выбран' : req.query.username
  });
});
app.get('/services', (req, res) => {
  res.render('services', {
      username: req.query.service === undefined ? 'Не выбрана' : req.query.username
  });
});
app.get('/shop', (req, res) => {
  res.render('shop', {
      username: req.query.service === undefined ? 'Не выбрана' : req.query.username
  });
});
app.get('*', function(req, res){
  res.render('404', {});
});

app.listen(port, () => console.log(`Работает! Порт ${port}`));
