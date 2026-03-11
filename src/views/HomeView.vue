<template>
  <main>
    <!-- ── Hero ── -->
    <section class="hero">

      <!-- Background Video -->
      <div class="hero__video-wrap">
        <video
          class="hero__video"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        >
          <!--
            Place your video inside: src/assets/videos/
            Recommended: hero-bg.mp4 and hero-bg.webm (for best browser support)
            Suggested video: aerial/logistics/warehouse footage, 10-30s loop, 1080p
          -->
          <source src="https://ik.imagekit.io/kp5tixhur/Edumart/animation_of_data_processing_against_caucasian_male_supervisor_checking_stock_at_warehouse%20(1080p).mp4" type="video/webm" />
          <source src="https://ik.imagekit.io/kp5tixhur/Edumart/animation_of_data_processing_against_caucasian_male_supervisor_checking_stock_at_warehouse%20(1080p).mp4"  type="video/mp4"  />
        </video>
      </div>

      <!-- Dark gradient overlay — keeps text readable over video -->
      <div class="hero__overlay"></div>

      <!-- Subtle gold glow accent (decorative) -->
      <div class="hero__glow"></div>

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
            and supply chain consultancy delivering structured end-to-end operational
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
        { icon: '🎯', title: 'Vision', desc: 'To become a trusted and innovative supply chain solutions provider in Sri Lanka with regional expansion capabilities.' },
        { icon: '🚀', title: 'Mission', desc: 'To deliver efficient, transparent, and scalable operational solutions that support long-term institutional and corporate growth.' },
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
/* ═══════════════════════════════
   HERO
═══════════════════════════════ */
.hero {
  background: var(--navy);
  min-height: 100svh;          /* svh = small viewport height — fixes mobile browser chrome */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-top: 80px;           /* navbar height */
}

/* ── Video Background ── */
.hero__video-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}
.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /* filter: saturate(0.50) brightness(0.5); */
  pointer-events: none;
  /* Fallback: fill whole area on any screen ratio */
  min-width: 100%;
  min-height: 100%;
}

/* ── Overlay — text contrast ── */
.hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      150deg,
      rgba(10, 22, 40, 0.88) 0%,
      rgba(10, 22, 40, 0.62) 55%,
      rgba(17, 34, 64, 0.72) 100%
    );
  pointer-events: none;
}

/* ── Gold glow accent ── */
.hero__glow {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    radial-gradient(ellipse at 12% 85%, rgba(201,168,76,0.12) 0%, transparent 45%),
    radial-gradient(ellipse at 88% 12%, rgba(26, 52, 89, 0.45) 0%, transparent 50%);
  pointer-events: none;
}

/* ── Content layer ── */
.hero__inner {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: 4rem;
  flex: 1;
  padding-top: 4rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 3;
}

.hero__content { max-width: 600px; }

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5.2rem);
  font-weight: 300;
  color: var(--white);
  line-height: 1.08;
  margin-bottom: 1.4rem;
}
.hero__title em {
  font-style: italic;
  color: var(--gold);
}

.hero__subtitle {
  color: rgba(255,255,255,0.68);
  font-size: clamp(0.92rem, 2vw, 1.05rem);
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: 2.2rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

/* ── Floating service cards ── */
.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero__card-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}
.hcard {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-md);
  padding: 1.4rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.78);
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all var(--transition);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.hcard:hover {
  background: rgba(201,168,76,0.12);
  border-color: rgba(201,168,76,0.35);
  color: var(--gold-light);
}
.hcard__icon { font-size: 1.7rem; }
.hcard--1 { animation: cardFloat 5s ease-in-out infinite 0s; }
.hcard--2 { animation: cardFloat 5s ease-in-out infinite 1.25s; }
.hcard--3 { animation: cardFloat 5s ease-in-out infinite 0.65s; }
.hcard--4 { animation: cardFloat 5s ease-in-out infinite 1.85s; }

@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-9px); }
}

/* ── Scroll indicator ── */
.hero__scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding-bottom: 2rem;
  color: rgba(255,255,255,0.38);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  position: relative;
  z-index: 3;
  user-select: none;
}
.scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.35; }
  50%       { opacity: 1; }
}

/* ═══════════════════════════════
   STATS BAND
═══════════════════════════════ */
.stats-band {
  background: var(--gold);
  padding: 2.5rem 0;
  position: relative;
  z-index: 4;
}
.stats-band__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  text-align: center;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.stat-num {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--navy);
  line-height: 1;
}
.stat-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(10,22,40,0.65);
}

/* ═══════════════════════════════
   ABOUT SNIPPET
═══════════════════════════════ */
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
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
}
.pillar-icon  { font-size: 2rem; flex-shrink: 0; }
.pillar-card h4 { color: var(--navy); margin-bottom: 0.3rem; font-size: 1rem; }
.pillar-card p  { font-size: 0.875rem; color: var(--text-muted); }

/* ═══════════════════════════════
   SERVICES GRID
═══════════════════════════════ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}
/* 5th card centred when 3-col layout has a lonely card */
.services-grid > *:last-child:nth-child(3n+1) {
  grid-column: 1 / -1;
  max-width: calc(33.33% - 0.75rem);
  margin: 0 auto;
}
.service-card { padding: 2rem; }
.service-card__icon  { font-size: 2.2rem; margin-bottom: 1rem; }
.service-card__title { font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--navy); }
.service-card__desc  { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7; }
.service-card__link {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gold);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap var(--transition-fast);
}
.service-card__link:hover { gap: 0.75rem; }

/* ═══════════════════════════════
   WHY CHOOSE US
═══════════════════════════════ */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 3rem;
}
.why-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.4rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  transition: all var(--transition);
}
.why-card:hover {
  background: rgba(201,168,76,0.06);
  border-color: rgba(201,168,76,0.22);
}
.why-card__check {
  width: 30px;
  height: 30px;
  background: var(--gold);
  color: var(--navy);
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

/* ═══════════════════════════════
   CLIENTS
═══════════════════════════════ */
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
.client-card__name { font-size: 0.92rem; font-weight: 500; color: var(--navy); line-height: 1.55; }

/* ═══════════════════════════════
   CTA BANNER
═══════════════════════════════ */
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
.cta-banner__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

/* ═══════════════════════════════
   RESPONSIVE — TABLET  ≤ 1024px
═══════════════════════════════ */
@media (max-width: 1024px) {
  .hero__inner          { gap: 3rem; }
  .services-grid        { grid-template-columns: repeat(2, 1fr); }
  /* Reset 5th-card centering on 2-col */
  .services-grid > *:last-child:nth-child(3n+1) {
    grid-column: auto;
    max-width: 100%;
    margin: 0;
  }
  .why-grid             { grid-template-columns: repeat(2, 1fr); }
  .clients-grid         { grid-template-columns: repeat(2, 1fr); }
  .about-snippet__inner { gap: 3rem; }
  .stats-band__grid     { gap: 1rem; }
}

/* ═══════════════════════════════
   RESPONSIVE — MOBILE  ≤ 768px
═══════════════════════════════ */
@media (max-width: 768px) {
  /* Hero */
  .hero                  { padding-top: 70px; min-height: 100svh; }
  .hero__inner           {
    grid-template-columns: 1fr;
    gap: 0;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    align-items: flex-start;
  }
  .hero__visual          { display: none; }
  .hero__content         { max-width: 100%; }
  .hero__title           { font-size: clamp(2.1rem, 10vw, 2.8rem); margin-bottom: 1rem; }
  .hero__subtitle        { font-size: 0.93rem; margin-bottom: 1.8rem; max-width: 100%; }
  .hero__actions         { flex-direction: column; align-items: stretch; gap: 0.75rem; }
  .hero__actions .btn    { width: 100%; justify-content: center; padding: 1rem; }
  .hero__scroll          { display: none; }
  .hero__overlay         { background: rgba(10, 22, 40, 0.82); }

  /* Stats */
  .stats-band            { padding: 1.8rem 0; }
  .stats-band__grid      { grid-template-columns: repeat(2, 1fr); gap: 0.5rem 1rem; }
  .stat-num              { font-size: 2.1rem; }
  .stat-label            { font-size: 0.68rem; }

  /* About */
  .about-snippet__inner  { grid-template-columns: 1fr; gap: 2.5rem; }

  /* Services */
  .services-grid         { grid-template-columns: 1fr; margin-top: 2rem; }
  .services-grid > *:last-child:nth-child(3n+1) { grid-column: auto; max-width: 100%; margin: 0; }

  /* Why */
  .why-grid              { grid-template-columns: 1fr; margin-top: 2rem; }

  /* Clients */
  .clients-grid          { grid-template-columns: 1fr; gap: 1.25rem; }

  /* CTA */
  .cta-banner            { padding: 3rem 0; }
  .cta-banner__inner     { flex-direction: column; text-align: center; gap: 2rem; justify-content: center; }
  .cta-banner__actions   { justify-content: center; width: 100%; }
  .cta-banner__actions .btn { flex: 1; min-width: 130px; justify-content: center; }
}

/* ═══════════════════════════════
   RESPONSIVE — SMALL  ≤ 480px
═══════════════════════════════ */
@media (max-width: 480px) {
  .hero                  { padding-top: 64px; }
  .hero__title           { font-size: clamp(1.9rem, 9vw, 2.4rem); }
  .hero__subtitle        { font-size: 0.88rem; line-height: 1.7; }

  .stats-band__grid      { grid-template-columns: repeat(2, 1fr); }
  .stat-num              { font-size: 1.8rem; }
  .stat-label            { font-size: 0.62rem; letter-spacing: 0.1em; }

  .pillar-card           { flex-direction: column; gap: 0.75rem; }
  .pillar-icon           { font-size: 1.6rem; }

  .service-card          { padding: 1.4rem; }
  .service-card__title   { font-size: 1rem; }

  .why-card              { padding: 1.1rem; gap: 0.75rem; }

  .client-card           { padding: 1.75rem 1.25rem; }
  .client-card__icon     { font-size: 2rem; }
  .client-card__name     { font-size: 0.88rem; }

  .cta-banner            { padding: 2.5rem 0; }
  .cta-banner__actions   { flex-direction: column; width: 100%; }
  .cta-banner__actions .btn { width: 100%; min-width: unset; }
}

/* ═══════════════════════════════
   RESPONSIVE — TINY   ≤ 360px
═══════════════════════════════ */
@media (max-width: 360px) {
  .hero__title           { font-size: 1.75rem; }
  .hero__subtitle        { font-size: 0.84rem; }
  .stat-num              { font-size: 1.6rem; }
}

/* ═══════════════════════════════
   ACCESSIBILITY
═══════════════════════════════ */
/* Hide video for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero__video           { display: none; }
  .hcard                 { animation: none; }
  .scroll-line           { animation: none; }
}

/* Pause video on mobile to save battery & data */
@media (max-width: 768px) {
  /* .hero__video           { filter: saturate(0.6) brightness(0.45); } */
}
</style>