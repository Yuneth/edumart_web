<template>
  <main>
    <!-- ── Hero ── -->
    <section class="hero">
      <div class="hero__bg-pattern"></div>
      <div class="container hero__inner">
        <div class="hero__content" data-aos="fade-right" data-aos-duration="1000">
          <p class="section-label">Sri Lanka's Trusted Partner</p>
          <h1 class="hero__title">
            Integrated<br>
            <em>Supply Chain</em><br>
            Solutions
          </h1>
          <div class="divider-gold"></div>
          <p class="hero__subtitle">
            Delivering reliable, efficient, and scalable operational services to
            educational institutions and corporate organizations across Sri Lanka.
          </p>
          <div class="hero__actions">
            <router-link to="/services" class="btn btn-primary">Explore Services</router-link>
            <router-link to="/about" class="btn btn-outline">Learn More</router-link>
          </div>
        </div>
        <div class="hero__visual" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="hero__card-stack">
            <div class="hcard hcard--1">
              <span class="hcard__icon">📦</span>
              <span>Procurement & Purchasing</span>
            </div>
            <div class="hcard hcard--2">
              <span class="hcard__icon">🚚</span>
              <span>Logistics & Transportation</span>
            </div>
            <div class="hcard hcard--3">
              <span class="hcard__icon">🏭</span>
              <span>Warehousing & Inventory</span>
            </div>
            <div class="hcard hcard--4">
              <span class="hcard__icon">📊</span>
              <span>Supply Chain Consultation</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero__scroll">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- ── Stats Band ── -->
    <section class="stats-band">
      <div class="container stats-band__grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item" data-aos="fade-up">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ── About Snippet ── -->
    <section class="section-pad about-snippet">
      <div class="container about-snippet__inner">
        <div class="about-snippet__text" data-aos="fade-right">
          <p class="section-label">Who We Are</p>
          <h2 class="section-title">
            Managing Operations.<br>
            <em>Enabling Growth.</em>
          </h2>
          <div class="divider-gold"></div>
          <p>
            Edumart (Pvt) Ltd was established to provide integrated supply chain and
            operational management services with a focus on reliability, cost efficiency,
            and strategic expansion across Sri Lanka.
          </p>
          <p style="margin-top:1rem;">
            We specialize in procurement, logistics, warehousing, cargo transportation,
            and supply chain consultancy—delivering structured end-to-end operational
            support tailored to institutional requirements.
          </p>
          <router-link to="/about" class="btn btn-dark" style="margin-top:2rem;">
            About Edumart
          </router-link>
        </div>
        <div class="about-snippet__pillars" data-aos="fade-left" data-aos-delay="150">
          <div v-for="pillar in pillars" :key="pillar.title" class="pillar-card">
            <span class="pillar-icon">{{ pillar.icon }}</span>
            <div>
              <h4>{{ pillar.title }}</h4>
              <p>{{ pillar.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Services ── -->
    <section class="section-pad bg-ivory services-preview">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <p class="section-label">What We Offer</p>
          <h2 class="section-title">Our Core <em>Services</em></h2>
          <div class="divider-gold centered"></div>
        </div>
        <div class="services-grid">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            class="card service-card"
            :data-aos="'fade-up'"
            :data-aos-delay="i * 80"
          >
            <div class="service-card__icon">{{ service.icon }}</div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__desc">{{ service.desc }}</p>
            <router-link to="/services" class="service-card__link">
              Learn more <span>→</span>
            </router-link>
          </div>
        </div>
        <div class="text-center" style="margin-top:3rem;" data-aos="fade-up">
          <router-link to="/services" class="btn btn-dark">View All Services</router-link>
        </div>
      </div>
    </section>

    <!-- ── Why Choose Us ── -->
    <section class="section-pad why-us bg-navy">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <p class="section-label" style="color:var(--gold)">Our Advantage</p>
          <h2 class="section-title" style="color:var(--white)">Why Choose <em style="color:var(--gold)">Edumart?</em></h2>
          <div class="divider-gold centered"></div>
        </div>
        <div class="why-grid">
          <div
            v-for="(item, i) in whyUs"
            :key="item.title"
            class="why-card"
            :data-aos="'fade-up'"
            :data-aos-delay="i * 60"
          >
            <div class="why-card__check">✔</div>
            <div>
              <h4 style="color:var(--white); margin-bottom:0.4rem;">{{ item.title }}</h4>
              <p style="color:rgba(255,255,255,0.55); font-size:0.875rem;">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Clients ── -->
    <section class="section-pad clients-section">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <p class="section-label">Our Partners</p>
          <h2 class="section-title">Trusted by Leading <em>Institutions</em></h2>
          <div class="divider-gold centered"></div>
          <p style="max-width:540px; margin:0 auto 3rem; color:var(--text-muted);">
            We proudly serve leading educational institutions, building long-term
            partnerships founded on trust, reliability, and performance excellence.
          </p>
        </div>
        <div class="clients-grid">
          <div v-for="client in clients" :key="client" class="client-card" data-aos="zoom-in">
            <div class="client-card__icon">🎓</div>
            <p class="client-card__name">{{ client }}</p>
          </div>
        </div>
        <div class="text-center" style="margin-top:3rem;" data-aos="fade-up">
          <router-link to="/clients" class="btn btn-dark">View All Clients</router-link>
        </div>
      </div>
    </section>

    <!-- ── CTA Banner ── -->
    <section class="cta-banner">
      <div class="container cta-banner__inner" data-aos="fade-up">
        <div>
          <h2 style="color:var(--white); font-weight:300;">
            Ready to streamline your<br>
            <em style="color:var(--gold); font-style:italic;">operations?</em>
          </h2>
        </div>
        <div class="cta-banner__actions">
          <router-link to="/contact" class="btn btn-primary">Get In Touch</router-link>
          <router-link to="/services" class="btn btn-outline">Our Services</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      stats: [
        { num: '5+',    label: 'Core Services' },
        { num: '3+',    label: 'Institutional Clients' },
        { num: '100%',  label: 'Transparency' },
        { num: '∞',     label: 'Growth Potential' },
      ],
      pillars: [
        { icon: '🎯', title: 'Vision', desc: 'Trusted supply chain solutions provider with regional expansion capabilities.' },
        { icon: '🚀', title: 'Mission', desc: 'Efficient, transparent, and scalable operational solutions for long-term growth.' },
      ],
      services: [
        { icon: '📦', title: 'Procurement & Purchasing', desc: 'Strategic sourcing, vendor negotiation, cost optimization, and import purchasing management.' },
        { icon: '🚚', title: 'Logistics Handling', desc: 'Local and international logistics coordination, import/export documentation, and route optimization.' },
        { icon: '🏭', title: 'Warehousing & Inventory', desc: 'Secure storage, inventory control systems, stock monitoring, and distribution coordination.' },
        { icon: '🚛', title: 'Cargo Transportation', desc: 'Inland cargo transportation, institutional material distribution, and scheduled/urgent deliveries.' },
        { icon: '📊', title: 'Supply Chain Consultation', desc: 'Process optimization, procurement strategy development, cost control, and operational structuring.' },
      ],
      whyUs: [
        { title: 'Professional & Structured Systems',   desc: 'Methodically designed operational workflows built for institutional efficiency.' },
        { title: 'Dedicated Service Management',        desc: 'Hands-on account management and dedicated support for every client.' },
        { title: 'Strong Supplier Networks',            desc: 'Established relationships with reliable suppliers and logistics partners.' },
        { title: 'Transparent Procurement',             desc: 'Full visibility into purchasing decisions, costs, and supply chain activities.' },
        { title: 'Scalable Solutions',                  desc: 'Flexible systems designed to grow alongside your expanding institution.' },
        { title: 'Long-Term Growth Strategy',           desc: 'Partnerships focused on your success for years to come.' },
      ],
      clients: [
        'Cambridge College of British English International (PVT) Ltd',
        'Cambridge College of British English',
        'Cambridge College of Information Technology',
      ]
    }
  }
}
</script>

<style scoped>
/* Hero */
.hero {
  background: var(--navy);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
}

.hero__bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(26,52,89,0.8) 0%, transparent 50%),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 40px,
      rgba(255,255,255,0.015) 40px,
      rgba(255,255,255,0.015) 41px
    );
  pointer-events: none;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 5rem;
  flex: 1;
  padding-top: 3rem;
  padding-bottom: 5rem;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 300;
  color: var(--white);
  line-height: 1.08;
  margin-bottom: 1.5rem;
}
.hero__title em {
  font-style: italic;
  color: var(--gold);
}

.hero__subtitle {
  color: rgba(255,255,255,0.65);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 2.5rem;
}

.hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Hero card stack */
.hero__visual { display: flex; justify-content: center; align-items: center; }
.hero__card-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 420px;
}
.hcard {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all var(--transition);
  backdrop-filter: blur(8px);
}
.hcard:hover {
  background: rgba(201,168,76,0.1);
  border-color: rgba(201,168,76,0.3);
  color: var(--gold-light);
}
.hcard__icon { font-size: 1.8rem; }
.hcard--1 { animation: float 5s ease-in-out infinite; }
.hcard--2 { animation: float 5s ease-in-out infinite 1.2s; }
.hcard--3 { animation: float 5s ease-in-out infinite 0.6s; }
.hcard--4 { animation: float 5s ease-in-out infinite 1.8s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

/* Scroll indicator */
.hero__scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 2.5rem;
  color: rgba(255,255,255,0.35);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.scroll-line {
  width: 1px; height: 48px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* Stats */
.stats-band {
  background: var(--gold);
  padding: 2.5rem 0;
}
.stats-band__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
.stat-num {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--navy);
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(10,22,40,0.65);
}

/* About snippet */
.about-snippet__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.pillar-card {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--ivory-dark);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  margin-bottom: 1rem;
  transition: all var(--transition);
}
.pillar-card:hover {
  border-color: var(--gold-pale);
  transform: translateX(6px);
  box-shadow: var(--shadow-md);
}
.pillar-icon { font-size: 2rem; flex-shrink: 0; }
.pillar-card h4 { color: var(--navy); margin-bottom: 0.3rem; font-size: 1rem; }
.pillar-card p  { font-size: 0.875rem; color: var(--text-muted); }

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}
.service-card { padding: 2rem; }
.service-card__icon { font-size: 2.2rem; margin-bottom: 1rem; }
.service-card__title { font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--navy); }
.service-card__desc { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7; }
.service-card__link {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap var(--transition-fast);
}
.service-card__link:hover { gap: 0.8rem; }

/* Why us */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}
.why-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  transition: all var(--transition);
}
.why-card:hover {
  background: rgba(201,168,76,0.06);
  border-color: rgba(201,168,76,0.2);
}
.why-card__check {
  width: 30px; height: 30px;
  background: var(--gold);
  color: var(--navy);
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* Clients */
.clients-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.client-card {
  padding: 2.5rem 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--ivory-dark);
  background: var(--white);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}
.client-card:hover {
  border-color: var(--gold);
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(201,168,76,0.15);
}
.client-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }
.client-card__name { font-size: 0.95rem; font-weight: 500; color: var(--navy); line-height: 1.5; }

/* CTA Banner */
.cta-banner {
  background: linear-gradient(135deg, var(--navy-light), var(--navy));
  padding: 5rem 0;
  border-top: 1px solid rgba(201,168,76,0.2);
}
.cta-banner__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}
.cta-banner__actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Responsive */
@media (max-width: 1024px) {
  .services-grid        { grid-template-columns: repeat(2, 1fr); }
  .why-grid             { grid-template-columns: repeat(2, 1fr); }
  .clients-grid         { grid-template-columns: repeat(2, 1fr); }
  .about-snippet__inner { gap: 3rem; }
}
@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
    min-height: auto;
  }
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  .hero__visual          { display: none; }
  .hero__title           { font-size: clamp(2.2rem, 9vw, 3rem); }
  .hero__subtitle        { font-size: 0.95rem; }
  .hero__actions         { flex-direction: column; align-items: stretch; }
  .hero__actions .btn    { width: 100%; justify-content: center; }
  .hero__scroll          { display: none; }

  .about-snippet__inner  { grid-template-columns: 1fr; gap: 2.5rem; }

  .stats-band__grid      { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .stat-num              { font-size: 2.2rem; }

  .services-grid         { grid-template-columns: 1fr; }
  .why-grid              { grid-template-columns: 1fr; }
  .clients-grid          { grid-template-columns: 1fr; }

  .cta-banner            { padding: 3.5rem 0; }
  .cta-banner__inner     { text-align: center; justify-content: center; flex-direction: column; gap: 2rem; }
  .cta-banner__actions   { justify-content: center; }
  .cta-banner__actions .btn { flex: 1; min-width: 140px; justify-content: center; }
}
@media (max-width: 480px) {
  .stats-band            { padding: 2rem 0; }
  .stats-band__grid      { gap: 0.75rem; }
  .stat-num              { font-size: 1.9rem; }
  .stat-label            { font-size: 0.65rem; }

  .pillar-card           { flex-direction: column; gap: 0.75rem; }
  .service-card          { padding: 1.5rem; }
  .why-card              { padding: 1.2rem; }
  .client-card           { padding: 1.75rem 1.25rem; }

  .cta-banner__actions   { flex-direction: column; width: 100%; }
  .cta-banner__actions .btn { width: 100%; }
}
</style>