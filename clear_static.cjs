const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find catalog-grid start and the end of the section
const startIdx = html.indexOf('<div id="catalog-grid"');
const endIdx = html.indexOf('</section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const before = html.substring(0, startIdx);
  const after = html.substring(endIdx);
  const gridSection = `<div id="catalog-grid" class="flex flex-col gap-12 relative w-full max-w-5xl mx-auto pb-[20vh] pt-10 px-4 md:px-0">
        <!-- Dynamic cards injected here -->
      </div>
    `;
  html = before + gridSection + after;
  fs.writeFileSync('index.html', html);
  console.log('Cleared static cards.');
}
