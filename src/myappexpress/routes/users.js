const express = require('express');
const router = express.Router();

const users = [{ name: 'Markus', email: 'markus@pizzacup.ch' }];

router.get('/', (_, res) => {
  res.send('Your Express App');
});

router.get('/users', (_, res) => {
  res.json({ ok: true, users });
});

router.post('/adduser', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    users.push({ name, email });
  }
  res.json({ok: true});
});

router.get('/user/:name', (req, res) => {
  const { name } = req.params;
  const user = users.filter((user) => user.name === name)[0];
  res.json({ ok: true, user });
});

module.exports = router;