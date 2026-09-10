const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. We need to add the qrcode library to the <head>
if (!html.includes('qrcode.min.js')) {
  html = html.replace('</head>', '  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>\n</head>');
}

// 2. Modify the Payment Modal HTML
// We will replace everything from <!-- Step 1: Zelle Recipient Information & One-Click Copy --> 
// up to <!-- Step 2: Customer Shipping Details -->
const oldStep1Regex = /<!-- Step 1: Zelle Recipient Information & One-Click Copy -->[\s\S]*?<!-- Step 2: Customer Shipping Details -->/;

const newPaymentSectionHtml = `<!-- Editable Amount Section -->
<div class="flex items-center justify-between pt-2 border-t border-surface-variant/40 font-headline-sm text-sm">
  <span class="text-on-surface font-semibold" data-i18n="modal_total_due">Payment Amount ($):</span>
  <input id="payment-amount-input" type="number" step="0.01" class="w-24 px-2 py-1 text-right font-price-lg text-lg text-primary font-bold bg-surface rounded-md border border-primary/30 focus:ring-2 focus:ring-primary focus:outline-none" value="0.00" oninput="updatePaymentLinks()" />
</div>
</div>

<!-- Step 1: Payment Methods (Venmo & Zelle) -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <!-- Venmo Card -->
  <div class="p-4 rounded-2xl bg-[#008CFF]/5 border border-[#008CFF]/20 flex flex-col gap-3 items-center text-center relative overflow-hidden">
    <div class="absolute top-0 right-0 w-16 h-16 bg-[#008CFF]/10 rounded-bl-full pointer-events-none"></div>
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-[#008CFF] text-white flex items-center justify-center font-bold text-lg shadow-sm">V</div>
      <span class="font-bold text-[#008CFF] text-lg">Venmo</span>
    </div>
    <canvas id="venmo-qr-canvas" class="w-24 h-24 rounded-lg shadow-sm mx-auto bg-white"></canvas>
    <a id="venmo-pay-link" href="#" target="_blank" rel="noreferrer" class="w-full py-2.5 bg-[#008CFF] hover:bg-[#0077D9] text-white text-xs font-label-caps font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 mt-auto">
      <span class="material-symbols-outlined text-[16px]">open_in_new</span>
      <span data-i18n="pay_venmo_btn">Pay via Venmo</span>
    </a>
  </div>

  <!-- Zelle Card -->
  <div class="p-4 rounded-2xl bg-[#7414CA]/5 border border-[#7414CA]/20 flex flex-col gap-3 items-center text-center relative overflow-hidden">
    <div class="absolute top-0 right-0 w-16 h-16 bg-[#7414CA]/10 rounded-bl-full pointer-events-none"></div>
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-[#7414CA] text-white flex items-center justify-center font-bold text-lg shadow-sm">Z</div>
      <span class="font-bold text-[#7414CA] text-lg">Zelle</span>
    </div>
    <div class="bg-white p-3 rounded-xl border border-purple-200/80 w-full mt-2">
      <span class="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block mb-1">Recipient Email</span>
      <span class="font-mono text-sm font-bold text-gray-900 tracking-wide select-all block break-all" id="zelle-email-text">helpsystem68@gmail.com</span>
    </div>
    <button type="button" onclick="copyZelleEmail(this)" class="w-full py-2.5 bg-[#7414CA] hover:bg-purple-800 text-white text-xs font-label-caps font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 mt-auto">
      <span class="material-symbols-outlined text-[16px]">content_copy</span>
      <span class="copy-btn-label">Copy Address</span>
    </button>
  </div>
</div>

<div class="text-[11px] text-center text-on-surface-variant px-2 pb-2">
  Please complete the payment using one of the methods above, then fill out your shipping information below.
</div>

<!-- Step 2: Customer Shipping Details -->`;

html = html.replace(oldStep1Regex, newPaymentSectionHtml);

// 3. Remove the old Total display line from order breakdown
const oldTotalHtml = /<div class="flex items-center justify-between pt-2 border-t border-surface-variant\/40 font-headline-sm text-sm">[\s\S]*?<span class="text-on-surface font-semibold" data-i18n="modal_total_due">Total Due via Zelle:<\/span>[\s\S]*?<span class="font-price-lg text-price-lg text-\[#7414CA\] font-bold" id="zelle-modal-total-display">\$60\.00<\/span>[\s\S]*?<\/div>/;
html = html.replace(oldTotalHtml, '');

// 4. Update the logic in script to handle Venmo QR generation
const populateZelleModalRegex = /function populateZelleModal\(\)\s*\{[\s\S]*?if \(totalDisplay\) totalDisplay\.innerHTML = \`\\$\${currentCheckoutTotal\.toFixed\(2\)}\`;\n    \}/;

const newPopulateLogic = `function updatePaymentLinks() {
      const amountInput = document.getElementById('payment-amount-input');
      const amount = parseFloat(amountInput.value) || 0;
      
      const venmoUsername = 'helpsystem68';
      let noteStr = window.currentLang === 'es' ? 'Pedido Vivelia: ' : 'Vivelia Order: ';
      if (currentCheckoutItems && currentCheckoutItems.length > 0) {
        noteStr += currentCheckoutItems.map(i => i.quantity + 'x ' + i.name).join(', ');
      } else {
        noteStr += 'Custom Order';
      }
      
      const venmoUrl = \`https://venmo.com/?txn=pay&recipients=\${venmoUsername}&amount=\${amount.toFixed(2)}&note=\${encodeURIComponent(noteStr)}\`;
      
      const venmoLink = document.getElementById('venmo-pay-link');
      if (venmoLink) venmoLink.href = venmoUrl;
      
      const canvas = document.getElementById('venmo-qr-canvas');
      if (canvas && window.QRCode) {
        window.QRCode.toCanvas(canvas, venmoUrl, { margin: 1, width: 96, color: { dark: '#008CFF', light: '#FFFFFF' } }, function(err) {
          if (err) console.error(err);
        });
      }
    }

    function populateZelleModal() {
      const listContainer = document.getElementById('zelle-checkout-items-summary');
      const freeShipBadge = document.getElementById('zelle-free-ship-badge');
      const formView = document.getElementById('zelle-checkout-view-form');
      const successView = document.getElementById('zelle-checkout-view-success');

      if (formView) formView.classList.remove('hidden');
      if (successView) successView.classList.add('hidden');

      if (currentCheckoutItems.length === 0) {
        listContainer.innerHTML = '<div class="py-3 text-center text-on-surface-variant font-medium">Custom Payment</div>';
      } else {
        listContainer.innerHTML = currentCheckoutItems.map(item => \`
          <div class="flex justify-between py-2.5">
            <div class="flex flex-col gap-0.5 max-w-[70%]">
              <span class="font-bold text-[#0D1B2A] truncate">\${item.name}</span>
              <span class="text-on-surface-variant">Qty: \${item.quantity}</span>
            </div>
            <span class="font-bold text-primary">$\${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        \`).join('');
      }

      if (currentCheckoutTotal >= 98 && freeShipBadge) {
        freeShipBadge.classList.remove('hidden');
      } else if (freeShipBadge) {
        freeShipBadge.classList.add('hidden');
      }

      const amountInput = document.getElementById('payment-amount-input');
      if (amountInput) {
        amountInput.value = currentCheckoutTotal.toFixed(2);
      }
      
      // Update QR and Links after a brief tick so DOM is ready
      setTimeout(updatePaymentLinks, 50);
    }
    
    window.copyZelleEmail = function(btn) {
      const email = 'helpsystem68@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const label = btn.querySelector('.copy-btn-label');
        const originalText = label.innerHTML;
        label.innerHTML = window.currentLang === 'es' ? '¡Copiado!' : 'Copied!';
        btn.classList.replace('bg-[#7414CA]', 'bg-emerald-600');
        btn.classList.replace('hover:bg-purple-800', 'hover:bg-emerald-700');
        setTimeout(() => {
          label.innerHTML = originalText;
          btn.classList.replace('bg-emerald-600', 'bg-[#7414CA]');
          btn.classList.replace('hover:bg-emerald-700', 'hover:bg-purple-800');
        }, 2500);
      });
    };`;

html = html.replace(populateZelleModalRegex, newPopulateLogic);

// 5. Let's fix up some UI buttons that said "Order with Zelle" to say "Order / Pay" to be more neutral
html = html.replace(/<span>Zelle Express<\/span>/g, '<span>Venmo / Zelle</span>');
html = html.replace(/<span>Order with Zelle<\/span>/g, '<span>Pay with Venmo/Zelle</span>');
html = html.replace(/<span>Quick Zelle Buy<\/span>/g, '<span>Quick Pay (Venmo/Zelle)</span>');
html = html.replace(/data-i18n="cart_checkout_btn">Checkout with Zelle \(\+1 301-659-4136\)/g, 'data-i18n="cart_checkout_btn">Checkout (Venmo/Zelle)');

fs.writeFileSync('index.html', html);
console.log('Fixed payments logic');
