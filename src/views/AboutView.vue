<template>
  <main>
    <!-- Page Hero -->
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">Our Story</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">
          About <em>Edumart</em>
        </h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">
          Delivering integrated supply chain excellence across Sri Lanka
        </p>
      </div>
    </section>

    <!-- Overview -->
    <section class="section-pad">
      <!-- <div class="container about-grid">
        <div data-aos="fade-right">
          <p class="section-label">Company Overview</p>
          <h2 class="section-title">Who We <em>Are</em></h2>
          <div class="divider-gold"></div>
          <p>
            Edumart (Pvt) Ltd was established to provide integrated supply chain and
            operational management services with a focus on reliability, cost efficiency,
            and strategic expansion. We specialize in procurement, logistics, warehousing,
            cargo transportation, and supply chain consultancy.
          </p>
          <p style="margin-top:1rem;">
            Through structured systems and professional service management, we ensure
            smooth operational workflows for institutions and corporate clients across
            Sri Lanka and beyond.
          </p>
        </div>
        <div class="about-visual" data-aos="fade-left" data-aos-delay="150">
          <div class="about-badge">
            <span class="about-badge__num">5+</span>
            <span class="about-badge__label">Years of<br>Excellence</span>
          </div>
          <div class="about-spec-list">
            <div v-for="spec in specializations" :key="spec" class="spec-item">
              <span class="spec-dot"></span>
              {{ spec }}
            </div>
          </div>
        </div>
      </div> -->
    </section>

    <!-- Vision & Mission -->
    <section class="section-pad bg-ivory">
      <!-- <div class="container">
        <div class="vm-grid">
          <div class="vm-card vm-card--vision" data-aos="fade-up">
            <div class="vm-card__icon">🔭</div>
            <p class="section-label">Our Vision</p>
            <h3>Trusted & Innovative</h3>
            <p>
              To become a trusted and innovative supply chain solutions provider in Sri Lanka with regional expansion capabilities. 
            </p>
          </div>
          <div class="vm-card vm-card--mission" data-aos="fade-up" data-aos-delay="150">
            <div class="vm-card__icon">🎯</div>
            <p class="section-label">Our Mission</p>
            <h3>Efficient & Transparent</h3>
            <p>
              To deliver efficient, transparent, and scalable operational solutions that support long-term institutional and corporate growth. 
            </p>
          </div>
        </div>
      </div> -->
    </section>

    <!-- Values -->
    <section class="section-pad">
      <!-- <div class="container">
        <div class="text-center" data-aos="fade-up">
          <p class="section-label">Our Foundation</p>
          <h2 class="section-title">Core <em>Values</em></h2>
          <div class="divider-gold centered"></div>
        </div>
        <div class="values-grid">
          <div v-for="(val, i) in values" :key="val.title" class="value-card" :data-aos="'fade-up'" :data-aos-delay="i*80">
            <span class="value-card__icon">{{ val.icon }}</span>
            <h4>{{ val.title }}</h4>
            <p>{{ val.desc }}</p>
          </div>
        </div>
      </div> -->
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      specializations: [
        'Procurement and purchasing management',
        'Logistics coordination',
        'Warehouse and inventory management',
        'Cargo handling and transportation',
        'Supply chain consultation',
      ],
      values: [
        { icon: '⚡', title: 'Reliability',    desc: 'Consistent, dependable service delivery you can count on every time.' },
        { icon: '🔍', title: 'Transparency',   desc: 'Open communication and full visibility across all operations.' },
        { icon: '📈', title: 'Efficiency',      desc: 'Optimized processes that deliver more value at lower cost.' },
        { icon: '🤝', title: 'Partnership',     desc: 'Long-term relationships built on mutual trust and shared success.' },
        { icon: '🌱', title: 'Scalability',     desc: 'Systems designed to grow seamlessly with your organization.' },
        { icon: '💡', title: 'Innovation',      desc: 'Continuously improving our systems, technology, and service standards.' },
      ]
    }
  }
}
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 140px 0 80px;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 60%);
  pointer-events: none;
}
.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 300;
  color: var(--white);
  margin-bottom: 1rem;
}
.page-hero__title em { font-style: italic; color: var(--gold); }
.page-hero__sub {
  color: rgba(255,255,255,0.6);
  font-size: 1.1rem;
  margin-top: 1rem;
}

/* About grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-visual {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--gold);
  border-radius: var(--radius-md);
  padding: 2rem 2.5rem;
  align-self: flex-start;
}
.about-badge__num {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1;
}
.about-badge__label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--navy);
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.about-spec-list { display: flex; flex-direction: column; gap: 0.75rem; }
.spec-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.95rem;
  color: var(--text-body);
  font-weight: 500;
}
.spec-dot {
  width: 8px; height: 8px;
  background: var(--gold);
  border-radius: 50%;
  flex-shrink: 0;
}

/* VM */
.vm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.vm-card {
  padding: 3rem;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}
.vm-card--vision {
  background: var(--navy);
  color: var(--white);
}
.vm-card--vision * { color: inherit; }
.vm-card--vision h3 { color: var(--white); font-size: 1.6rem; margin: 0.5rem 0 1rem; }
.vm-card--vision p { color: rgba(255,255,255,0.7); }

.vm-card--mission {
  background: var(--white);
  border: 2px solid var(--gold-pale);
}
.vm-card--mission h3 { font-size: 1.6rem; margin: 0.5rem 0 1rem; }

.vm-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }

/* Values */
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}
.value-card {
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--ivory-dark);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  text-align: center;
}
.value-card:hover {
  transform: translateY(-6px);
  border-color: var(--gold-pale);
  box-shadow: var(--shadow-md);
}
.value-card__icon { font-size: 2rem; display: block; margin-bottom: 1rem; }
.value-card h4 { margin-bottom: 0.5rem; }
.value-card p  { font-size: 0.875rem; color: var(--text-muted); }

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
  .values-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .page-hero    { padding: 110px 0 60px; }
  .about-grid   { grid-template-columns: 1fr; gap: 2.5rem; }
  .vm-grid      { grid-template-columns: 1fr; }
  .vm-card      { padding: 2rem; }
  .vm-card--vision h3,
  .vm-card--mission h3 { font-size: 1.3rem; }
  .values-grid  { grid-template-columns: repeat(2, 1fr); }
  .about-badge  { padding: 1.5rem 2rem; }
  .about-badge__num { font-size: 3rem; }
}
@media (max-width: 500px) {
  .values-grid    { grid-template-columns: 1fr; }
  .about-badge    { flex-direction: column; gap: 0.5rem; text-align: center; align-self: stretch; padding: 1.5rem; }
  .about-badge__num { font-size: 2.5rem; }
  .value-card     { padding: 1.5rem; }
}
</style>