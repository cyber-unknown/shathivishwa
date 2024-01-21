const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, 'students.html'));
});
app.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});