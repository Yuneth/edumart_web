<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Our Partners</p>
          <h1 class="page-hero__title">Our <em>Clients</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Long-term partnerships built on trust, reliability, and performance excellence</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Clients
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="clients-hero-grid">
          <div v-for="(client, i) in clients" :key="client.name" class="client-full-card" :data-aos="'fade-up'" :data-aos-delay="i*100">
            <div class="client-full-card__badge">{{ client.badge }}</div>
            <div class="client-full-card__body">
              <div class="client-full-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>{{ client.name }}</h3>
              <p>{{ client.desc }}</p>
            </div>
          </div>
        </div>

        <div class="partner-values" data-aos="fade-up">
          <h2 class="section-title text-center">Our Partnership <em>Promise</em></h2>
          <div class="divider centered"></div>
          <div class="promise-grid">
            <div v-for="p in promises" :key="p.title" class="promise-item">
              <div class="promise-icon">
                <svg :viewBox="p.vb" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="p.svg"></svg>
              </div>
              <h4>{{ p.title }}</h4>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ClientsView',
  data() {
    return {
      clients: [
        {
          badge: 'Primary Client',
          name: 'Cambridge College of British English International (PVT) Ltd',
          desc: 'Our flagship institutional partner. We provide comprehensive supply chain management including procurement, logistics, and warehousing services to support their international operations.'
        },
        {
          badge: 'Key Client',
          name: 'Cambridge College of British English',
          desc: 'Providing integrated operational support to ensure smooth day-to-day institutional supply chain operations, from purchasing to delivery.'
        },
        {
          badge: 'Key Client',
          name: 'Cambridge College of Information Technology',
          desc: "Supporting IT and technology procurement, logistics coordination, and inventory management for one of Sri Lanka's leading technology institutions."
        },
      ],
      promises: [
        { title: 'Trust',       desc: 'Every relationship is built on a foundation of integrity and transparency.', vb: '0 0 24 24', svg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
        { title: 'Reliability', desc: 'Consistent delivery, every time, without compromise.',                       vb: '0 0 24 24', svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
        { title: 'Performance', desc: 'Results-driven partnerships focused on measurable outcomes.',                vb: '0 0 24 24', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
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
.section-title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:400; color:#0B1929; line-height:1.15; }
.section-title em { font-style:italic; color:#2DB89A; }
.divider { width:48px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin:1.5rem 0; border-radius:2px; }
.divider.centered { margin-left:auto; margin-right:auto; }
.text-center { text-align:center; }

/* Client Cards */
.clients-hero-grid { display:flex; flex-direction:column; gap:1.5rem; margin-bottom:5rem; }
.client-full-card { display:flex; gap:2rem; align-items:flex-start; padding:2.5rem; border-radius:14px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.06); transition:all .3s ease; position:relative; overflow:hidden; }
.client-full-card::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:linear-gradient(180deg,#1B6FBF,#2DB89A); transform:scaleY(0); transform-origin:top; transition:transform .3s ease; }
.client-full-card:hover { box-shadow:0 8px 32px rgba(27,111,191,.1); transform:translateX(6px); border-color:rgba(45,184,154,.25); }
.client-full-card:hover::before { transform:scaleY(1); }
.client-full-card__badge { background:linear-gradient(135deg,#1B6FBF,#2DB89A); color:#fff; padding:.35rem .9rem; border-radius:20px; font-size:.7rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; white-space:nowrap; flex-shrink:0; align-self:flex-start; margin-top:.3rem; }
.client-full-card__body { flex:1; }
.client-full-card__icon { width:44px; height:44px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:12px; display:grid; place-items:center; color:#2DB89A; margin-bottom:.9rem; }
.client-full-card__body h3 { margin-bottom:.75rem; color:#0B1929; font-family:var(--font-display,'Playfair Display',Georgia,serif); font-weight:400; font-size:1.25rem; }
.client-full-card__body p { font-size:.9rem; color:#637A95; line-height:1.75; }

/* Promise Section */
.partner-values { text-align:center; }
.promise-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:3rem; }
.promise-item { padding:2rem; border-radius:14px; border:1px solid #E8EEF5; background:#F7F9FC; transition:all .3s ease; position:relative; overflow:hidden; }
.promise-item::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .3s ease; }
.promise-item:hover { border-color:rgba(45,184,154,.25); box-shadow:0 8px 28px rgba(27,111,191,.08); transform:translateY(-4px); background:#fff; }
.promise-item:hover::after { transform:scaleX(1); }
.promise-icon { width:52px; height:52px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:14px; display:grid; place-items:center; color:#2DB89A; margin:0 auto 1.1rem; transition:background .2s; }
.promise-item:hover .promise-icon { background:rgba(45,184,154,.14); }
.promise-item h4 { margin-bottom:.5rem; color:#0B1929; }
.promise-item p { font-size:.875rem; color:#637A95; line-height:1.7; }

/* Responsive */
@media (max-width:900px) { .promise-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .client-full-card { flex-direction:column; gap:1rem; }
  .client-full-card__badge { align-self:flex-start; }
  .promise-grid { grid-template-columns:1fr; }
}
@media (max-width:480px) { .client-full-card { padding:1.5rem; } .promise-item { padding:1.5rem; } }
</style>