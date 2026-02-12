// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/User.js');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = getUsers(); // Get all users
  const user = users.find(user => user.username === username);

  if (user && user.password === password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

module.exports = router;