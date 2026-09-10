
    // Global Cart State
    window.cart = [
      {
        id: 'vivelia-3l',
        name: 'Vivelia Extra Virgin Olive Oil 3L Golden Tin',
        price: 60,
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyRZQU1llyrg7vCldZNfU8RtPjXMzNEMYFksrNAqGG0OUFaYpiNaiRkMfTbsg4CoC58wQATUsyz_q-g-4uek1QKULin_jjWqPTAGDBXsu9lDy5uPuRs3EOjsOrWTBdi6S4PUUgJqAYW7ZC3tq9jno3ig9ldW4Y6TbDhsIBGlx4A7tgPlmBSBzgCxga7mZcdwU981D-Fm7cIWtbL133JA3sPxu2ZEzODrgcQjALXyKqGOVmK_8MNY0H4Q'
      }
    ];

    // Language State & Translation Dictionary
    window.currentLang = 'en';

    const translations = {
      en: {
        top_announcement: "Direct Importer Warehouse Stock • Climate-Controlled Storage • Fast Dispatch",
        top_free_shipping: "Direct Air Import • Compliments to US Continental via Courier on 2+ Cans",
        top_temp_ctrl: "Strict 14°C Temperature-Controlled Import",
        
        testimonials_badge: "Curator's Community",
        testimonials_title: "Verified Experiences",
        testimonials_subtitle: "Join hundreds of culinary enthusiasts who have transformed their kitchens with our direct imports.",
        nav_featured_product: "Featured Product",
        nav_catalog: "Catalog",
        nav_zelle_payment: "Zelle Payment",
        nav_about_john: "About John",
        nav_order_form: "Order Form",
        nav_products: "Collections",
        nav_why_tin: "The 3L Tin Advantage",
        nav_awards: "Certifications",
        nav_lab: "Lab Analysis",
        nav_curator: "Curated by John Neata",
        nav_wholesale: "Trade Desk",
        nav_curator_badge: "Curated & Certified by John Neata",
        brand_tagline: "World of Diverse and Quality Products",
        nav_brand_desc: "Direct Import • Verified Cold-Chain Logistics",
        nav_whatsapp: "WhatsApp",
        nav_direct_order: "Order with Zelle",

        hero_terroir: "DIRECT IMPORT • PELOPONNESE, GREECE",
        hero_curated_note: "Curated & Personally Inspected by John Neata",
        hero_import_batch: "Fresh Import Batch: Koroneiki & Megara Cold Extracted",
        hero_title: "World of Diverse and Quality Products",
        hero_main_subtitle: "Pure Hellenic Extra Virgin Olive Oil — Vivelia 3-Liter Gold Canister",
        hero_description: "Hand-harvested from centenarian Koroneiki & Megara olive groves in the Peloponnese. Cold-extracted under 26°C, certified acidity <0.8%, multi-award winner at NYIOOC & London IOOC, sealed in 3L oxygen-proof light-blocking metal canisters for perpetual fresh flavor.",
        trust_100_direct: "100% Direct",
        trust_100_direct_sub: "Grove-to-Warehouse • Zero Middlemen",
        trust_zelle_easy: "Zelle Easy Pay",
        trust_zelle_easy_sub: "Instant Bank Checkout • Zero Surcharges",
        trust_whatsapp_direct: "WhatsApp Direct",
        trust_whatsapp_direct_sub: "Live Concierge with John Neata",
        hero_price_badge: "$60 / Can or 2 for $110",
        hero_price_sub: "Save $10 on 2-Pack • Complimentary Priority US Air Courier Delivery ($100+ orders)",
        hero_cta_order: "Jump to Order Form ($60 / Can • 2 for $110)",
        card_zelle_title: "Quick Zelle Payment ID",
        hero_badge_1_title: "< 0.28%",
        hero_badge_1_sub: "Certified Acidity",
        hero_badge_2_title: "410 mg/kg",
        hero_badge_2_sub: "Bioactive Polyphenols",
        hero_badge_3_title: "NYIOOC Gold",
        hero_badge_3_sub: "World Olive Oil Award",
        hero_badge_4_title: "14°C Controlled",
        hero_badge_4_sub: "Cold-Chain Air Transport",
        hero_cta_view: "Explore Estate Collection",
        guarantee_shipping: "Direct US air shipping • Free delivery on orders over $100",
        guarantee_purity: "Certified lab seal & 100% authentic single-estate traceability",

        allocation_label: "Private Import Allocation: 84 Tins Available",
        sig_air_freight: "Direct Air Freight from Kalamata, Greece",
        sig_opt1_title: "1 Canister (3 Liters)",
        sig_opt1_tag: "Standard Tasting Allocation",
        sig_opt1_desc: "Equivalent to 4 standard 750ml glass bottles ($15/bottle equivalent)",
        sig_opt2_title: "2 Canisters Bundle (6 Liters)",
        sig_opt2_tag: "Best Value • Save $10 + Complimentary Priority Shipping",
        sig_opt2_desc: "Recommended pantry volume for passionate home gourmets and olive oil lovers",
        sig_opt2_badge: "POPULAR BUNDLE",
        sig_opt3_title: "Culinary Case (4 Tins / 12L)",
        sig_opt3_tag: "Chef & Connoisseur Reserve • Maximum Polyphenol Protection",
        sig_opt3_desc: "Direct-from-grove wholesale pricing for serious gourmets and small dining venues",
        sig_select_qty: "Select Quantity:",
        sig_add_cart_btn: "Add to Basket",
        sig_zelle_buy_btn: "Instant Checkout via Zelle",

        curator_card_certified: "Curated & Certified by John Neata",
        curator_card_sub: "Every canister is personally inspected, temperature-logged, and dispatched with tamper-evident authentication seals.",
        contact_john_btn: "Speak Directly with John Neata (+1 301-659-4136)",

        cat_tagline: "Direct Import • Mediterranean Estate Collection",
        cat_title: "The John Neata Curated Collection",
        cat_subtitle: "Single-estate cold-extracted olive oils, hand-harvested Kalamata olives, raw island apiary honey, and aged gourmet provisions stored under our strict 14°C climate-controlled protocol.",
        filter_all: "All",
        filter_gourmet: "Gourmet Food",
        filter_direct: "Direct Imports",
        filter_coming: "Coming Soon",

        badge_flagship: "Flagship 3L Tin",
        badge_available_now: "Available Now",
        badge_in_transit: "Coming Soon / In Transit",
        badge_curating: "Curating",
        badge_temp_stock: "TEMPERATURE CONTROLLED",

        btn_add: "Add",
        btn_order_now: "Order Now",
        btn_notify_olives: "Notify on WhatsApp",
        btn_notify_honey: "Notify on WhatsApp",
        btn_zelle_quick: "Quick Buy via Zelle",
        btn_reserve_waitlist: "Reserve on Next Shipment",

        p1_title: "Vivelia Greek EVOO 3L Tin",
        p1_desc: "First mechanical cold extraction under 26°C, acidity <0.8%, multi-award NYIOOC & London IOOC winner. Sealed in a light-shielding 3-Liter canister containing ~459 servings.",
        p1_add_1can: "1 Can (3L): $60",
        p1_add_duo: "2 Cans Bundle: $110",
        p1_duo_sub: "or 2 for $110 (Save $10)",

        p2_olives_title: "Authentic Greek Kalamata Olives",
        p2_olives_desc: "Authentic PDO Kalamata purple olives hand-harvested from ancient Peloponnese trees. Naturally cured in sea salt brine, infused with red wine vinegar, and bathed in rich Vivelia extra virgin olive oil marinade.",
        p3_honey_title: "Raw Aegean Wild Thyme Honey",
        p3_honey_desc: "Raw, unheated, cold-spun honey harvested from nomadic beehives nestled on untouched Aegean hillsides rich in blooming wild purple thyme. Dense amber body with profound floral and herbal aromatics.",

        p4_balsamic_title: "Aged Balsamic Vinegar of Megara (250ml)",
        p4_balsamic_desc: "Matured in oak casks from reduced Greek grape must. Dense, velvety sweetness balanced by complex woody and dried fig aromas.",
        p5_salt_title: "Hand-Skimmed Aegean Sea Salt (300g)",
        p5_salt_desc: "Pyramidal sea crystals hand-skimmed from rocky Mani shores, blended with sun-dried Greek mountain oregano, rosemary, and sage.",
        p6_set_title: "Luxury Mediterranean Connoisseur Set",
        p6_set_desc: "Contains 3L Tin Can + Organic Kalamata Olives + 5-Year Aged Balsamic + Handcrafted Olive Wood Spoon in a wooden presentation box.",

        stock_warehouse: "14°C Warehouse Stock • Dispatched Today",
        stock_transit: "Container En Route to Maryland",
        stock_curating: "Purity & Pollen Profiling",
        harvest_allocation: "Direct Harvest Vintage Allocation",
        honey_batch_note: "Artisanal Small-Batch Harvest",

        zelle_box_title: "Zelle Instant Checkout Support",
        zelle_box_sub: "Send payment directly to John Neata at +1 (301) 659-4136. Instant confirmation via WhatsApp.",
        copy_phone: "Copy Zelle Phone",

        cart_subtotal: "Subtotal:",
        cart_checkout_btn: "Checkout with Zelle (+1 301-659-4136)",
        cart_checkout_guarantee: "Fast 48-hour air courier delivery • Temperature-controlled freshness",

        modal_checkout_title: "Direct Checkout via Zelle",
        modal_checkout_subtitle: "Curated Order Fulfillment by John Neata",
        modal_order_summary: "Order Summary",
        modal_total_due: "Total Due via Zelle:",
        modal_step1: "Step 1: Send Zelle Payment",
        modal_zelle_registered: "Recipient: John Neata",
        modal_zelle_phone_label: "Registered Zelle Phone Number",
        modal_zelle_instructions: "Open bank app → Zelle → send payment → save screenshot",
        modal_step2: "Step 2: Enter Delivery Information",
        modal_submit_whatsapp: "Submit Order & Open WhatsApp with Receipt",
        modal_submit_help: "Encodes order details directly to John Neata for 1-on-1 verification",

        form_full_name: "Full Name *",
        form_phone: "Mobile / WhatsApp Number *",
        form_street: "Street Address & Unit / Suite *",
        form_city: "City *",
        form_state: "State *",
        form_zip: "ZIP Code *",
        form_notes: "Delivery Notes / Special Instructions (Optional)",

        success_badge: "Order Form Prepared",
        success_title: "Order Details Encoded Successfully!",
        success_desc: "Your pre-filled WhatsApp message has opened. Complete your order in 2 simple steps:",
        success_step1: "Send the pre-filled WhatsApp message to John Neata (+1 301 659 4136).",
        success_step2: "Attach your Zelle payment screenshot in the chat as proof of payment.",
        success_step3: "John Neata will verify your payment and provide your courier tracking number within 2 hours.",
        reopen_whatsapp: "Re-Open WhatsApp",
        close_modal: "Done / Close",

        // Checkout Engine
        checkout_engine_badge: "Instant Zelle & WhatsApp Checkout",
        checkout_engine_title: "Direct Order & Payment Engine",
        checkout_engine_subtitle: "Personal fulfillment by John Neata from our 14°C climate-controlled warehouse",
        checkout_live_stock: "In Stock • Dispatched Today",
        zelle_guidance_header: "3-Step Direct Purchase Instructions",
        zelle_step1_title: "Send via Zelle",
        zelle_step1_desc: "Open bank app & send total to Zelle (+1 301-659-4136 - John Neata).",
        zelle_step2_title: "Enter Address",
        zelle_step2_desc: "Enter full shipping address & contact info in the form below.",
        zelle_step3_title: "WhatsApp & Receipt",
        zelle_step3_desc: "Click the WhatsApp button; paste your Zelle payment screenshot in the chat.",
        checkout_prod_label: "Product",
        checkout_qty_label: "Quantity / Tier",
        calc_subtotal: "Subtotal:",
        calc_shipping: "Shipping Tier:",
        calc_total_due: "Total Due via Zelle:",
        checkout_submit_btn: "Submit Order & Open WhatsApp with Receipt",
        checkout_submit_sub: "Encodes order details directly to John Neata (+1 301 659 4136) for 1-on-1 verification"
      },
      es: {
        top_announcement: "Stock Directo de Almacén • Almacenamiento Climatizado • Despacho Rápido",
        top_free_shipping: "Importación Aérea Directa • Envío Gratis a EE.UU. Continental en 2+ Latas",
        top_temp_ctrl: "Importación Estricta Controlada a 14°C",
        
        testimonials_badge: "Comunidad del Curador",
        testimonials_title: "Experiencias Verificadas",
        testimonials_subtitle: "Únete a cientos de entusiastas culinarios que han transformado sus cocinas con nuestras importaciones directas.",
        nav_featured_product: "Producto Destacado",
        nav_catalog: "Catálogo",
        nav_zelle_payment: "Pago con Zelle",
        nav_about_john: "Sobre John",
        nav_order_form: "Formulario de Pedido",
        nav_products: "Colecciones",
        nav_why_tin: "Ventajas de la Lata 3L",
        nav_awards: "Certificaciones",
        nav_lab: "Análisis de Laboratorio",
        nav_curator: "Selección John Neata",
        nav_wholesale: "Ventas al por Mayor",
        nav_curator_badge: "Curado y Certificado por John Neata",
        brand_tagline: "Mundo de Productos Diversos y de Calidad",
        nav_brand_desc: "Importación Directa • Cadena de Frío Verificada",
        nav_whatsapp: "WhatsApp",
        nav_direct_order: "Ordenar con Zelle",

        hero_terroir: "IMPORTACIÓN DIRECTA • PELOPONESO, GRECIA",
        hero_curated_note: "Curado e Inspeccionado Personalmente por John Neata",
        hero_import_batch: "Lote de Importación Fresco: Extracción en Frío de Aceitunas Koroneiki y Megara",
        hero_title: "Mundo de Productos Diversos y de Calidad",
        hero_main_subtitle: "Aceite de Oliva Virgen Extra Helénico Puro — Lata Dorada Vivelia de 3 Litros",
        hero_description: "Cosechado a mano de olivares centenarios de Koroneiki y Megara en el Peloponeso. Extraído en frío a menos de 26°C, acidez certificada <0.8%, ganador de premios de oro en NYIOOC y Londres IOOC, sellado en latas de 3L herméticas y resistentes a la luz para una frescura perpetua.",
        trust_100_direct: "100% Directo",
        trust_100_direct_sub: "Del Olivar al Almacén • Cero Intermediarios",
        trust_zelle_easy: "Pago Fácil por Zelle",
        trust_zelle_easy_sub: "Verificación Bancaria Inmediata • Sin Recargos",
        trust_whatsapp_direct: "WhatsApp Directo",
        trust_whatsapp_direct_sub: "Atención Personal con John Neata",
        hero_price_badge: "$60 / Lata o 2 por $110",
        hero_price_sub: "Ahorre $10 en el Pack de 2 • Envío Aéreo Prioritario Gratis en pedidos de $100+",
        hero_cta_order: "Ir al Formulario de Pedido ($60 / Lata • 2 por $110)",
        card_zelle_title: "ID Rápido de Pago Zelle",
        hero_badge_1_title: "< 0.28%",
        hero_badge_1_sub: "Acidez Certificada",
        hero_badge_2_title: "410 mg/kg",
        hero_badge_2_sub: "Polifenoles Bioactivos",
        hero_badge_3_title: "Oro NYIOOC",
        hero_badge_3_sub: "Premio Mundial de Aceite",
        hero_badge_4_title: "Control a 14°C",
        hero_badge_4_sub: "Cadena de Frío Aérea",
        hero_cta_view: "Explorar Colección de Finca",
        guarantee_shipping: "Envío aéreo directo en EE.UU. • Entrega gratis en pedidos de más de $100",
        guarantee_purity: "Sello de pureza de laboratorio y 100% trazabilidad de origen",

        allocation_label: "Asignación de Importación Privada: 84 Latas Disponibles",
        sig_air_freight: "Transporte Aéreo Directo desde Kalamata, Grecia",
        sig_opt1_title: "1 Lata (3 Litros)",
        sig_opt1_tag: "Asignación Estándar de Degustación",
        sig_opt1_desc: "Equivalente a 4 botellas de vidrio de 750ml ($15 por botella)",
        sig_opt2_title: "Pack de 2 Latas (6 Litros)",
        sig_opt2_tag: "Mejor Valor • Ahorre $10 + Envío Prioritario Gratis",
        sig_opt2_desc: "Volumen ideal recomendado para amantes de la buena cocina mediterránea",
        sig_opt2_badge: "PACK POPULAR",
        sig_opt3_title: "Caja Culinaria (4 Latas / 12L)",
        sig_opt3_tag: "Reserva de Chef y Catador • Máxima Protección de Polifenoles",
        sig_opt3_desc: "Precio mayorista directo del olivar para gastrónomos y restaurantes",
        sig_select_qty: "Seleccione Cantidad:",
        sig_add_cart_btn: "Agregar a la Cesta",
        sig_zelle_buy_btn: "Comprar Inmediatamente con Zelle",

        curator_card_certified: "Curado y Certificado por John Neata",
        curator_card_sub: "Cada lata es inspeccionada personalmente, con registro térmico y sello inviolable de autenticidad.",
        contact_john_btn: "Hablar Directamente con John Neata (+1 301-659-4136)",

        cat_tagline: "Importación Directa • Colección de Fincas Mediterráneas",
        cat_title: "Colección Exclusiva John Neata",
        cat_subtitle: "Aceites de oliva virgen extra de finca única, aceitunas Kalamata cosechadas a mano, miel cruda de apiarios insulares y provisiones gourmet conservadas a 14°C.",
        filter_all: "Todos",
        filter_gourmet: "Alimentos Gourmet",
        filter_direct: "Importaciones Directas",
        filter_coming: "Próximamente",

        badge_flagship: "Lata Insignia 3L",
        badge_available_now: "Disponible Ahora",
        badge_in_transit: "Próximamente / En Tránsito",
        badge_curating: "Curando Lote",
        badge_temp_stock: "TEMPERATURA CONTROLADA",

        btn_add: "Agregar",
        btn_order_now: "Ordenar Ahora",
        btn_notify_olives: "Avisarme por WhatsApp",
        btn_notify_honey: "Avisarme por WhatsApp",
        btn_zelle_quick: "Compra Rápida vía Zelle",
        btn_reserve_waitlist: "Reservar en Próximo Envío",

        p1_title: "Aceite de Oliva Virgen Extra Vivelia (Lata 3L)",
        p1_desc: "Primera extracción mecánica en frío a <26°C, acidez <0.8%, galardonado en NYIOOC y Londres. Envasado en lata protectora UV de 3L con ~459 porciones culinarias.",
        p1_add_1can: "1 Lata (3L): $60",
        p1_add_duo: "Pack 2 Latas: $110",
        p1_duo_sub: "o 2 por $110 (Ahorre $10)",

        p2_olives_title: "Aceitunas Kalamata Griegas Auténticas",
        p2_olives_desc: "Auténticas aceitunas Kalamata DOP recolectadas a mano. Curadas en salmuera marina natural, con vinagre de vino tinto y marinadas en AOVE Vivelia virgen extra con orégano silvestre.",
        p3_honey_title: "Miel Cruda de Tomillo Silvestre del Egeo",
        p3_honey_desc: "Miel cruda, sin calentar y centrifugada en frío, recolectada de colmenas nómadas en laderas del Egeo repletas de tomillo morado silvestre. Cuerpo ámbar denso y bouquet floral profundo.",

        p4_balsamic_title: "Vinagre Balsámico Añejado de Mégara (250ml)",
        p4_balsamic_desc: "Envejecido en barricas de roble a partir de mosto de uva griega reducida. Dulzor denso y aterciopelado equilibrado con aromas a higo seco.",
        p5_salt_title: "Flor de Sal Marina del Egeo con Hierbas (300g)",
        p5_salt_desc: "Cristales piramidales recogidos a mano en las costas de Mani, mezclados con orégano silvestre de montaña, romero y salvia secada al sol.",
        p6_set_title: "Cofre Culinario Connoisseur Mediterráneo",
        p6_set_desc: "Incluye 1 lata Vivelia 3L + Aceitunas Kalamata + Balsámico 5 años + Cuchara de olivo artesanal en caja de madera de regalo.",

        stock_warehouse: "Stock Almacén 14°C • Despacho Hoy",
        stock_transit: "Contenedor en Ruta a Maryland",
        stock_curating: "Perfil de Pureza y Polen",
        harvest_allocation: "Asignación de Cosecha Directa",
        honey_batch_note: "Cosecha Artesanal en Lote Pequeño",

        zelle_box_title: "Atención Inmediata de Pago con Zelle",
        zelle_box_sub: "Envíe su pago directamente a John Neata al +1 (301) 659-4136. Confirmación instantánea vía WhatsApp.",
        copy_phone: "Copiar Teléfono Zelle",

        cart_subtotal: "Subtotal:",
        cart_checkout_btn: "Pagar con Zelle (+1 301-659-4136)",
        cart_checkout_guarantee: "Envío aéreo rápido en 48h • Frescura con temperatura controlada",

        modal_checkout_title: "Pago Directo vía Zelle",
        modal_checkout_subtitle: "Gestión Personal de Pedido por John Neata",
        modal_order_summary: "Resumen del Pedido",
        modal_total_due: "Total a Pagar vía Zelle:",
        modal_step1: "Paso 1: Enviar Pago por Zelle",
        modal_zelle_registered: "Beneficiario: John Neata",
        modal_zelle_phone_label: "Número Registrado en Zelle",
        modal_zelle_instructions: "Abra la app bancaria → Zelle → envíe el monto → guarde captura",
        modal_step2: "Paso 2: Datos de Envío y Contacto",
        modal_submit_whatsapp: "Enviar Pedido y Abrir WhatsApp con Comprobante",
        modal_submit_help: "Genera el mensaje cifrado directamente a John Neata para verificación 1 a 1",

        form_full_name: "Nombre Completo *",
        form_phone: "Teléfono / WhatsApp Móvil *",
        form_street: "Dirección y Apto / Suite *",
        form_city: "Ciudad *",
        form_state: "Estado *",
        form_zip: "Código Postal (ZIP) *",
        form_notes: "Instrucciones de Entrega (Opcional)",

        success_badge: "Formulario de Pedido Preparado",
        success_title: "¡Detalles Codificados Exitosamente!",
        success_desc: "Su mensaje de WhatsApp se ha preparado. Complete su pedido en 2 sencillos pasos:",
        success_step1: "Envíe el mensaje de WhatsApp a John Neata (+1 301 659 4136).",
        success_step2: "Adjunte su captura de pago de Zelle en el chat como comprobante.",
        success_step3: "John Neata verificará su pago y le proporcionará su número de seguimiento en menos de 2 horas.",
        reopen_whatsapp: "Reabrir WhatsApp",
        close_modal: "Listo / Cerrar",

        // Checkout Engine
        checkout_engine_badge: "Pago Inmediato con Zelle y WhatsApp",
        checkout_engine_title: "Motor de Pedido Directo y Pago",
        checkout_engine_subtitle: "Cumplimiento personal por John Neata desde nuestro almacén climatizado a 14°C",
        checkout_live_stock: "En Stock • Despachado Hoy",
        zelle_guidance_header: "Instrucciones de Compra en 3 Pasos",
        zelle_step1_title: "Enviar por Zelle",
        zelle_step1_desc: "Abra la app del banco y envíe el total por Zelle (+1 301-659-4136 - John Neata).",
        zelle_step2_title: "Ingresar Dirección",
        zelle_step2_desc: "Ingrese la dirección de envío completa y datos de contacto en el formulario.",
        zelle_step3_title: "WhatsApp y Recibo",
        zelle_step3_desc: "Haga clic en el botón de WhatsApp; pegue la captura del pago en el chat.",
        checkout_prod_label: "Producto",
        checkout_qty_label: "Cantidad / Nivel",
        calc_subtotal: "Subtotal:",
        calc_shipping: "Nivel de Envío:",
        calc_total_due: "Total a Pagar vía Zelle:",
        checkout_submit_btn: "Enviar Pedido y Abrir WhatsApp con Recibo",
        checkout_submit_sub: "Codifica los detalles directamente a John Neata (+1 301 659 4136) para verificación 1 a 1"
      }
    };

    window.setLanguage = function(lang) {
      window.currentLang = lang;
      const btnEn = document.getElementById('btn-lang-en');
      const btnEs = document.getElementById('btn-lang-es');

      if (btnEn) {
        if (lang === 'en') {
          btnEn.className = "px-1.5 py-0.5 rounded transition-all text-white font-black underline underline-offset-2 hover:text-[#D4AF37]";
        } else {
          btnEn.className = "px-1.5 py-0.5 rounded transition-all text-white/60 hover:text-white";
        }
      }

      if (btnEs) {
        if (lang === 'es') {
          btnEs.className = "px-1.5 py-0.5 rounded transition-all text-white font-black underline underline-offset-2 hover:text-[#D4AF37]";
        } else {
          btnEs.className = "px-1.5 py-0.5 rounded transition-all text-white/60 hover:text-white";
        }
      }

      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      document.documentElement.lang = lang;
      showToast(lang === 'es' ? 'Idioma cambiado a Español' : 'Language switched to English');
      if (typeof updateSigButton === 'function') updateSigButton();
      if (typeof window.updateCheckoutPrice === 'function') window.updateCheckoutPrice();
      if (typeof window.renderStoreCatalog === 'function') {
        window.renderStoreCatalog(window.currentCatalogFilter || 'all');
      }
    };

    // Copy Zelle Phone Helper
    window.copyZellePhone = function(btn) {
      const phone = '+1 (301) 659-4136';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phone).then(() => {
          triggerCopyFeedback(btn, phone);
        }).catch(() => {
          fallbackCopy(phone, btn);
        });
      } else {
        fallbackCopy(phone, btn);
      }
    };

    function fallbackCopy(text, btn) {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      triggerCopyFeedback(btn, text);
    }

    function triggerCopyFeedback(btn, phone) {
      if (btn) {
        const label = btn.querySelector('.copy-btn-label');
        if (label) {
          label.classList.remove('hidden');
          const original = label.textContent;
          label.textContent = window.currentLang === 'es' ? '¡Copiado! ✓' : 'Copied! ✓';
          setTimeout(() => {
            label.textContent = original;
            label.classList.add('hidden');
          }, 2500);
        }
      }
      showToast(window.currentLang === 'es' ? `Copiado: ${phone} (John Neata)` : `Copied Zelle ID: ${phone} (John Neata)`);
    }

    // Checkout Modal State & Logic
    let currentCheckoutItems = [];
    let currentCheckoutTotal = 0;

    window.openZelleCheckout = function(itemKey, customTitle, customPrice) {
      if (!itemKey) {
        itemKey = 'duo';
        customTitle = 'Vivelia Greek EVOO 2 Cans Bundle (6L)';
        customPrice = 110;
      }
      currentCheckoutItems = [{
        id: itemKey,
        name: customTitle,
        price: customPrice,
        quantity: 1
      }];
      currentCheckoutTotal = customPrice;
      populateZelleModal();
      toggleZelleCheckout(true);
    };

    window.buyNowCurrentPackWithZelle = function() {
      const pack = packPrices[currentPack];
      const totalPrice = pack.price * sigQty;
      currentCheckoutItems = [{
        id: 'sig-' + currentPack,
        name: `${pack.title} (${sigQty}x)`,
        price: pack.price,
        quantity: sigQty
      }];
      currentCheckoutTotal = totalPrice;
      populateZelleModal();
      toggleZelleCheckout(true);
    };

    window.openZelleCheckoutFromCart = function() {
      if (!window.cart || window.cart.length === 0) {
        showToast(window.currentLang === 'es' ? 'Su cesta está vacía.' : 'Your basket is empty.');
        return;
      }
      currentCheckoutItems = [...window.cart];
      currentCheckoutTotal = window.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      populateZelleModal();
      toggleCartDrawer(false);
      toggleZelleCheckout(true);
    };

    function populateZelleModal() {
      const listContainer = document.getElementById('zelle-checkout-items-summary');
      const totalDisplay = document.getElementById('zelle-modal-total-display');
      const freeShipBadge = document.getElementById('zelle-free-ship-badge');
      const formView = document.getElementById('zelle-checkout-view-form');
      const successView = document.getElementById('zelle-checkout-view-success');

      if (formView) formView.classList.remove('hidden');
      if (successView) successView.classList.add('hidden');

      if (listContainer) {
        listContainer.innerHTML = '';
        currentCheckoutItems.forEach(item => {
          const row = document.createElement('div');
          row.className = 'py-1.5 flex items-center justify-between text-xs';
          row.innerHTML = `
            <span class="font-medium text-primary">${item.name} <span class="text-on-surface-variant font-normal">x${item.quantity}</span></span>
            <span class="font-price-lg font-bold text-primary">$${item.price * item.quantity}.00</span>
          `;
          listContainer.appendChild(row);
        });
      }

      if (totalDisplay) {
        totalDisplay.textContent = `$${currentCheckoutTotal}.00`;
      }

      if (freeShipBadge) {
        if (currentCheckoutTotal >= 100) {
          freeShipBadge.classList.remove('hidden');
        } else {
          freeShipBadge.classList.add('hidden');
        }
      }
    }

    window.toggleZelleCheckout = function(show) {
      const modal = document.getElementById('zelle-checkout-modal');
      if (!modal) return;
      if (show) {
        modal.classList.remove('hidden');
      } else {
        modal.classList.add('hidden');
      }
    };

    window.submitZelleOrder = function(e) {
      e.preventDefault();
      const name = document.getElementById('zelle-input-name').value.trim();
      const phone = document.getElementById('zelle-input-phone').value.trim();
      const street = document.getElementById('zelle-input-street').value.trim();
      const city = document.getElementById('zelle-input-city').value.trim();
      const state = document.getElementById('zelle-input-state').value.trim();
      const zip = document.getElementById('zelle-input-zip').value.trim();
      const notes = document.getElementById('zelle-input-notes').value.trim();

      let itemsSummaryText = '';
      currentCheckoutItems.forEach(i => {
        itemsSummaryText += `• ${i.name} (Qty: ${i.quantity}) - $${i.price * i.quantity}.00\n`;
      });

      const shippingTier = currentCheckoutTotal >= 100 ? 'Complimentary Priority Air Delivery (Included)' : 'Standard Express Courier Delivery';
      
      const msg = 
`*NEW ORDER - JOHN NEATA DIRECT COMMERCE*
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${name}
📱 *Phone / WhatsApp:* ${phone}
📍 *Shipping Address:*
${street}
${city}, ${state} ${zip}

📦 *Items Ordered:*
${itemsSummaryText}
🚚 *Shipping Tier:* ${shippingTier}
💰 *Total Due via Zelle:* $${currentCheckoutTotal}.00
🏦 *Recipient:* John Neata (+1 301 659 4136)

📝 *Special Instructions:*
${notes || 'None'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ *Customer Confirmation:*
I have sent the Zelle payment of $${currentCheckoutTotal}.00 to John Neata (+1 301-659-4136) and am attaching my payment receipt screenshot in this chat.`;

      const waUrl = `https://wa.me/13016594136?text=${encodeURIComponent(msg)}`;

      const waLink = document.getElementById('zelle-success-wa-link');
      if (waLink) waLink.href = waUrl;

      const formView = document.getElementById('zelle-checkout-view-form');
      const successView = document.getElementById('zelle-checkout-view-success');
      if (formView) formView.classList.add('hidden');
      if (successView) successView.classList.remove('hidden');

      // Open WhatsApp in new window
      window.open(waUrl, '_blank');

      // Reset cart if cart order
      window.cart = [];
      renderCart();

      showToast(window.currentLang === 'es' ? '¡Pedido generado! Abriendo chat de WhatsApp...' : 'Order generated! Opening WhatsApp chat with John Neata...');
    };

    // Signature Config Selector state
    let currentPack = 'single';
    let sigQty = 1;
    const packPrices = {
      single: { price: 60, title: 'Vivelia 3L Tin Canister (Single)' },
      duo: { price: 110, title: 'Vivelia Duo Value Pack (6L - 2 Cans)' },
      family: { price: 210, title: 'Vivelia Culinary Case (4-Pack / 12L)' }
    };

    const sigQtyVal = document.getElementById('sig-qty-val');
    const sigQtyInc = document.getElementById('sig-qty-inc');
    const sigQtyDec = document.getElementById('sig-qty-dec');
    const sigAddBtnText = document.getElementById('sig-add-cart-text');
    const sigAddBtn = document.getElementById('sig-add-cart-btn');
    const packRadios = document.querySelectorAll('input[name="pack_selection"]');

    function updateSigButton() {
      const unitPrice = packPrices[currentPack].price;
      const total = unitPrice * sigQty;
      const label = window.currentLang === 'es' ? 'Agregar a la Cesta' : 'Add to Cart';
      if (sigAddBtnText) {
        sigAddBtnText.textContent = `${label} • $${total}`;
      }
    }

    if (sigQtyInc && sigQtyDec) {
      sigQtyInc.addEventListener('click', () => {
        sigQty++;
        sigQtyVal.textContent = sigQty;
        updateSigButton();
      });

      sigQtyDec.addEventListener('click', () => {
        if (sigQty > 1) {
          sigQty--;
          sigQtyVal.textContent = sigQty;
          updateSigButton();
        }
      });
    }

    packRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        currentPack = e.target.value;
        updateSigButton();
      });
    });

    if (sigAddBtn) {
      sigAddBtn.addEventListener('click', () => {
        const selected = packPrices[currentPack];
        addToCartItem(
          'sig-' + currentPack,
          selected.title,
          selected.price,
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDyRZQU1llyrg7vCldZNfU8RtPjXMzNEMYFksrNAqGG0OUFaYpiNaiRkMfTbsg4CoC58wQATUsyz_q-g-4uek1QKULin_jjWqPTAGDBXsu9lDy5uPuRs3EOjsOrWTBdi6S4PUUgJqAYW7ZC3tq9jno3ig9ldW4Y6TbDhsIBGlx4A7tgPlmBSBzgCxga7mZcdwU981D-Fm7cIWtbL133JA3sPxu2ZEzODrgcQjALXyKqGOVmK_8MNY0H4Q',
          sigQty
        );
      });
    }

    // Add Item to Cart
    
    window.sendCartToWhatsApp = function() {
      if (!window.cart || window.cart.length === 0) {
        showToast(window.currentLang === 'es' ? 'Su cesta está vacía.' : 'Your basket is empty.');
        return;
      }
      let subtotal = window.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      let text = window.currentLang === 'es' ? 'Hola John, me gustaría pedir:\n' : 'Hi John, I would like to order:\n';
      
      window.cart.forEach(item => {
        text += `- ${item.quantity}x ${item.name} ($ ${(item.price * item.quantity).toFixed(2)})\n`;
      });
      
      text += `\nTotal: $ ${subtotal.toFixed(2)}`;
      
      const waUrl = `https://wa.me/13016594136?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
      
      window.cart = [];
      renderCart();
      toggleCartDrawer(false);
      showToast(window.currentLang === 'es' ? '¡Abriendo WhatsApp!' : 'Opening WhatsApp!');
    };
    
    window.addToCartItem = function(id, name, price, image, qty = 1) {
      const existing = window.cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += qty;
      } else {
        window.cart.push({ id, name, price, quantity: qty, image });
      }
      renderCart();
      toggleCartDrawer(true);
      showToast(`${name} ${window.currentLang === 'es' ? 'agregado a su cesta.' : 'added to your basket.'}`);
    };

    window.adjustCartQty = function(id, delta) {
      const idx = window.cart.findIndex(i => i.id === id);
      if (idx !== -1) {
        window.cart[idx].quantity += delta;
        if (window.cart[idx].quantity <= 0) {
          window.cart.splice(idx, 1);
        }
      }
      renderCart();
    };

    function renderCart() {
      const container = document.getElementById('cart-items-container');
      const subtotalDisplay = document.getElementById('cart-subtotal-display');
      const headerCartTotal = document.getElementById('header-cart-total');
      const headerCartBadge = document.getElementById('header-cart-badge');
      const shippingBar = document.getElementById('shipping-progress-bar');
      const shippingText = document.getElementById('shipping-progress-text');
      const shippingPercent = document.getElementById('shipping-percent-text');

      if (!container) return;

      const totalItemsCount = window.cart.reduce((acc, item) => acc + item.quantity, 0);
      if (headerCartBadge) headerCartBadge.textContent = totalItemsCount;

      if (window.cart.length === 0) {
        container.innerHTML = `
          <div class="flex flex-col items-center justify-center py-16 text-on-surface-variant gap-3">
            <span class="material-symbols-outlined text-[48px] text-outline-variant">remove_shopping_cart</span>
            <p class="text-sm font-body-sm">${window.currentLang === 'es' ? 'Su cesta culinaria está vacía actualmente.' : 'Your culinary basket is currently empty.'}</p>
          </div>
        `;
        if (subtotalDisplay) subtotalDisplay.textContent = '$0.00';
        if (headerCartTotal) headerCartTotal.textContent = '$0.00';
        if (shippingBar) shippingBar.style.width = '0%';
        if (shippingPercent) shippingPercent.textContent = '0%';
        if (shippingText) shippingText.textContent = window.currentLang === 'es' ? 'A $100 de Envío Courier Gratuito' : '$100 away from Complimentary Express Delivery';
        return;
      }

      let subtotal = 0;
      container.innerHTML = '';

      window.cart.forEach(item => {
        const totalItem = item.price * item.quantity;
        subtotal += totalItem;

        const div = document.createElement('div');
        div.className = 'flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low shadow-sm border border-surface-variant/40';
        div.innerHTML = `
          <div class="w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="font-headline-sm text-xs text-primary font-semibold line-clamp-1">${item.name}</span>
            <span class="text-xs font-price-lg text-secondary">$${item.price} each</span>
            <div class="flex items-center gap-2 pt-1">
              <button onclick="adjustCartQty('${item.id}', -1)" class="w-6 h-6 rounded-lg bg-surface text-primary flex items-center justify-center font-bold text-xs hover:bg-surface-variant transition-colors">-</button>
              <span class="text-xs font-bold text-primary px-1">${item.quantity}</span>
              <button onclick="adjustCartQty('${item.id}', 1)" class="w-6 h-6 rounded-lg bg-surface text-primary flex items-center justify-center font-bold text-xs hover:bg-surface-variant transition-colors">+</button>
            </div>
          </div>
          <div class="flex flex-col items-end gap-1">
            <span class="font-price-lg text-sm text-primary font-bold">$${totalItem}</span>
            <button onclick="adjustCartQty('${item.id}', -${item.quantity})" class="text-on-surface-variant hover:text-error text-xs p-1" title="Remove item">
              <span class="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        `;
        container.appendChild(div);
      });

      if (subtotalDisplay) subtotalDisplay.textContent = `$${subtotal}.00`;
      if (headerCartTotal) headerCartTotal.textContent = `$${subtotal}.00`;

      // Shipping Tracker Logic
      const target = 100;
      if (subtotal >= target) {
        if (shippingBar) shippingBar.style.width = '100%';
        if (shippingPercent) shippingPercent.textContent = '100%';
        if (shippingText) shippingText.textContent = window.currentLang === 'es' ? '🎉 ¡Envío Prioritario Gratuito Desbloqueado!' : '🎉 Complimentary Express Courier Delivery Unlocked!';
      } else {
        const diff = target - subtotal;
        const pct = Math.round((subtotal / target) * 100);
        if (shippingBar) shippingBar.style.width = `${pct}%`;
        if (shippingPercent) shippingPercent.textContent = `${pct}%`;
        if (shippingText) shippingText.textContent = window.currentLang === 'es' ? `A $${diff} de Envío Express Gratuito` : `$${diff} away from Complimentary Express Delivery`;
      }
    }

    window.toggleCartDrawer = function(show) {
      const drawer = document.getElementById('cart-drawer');
      const panel = document.getElementById('cart-panel');
      if (show) {
        drawer.classList.remove('opacity-0', 'pointer-events-none');
        panel.classList.remove('translate-x-full');
        renderCart();
      } else {
        drawer.classList.add('opacity-0', 'pointer-events-none');
        panel.classList.add('translate-x-full');
      }
    };

    // =========================================================================
    // SCALABLE MULTI-PRODUCT CATALOG JSON ARCHITECTURE & ENGINE
    // =========================================================================
    // Additional products can simply be appended to window.storeProducts as plain JSON objects:
    // {
    //   id: "unique-slug",
    //   name: "Product Name",
    //   name_es: "Nombre en Español",
    //   origin: "REGION • CHARACTERISTICS",
    //   categories: ["gourmet", "direct-imports", "coming-soon"], // matches filter buttons
    //   badge: "Available Now" | "Coming Soon / In Transit" | "Curating",
    //   badge_es: "Disponible Ahora" | "Próximamente / En Tránsito" | "Curando Lote",
    //   badgeType: "available" | "transit" | "curating",
    //   price: 60,
    //   priceDisplay: "$60",
    //   unitDisplay: "/ 3L Can",
    //   bundleNote: "or 2 for $110 (Save $10)",
    //   bundleNote_es: "o 2 por $110 (Ahorre $10)",
    //   description: "Detailed culinary description...",
    //   description_es: "Descripción culinaria...",
    //   image: "https://...",
    //   alt: "Accessibility image text",
    //   stockNote: "Warehouse stock note",
    //   stockNote_es: "Nota de stock",
    //   inStockLabel: "In Stock" | "In Transit" | "Curating",
    //   actionType: "order" | "whatsapp_notify" | "cart",
    //   orderPack: "duo", // when clicked, preselects this pack in the checkout form
    //   zellePrice: 110,
    //   zelleTitle: "Product Name",
    //   whatsappUrl: "https://wa.me/..."
    // }

    window.storeProducts = [
      {
        id: "vivelia-3l",
        name: "Vivelia Greek EVOO 3L Tin",
        name_es: "Aceite de Oliva Virgen Extra Vivelia (Lata 3L)",
        origin: "PELOPONNESE • KORONEIKI & MEGARA",
        categories: ["gourmet", "direct-imports"],
        badge: "Available Now",
        badge_es: "Disponible Ahora",
        badgeType: "available",
        cornerBadge: "Flagship 3L Tin",
        cornerBadge_es: "Lata Insignia 3L",
        price: 60,
        priceDisplay: "$60",
        unitDisplay: "/ 3L Can",
        unitDisplay_es: "/ Lata 3L",
        bundleNote: "or 2 for $110 (Save $10)",
        bundleNote_es: "o 2 por $110 (Ahorre $10)",
        description: "First mechanical cold extraction under 26°C, acidity <0.8%, multi-award NYIOOC & London IOOC winner. Sealed in a light-shielding 3-Liter canister containing ~459 servings.",
        description_es: "Primera extracción mecánica en frío a <26°C, acidez <0.8%, galardonado en NYIOOC y Londres. Envasado en lata protectora UV de 3L con ~459 porciones culinarias.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJR9HZ1_CuypdEqf-I6p1ZRcy6Ypa1YE5LYQCfiyUGxq1dlHfQhqHymZtlozY3umHJjn1m8TPb6Tf048WMIO-klUDJS3Y-e5z8cpyYbUEHOBJupUyPqJ5SSMTP_9vFYQgfbYZgMJvM5-2C_Ka7p12r8fzq_xUl-JfjNQ3FZlz1utLhLsPMih9k4WSQA9rMC_0zvoUfl-cwj8Iau9UcVtTY52xap6_BSSFWJbPP-KuglY6dYezJY8eWww",
        alt: "Vivelia 3L Tin Can of Greek extra virgin olive oil displayed next to a ceramic dipping bowl of glowing green-gold olive oil",
        stockNote: "14°C Warehouse Stock • Dispatched Today",
        stockNote_es: "Stock Almacén 14°C • Despacho Hoy",
        inStockLabel: "In Stock",
        inStockLabel_es: "En Stock",
        actionType: "order",
        orderPack: "duo",
        zellePrice: 110,
        zelleTitle: "Vivelia 3L Tin (2 Cans Bundle)"
      },
      {
        id: "kalamata-olives",
        name: "Authentic Greek Kalamata Olives",
        name_es: "Aceitunas Kalamata Griegas Auténticas",
        origin: "CURED IN EVOO & WINE VINEGAR • 370G",
        categories: ["gourmet", "coming-soon", "direct-imports"],
        badge: "Coming Soon / In Transit",
        badge_es: "Próximamente / En Tránsito",
        badgeType: "transit",
        cornerBadge: "Cured in EVOO",
        cornerBadge_es: "Curadas en AOVE",
        price: 16,
        priceDisplay: "$16",
        unitDisplay: "/ 370g Jar",
        unitDisplay_es: "/ Frasco 370g",
        bundleNote: "Direct Harvest Vintage Allocation",
        bundleNote_es: "Asignación de Cosecha Directa",
        description: "Authentic PDO Kalamata purple olives hand-harvested from ancient Peloponnese trees. Naturally cured in sea salt brine, infused with red wine vinegar, and bathed in rich Vivelia extra virgin olive oil marinade.",
        description_es: "Auténticas aceitunas Kalamata DOP recolectadas a mano. Curadas en salmuera marina natural, con vinagre de vino tinto y marinadas en AOVE Vivelia virgen extra con orégano silvestre.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM-FFoQQnu8KG0l4FnUTo483ii8V9YqR9Jcm-Fhagzf5vnKqYkgL8-HbybqVE-f5u32qezicR81i2EJIBSSp9yyRDmg9-jI1HDafHDpzk9M_nipXNpWnpzugJ7j9ZFkCNMkaW99egCog5xMkQmugMw71ApXoSFQyojk-Yf0ODxbj9p9i8bxMWIa5t6nCbFQKaj_cz2iJDqJLsezqIJksnsQIAR7G0bwUNcu9S2ebHPnP2Uhd744MklrA",
        alt: "Authentic Greek Kalamata Olives cured in extra virgin olive oil and red wine vinegar in a glass jar with fresh herbs",
        stockNote: "Container En Route to Maryland",
        stockNote_es: "Contenedor en Ruta a Maryland",
        inStockLabel: "In Transit",
        inStockLabel_es: "En Tránsito",
        actionType: "whatsapp_notify",
        whatsappUrl: "https://wa.me/13016594136?text=Hi%20John,%20please%20notify%20me%20when%20the%20Authentic%20Greek%20Kalamata%20Olives%20(cured%20in%20EVOO%20%26%20wine%20vinegar)%20arrive%20at%20the%20warehouse!"
      },
      {
        id: "aged-balsamic",
        name: "Aged Balsamic Vinegar of Megara (250ml)",
        name_es: "Vinagre Balsámico Añejado de Mégara (250ml)",
        origin: "AGED BALSAMIC OF MEGARA",
        categories: ["gourmet", "direct-imports"],
        badge: "Available Now",
        badge_es: "Disponible Ahora",
        badgeType: "available",
        cornerBadge: "5-Year Cask Aged",
        cornerBadge_es: "5 Años en Barrica",
        price: 18,
        priceDisplay: "$18",
        unitDisplay: "250ml carafe",
        unitDisplay_es: "Frasco 250ml",
        bundleNote: "Greek Grape Must Reduction",
        bundleNote_es: "Mosto Concentrado de Uva Griega",
        description: "Matured in oak casks from reduced Greek grape must. Dense, velvety sweetness balanced by complex woody and dried fig aromas.",
        description_es: "Envejecido en barricas de roble a partir de mosto de uva griega reducida. Dulzor denso y aterciopelado equilibrado con aromas a higo seco.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxq6Fcl_DQsYJhtWrJs7r9C6kRkcPLe5wDKNJJ-iZMj3uAu2vFej3yk1Hz-2ZRBlDyvPiRbizXJPbddeZnh7HYcrj_yu3_0S5Z4w68iScYdJgyVdl1_6GYDpEz500uIRJiav7Vd_d44iOdjl5QI2SLlmqVtRZMHniDPDhb-VXLqsIrcvbIJIgHO6PrLqoQz6DkgJm_Mj35FVyA6FccwzgOiWqcUj4BrCY21B9DPmA5C1UFwaBhSl5gNw",
        alt: "5-Year aged Greek balsamic vinegar in glass bottle",
        stockNote: "Stock: 19 bottles",
        stockNote_es: "Stock: 19 botellas",
        inStockLabel: "In Stock",
        inStockLabel_es: "En Stock",
        actionType: "cart",
        zellePrice: 18,
        zelleTitle: "Aged Balsamic Vinegar 5-Year Cask"
      },
      {
        id: "connoisseur-set",
        name: "Luxury Mediterranean Connoisseur Set",
        name_es: "Cofre Culinario Connoisseur Mediterráneo",
        origin: "LUXURY EPICUREAN GIFT SET",
        categories: ["gourmet", "direct-imports"],
        badge: "Available Now",
        badge_es: "Disponible Ahora",
        badgeType: "available",
        cornerBadge: "Connoisseur Chest",
        cornerBadge_es: "Cofre de Regalo",
        price: 98,
        priceDisplay: "$98",
        unitDisplay: "Includes courier delivery",
        unitDisplay_es: "Envío courier incluido",
        bundleNote: "Curated Tasting Vault",
        bundleNote_es: "Selección de Degustación",
        description: "Contains 3L Tin Can + Organic Kalamata Olives + 5-Year Aged Balsamic + Handcrafted Olive Wood Spoon in a wooden presentation box.",
        description_es: "Incluye 1 lata Vivelia 3L + Aceitunas Kalamata + Balsámico 5 años + Cuchara de olivo artesanal en caja de madera de regalo.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAet1GAtnPgffSlqsqugzC-Z3NX9mXKgSqtjR6i9ODf15v_6O6nPed8tqugMw7IQW8_bEjQgd_-cHZO-6bVIhjHC-FrS0Q17vHgdko1gu-Ng7NSDupVJz2iHD8S3Dvo38kdKDkSdIScwgjO7ieIvIX5a9IHj1oh8oOvQA_y9mU0rTXTx1gVhQHm2yGl_6eA4yIzy-GpJIxqYfDncThWtf3IkXSpmrYrb-CTI4IFh2ldOD7r5BJUxV3tvg",
        alt: "Luxury Mediterranean gourmet gift box open showcasing Vivelia 3L tin, olive jar, aged balsamic vinegar",
        stockNote: "Stock: 12 sets",
        stockNote_es: "Stock: 12 cofres",
        inStockLabel: "In Stock",
        inStockLabel_es: "En Stock",
        actionType: "cart",
        zellePrice: 98,
        zelleTitle: "Luxury Mediterranean Connoisseur Set"
      }
    ];
    window.currentCatalogFilter = 'all';

    // Preselect product in order form and smoothly scroll
    window.preselectAndOrderProduct = function(productId, packValue = 'duo') {
      const orderSection = document.getElementById('signature-product') || document.getElementById('order-form');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      const packRadio = document.querySelector(`input[name="pack_selection"][value="${packValue}"]`);
      if (packRadio) {
        packRadio.checked = true;
        packRadio.dispatchEvent(new Event('change'));
      }
      const orderFormCard = document.getElementById('order-form');
      if (orderFormCard) {
        orderFormCard.classList.add('ring-4', 'ring-[#D4AF37]', 'transition-all', 'duration-500');
        setTimeout(() => {
          orderFormCard.classList.remove('ring-4', 'ring-[#D4AF37]');
        }, 2500);
      }
      const isEs = window.currentLang === 'es';
      showToast(isEs ? 'Pack de 2 Latas ($110) preseleccionado en el formulario de pedido.' : '2 Cans Bundle ($110) pre-selected in the order form.');
    };

    // Scalable Renderer function for the Multi-Product Catalog Grid
    
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
             inner.style.transform = `scale(${scale}) perspective(1000px) rotateX(${progress * 4}deg) translateY(${progress * -10}px)`;
             inner.style.transformOrigin = 'top center';
             inner.style.filter = `brightness(${brightness})`;
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
        grid.innerHTML = `
          <div class="col-span-full py-16 text-center text-on-surface-variant font-body-md bg-surface rounded-2xl border border-surface-variant/40">
            ${isEs ? 'No se encontraron productos en esta categoría.' : 'No products found in this category.'}
          </div>
        `;
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
          mediaHtml = `
            <div class="md:w-[45%] lg:w-1/2 relative bg-surface-container overflow-hidden shrink-0">
              <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" src="${p.image}" alt="${p.alt || title}" loading="lazy" />
              ${badgeText ? `<span class="absolute top-6 left-6 px-3 py-1.5 rounded-full ${p.badgeType === 'transit' ? 'bg-amber-500/90 text-white' : (p.badgeType === 'curating' ? 'bg-indigo-600/90 text-white' : 'bg-[#D4AF37]/90 text-[#0D1B2A]')} backdrop-blur-md text-[11px] font-label-caps font-extrabold shadow-lg">${badgeText}</span>` : ''}
            </div>
          `;
        } else {
          mediaHtml = `
            <div class="md:w-[45%] lg:w-1/2 relative bg-teal-50 overflow-hidden shrink-0 flex items-center justify-center">
              <span class="material-symbols-outlined text-[80px] text-teal-700 opacity-20">${p.iconSymbol || 'inventory_2'}</span>
              ${badgeText ? `<span class="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-teal-700/90 text-white backdrop-blur-md text-[11px] font-label-caps font-extrabold shadow-lg">${badgeText}</span>` : ''}
            </div>
          `;
        }

        return `
          <div class="sticky-card w-full sticky z-[${10 + index}]" style="top: ${topOffset}px;">
            <div class="card-inner bg-surface rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-surface-variant/30 overflow-hidden flex flex-col md:flex-row min-h-[480px] cursor-pointer group transition-all duration-300 will-change-transform" onclick="openProductPage('${p.id}')">
              ${mediaHtml}
              <div class="p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1 bg-gradient-to-br from-surface to-surface-container-lowest">
                <span class="text-xs font-label-caps tracking-widest text-[#8B7018] uppercase font-bold mb-4 block">${p.origin}</span>
                <h3 class="font-headline-lg text-3xl lg:text-4xl text-[#0D1B2A] font-black leading-tight mb-4 group-hover:text-secondary transition-colors">
                  ${title}
                </h3>
                <p class="font-body-md text-base text-on-surface-variant leading-relaxed mb-8 line-clamp-3">
                  ${desc}
                </p>
                <div class="flex items-center gap-2 mb-8">
                  <span class="px-3 py-1 rounded-md bg-secondary-fixed/30 text-on-secondary-fixed font-label-caps text-[10px] font-bold uppercase tracking-wider">${stockText}</span>
                </div>
                <div class="flex items-end justify-between mt-auto pt-6 border-t border-surface-variant/40">
                  <div class="flex items-baseline gap-2">
                    <span class="font-price-lg text-4xl text-[#0D1B2A] font-extrabold">${p.priceDisplay}</span>
                    ${unitText ? `<span class="text-sm font-medium text-on-surface-variant pb-1">${unitText}</span>` : ''}
                  </div>
                  <button class="w-14 h-14 rounded-full bg-[#0D1B2A] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D1B2A] transition-colors shadow-lg group-hover:shadow-xl transform group-hover:scale-105 duration-300 active:scale-95" type="button" aria-label="View Details">
                    <span class="material-symbols-outlined text-[24px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
      
      // Initialize the 3D stacking scroll effect
      setTimeout(window.init3DStickyCards, 100);
    };
  
    // Initialization on load
    document.addEventListener('DOMContentLoaded', () => {
      renderCart();
      window.renderStoreCatalog('all');
    });
  