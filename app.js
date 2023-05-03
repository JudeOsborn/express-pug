import express from 'express';
import bodyParser from "body-parser";

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  return response.redirect('/form-with-get');
});

app.get('/form-with-get', (request, response) => {
  return response.render('form-with-get');
});

app.get('/form-with-post', (request, response) => {
  return response.render('form-with-post');
});

app.get('/submit-form-with-get', (request, response) => {
  return response.send(request.query);
});

app.post('/submit-form-with-post', (request, response) => {
  return response.send(request.body);
});

app.listen(3000, () => {
  console.log('server running at 3000')
});
