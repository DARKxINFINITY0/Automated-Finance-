const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from Monances folder
app.use(express.static(path.join(__dirname, 'Monances')));

// Serve static files from AIChatbot folder
app.use('/AIChatbot', express.static(path.join(__dirname, 'AIChatbot')));

// Serve static files from root College folder for HTML files
app.use(express.static(__dirname));

// Routes for HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/home/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});


app.get('/profile.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile.html'));
});

app.get('/home/dashboard/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'AIChatbot', 'index.html'));
});

app.get('/pages/Dashboard/dashboard/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'AIChatbot', 'index.html'));
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
