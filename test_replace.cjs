const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

console.log("Found main flex container:", html.includes('<div class="flex flex-col w-full text-on-surface">'));
console.log("Found </main>:", html.includes('</main>'));
console.log("Found bottom sheet modal:", html.includes('<!-- Product Details Modal (Bottom Sheet) -->'));
console.log("Found sticky card onclick:", html.includes("onclick=\"openProductModal("));

