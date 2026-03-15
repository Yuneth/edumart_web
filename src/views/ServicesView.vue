<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">What We Do</p>
          <h1 class="page-hero__title">Our <em>Services</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">End-to-end operational support tailored to institutional requirements</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Services
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div v-for="(service, i) in services" :key="service.title" class="service-block" :class="{ 'service-block--rev': i % 2 !== 0 }" :data-aos="'fade-up'">
          <div class="service-block__icon-col">
            <div class="service-block__icon-wrap">
              <svg :viewBox="service.vb" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" v-html="service.svg"></svg>
              <span class="service-block__num">0{{ i + 1 }}</span>
            </div>
          </div>
          <div class="service-block__content">
            <p class="section-label">Service {{ `0${i+1}` }}</p>
            <h2 class="section-title">{{ service.title }}</h2>
            <div class="divider"></div>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feat in service.features" :key="feat">
                <span class="feat-check">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          vb: '0 0 24 24',
          svg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
          title: 'Procurement & Purchasing Management',
          description: 'We ensure high quality products at competitive pricing while maintaining strong and reliable supplier networks. Our strategic approach to procurement reduces costs and improves supply reliability.',
          features: [
            'Strategic sourcing and supplier evaluation',
            'Vendor negotiation and cost optimization',
            'Institutional purchasing coordination',
            'Import purchasing management',
            'Vendor relationship development',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
          title: 'Logistics Handling Services',
          description: 'Our logistics solutions are designed to reduce delays and improve operational efficiency. We coordinate both local and international freight with full documentation support.',
          features: [
            'Local and international logistics coordination',
            'Import and export documentation',
            'Shipment tracking and monitoring',
            'Delivery scheduling and route optimization',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
          title: 'Warehousing & Inventory Management',
          description: 'We provide scalable and organized warehousing solutions tailored to institutional growth. Our inventory systems ensure accurate stock visibility at all times.',
          features: [
            'Secure storage facilities',
            'Inventory control systems',
            'Stock monitoring and reporting',
            'Distribution coordination',
            'Asset and materials management',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>',
          title: 'Cargo Transportation Services',
          description: 'Our transportation network ensures timely and secure movement of goods. We handle everything from routine scheduled deliveries to urgent institutional requirements.',
          features: [
            'Inland cargo transportation',
            'Institutional material distribution',
            'Safe handling procedures',
            'Scheduled and urgent deliveries',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
          title: 'Supply Chain Consultation Services',
          description: 'We help organizations build structured, efficient, and future-ready operational systems. Our consultancy is grounded in practical experience and best-practice frameworks.',
          features: [
            'Supply chain process optimization',
            'Procurement strategy development',
            'Cost control and budgeting advisory',
            'Import and logistics planning',
            'Operational system structuring',
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
/* Hero */
.page-hero { position:relative; overflow:hidden; padding:120px 0 80px; }
.page-hero__bg { position:absolute; inset:0; z-index:0; background:linear-gradient(135deg,#0F2236 0%,#0B1929 60%,#081523 100%); }
.page-hero__bg::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#1B6FBF 30%,#2DB89A 70%,transparent); }
.page-hero__glow { position:absolute; z-index:1; top:0; right:0; width:600px; height:500px; border-radius:50%; background:radial-gradient(ellipse,rgba(45,184,154,.07) 0%,transparent 65%); pointer-events:none; }
.page-hero__inner { position:relative; z-index:2; display:flex; flex-direction:column; gap:1rem; }
.page-hero__title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(3rem,6vw,4.5rem); font-weight:300; color:#fff; margin-bottom:1rem; }
.page-hero__title em { font-style:italic; color:#2DB89A; }
.hero-rule { width:48px; height:1.5px; background:linear-gradient(90deg,rgba(45,184,154,.8),transparent); margin-bottom:1.2rem; }
.page-hero__sub { color:rgba(255,255,255,.6); font-size:1.1rem; margin-top:1rem; }
.page-hero__crumbs { display:flex; align-items:center; gap:.4rem; font-size:.72rem; color:rgba(255,255,255,.3); margin-top:2rem; letter-spacing:.05em; }
.page-hero__crumbs a { color:rgba(255,255,255,.45); text-decoration:none; transition:color .2s; }
.page-hero__crumbs a:hover { color:rgba(45,184,154,.9); }
.page-hero__crumbs svg { opacity:.3; }

/* Shared */
.section-label { display:inline-block; font-size:.72rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:#2DB89A; margin-bottom:.75rem; }
.section-title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:400; color:#0B1929; line-height:1.15; margin-bottom:.5rem; }
.divider { width:48px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin:1.5rem 0; border-radius:2px; }

/* Service Blocks */
.service-block { display:grid; grid-template-columns:200px 1fr; gap:4rem; align-items:start; padding:4rem 0; border-bottom:1px solid #E8EEF5; }
.service-block:last-child { border-bottom:none; }
.service-block--rev { direction:rtl; }
.service-block--rev > * { direction:ltr; }
.service-block__icon-col { display:flex; justify-content:center; }
.service-block__icon-wrap { position:relative; width:120px; height:120px; background:#F4F6F9; border-radius:20px; display:grid; place-items:center; border:1px solid #E8EEF5; transition:all .3s ease; box-shadow:0 4px 16px rgba(27,111,191,.06); color:#1B6FBF; }
.service-block:hover .service-block__icon-wrap { border-color:rgba(45,184,154,.3); box-shadow:0 8px 28px rgba(45,184,154,.12); background:#fff; color:#2DB89A; }
.service-block__num { position:absolute; bottom:-.6rem; right:-.6rem; width:32px; height:32px; background:linear-gradient(135deg,#1B6FBF,#2DB89A); color:#fff; font-size:.7rem; font-weight:700; border-radius:50%; display:grid; place-items:center; box-shadow:0 2px 8px rgba(27,111,191,.25); }

/* Feature List */
.service-features { list-style:none; display:flex; flex-direction:column; gap:.55rem; margin-top:1.5rem; }
.service-features li { display:flex; align-items:center; gap:.85rem; font-size:.9rem; color:#2C3E55; padding:.3rem 0; }
.feat-check { width:20px; height:20px; background:rgba(45,184,154,.1); border:1px solid rgba(45,184,154,.22); border-radius:50%; display:grid; place-items:center; color:#2DB89A; flex-shrink:0; }

/* Responsive */
@media (max-width:900px) { .service-block { grid-template-columns:140px 1fr; gap:2.5rem; } }
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .service-block { grid-template-columns:1fr; gap:1.75rem; padding:2.5rem 0; }
  .service-block--rev { direction:ltr; }
  .service-block__icon-col { justify-content:flex-start; }
  .service-block__icon-wrap { width:90px; height:90px; }
}
@media (max-width:480px) { .service-block { padding:2rem 0; } .service-features li { font-size:.85rem; } }
</style>