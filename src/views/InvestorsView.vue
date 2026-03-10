<template>
  <main>
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">Investor Relations</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">
          Investment <em>Overview</em>
        </h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">
          Building the future of supply chain management in Sri Lanka
        </p>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <!-- Business Model -->
        <div class="inv-section" data-aos="fade-up">
          <p class="section-label">Business Model</p>
          <h2 class="section-title">How We <em>Operate</em></h2>
          <div class="divider-gold"></div>
          <p style="max-width:680px;">
            Edumart operates as a centralized supply chain and operational management company
            providing integrated services to institutional clients. Our model focuses on efficiency,
            cost control, supplier consolidation, and scalable logistics systems.
          </p>
        </div>

        <!-- Revenue Streams -->
        <div class="inv-section" data-aos="fade-up">
          <p class="section-label">Financial Model</p>
          <h2 class="section-title">Revenue <em>Streams</em></h2>
          <div class="divider-gold"></div>
          <div class="revenue-grid">
            <div v-for="(stream, i) in revenueStreams" :key="stream.title" class="revenue-card" :data-aos="'fade-up'" :data-aos-delay="i*80">
              <span class="revenue-card__num">{{ String(i+1).padStart(2,'0') }}</span>
              <h4>{{ stream.title }}</h4>
              <p>{{ stream.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Competitive Advantage -->
        <div class="inv-section bg-navy inv-advantage" data-aos="fade-up">
          <div class="container">
            <p class="section-label" style="color:var(--gold)">Our Edge</p>
            <h2 class="section-title" style="color:var(--white)">Competitive <em style="color:var(--gold)">Advantage</em></h2>
            <div class="divider-gold"></div>
            <div class="advantage-grid">
              <div v-for="(adv, i) in advantages" :key="adv" class="advantage-item" :data-aos="'fade-up'" :data-aos-delay="i*80">
                <span class="advantage-check">✔</span>
                <span>{{ adv }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'InvestorsView',
  data() {
    return {
      revenueStreams: [
        // { title: 'Procurement Management Fees',      desc: 'Service fees charged for end-to-end procurement and supplier management services.' },
        // { title: 'Logistics Coordination Margins',   desc: 'Margin earned on logistics coordination, including freight forwarding and route optimization.' },
        // { title: 'Warehousing & Storage Income',     desc: 'Revenue from secure warehousing, inventory management, and storage services.' },
        // { title: 'Transportation Revenue',           desc: 'Income from inland cargo transportation and institutional delivery services.' },
        // { title: 'Consultancy Service Fees',         desc: 'Fee-based consultancy for supply chain strategy, procurement, and operational structuring.' },
        // { title: 'Future Import & Distribution',     desc: 'Planned revenue from direct import operations and distribution of educational materials and equipment.' },
      ],
      advantages: [
        // 'Established institutional client base in the education sector',
        // 'Structured operational systems ready for scaling',
        // 'Strong growth potential within Sri Lanka\'s education sector',
        // 'Expandable logistics infrastructure with low marginal cost',
        // 'Experienced management team with deep industry knowledge',
        // 'Clear roadmap to multi-industry expansion',
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

.inv-section { margin-bottom: 5rem; }

.revenue-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}
.revenue-card {
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--ivory-dark);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  position: relative;
}
.revenue-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: var(--gold-pale); }
.revenue-card__num {
  position: absolute;
  top: 1.5rem; right: 1.5rem;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--ivory-dark);
  line-height: 1;
}
.revenue-card h4 { margin-bottom: 0.5rem; font-size: 0.95rem; }
.revenue-card p  { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

.inv-advantage {
  border-radius: var(--radius-lg);
  padding: 4rem;
  margin: 0 -1rem;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
}
.advantage-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all var(--transition);
}
.advantage-item:hover { background: rgba(201,168,76,0.07); border-color: rgba(201,168,76,0.2); }
.advantage-check {
  color: var(--gold);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.advantage-item span:last-child { font-size: 0.9rem; color: rgba(255,255,255,0.75); }

@media (max-width: 900px) { .revenue-grid { grid-template-columns: 1fr 1fr; } .advantage-grid { grid-template-columns: 1fr; } }
@media (max-width: 580px) { .revenue-grid { grid-template-columns: 1fr; } }
</style>