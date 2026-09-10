const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The original grid tag
html = html.replace(
  /<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="catalog-grid">([\s\S]*?)<!-- END OF PRODUCT GRID -->/i,
  '<div id="catalog-grid" class="flex flex-col gap-6 relative w-full max-w-5xl mx-auto pb-[20vh] pt-10">\n        <!-- Dynamic cards injected here -->\n      </div>\n      <!-- END OF PRODUCT GRID -->'
);

// If it didn't find the exact match with the comment, let's just find the tag
html = html.replace(
  /<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="catalog-grid">/g,
  '<div id="catalog-grid" class="flex flex-col gap-[8vh] relative w-full max-w-5xl mx-auto pb-[20vh] pt-10">'
);

fs.writeFileSync('index.html', html);
console.log('Fixed catalog grid container.');
