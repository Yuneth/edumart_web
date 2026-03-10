<!-- ExpansionView.vue -->
<template>
  <main>
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">Looking Ahead</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">Future <em>Growth</em></h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">
          Strategically positioned for expansion across Sri Lanka and beyond
        </p>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="text-center" data-aos="fade-up" style="max-width:640px; margin:0 auto 4rem;">
          <p class="section-label">Our Roadmap</p>
          <h2 class="section-title">Expansion <em>Strategy</em></h2>
          <div class="divider-gold centered"></div>
          <p>Edumart's long-term vision is to evolve into a fully integrated supply chain management company serving multiple industries while maintaining strong institutional partnerships.</p>
        </div>

        <div class="expansion-grid">
          <div v-for="(item, i) in expansionItems" :key="item.title" class="expansion-card" :data-aos="'fade-up'" :data-aos-delay="i*80">
            <span class="expansion-card__icon">{{ item.icon }}</span>
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
        // { icon: '📚', title: 'Educational Materials Import',      desc: 'Establishing direct import channels for educational materials to serve institutions across Sri Lanka at competitive pricing.' },
        // { icon: '🖨️', title: 'Printing & Stationery Supply',     desc: 'Developing a dedicated printing and stationery supply vertical to serve our institutional client base comprehensively.' },
        // { icon: '💻', title: 'IT & Technology Procurement',       desc: 'Building specialized procurement capabilities for IT equipment, software, and technology infrastructure for educational institutions.' },
        // { icon: '🌐', title: 'Digital Supply Chain Systems',      desc: 'Investing in digital platforms and technology to bring real-time supply chain visibility and automation to our clients.' },
        // { icon: '🤝', title: 'Regional Logistics Partnerships',   desc: 'Forming strategic partnerships with regional logistics providers to expand our geographic reach and service capability.' },
        // { icon: '🏗️', title: 'Warehouse Infrastructure',         desc: 'Developing owned warehouse infrastructure to reduce dependency on third parties and improve service consistency.' },
      ]
    }
  }
}
</script>

<style scoped>
.page-hero { padding: 140px 0 80px; position: relative; overflow: hidden; }
.page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 70% 50%, rgba(201,168,76,0.07), transparent 60%); pointer-events: none; }
.page-hero__title { font-family: var(--font-display); font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 300; color: var(--white); margin-bottom: 1rem; }
.page-hero__title em { font-style: italic; color: var(--gold); }
.page-hero__sub { color: rgba(255,255,255,0.6); font-size: 1.1rem; margin-top: 1rem; }

.expansion-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.expansion-card {
  padding: 2.5rem 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--ivory-dark);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}
.expansion-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-md); border-color: var(--gold-pale); }
.expansion-card__icon { font-size: 2.5rem; display: block; margin-bottom: 1.2rem; }
.expansion-card h3 { font-size: 1.1rem; margin-bottom: 0.75rem; }
.expansion-card p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; }

@media (max-width: 900px) { .expansion-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .page-hero { padding: 110px 0 60px; } }
@media (max-width: 580px) {
  .expansion-grid { grid-template-columns: 1fr; }
  .expansion-card { padding: 1.75rem 1.5rem; }
}
</style>