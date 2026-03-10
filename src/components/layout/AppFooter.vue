<template>
  <footer class="footer">
    <!-- Top Band -->
    <div class="footer__cta-band">
      <div class="container footer__cta-inner">
        <div>
          <p class="section-label" style="color:var(--gold)">Ready to Optimize?</p>
          <h3 style="color:var(--white); font-family:var(--font-display); font-weight:300; font-size:2rem;">
            Let's build your supply chain <em style="color:var(--gold); font-style:italic;">together</em>
          </h3>
        </div>
        <router-link to="/contact" class="btn btn-primary">Get In Touch</router-link>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="footer__main">
      <div class="container footer__grid">

        <!-- Brand -->
        <div class="footer__brand">
          <div class="footer__logo">
            <span class="logo-mark">E</span>
            <div>
              <div class="logo-title">EDUMART</div>
              <div class="logo-sub">PVT LTD</div>
            </div>
          </div>
          <p class="footer__tagline">
            Managing Operations.<br>Enabling Growth.
          </p>
          <p class="footer__desc">
            Integrated supply chain and operational solutions for educational institutions and corporate organizations across Sri Lanka.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer__col">
          <h5 class="footer__col-title">Quick Links</h5>
          <ul class="footer__links">
            <li v-for="item in quickLinks" :key="item.path">
              <router-link :to="item.path">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer__col">
          <h5 class="footer__col-title">Our Services</h5>
          <ul class="footer__links">
            <li v-for="service in services" :key="service">
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer__col">
          <h5 class="footer__col-title">Contact Us</h5>
          <ul class="footer__contact">
            <li>
              <span class="contact-icon">📍</span>
              <span>[Company Address]<br>Sri Lanka</span>
            </li>
            <li>
              <span class="contact-icon">📞</span>
              <a href="tel:+94000000000">[Phone Number]</a>
            </li>
            <li>
              <span class="contact-icon">✉️</span>
              <a href="mailto:info@edumart.lk">[Email Address]</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>© {{ new Date().getFullYear() }} Edumart (Pvt) Ltd. All rights reserved.</p>
        <p>Sri Lanka's Trusted Supply Chain Partner</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      quickLinks: [
        { label: 'Home',          path: '/' },
        { label: 'About Us',      path: '/about' },
        { label: 'Our Services',  path: '/services' },
        { label: 'Our Clients',   path: '/clients' },
        { label: 'Future Growth', path: '/expansion' },
        { label: 'Investors',     path: '/investors' },
        { label: 'Contact',       path: '/contact' },
      ],
      services: [
        'Procurement & Purchasing',
        'Logistics Handling',
        'Warehousing & Inventory',
        'Cargo Transportation',
        'Supply Chain Consultation',
      ]
    }
  }
}
</script>

<style scoped>
.footer { background: var(--navy); }

/* CTA Band */
.footer__cta-band {
  background: var(--navy-light);
  padding: 3rem 0;
  border-top: 1px solid rgba(201,168,76,0.2);
}
.footer__cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Main */
.footer__main { padding: 4rem 0 2rem; }
.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.4fr;
  gap: 3rem;
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}
.logo-mark {
  width: 40px; height: 40px;
  background: var(--gold);
  color: var(--navy);
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 6px;
}
.logo-title {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--white);
  line-height: 1.1;
}
.logo-sub {
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  color: var(--gold);
}
.footer__tagline {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-style: italic;
  color: var(--gold-light);
  margin-bottom: 0.8rem;
  line-height: 1.5;
}
.footer__desc {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
  max-width: 300px;
}

/* Columns */
.footer__col-title {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.2rem;
}
.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.footer__links li a,
.footer__links li span {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  transition: color var(--transition-fast);
}
.footer__links li a:hover { color: var(--gold-light); }

/* Contact */
.footer__contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer__contact li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}
.contact-icon { font-size: 0.9rem; margin-top: 0.1rem; flex-shrink: 0; }
.footer__contact a,
.footer__contact span:last-child {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
}
.footer__contact a:hover { color: var(--gold-light); }

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 1.5rem 0;
}
.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer__bottom p {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.3);
}

@media (max-width: 1024px) {
  .footer__grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}
@media (max-width: 768px) {
  .footer__cta-band        { padding: 2.5rem 0; }
  .footer__cta-inner       { text-align: center; justify-content: center; flex-direction: column; gap: 1.5rem; }
  .footer__cta-inner .btn  { width: 100%; max-width: 280px; justify-content: center; }
  .footer__main            { padding: 3rem 0 1.5rem; }
}
@media (max-width: 600px) {
  .footer__grid            { grid-template-columns: 1fr; gap: 2rem; }
  .footer__cta-inner       { text-align: center; justify-content: center; }
  .footer__bottom-inner    { justify-content: center; text-align: center; flex-direction: column; gap: 0.5rem; }
  .footer__desc            { max-width: 100%; }
}
@media (max-width: 400px) {
  .footer__cta-inner .btn  { max-width: 100%; }
}
</style>