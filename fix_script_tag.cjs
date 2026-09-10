const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /<\/script>\s*\/\/\s*Initialization on load/g,
  `
    // Initialization on load`
);

fs.writeFileSync('index.html', html);
console.log('Fixed script tag syntax');
