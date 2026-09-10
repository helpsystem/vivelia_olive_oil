const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const jsLogic = `
  <script>
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
      }, 300);
    };
  </script>
`;

html = html.replace('</body>', jsLogic + '\n</body>');
fs.writeFileSync('index.html', html);
