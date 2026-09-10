const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Looking for where addToCartItem, openZelleCheckout, and sendCartToWhatsApp are defined.
// If the second script block is completely overwritten or missing, that explains it.
console.log("Found addToCartItem:", html.includes("window.addToCartItem = function"));
console.log("Found openZelleCheckout:", html.includes("window.openZelleCheckout = function"));
console.log("Found sendCartToWhatsApp:", html.includes("window.sendCartToWhatsApp = function"));
console.log("Found DOMContentLoaded:", html.includes("document.addEventListener('DOMContentLoaded'"));

