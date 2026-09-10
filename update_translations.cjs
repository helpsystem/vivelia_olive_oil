const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const enInsert = `
        testimonials_badge: "Curator's Community",
        testimonials_title: "Verified Experiences",
        testimonials_subtitle: "Join hundreds of culinary enthusiasts who have transformed their kitchens with our direct imports.",`;

const esInsert = `
        testimonials_badge: "Comunidad del Curador",
        testimonials_title: "Experiencias Verificadas",
        testimonials_subtitle: "Únete a cientos de entusiastas culinarios que han transformado sus cocinas con nuestras importaciones directas.",`;

// Find where to insert in EN
html = html.replace(/(en:\s*\{[\s\S]*?)(nav_featured_product:)/, `$1${enInsert}\n        $2`);

// Find where to insert in ES
html = html.replace(/(es:\s*\{[\s\S]*?)(nav_featured_product:)/, `$1${esInsert}\n        $2`);

fs.writeFileSync('index.html', html);
console.log('Translations updated.');
