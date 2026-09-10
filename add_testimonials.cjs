const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `<!-- ========================================================================= -->
<!-- 8. FREQUENTLY ASKED QUESTIONS (FAQ) -->`;

const newSection = `<!-- ========================================================================= -->
<!-- 7.5 CURATOR'S COMMUNITY (Testimonials) -->
<!-- ========================================================================= -->
<section class="w-full py-space-3xl md:py-space-4xl relative z-10 bg-surface" id="curators-community">
  <div class="max-w-max-width-content mx-auto px-gutter-desktop">
    
    <!-- Section Header -->
    <div class="text-center mb-16 md:mb-24 flex flex-col items-center">
      <span class="px-4 py-1.5 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed font-label-caps text-[11px] font-bold uppercase tracking-wider mb-4 border border-secondary-fixed/50" data-i18n="testimonials_badge">Curator's Community</span>
      <h2 class="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-primary font-black mb-6" data-i18n="testimonials_title">Verified Experiences</h2>
      <p class="font-body-lg text-lg text-on-surface-variant max-w-2xl text-center leading-relaxed" data-i18n="testimonials_subtitle">Join hundreds of culinary enthusiasts who have transformed their kitchens with our direct imports.</p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      
      <!-- Card 1 -->
      <div class="bg-surface-container-low p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-surface-variant/40 flex flex-col h-full relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="flex items-center gap-1 mb-8">
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
        </div>
        <p class="font-body-lg text-lg text-on-surface-variant leading-relaxed mb-10 flex-grow italic">
          "The 3L tin of Vivelia is an absolute game-changer. I've never tasted olive oil this fresh outside of Greece. The grassy notes and peppery finish are incredible."
        </p>
        <div class="flex items-center gap-4 border-t border-surface-variant/50 pt-6 mt-auto">
          <div class="w-14 h-14 rounded-full bg-primary text-secondary flex items-center justify-center font-headline-sm font-bold text-xl shadow-inner">M</div>
          <div class="flex flex-col">
            <span class="font-bold text-primary text-base">Maria C.</span>
            <span class="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium mt-0.5"><span class="material-symbols-outlined text-[16px] text-emerald-600" style="font-variation-settings: 'FILL' 1;">verified</span> Verified Buyer</span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-surface-container-low p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-surface-variant/40 flex flex-col h-full relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="flex items-center gap-1 mb-8">
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
        </div>
        <p class="font-body-lg text-lg text-on-surface-variant leading-relaxed mb-10 flex-grow italic">
          "John's curation is top-notch. The Kalamata olives are perfectly balanced, and the shipping was incredibly fast and secure. Highly recommended for any serious home chef."
        </p>
        <div class="flex items-center gap-4 border-t border-surface-variant/50 pt-6 mt-auto">
          <div class="w-14 h-14 rounded-full bg-primary text-secondary flex items-center justify-center font-headline-sm font-bold text-xl shadow-inner">D</div>
          <div class="flex flex-col">
            <span class="font-bold text-primary text-base">David S.</span>
            <span class="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium mt-0.5"><span class="material-symbols-outlined text-[16px] text-emerald-600" style="font-variation-settings: 'FILL' 1;">verified</span> Verified Buyer</span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-surface-container-low p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-surface-variant/40 flex flex-col h-full relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="flex items-center gap-1 mb-8">
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
          <span class="material-symbols-outlined text-[#D4AF37] text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
        </div>
        <p class="font-body-lg text-lg text-on-surface-variant leading-relaxed mb-10 flex-grow italic">
          "I bought the 5-year aged balsamic on a whim, and it completely elevated our summer salads. The packaging and handwritten note made it feel so special."
        </p>
        <div class="flex items-center gap-4 border-t border-surface-variant/50 pt-6 mt-auto">
          <div class="w-14 h-14 rounded-full bg-primary text-secondary flex items-center justify-center font-headline-sm font-bold text-xl shadow-inner">E</div>
          <div class="flex flex-col">
            <span class="font-bold text-primary text-base">Elena P.</span>
            <span class="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium mt-0.5"><span class="material-symbols-outlined text-[16px] text-emerald-600" style="font-variation-settings: 'FILL' 1;">verified</span> Verified Buyer</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

`;

html = html.replace(targetStr, newSection + targetStr);

fs.writeFileSync('index.html', html);
console.log('Testimonials section added successfully!');
