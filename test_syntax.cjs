const { execSync } = require('child_process');
const fs = require('fs');

// We will extract all JS from the file and run it through node syntax check
const html = fs.readFileSync('index.html', 'utf8');
const scripts = html.match(/<script>([\s\S]*?)<\/script>/gi);

scripts.forEach((s, idx) => {
  const code = s.replace(/<\/?script>/g, '');
  fs.writeFileSync(`temp_script_${idx}.js`, code);
  try {
    execSync(`node -c temp_script_${idx}.js`);
    console.log(`Script ${idx} is valid.`);
  } catch (e) {
    console.log(`Script ${idx} has a syntax error!`);
    console.error(e.message);
  }
});

