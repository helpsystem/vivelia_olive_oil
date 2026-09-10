const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add click handlers to the catalog cards
html = html.replace(
  /\$\{mediaHtml\}\n\s*<div class="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 text-left">\n\s*<div class="flex flex-col gap-1\.5">\n\s*<span class="text-\[10px\] font-label-caps tracking-widest text-\[#8B7018\] uppercase font-bold">\$\{p\.origin\}<\/span>\n\s*<h3 class="font-headline-sm text-lg text-\[#0D1B2A\] font-extrabold group-hover:text-secondary transition-colors">\n\s*\$\{title\}\n\s*<\/h3>/,
  `
            <div class="cursor-pointer" onclick="openProductModal('\${p.id}')">
              \${mediaHtml}
            </div>
            <div class="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 text-left">
              <div class="flex flex-col gap-1.5 cursor-pointer" onclick="openProductModal('\${p.id}')">
                <span class="text-[10px] font-label-caps tracking-widest text-[#8B7018] uppercase font-bold">\${p.origin}</span>
                <h3 class="font-headline-sm text-lg text-[#0D1B2A] font-extrabold group-hover:text-secondary transition-colors">
                  \${title}
                </h3>`
);

// 2. Add the Modal HTML just before the closing </body> tag
const modalHTML = `
  <!-- Product Details Modal -->
  <div id="product-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-[#0D1B2A]/60 backdrop-blur-sm p-4 opacity-0 transition-opacity duration-300">
    <div class="bg-surface w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative transform scale-95 transition-transform duration-300 flex flex-col" id="product-modal-content">
      <!-- Close Button -->
      <button onclick="closeProductModal()" class="absolute top-4 right-4 w-10 h-10 bg-surface-container/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-surface-variant transition-colors z-10 shadow-sm border border-secondary/20">
        <span class="material-symbols-outlined">close</span>
      </button>

      <!-- Dynamic Content Injection -->
      <div id="product-modal-body" class="flex flex-col"></div>
    </div>
  </div>
`;
html = html.replace('</body>', modalHTML + '\n</body>');

// 3. Add JS functions
const jsLogic = `
    window.openProductModal = function(id) {
      const isEs = window.currentLang === 'es';
      const p = window.storeProducts.find(prod => prod.id === id);
      if (!p) return;

      const title = isEs ? (p.name_es || p.name) : p.name;
      const desc = isEs ? (p.description_es || p.description) : p.description;
      const badgeText = isEs ? (p.badge_es || p.badge) : p.badge;
      const stockText = isEs ? (p.stockNote_es || p.stockNote) : p.stockNote;
      const unitText = isEs ? (p.unitDisplay_es || p.unitDisplay) : p.unitDisplay;
      
      let mediaHtml = '';
      if (p.image) {
        mediaHtml = \`<div class="w-full h-64 sm:h-80 relative bg-surface-container overflow-hidden rounded-t-3xl"><img src="\${p.image}" class="w-full h-full object-cover" alt="\${title}"></div>\`;
      } else {
        mediaHtml = \`<div class="w-full h-64 sm:h-80 relative bg-teal-50 overflow-hidden rounded-t-3xl flex items-center justify-center text-teal-700"><span class="material-symbols-outlined text-[80px]">\${p.iconSymbol || 'inventory_2'}</span></div>\`;
      }

      let ctaHtml = '';
      if (p.actionType === 'order') {
        ctaHtml = \`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <button onclick="closeProductModal(); openZelleCheckout('\${p.orderPack || 'duo'}', '\${p.zelleTitle || title}', \${p.zellePrice || p.price})" class="py-3 px-4 bg-[#D4AF37] hover:bg-[#e4c256] text-[#0D1B2A] rounded-xl font-label-caps text-xs font-extrabold uppercase transition-all shadow-sm flex items-center justify-center gap-1 active:scale-95" type="button">
            <span class="material-symbols-outlined text-[18px]">bolt</span>
            <span>Zelle ($ \${p.zellePrice || p.price})</span>
          </button>
          <button onclick="closeProductModal(); preselectAndOrderProduct('\${p.id}', '\${p.orderPack || 'duo'}')" class="py-3 px-4 bg-[#0D1B2A] hover:bg-[#1b2a3a] text-white rounded-xl font-label-caps text-xs font-bold uppercase transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95" type="button">
            <span class="material-symbols-outlined text-[18px] text-[#D4AF37]">shopping_cart_checkout</span>
            <span>\${isEs ? 'Ordenar Ahora' : 'Order Now'}</span>
          </button>
        </div>\`;
      } else if (p.actionType === 'whatsapp_notify') {
        ctaHtml = \`<div class="mt-6">
          <a href="\${p.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl font-label-caps text-xs font-bold uppercase transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95">
            <span class="material-symbols-outlined text-[18px]">chat</span>
            <span>\${isEs ? 'Avisarme por WhatsApp' : 'Notify on WhatsApp'}</span>
          </a>
        </div>\`;
      } else {
        ctaHtml = \`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <button onclick="closeProductModal(); addToCartItem('\${p.id}', '\${title}', \${p.price}, '\${p.image || ''}')" class="py-3 px-4 bg-[#0D1B2A] text-white rounded-xl hover:bg-[#1b2a3a] transition-colors font-label-caps text-xs flex items-center justify-center gap-1 shadow-sm font-semibold active:scale-95" type="button">
            <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            <span>\${isEs ? 'Agregar a la Cesta' : 'Add to Cart'}</span>
          </button>
          <button onclick="closeProductModal(); openZelleCheckout('\${p.id}', '\${p.zelleTitle || title}', \${p.zellePrice || p.price})" class="py-3 px-4 bg-[#D4AF37] hover:bg-[#e4c256] text-[#0D1B2A] rounded-xl font-label-caps text-xs font-extrabold uppercase transition-all shadow-sm flex items-center justify-center gap-1 active:scale-95" type="button">
            <span class="material-symbols-outlined text-[18px]">bolt</span>
            <span>Zelle Express</span>
          </button>
        </div>\`;
      }

      document.getElementById('product-modal-body').innerHTML = \`
        \${mediaHtml}
        <div class="p-6 sm:p-8 flex flex-col gap-4 text-left">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-caps text-[10px] font-bold uppercase tracking-wider">\${badgeText}</span>
            <span class="px-2.5 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed font-label-caps text-[10px] font-bold uppercase tracking-wider">\${stockText}</span>
          </div>
          <div>
            <span class="text-[11px] font-label-caps tracking-widest text-[#8B7018] uppercase font-bold block mb-1.5">\${p.origin}</span>
            <h2 class="font-headline-lg text-2xl sm:text-3xl text-[#0D1B2A] font-extrabold">\${title}</h2>
          </div>
          <div class="flex items-end gap-2">
            <span class="font-price-lg text-3xl sm:text-4xl text-[#0D1B2A] font-black">\${p.priceDisplay}</span>
            \${unitText ? \`<span class="text-sm font-medium text-on-surface-variant pb-1">\${unitText}</span>\` : ''}
          </div>
          <p class="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-surface-variant/50 pt-4 mt-2">
            \${desc}
          </p>
          \${ctaHtml}
        </div>
      \`;

      const modal = document.getElementById('product-modal');
      const content = document.getElementById('product-modal-content');
      modal.classList.remove('hidden');
      
      // Trigger animations
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
      });
      document.body.style.overflow = 'hidden';
    };

    window.closeProductModal = function() {
      const modal = document.getElementById('product-modal');
      const content = document.getElementById('product-modal-content');
      
      modal.classList.add('opacity-0');
      content.classList.remove('scale-100');
      content.classList.add('scale-95');
      
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300); // Wait for transition duration
    };
`;

html = html.replace('  </script>\n</body>', jsLogic + '\n  </script>\n</body>');

fs.writeFileSync('index.html', html);
console.log('Modal added');
