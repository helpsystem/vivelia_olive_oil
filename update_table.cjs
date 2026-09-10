const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Container padding
html = html.replace(
  '<div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-md border border-surface-variant/60 flex flex-col gap-4 text-left">',
  '<div class="lg:col-span-7 bg-surface-container-lowest p-4 sm:p-7 rounded-2xl shadow-md border border-surface-variant/60 flex flex-col gap-4 text-left overflow-x-hidden">'
);

html = html.replace(
  '<div class="flex flex-col font-body-sm text-xs divide-y divide-surface-variant/30">',
  '<div class="flex flex-col font-body-sm text-[10px] sm:text-xs divide-y divide-surface-variant/30">'
);

// Right column container
html = html.replace(
  '<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-md border border-surface-variant/60 flex flex-col gap-4">',
  '<div class="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-md border border-surface-variant/60 flex flex-col gap-4 overflow-x-hidden">'
);

// Right column items
html = html.replace(
  '<div class="space-y-3 font-body-sm text-xs">',
  '<div class="space-y-3 font-body-sm text-[10.5px] sm:text-xs">'
);

// Replace gap-6 with gap-2 sm:gap-6 within the table area
// Let's do it precisely using a regex for the left column
const leftColRegex = /<div class="flex flex-col font-body-sm text-\[10px\] sm:text-xs divide-y divide-surface-variant\/30">([\s\S]*?)<\/div>\s*<p class="text-\[11px\]/m;
let match = html.match(leftColRegex);
if (match) {
  let leftCol = match[1];
  leftCol = leftCol.replace(/gap-6/g, 'gap-2 sm:gap-6');
  leftCol = leftCol.replace(/min-w-\[70px\]/g, 'min-w-[45px] sm:min-w-[70px]');
  leftCol = leftCol.replace(/px-3/g, 'px-1.5 sm:px-3');
  leftCol = leftCol.replace(/pl-6/g, 'pl-2 sm:pl-6');
  html = html.replace(match[1], leftCol);
}

// Right column item paddings
const rightColRegex = /<div class="space-y-3 font-body-sm text-\[10.5px\] sm:text-xs">([\s\S]*?)<\/div>\s*<!-- Quick Action helper -->/m;
match = html.match(rightColRegex);
if (match) {
  let rightCol = match[1];
  rightCol = rightCol.replace(/p-3/g, 'p-2 sm:p-3');
  rightCol = rightCol.replace(/text-sm/g, 'text-xs sm:text-sm');
  html = html.replace(match[1], rightCol);
}

// Extra: Vitamin E line flex wrap
html = html.replace(
  '<div class="flex items-center gap-1.5">\n              <span class="material-symbols-outlined text-[16px] text-secondary">verified</span>\n              <span class="text-[#0D1B2A]">Natural Vitamin E (α-tocopherol)</span>\n            </div>',
  '<div class="flex items-center gap-1 sm:gap-1.5">\n              <span class="material-symbols-outlined text-[14px] sm:text-[16px] text-secondary shrink-0">verified</span>\n              <span class="text-[#0D1B2A] leading-tight">Natural Vitamin E (α-tocopherol)</span>\n            </div>'
);

fs.writeFileSync('index.html', html);
console.log('Table modified');
