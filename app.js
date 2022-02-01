require('dotenv').config();
const express = require('express');
const galeryRouter = require('./routers/galery');
const { Photo } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/galery/main');
});

app.use('/galery', galeryRouter);
app.delete('/admin/:pass', (req, res) => {
  try {
    if (req.params.pass === process.env.ADMIN_SECRET) {
      console.log(req.body);
      Photo.destroy({ where: { path: req.body.path } });
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});
app.use((req, res) => {
  res.send('упс! страница не найдена... 404');
});

app.listen(PORT, () => {
  console.log('started on port:', PORT);
});
