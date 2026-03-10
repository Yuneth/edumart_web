<template>
  <main>
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">What We Do</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">
          Our <em>Services</em>
        </h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">
          End-to-end operational support tailored to institutional requirements
        </p>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div v-for="(service, i) in services" :key="service.title" class="service-block" :class="{ 'service-block--rev': i % 2 !== 0 }" :data-aos="'fade-up'">
          <div class="service-block__icon-col">
            <div class="service-block__icon-wrap">
              <span class="service-block__emoji">{{ service.icon }}</span>
              <span class="service-block__num">0{{ i + 1 }}</span>
            </div>
          </div>
          <div class="service-block__content">
            <p class="section-label">Service {{ `0${i+1}` }}</p>
            <h2 class="section-title">{{ service.title }}</h2>
            <div class="divider-gold"></div>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feat in service.features" :key="feat">
                <span class="feat-dot"></span>
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
          icon: '📦',
          title: 'Procurement & Purchasing Management',
          description: 'We ensure high-quality products at competitive pricing while maintaining strong and reliable supplier networks. Our strategic approach to procurement reduces costs and improves supply reliability.',
          features: [
            'Strategic sourcing and supplier evaluation',
            'Vendor negotiation and cost optimization',
            'Institutional purchasing coordination',
            'Import purchasing management',
            'Vendor relationship development',
          ]
        },
        {
          icon: '🚚',
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
          icon: '🏭',
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
          icon: '🚛',
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
          icon: '📊',
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
.page-hero__sub { color: rgba(255,255,255,0.6); font-size: 1.1rem; margin-top: 1rem; }

.service-block {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 4rem;
  align-items: start;
  padding: 4rem 0;
  border-bottom: 1px solid var(--ivory-dark);
}
.service-block:last-child { border-bottom: none; }
.service-block--rev { direction: rtl; }
.service-block--rev > * { direction: ltr; }

.service-block__icon-col { display: flex; justify-content: center; }
.service-block__icon-wrap {
  position: relative;
  width: 120px; height: 120px;
  background: var(--ivory);
  border-radius: var(--radius-lg);
  display: grid;
  place-items: center;
  border: 1px solid var(--ivory-dark);
}
.service-block__emoji { font-size: 3rem; }
.service-block__num {
  position: absolute;
  bottom: -0.6rem; right: -0.6rem;
  width: 32px; height: 32px;
  background: var(--gold);
  color: var(--navy);
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.5rem;
}
.service-features li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.9rem;
  color: var(--text-body);
}
.feat-dot {
  width: 8px; height: 8px;
  background: var(--gold);
  border-radius: 50%;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .service-block {
    grid-template-columns: 140px 1fr;
    gap: 2.5rem;
  }
}
@media (max-width: 768px) {
  .page-hero { padding: 110px 0 60px; }
  .service-block {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 2.5rem 0;
  }
  .service-block--rev { direction: ltr; }
  .service-block__icon-col { justify-content: flex-start; }
  .service-block__icon-wrap { width: 90px; height: 90px; }
  .service-block__emoji { font-size: 2.2rem; }
}
@media (max-width: 480px) {
  .service-block  { padding: 2rem 0; }
  .service-features li { font-size: 0.85rem; }
}
</style>