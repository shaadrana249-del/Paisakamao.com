const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// public folder se static files serve karega
app.use(express.static(path.join(__dirname, 'public')));

// public folder ke andar se index.html uthayega
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
