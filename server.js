const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Console log karega ki container me kaun-kaun si files exist karti hain
console.log('Current directory files:', fs.readdirSync(__dirname));

// Files dhoondhne ke possible paths
function getIndexPath() {
  const possiblePaths = [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'public', 'index.html'),
    path.join(process.cwd(), 'index.html'),
    path.join(process.cwd(), 'public', 'index.html')
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

app.use(express.static(__dirname));
if (fs.existsSync(path.join(__dirname, 'public'))) {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.get('*', (req, res) => {
  const targetFile = getIndexPath();
  if (targetFile) {
    res.sendFile(targetFile);
  } else {
    // Agar file na mile toh crash hone ki jagah screen par actual files ki list dikha dega
    res.status(200).send(`
      <h3>index.html nahi mili!</h3>
      <p>Server directory me ye files hain: ${JSON.stringify(fs.readdirSync(__dirname))}</p>
    `);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on 0.0.0.0:${PORT}`);
});

