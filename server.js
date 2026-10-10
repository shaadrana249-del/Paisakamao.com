const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Root folder se static files serve karega
app.use(express.static(__dirname));

// Home route (/) aur baaki sabhi routes ke liye
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
