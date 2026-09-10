const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The modal starts with <!-- Product Details Modal
html = html.replace(
  /<!-- Product Details Modal/g,
  `    // Initialization on load
    document.addEventListener('DOMContentLoaded', () => {
      renderCart();
      window.renderStoreCatalog('all');
    });
  </script>

  <!-- Product Details Modal`
);

fs.writeFileSync('index.html', html);
console.log('Fixed init call');
