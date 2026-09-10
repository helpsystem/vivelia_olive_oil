const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The regex should match the entire window.renderStoreCatalog function up to window.renderStoreCatalog('all'); or similar
const oldRenderRegex = /window\.renderStoreCatalog = function\([\s\S]*?\}\s*<\/script>\s*<!-- Product Details Modal/m;

// We will replace the entire catalog grid styling as well, let's find the grid container inside HTML
html = html.replace(
  /<div id="catalog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">/g,
  '<div id="catalog-grid" class="flex flex-col gap-6 relative w-full max-w-5xl mx-auto pb-[20vh]">'
);

// We need to carefully replace the script function
const replaceFunctionScript = `
    // 3D Sticky Cards logic
    window.init3DStickyCards = function() {
      const cards = document.querySelectorAll('.sticky-card');
      if (!cards.length) return;

      const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return; // Last card doesn't scale
          
          const nextCard = cards[i + 1];
          const myRect = card.getBoundingClientRect();
          const nextRect = nextCard.getBoundingClientRect();

          // Distance to the next card
          const distance = nextRect.top - myRect.top;
          const cardHeight = myRect.height || 500;

          let progress = 0;
          if (distance < cardHeight) {
             progress = 1 - (distance / cardHeight);
          }
          if (progress < 0) progress = 0;
          if (progress > 1) progress = 1;

          // Scale down smoothly to 0.9, rotate slightly back, and dim
          const scale = 1 - (progress * 0.08); 
          const brightness = 1 - (progress * 0.4); 

          const inner = card.querySelector('.card-inner');
          if (inner) {
             inner.style.transform = \`scale(\${scale}) perspective(1000px) rotateX(\${progress * 4}deg) translateY(\${progress * -10}px)\`;
             inner.style.transformOrigin = 'top center';
             inner.style.filter = \`brightness(\${brightness})\`;
          }
        });
      };

      window.removeEventListener('scroll', window._stickyScrollHandler);
      window._stickyScrollHandler = handleScroll;
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
      handleScroll(); // init on load
    };

    window.renderStoreCatalog = function(filter = 'all') {
      window.currentCatalogFilter = filter;
      const grid = document.getElementById('catalog-grid');
      if (!grid) return;

      const isEs = window.currentLang === 'es';
      
      const filtered = window.storeProducts.filter(p => {
        if (filter === 'all') return true;
        return p.categories.includes(filter);
      });

      if (filtered.length === 0) {
        grid.innerHTML = \`
          <div class="col-span-full py-16 text-center text-on-surface-variant font-body-md bg-surface rounded-2xl border border-surface-variant/40">
            \${isEs ? 'No se encontraron productos en esta categoría.' : 'No products found in this category.'}
          </div>
        \`;
        return;
      }

      grid.innerHTML = filtered.map((p, index) => {
        const title = isEs ? (p.name_es || p.name) : p.name;
        const desc = isEs ? (p.description_es || p.description) : p.description;
        const badgeText = isEs ? (p.badge_es || p.badge) : p.badge;
        const unitText = isEs ? (p.unitDisplay_es || p.unitDisplay) : p.unitDisplay;
        const stockText = isEs ? (p.stockNote_es || p.stockNote) : p.stockNote;

        // Sticky top offset: 120px for the first, slightly lower for the rest to create a stacked header effect
        const topOffset = 100 + (index * 24);

        let mediaHtml = '';
        if (p.image) {
          mediaHtml = \`
            <div class="md:w-[45%] lg:w-1/2 relative bg-surface-container overflow-hidden shrink-0">
              <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" src="\${p.image}" alt="\${p.alt || title}" loading="lazy" />
              \${badgeText ? \`<span class="absolute top-6 left-6 px-3 py-1.5 rounded-full \${p.badgeType === 'transit' ? 'bg-amber-500/90 text-white' : (p.badgeType === 'curating' ? 'bg-indigo-600/90 text-white' : 'bg-[#D4AF37]/90 text-[#0D1B2A]')} backdrop-blur-md text-[11px] font-label-caps font-extrabold shadow-lg">\${badgeText}</span>\` : ''}
            </div>
          \`;
        } else {
          mediaHtml = \`
            <div class="md:w-[45%] lg:w-1/2 relative bg-teal-50 overflow-hidden shrink-0 flex items-center justify-center">
              <span class="material-symbols-outlined text-[80px] text-teal-700 opacity-20">\${p.iconSymbol || 'inventory_2'}</span>
              \${badgeText ? \`<span class="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-teal-700/90 text-white backdrop-blur-md text-[11px] font-label-caps font-extrabold shadow-lg">\${badgeText}</span>\` : ''}
            </div>
          \`;
        }

        return \`
          <div class="sticky-card w-full sticky z-[\${10 + index}]" style="top: \${topOffset}px;">
            <div class="card-inner bg-surface rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-surface-variant/30 overflow-hidden flex flex-col md:flex-row min-h-[480px] cursor-pointer group transition-all duration-300 will-change-transform" onclick="openProductModal('\${p.id}')">
              \${mediaHtml}
              <div class="p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1 bg-gradient-to-br from-surface to-surface-container-lowest">
                <span class="text-xs font-label-caps tracking-widest text-[#8B7018] uppercase font-bold mb-4 block">\${p.origin}</span>
                <h3 class="font-headline-lg text-3xl lg:text-4xl text-[#0D1B2A] font-black leading-tight mb-4 group-hover:text-secondary transition-colors">
                  \${title}
                </h3>
                <p class="font-body-md text-base text-on-surface-variant leading-relaxed mb-8 line-clamp-3">
                  \${desc}
                </p>
                <div class="flex items-center gap-2 mb-8">
                  <span class="px-3 py-1 rounded-md bg-secondary-fixed/30 text-on-secondary-fixed font-label-caps text-[10px] font-bold uppercase tracking-wider">\${stockText}</span>
                </div>
                <div class="flex items-end justify-between mt-auto pt-6 border-t border-surface-variant/40">
                  <div class="flex items-baseline gap-2">
                    <span class="font-price-lg text-4xl text-[#0D1B2A] font-extrabold">\${p.priceDisplay}</span>
                    \${unitText ? \`<span class="text-sm font-medium text-on-surface-variant pb-1">\${unitText}</span>\` : ''}
                  </div>
                  <button class="w-14 h-14 rounded-full bg-[#0D1B2A] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D1B2A] transition-colors shadow-lg group-hover:shadow-xl transform group-hover:scale-105 duration-300 active:scale-95" type="button" aria-label="View Details">
                    <span class="material-symbols-outlined text-[24px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        \`;
      }).join('');
      
      // Initialize the 3D stacking scroll effect
      setTimeout(window.init3DStickyCards, 100);
    };
  </script>
  <!-- Product Details Modal`;

html = html.replace(/window\.renderStoreCatalog = function[\s\S]*?<\/script>\s*<!-- Product Details Modal/m, replaceFunctionScript);

fs.writeFileSync('index.html', html);
console.log('Successfully injected 3D sticky brochure layout!');
