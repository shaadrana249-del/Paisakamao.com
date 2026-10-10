const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Root folder se files serve karega
app.use(express.static(__dirname));

// Direct root ki index.html load karega
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
