const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// There's a leftover piece of the old modal and a broken DOM structure between scripts.
const regex = /<\/script>\s*<!-- Views injected above -->[\s\S]*?<script>/m;

html = html.replace(regex, `
      // Continuing script
`);

fs.writeFileSync('index.html', html);
console.log('Fixed broken HTML split');
