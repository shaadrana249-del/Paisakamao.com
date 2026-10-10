const express = require('express');
const path = require('path');

const app = express();
// Railway dynamic PORT deta hai
const PORT = process.env.PORT || 3000;

// Static files serve karega
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 0.0.0.0 par listen hona Railway ke liye zaroori hai
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});
