<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Looking Ahead</p>
          <h1 class="page-hero__title">Future <em>Growth</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Strategically positioned for expansion across Sri Lanka and beyond</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Growth
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="text-center intro-block" data-aos="fade-up">
          <p class="section-label">Our Roadmap</p>
          <h2 class="section-title">Expansion <em>Strategy</em></h2>
          <div class="divider centered"></div>
          <p class="intro-text">Edumart's long-term vision is to evolve into a fully integrated supply chain management company serving multiple industries while maintaining strong institutional partnerships.</p>
        </div>

        <div class="expansion-grid">
          <div v-for="(item, i) in expansionItems" :key="item.title" class="expansion-card" :data-aos="'fade-up'" :data-aos-delay="i*80">
            <div class="expansion-card__icon">
              <svg :viewBox="item.vb" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="item.svg"></svg>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ExpansionView',
  data() {
    return {
      expansionItems: [
        { title: 'Educational Materials Import',    desc: 'Establishing direct import channels for educational materials to serve institutions across Sri Lanka at competitive pricing.',    vb: '0 0 24 24', svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
        { title: 'Printing & Stationery Supply',   desc: 'Developing a dedicated printing and stationery supply vertical to serve our institutional client base comprehensively.',           vb: '0 0 24 24', svg: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>' },
        { title: 'IT & Technology Procurement',    desc: 'Building specialized procurement capabilities for IT equipment, software, and technology infrastructure for educational institutions.', vb: '0 0 24 24', svg: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>' },
        { title: 'Digital Supply Chain Systems',   desc: 'Investing in digital platforms and technology to bring real-time supply chain visibility and automation to our clients.',           vb: '0 0 24 24', svg: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>' },
        { title: 'Regional Logistics Partnerships',desc: 'Forming strategic partnerships with regional logistics providers to expand our geographic reach and service capability.',             vb: '0 0 24 24', svg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
        { title: 'Warehouse Infrastructure',       desc: 'Developing owned warehouse infrastructure to reduce dependency on third parties and improve service consistency.',                  vb: '0 0 24 24', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
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
.intro-block { max-width:640px; margin:0 auto 4rem; }
.intro-text { font-size:.95rem; color:rgba(10,22,40,.6); line-height:1.8; margin-top:.5rem; }

/* Grid */
.expansion-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }
.expansion-card { padding:2.5rem 2rem; border-radius:16px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.05); transition:all .3s ease; position:relative; overflow:hidden; }
.expansion-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .35s ease; }
.expansion-card:hover { transform:translateY(-8px); box-shadow:0 20px 45px rgba(27,111,191,.1); border-color:rgba(45,184,154,.2); }
.expansion-card:hover::before { transform:scaleX(1); }
.expansion-card__icon { width:54px; height:54px; background:rgba(27,111,191,.07); border:1px solid rgba(27,111,191,.14); border-radius:14px; display:grid; place-items:center; color:#1B6FBF; margin-bottom:1.3rem; transition:all .3s ease; }
.expansion-card:hover .expansion-card__icon { background:rgba(45,184,154,.08); border-color:rgba(45,184,154,.2); color:#2DB89A; }
.expansion-card h3 { font-size:1.05rem; margin-bottom:.75rem; color:#0B1929; font-weight:700; }
.expansion-card p { font-size:.875rem; color:#637A95; line-height:1.75; }

/* Responsive */
@media (max-width:900px) { .expansion-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:768px) { .page-hero { padding:100px 0 60px; } }
@media (max-width:580px) { .expansion-grid { grid-template-columns:1fr; } .expansion-card { padding:1.75rem 1.5rem; } }
</style>