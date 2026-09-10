const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Modify the action types inside the render/routing script so ALL products get "Add to Cart"
// Find the openProductPage function
const ctaRegex = /let ctaHtml = '';[\s\S]*?const pageHtml/m;

const newCtaHtml = `
      let ctaHtml = \`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <button onclick="addToCartItem('\${p.id}', '\${title}', \${p.price}, '\${p.image || ''}')" class="py-4 px-6 bg-[#0D1B2A] text-white rounded-2xl hover:bg-[#1b2a3a] transition-colors font-label-caps text-sm flex items-center justify-center gap-2 shadow-md font-semibold active:scale-95" type="button">
          <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          <span>\${isEs ? 'Agregar a la Cesta' : 'Add to Cart'}</span>
        </button>
        <button onclick="closeProductPage(); setTimeout(()=>openZelleCheckout('\${p.id}', '\${p.zelleTitle || title}', \${p.zellePrice || p.price}), 100);" class="py-4 px-6 bg-[#D4AF37] hover:bg-[#e4c256] text-[#0D1B2A] rounded-2xl font-label-caps text-sm font-extrabold uppercase transition-all shadow-md flex items-center justify-center gap-2 active:scale-95" type="button">
          <span class="material-symbols-outlined text-[20px]">bolt</span>
          <span>Quick Pay (Venmo/Zelle)</span>
        </button>
      </div>\`;
      
      const pageHtml`;

html = html.replace(ctaRegex, newCtaHtml);

// 2. Add WhatsApp Checkout Button to the Cart Drawer
const cartButtonsRegex = /<button class="w-full py-3\.5 bg-\[#7414CA\][\s\S]*?<\/button>/;

const newCartButtons = `<div class="grid grid-cols-1 gap-3">
  <button class="w-full py-3.5 bg-[#7414CA] hover:bg-purple-900 text-white font-label-caps text-xs tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-md font-bold hover:scale-[1.01]" onclick="openZelleCheckoutFromCart()" type="button">
    <span class="material-symbols-outlined text-[18px]">bolt</span>
    <span data-i18n="cart_checkout_btn">Pay (Venmo/Zelle)</span>
  </button>
  <button class="w-full py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-label-caps text-xs tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-md font-bold hover:scale-[1.01]" onclick="sendCartToWhatsApp()" type="button">
    <span class="material-symbols-outlined text-[18px]">chat</span>
    <span>Order via WhatsApp</span>
  </button>
</div>`;

html = html.replace(cartButtonsRegex, newCartButtons);

// 3. Add sendCartToWhatsApp function to the JS
const addToCartRegex = /window\.addToCartItem = function/;
const sendCartJs = `
    window.sendCartToWhatsApp = function() {
      if (!window.cart || window.cart.length === 0) {
        showToast(window.currentLang === 'es' ? 'Su cesta está vacía.' : 'Your basket is empty.');
        return;
      }
      let subtotal = window.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      let text = window.currentLang === 'es' ? 'Hola John, me gustaría pedir:\\n' : 'Hi John, I would like to order:\\n';
      
      window.cart.forEach(item => {
        text += \`- \${item.quantity}x \${item.name} ($ \${(item.price * item.quantity).toFixed(2)})\\n\`;
      });
      
      text += \`\\nTotal: $ \${subtotal.toFixed(2)}\`;
      
      const waUrl = \`https://wa.me/13016594136?text=\${encodeURIComponent(text)}\`;
      window.open(waUrl, '_blank');
      
      window.cart = [];
      renderCart();
      toggleCartDrawer(false);
      showToast(window.currentLang === 'es' ? '¡Abriendo WhatsApp!' : 'Opening WhatsApp!');
    };
    
    window.addToCartItem = function`;

html = html.replace(addToCartRegex, sendCartJs);

fs.writeFileSync('index.html', html);
console.log('Fixed cart actions!');
