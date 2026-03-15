<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Sectors We Serve</p>
          <h1 class="page-hero__title">Industries <em>We Serve</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Specialized operational solutions for multiple sectors</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Industries
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="industries-grid">
          <div v-for="(ind, i) in industries" :key="ind.title" class="industry-card" :data-aos="'fade-up'" :data-aos-delay="i*100">
            <div class="industry-card__icon">
              <svg :viewBox="ind.vb" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="ind.svg"></svg>
            </div>
            <h3>{{ ind.title }}</h3>
            <p>{{ ind.desc }}</p>
            <div class="industry-card__status" :class="ind.active ? 'status--active' : 'status--future'">
              <svg v-if="ind.active" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <svg v-else width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {{ ind.active ? 'Currently Serving' : 'Future Expansion' }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndustriesView',
  data() {
    return {
      industries: [
        {
          vb: '0 0 24 24',
          svg: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
          title: 'Education Sector',
          desc: 'Comprehensive supply chain solutions for educational institutions including procurement, logistics, and warehousing.',
          active: true
        },
        {
          vb: '0 0 24 24',
          svg: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>',
          title: 'Institutional Organizations',
          desc: 'Operational support for institutional bodies requiring structured procurement and inventory management systems.',
          active: true
        },
        {
          vb: '0 0 24 24',
          svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
          title: 'Corporate Entities',
          desc: 'End-to-end supply chain services tailored for corporate environments with scalable logistics infrastructure.',
          active: true
        },
        {
          vb: '0 0 24 24',
          svg: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
          title: 'Multi-Industry Expansion',
          desc: 'Edumart is strategically positioned to expand into new industries, bringing proven operational systems to new sectors.',
          active: false
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

/* Grid */
.industries-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1.75rem; }
.industry-card { padding:2.5rem; border-radius:16px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.06); transition:all .3s ease; position:relative; overflow:hidden; }
.industry-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .35s ease; }
.industry-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(27,111,191,.1); border-color:rgba(45,184,154,.2); }
.industry-card:hover::before { transform:scaleX(1); }

.industry-card__icon { width:56px; height:56px; background:rgba(27,111,191,.07); border:1px solid rgba(27,111,191,.15); border-radius:14px; display:grid; place-items:center; color:#1B6FBF; margin-bottom:1.3rem; transition:all .3s ease; }
.industry-card:hover .industry-card__icon { background:rgba(45,184,154,.08); border-color:rgba(45,184,154,.2); color:#2DB89A; }

.industry-card h3 { margin-bottom:.75rem; font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:1.4rem; font-weight:400; color:#0B1929; }
.industry-card p { font-size:.9rem; color:#637A95; margin-bottom:1.5rem; line-height:1.75; }

.industry-card__status { display:inline-flex; align-items:center; gap:.45rem; padding:.4rem 1rem; border-radius:20px; font-size:.73rem; font-weight:600; letter-spacing:.04em; }
.status--active { background:rgba(45,184,154,.1); color:#1A8A72; border:1px solid rgba(45,184,154,.25); }
.status--future { background:rgba(27,111,191,.08); color:#1B6FBF; border:1px solid rgba(27,111,191,.2); }

/* Responsive */
@media (max-width:768px) { .page-hero { padding:100px 0 60px; } .industries-grid { grid-template-columns:1fr; } }
@media (max-width:480px) { .industry-card { padding:1.75rem 1.5rem; } }
</style>