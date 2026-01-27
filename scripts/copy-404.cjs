const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

try {
  if (!fs.existsSync(indexPath)) {
    console.error('Error: index.html not found in dist. Run build first.');
    process.exit(1);
  }

  const content = fs.readFileSync(indexPath, { encoding: 'utf8' });
  fs.writeFileSync(fallbackPath, content, { encoding: 'utf8' });
  console.log('Copied index.html → 404.html');
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
