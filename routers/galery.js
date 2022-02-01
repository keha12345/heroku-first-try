const express = require('express');
const { Photo } = require('../db/models');

const router = express.Router();

// /galery/main
router.get('/main', (req, res) => {
  res.render('galery');
});
// /galary/photo
router.get('/photo', async (req, res) => {
  const id = Math.round(Math.random() * await Photo.count() + 0.5);
  const path = await Photo.findByPk(id); // findOne({where: {id}})
  res.json(path);
});

router.post('/photo', async (req, res) => {
  try {
    const { path } = req.body;
    console.log(path);
    // контролер для валидации ссылки
    await Photo.create({ path, likes: 0 });
    res.json({ mess: 'ok' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mess: 'invalid request' });
  }
});

module.exports = router;
