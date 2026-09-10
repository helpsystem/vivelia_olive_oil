const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace modal HTML
const newModalHTML = `  <!-- Product Details Modal (Bottom Sheet) -->
  <div id="product-modal" class="fixed inset-0 z-[100] hidden flex items-end justify-center bg-[#0D1B2A]/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 sm:p-4" onclick="if(event.target === this) closeProductModal()">
    <div class="bg-surface w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl relative transform translate-y-full transition-transform duration-500 ease-out flex flex-col" id="product-modal-content">
      <!-- Mobile Pull Handle -->
      <div class="w-full flex justify-center pt-3 pb-1 sm:hidden absolute top-0 z-20 pointer-events-none">
        <div class="w-12 h-1.5 bg-white/60 shadow-sm backdrop-blur-sm rounded-full"></div>
      </div>
      <!-- Close Button -->
      <button onclick="closeProductModal()" class="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-surface-variant transition-colors z-20 shadow-sm border border-secondary/20">
        <span class="material-symbols-outlined">close</span>
      </button>

      <!-- Dynamic Content Injection -->
      <div id="product-modal-body" class="flex flex-col"></div>
    </div>
  </div>`;

// Find existing modal HTML using regex
const oldModalRegex = /<!-- Product Details Modal -->[\s\S]*?<div id="product-modal-body" class="flex flex-col"><\/div>\s*<\/div>\s*<\/div>/;
html = html.replace(oldModalRegex, newModalHTML);

// 2. Replace animation logic in openProductModal
const oldOpenLogic = `      // Trigger animations
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      });`;
const newOpenLogic = `      // Trigger animations
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('translate-y-full');
        content.classList.add('translate-y-0');
      });`;
html = html.replace(oldOpenLogic, newOpenLogic);

// 3. Replace animation logic in closeProductModal
const oldCloseLogic = `      modal.classList.add('opacity-0');
      content.classList.remove('scale-100');
      content.classList.add('scale-95');`;
const newCloseLogic = `      modal.classList.add('opacity-0');
      content.classList.remove('translate-y-0');
      content.classList.add('translate-y-full');`;
html = html.replace(oldCloseLogic, newCloseLogic);

fs.writeFileSync('index.html', html);
console.log('Modal converted to bottom sheet.');
