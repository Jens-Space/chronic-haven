const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const STATIC_DIR = path.join(__dirname, 'docs');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  // Remove /chronic-haven prefix from the URL
  let urlPath = req.url;
  
  if (urlPath.startsWith('/chronic-haven')) {
    urlPath = urlPath.replace('/chronic-haven', '') || '/';
  }
  
  // Default to index.html for root
  let filePath = urlPath === '/' ? '/index.html' : urlPath;
  
  // Prevent directory traversal
  filePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
  
  const fullPath = path.join(STATIC_DIR, filePath);
  
  // Check if file exists
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    // Try index.html for directories
    const indexPath = path.join(STATIC_DIR, filePath, 'index.html');
    if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(indexPath));
      return;
    }
    
    // Return 404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(path.join(STATIC_DIR, '404.html')));
    return;
  }
  
  // Get content type
  const ext = path.extname(fullPath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  // Read and serve file
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(fs.readFileSync(fullPath));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from ${STATIC_DIR}`);
});
