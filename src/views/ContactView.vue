<template>
  <main>
    <section class="page-hero bg-navy">
      <div class="container">
        <p class="section-label" data-aos="fade-up">Reach Out</p>
        <h1 class="page-hero__title" data-aos="fade-up" data-aos-delay="100">
          Contact <em>Us</em>
        </h1>
        <div class="divider-gold" data-aos="fade-up" data-aos-delay="200"></div>
        <p class="page-hero__sub" data-aos="fade-up" data-aos-delay="300">
          Let's discuss how Edumart can streamline your operations
        </p>
      </div>
    </section>

    <section class="section-pad">
      <div class="container contact-grid">

        <!-- Info -->
        <div data-aos="fade-right">
          <p class="section-label">Get In Touch</p>
          <h2 class="section-title">We'd love to <em>hear</em> from you</h2>
          <div class="divider-gold"></div>
          <p style="margin-bottom:2.5rem;">
            Whether you're looking to streamline your procurement, optimize your logistics,
            or consult on your supply chain strategy our team is ready to help.
          </p>

          <div class="contact-details">
            <div v-for="detail in contactDetails" :key="detail.label" class="contact-detail">
              <span class="contact-detail__icon">{{ detail.icon }}</span>
              <div>
                <span class="contact-detail__label">{{ detail.label }}</span>
                <span class="contact-detail__value">{{ detail.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="contact-form-wrap" data-aos="fade-left" data-aos-delay="150">
          <form class="contact-form" @submit.prevent="sendMessage">
            <div class="form-row">
              <div class="form-group">
                <label>Full Name</label>
                <input v-model="form.name" type="text" placeholder="Your full name" required />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input v-model="form.email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input v-model="form.subject" type="text" placeholder="How can we help?" required />
            </div>
            <div class="form-group">
              <label>Service Interest</label>
              <select v-model="form.service">
                <option value="">Select a service (optional)</option>
                <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" rows="5" placeholder="Tell us about your needs..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full" :disabled="sending">
              <span v-if="!sending">Send Message →</span>
              <span v-else>Sending...</span>
            </button>

            <transition name="fade">
              <div v-if="successMsg" class="form-success">
                ✅ {{ successMsg }}
              </div>
            </transition>
            <transition name="fade">
              <div v-if="errorMsg" class="form-error">
                ❌ {{ errorMsg }}
              </div>
            </transition>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactView',
  data() {
    return {
      sending: false,
      successMsg: '',
      errorMsg: '',
      form: { name: '', email: '', subject: '', service: '', message: '' },
      serviceOptions: [
        'Procurement & Purchasing Management',
        'Logistics Handling Services',
        'Warehousing & Inventory Management',
        'Cargo Transportation Services',
        'Supply Chain Consultation',
      ],
      contactDetails: [
        { icon: '📍', label: 'Address',   value: '[Company Address], Sri Lanka' },
        { icon: '📞', label: 'Phone',     value: '[Phone Number]' },
        { icon: '✉️', label: 'Email',     value: '[Email Address]' },
        { icon: '🕐', label: 'Hours',     value: 'Mon – Fri: 8:30 AM – 5:30 PM' },
      ]
    }
  },
  methods: {
    async sendMessage() {
      this.sending = true
      this.successMsg = ''
      this.errorMsg = ''
      try {
        // Replace with your EmailJS service/template/public key
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          {
            from_name:    this.form.name,
            from_email:   this.form.email,
            subject:      this.form.subject,
            service:      this.form.service,
            message:      this.form.message,
          },
          'YOUR_PUBLIC_KEY'
        )
        this.successMsg = 'Your message has been sent! We\'ll get back to you shortly.'
        this.form = { name: '', email: '', subject: '', service: '', message: '' }
      } catch (err) {
        console.error(err)
        this.errorMsg = 'Something went wrong. Please try again or contact us directly.'
      } finally {
        this.sending = false
      }
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
}

.contact-details { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-detail {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.contact-detail__icon {
  font-size: 1.3rem;
  width: 44px; height: 44px;
  background: var(--ivory);
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid var(--ivory-dark);
}
.contact-detail__label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.25rem;
}
.contact-detail__value {
  display: block;
  font-size: 0.95rem;
  color: var(--text-body);
}

/* Form */
.contact-form-wrap {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--ivory-dark);
  box-shadow: var(--shadow-md);
  padding: 3rem;
}

.contact-form { display: flex; flex-direction: column; gap: 1.25rem; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--navy);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.85rem 1rem;
  border: 1.5px solid var(--ivory-dark);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-body);
  background: var(--white);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  outline: none;
  resize: vertical;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); }

.btn-full { width: 100%; justify-content: center; }

.form-success {
  padding: 1rem;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  color: #065f46;
}
.form-error {
  padding: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  color: #991b1b;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .form-row     { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .page-hero            { padding: 110px 0 60px; }
  .contact-form-wrap    { padding: 2rem 1.5rem; }
}
@media (max-width: 480px) {
  .contact-form-wrap    { padding: 1.5rem 1rem; border-radius: var(--radius-md); }
  .contact-detail__icon { width: 38px; height: 38px; font-size: 1.1rem; }
  .btn-full             { padding: 0.85rem 1rem; font-size: 0.8rem; }
}
</style>