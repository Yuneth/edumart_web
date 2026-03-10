<template>
  <main>
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">Our Partners</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">Our <em>Clients</em></h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">
          Long-term partnerships built on trust, reliability, and performance excellence
        </p>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="clients-hero-grid">
          <div v-for="(client, i) in clients" :key="client.name" class="client-full-card" :data-aos="'fade-up'" :data-aos-delay="i*100">
            <div class="client-full-card__badge">{{ client.badge }}</div>
            <div class="client-full-card__body">
              <span class="client-full-card__icon">🎓</span>
              <h3>{{ client.name }}</h3>
              <p>{{ client.desc }}</p>
            </div>
          </div>
        </div>

        <div class="partner-values" data-aos="fade-up">
          <h2 class="section-title text-center">Our Partnership <em>Promise</em></h2>
          <div class="divider-gold centered"></div>
          <div class="promise-grid">
            <div v-for="p in promises" :key="p.title" class="promise-item">
              <span class="promise-icon">{{ p.icon }}</span>
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
          desc: 'Supporting IT and technology procurement, logistics coordination, and inventory management for one of Sri Lanka\'s leading technology institutions.'
        },
      ],
      promises: [
        { icon: '🤝', title: 'Trust',        desc: 'Every relationship is built on a foundation of integrity and transparency.' },
        { icon: '🎯', title: 'Reliability',  desc: 'Consistent delivery, every time, without compromise.' },
        { icon: '📈', title: 'Performance',  desc: 'Results-driven partnerships focused on measurable outcomes.' },
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

.clients-hero-grid { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 5rem; }
.client-full-card {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--ivory-dark);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}
.client-full-card:hover { box-shadow: var(--shadow-md); transform: translateX(6px); border-color: var(--gold-pale); }
.client-full-card__badge {
  background: var(--gold);
  color: var(--navy);
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 0.3rem;
}
.client-full-card__body { flex: 1; }
.client-full-card__icon { font-size: 2rem; display: block; margin-bottom: 0.75rem; }
.client-full-card__body h3 { margin-bottom: 0.75rem; }
.client-full-card__body p { font-size: 0.9rem; color: var(--text-muted); }

.partner-values { text-align: center; }
.promise-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
.promise-item { padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--ivory-dark); }
.promise-icon { font-size: 2rem; display: block; margin-bottom: 1rem; }
.promise-item h4 { margin-bottom: 0.5rem; }
.promise-item p { font-size: 0.875rem; color: var(--text-muted); }

@media (max-width: 900px) {
  .promise-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .page-hero            { padding: 110px 0 60px; }
  .client-full-card     { flex-direction: column; gap: 1rem; }
  .client-full-card__badge { align-self: flex-start; }
  .promise-grid         { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .client-full-card     { padding: 1.5rem; }
  .promise-item         { padding: 1.5rem; }
}
</style>