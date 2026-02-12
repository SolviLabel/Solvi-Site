// server/app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import routes
const authRoutes = require('./routes/auth.js');
const fileRoutes = require('./routes/files.js');

// Use routes
app.use('/auth', authRoutes);
app.use('/file', fileRoutes);

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'style.css'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'script.js'));
});

app.get('/file.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'file.js'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});