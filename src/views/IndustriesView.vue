<!-- IndustriesView.vue -->
<template>
  <main>
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">Sectors We Serve</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">Industries <em>We Serve</em></h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">Specialized operational solutions for multiple sectors</p>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="industries-grid">
          <div v-for="(ind, i) in industries" :key="ind.title" class="industry-card card" :data-aos="'fade-up'" :data-aos-delay="i*100">
            <div class="industry-card__icon">{{ ind.icon }}</div>
            <h3>{{ ind.title }}</h3>
            <p>{{ ind.desc }}</p>
            <div class="industry-card__status" :class="ind.active ? 'status--active' : 'status--future'">
              {{ ind.active ? '✔ Currently Serving' : '🔜 Future Expansion' }}
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
        { icon: '🎓', title: 'Education Sector',             desc: 'Comprehensive supply chain solutions for educational institutions including procurement, logistics, and warehousing.', active: true },
        { icon: '🏛️', title: 'Institutional Organizations',  desc: 'Operational support for institutional bodies requiring structured procurement and inventory management systems.', active: true },
        { icon: '🏢', title: 'Corporate Entities',           desc: 'End-to-end supply chain services tailored for corporate environments with scalable logistics infrastructure.', active: true },
        { icon: '🌐', title: 'Multi-Industry Expansion',     desc: 'Edumart is strategically positioned to expand into new industries, bringing proven operational systems to new sectors.', active: false },
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

.industries-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.industry-card { padding: 2.5rem; }
.industry-card__icon { font-size: 3rem; margin-bottom: 1.2rem; }
.industry-card h3 { margin-bottom: 0.75rem; }
.industry-card p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.industry-card__status {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
}
.status--active { background: #ecfdf5; color: #065f46; }
.status--future { background: var(--gold-pale); color: #7a5e1c; }

@media (max-width: 768px) {
  .page-hero       { padding: 110px 0 60px; }
  .industries-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .industry-card   { padding: 1.75rem 1.5rem; }
}
</style>