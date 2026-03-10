<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }]">
    <div class="container navbar__inner">

      <!-- Logo -->
      <router-link to="/" class="navbar__logo" @click="closeMenu">
        <span class="logo-mark">E</span>
        <!-- <img src="@/assets/images/logo.png" alt="Edumart Logo" class="logo-img" /> -->
        <div class="logo-text">
          <span class="logo-title">EDUMART</span>
          <span class="logo-sub">PVT LTD</span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="navbar__links hide-mobile">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- CTA + Burger -->
      <div class="navbar__actions">
        <router-link to="/contact" class="btn btn-primary hide-mobile">
          Get In Touch
        </router-link>
        <button
          class="burger"
          :class="{ 'burger--open': menuOpen }"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav__link"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>
        <router-link to="/contact" class="btn btn-primary" @click="closeMenu" style="margin-top:1rem;">
          Get In Touch
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      navItems: [
        { label: 'Home',           path: '/' },
        { label: 'About Us',       path: '/about' },
        { label: 'Services',       path: '/services' },
        { label: 'Industries',     path: '/industries' },
        { label: 'Our Clients',    path: '/clients' },
        { label: 'Future Growth',  path: '/expansion' },
        { label: 'Investors',      path: '/investors' },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 60
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      document.body.style.overflow = this.menuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.menuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 1.4rem 0;
  transition: all 0.35s ease;
  background: transparent;
}

.navbar--scrolled {
  background: var(--navy);
  padding: 0.9rem 0;
  box-shadow: 0 4px 24px rgba(10,22,40,0.28);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.logo-mark {
  width: 42px; height: 42px;
  background: var(--gold);
  color: var(--navy);
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 6px;
  flex-shrink: 0;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-title {
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--white);
}

.logo-sub {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--gold);
  font-weight: 400;
}

/* Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.5rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(255,255,255,0.8);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  position: relative;
  text-transform: uppercase;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px; left: 50%; right: 50%;
  height: 1.5px;
  background: var(--gold);
  transition: all 0.25s ease;
}

.nav-link:hover { color: var(--gold); }
.nav-link:hover::after { left: 0.85rem; right: 0.85rem; }
.nav-link--active { color: var(--gold); }
.nav-link--active::after { left: 0.85rem; right: 0.85rem; }

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}
.burger--open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.burger--open span:nth-child(2) { opacity: 0; }
.burger--open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* Mobile nav */
.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 2rem;
  background: var(--navy);
  border-top: 1px solid rgba(255,255,255,0.08);
}
.mobile-nav__link {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  padding: 0.9rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.mobile-nav__link:hover { color: var(--gold); }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.3s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 768px) {
  .burger { display: flex; }
  .navbar__links { display: none; }
}
@media (max-width: 900px) {
  .nav-link { font-size: 0.72rem; padding: 0.5rem 0.6rem; }
}
</style>