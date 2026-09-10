const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Looking for potential unclosed quotes or syntax errors in the JS blocks
const scripts = html.match(/<script>([\s\S]*?)<\/script>/gi);

if(scripts) {
  scripts.forEach((s, i) => {
    console.log(`Script ${i} length: ${s.length}`);
  });
}
