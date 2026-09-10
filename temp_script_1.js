
    
    window._savedScrollY = 0;

    window.openProductPage = function(id) {
      const isEs = window.currentLang === 'es';
      const p = window.storeProducts.find(prod => prod.id === id);
      if (!p) return;

      window._savedScrollY = window.scrollY;

      const title = isEs ? (p.name_es || p.name) : p.name;
      const desc = isEs ? (p.description_es || p.description) : p.description;
      const badgeText = isEs ? (p.badge_es || p.badge) : p.badge;
      const stockText = isEs ? (p.stockNote_es || p.stockNote) : p.stockNote;
      const unitText = isEs ? (p.unitDisplay_es || p.unitDisplay) : p.unitDisplay;

      let mediaHtml = '';
      if (p.image) {
        mediaHtml = `<div class="w-full h-[50vh] sm:h-[60vh] relative bg-surface-container overflow-hidden"><img src="${p.image}" class="w-full h-full object-cover" alt="${title}"></div>`;
      } else {
        mediaHtml = `<div class="w-full h-[50vh] sm:h-[60vh] relative bg-teal-50 overflow-hidden flex items-center justify-center text-teal-700"><span class="material-symbols-outlined text-[100px]">${p.iconSymbol || 'inventory_2'}</span></div>`;
      }

      
      let ctaHtml = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <button onclick="addToCartItem('${p.id}', '${title}', ${p.price}, '${p.image || ''}')" class="py-4 px-6 bg-[#0D1B2A] text-white rounded-2xl hover:bg-[#1b2a3a] transition-colors font-label-caps text-sm flex items-center justify-center gap-2 shadow-md font-semibold active:scale-95" type="button">
          <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          <span>${isEs ? 'Agregar a la Cesta' : 'Add to Cart'}</span>
        </button>
        <button onclick="closeProductPage(); setTimeout(()=>openZelleCheckout('${p.id}', '${p.zelleTitle || title}', ${p.zellePrice || p.price}), 100);" class="py-4 px-6 bg-[#D4AF37] hover:bg-[#e4c256] text-[#0D1B2A] rounded-2xl font-label-caps text-sm font-extrabold uppercase transition-all shadow-md flex items-center justify-center gap-2 active:scale-95" type="button">
          <span class="material-symbols-outlined text-[20px]">bolt</span>
          <span>Quick Pay (Venmo/Zelle)</span>
        </button>
      </div>`;
      
      const pageHtml = `
        <!-- Back Navigation -->
        <div class="fixed top-0 left-0 w-full z-[110] px-4 py-4 sm:px-8 sm:py-6 flex items-center justify-between pointer-events-none">
          <button onclick="closeProductPage()" class="w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md shadow-md border border-surface-variant/40 flex items-center justify-center text-primary hover:bg-surface-variant transition-colors pointer-events-auto">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        
        ${mediaHtml}

        <div class="max-w-4xl mx-auto w-full px-6 py-12 sm:px-12 sm:py-16 bg-surface -mt-8 relative z-10 rounded-t-[2.5rem]">
          <div class="flex items-center gap-3 mb-6">
            ${badgeText ? `<span class="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-caps text-[11px] font-bold uppercase tracking-wider">${badgeText}</span>` : ''}
            ${stockText ? `<span class="px-4 py-1.5 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed font-label-caps text-[11px] font-bold uppercase tracking-wider">${stockText}</span>` : ''}
          </div>

          <div class="mb-4">
            <span class="text-sm font-label-caps tracking-widest text-[#8B7018] uppercase font-bold block mb-2">${p.origin}</span>
            <h1 class="font-headline-lg text-4xl sm:text-5xl text-[#0D1B2A] font-extrabold leading-tight">${title}</h1>
          </div>

          <div class="flex items-end gap-3 mb-8">
            <span class="font-price-lg text-4xl sm:text-5xl text-[#0D1B2A] font-black">${p.priceDisplay}</span>
            ${unitText ? `<span class="text-lg font-medium text-on-surface-variant pb-1.5">${unitText}</span>` : ''}
          </div>

          <p class="font-body-lg text-lg sm:text-xl text-on-surface-variant leading-relaxed border-t border-surface-variant/50 pt-8">
            ${desc}
          </p>

          ${ctaHtml}
        </div>
      `;

      const viewHome = document.getElementById('view-home');
      const viewProd = document.getElementById('view-product');

      viewProd.innerHTML = pageHtml;

      viewHome.classList.add('opacity-0');
      setTimeout(() => {
        viewHome.classList.replace('flex', 'hidden');
        viewProd.classList.replace('hidden', 'flex');
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        requestAnimationFrame(() => {
          viewProd.classList.remove('opacity-0');
        });
      }, 300);
      
      // push state for back button
      history.pushState({ page: 'product', id: p.id }, title, `#product/${p.id}`);
    };

    window.closeProductPage = function() {
      const viewHome = document.getElementById('view-home');
      const viewProd = document.getElementById('view-product');

      viewProd.classList.add('opacity-0');
      setTimeout(() => {
        viewProd.classList.replace('flex', 'hidden');
        viewHome.classList.replace('hidden', 'flex');
        window.scrollTo({ top: window._savedScrollY, behavior: 'instant' });
        
        requestAnimationFrame(() => {
          viewHome.classList.remove('opacity-0');
        });
      }, 300);
    };

    // Handle back button
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.page === 'product') {
        // we are on product page, do nothing special as it's already rendered
      } else {
        // we went back to home
        const viewProd = document.getElementById('view-product');
        if (viewProd && !viewProd.classList.contains('hidden')) {
          closeProductPage(); // animate closing
        }
      }
    });

  