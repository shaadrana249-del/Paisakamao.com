const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // Saare possible paths check karega
  const filesToCheck = [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'public', 'index.html'),
    '/app/index.html',
    '/app/public/index.html'
  ];

  let foundFile = null;
  for (const f of filesToCheck) {
    if (fs.existsSync(f)) {
      foundFile = f;
      break;
    }
  }

  if (foundFile) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(foundFile).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Files present in dir: ' + fs.readdirSync(__dirname).join(', '));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server live on port ${PORT}`);
});
