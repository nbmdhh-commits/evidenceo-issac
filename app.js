/**
 * ISSAC Medical Learning OS — Marketing Website
 * ===================================================
 * Premium vanilla JS powering scroll-reveals, tabbed content,
 * animated counters, interactive knowledge graph, and more.
 *
 * Zero external dependencies · ES6+ · IntersectionObserver
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ===================================================================
   * 1. SCROLL-REVEAL ANIMATION SYSTEM
   * Uses IntersectionObserver as a fallback when the browser does NOT
   * support native CSS scroll-driven animations (animation-timeline).
   * =================================================================== */
  const initScrollReveal = () => {
    // Feature-detect CSS scroll-driven animations
    if (CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      return; // Let CSS handle it natively
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Keep observing so elements re-animate on re-entry if desired
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  };

  /* ===================================================================
   * 2. MOBILE NAVIGATION TOGGLE
   * Toggles the `.open` class on `.nav-links` and handles outside clicks.
   * =================================================================== */
  const initMobileNav = () => {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Close when a nav link is clicked
    navLinks.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  /* ===================================================================
   * 3. STICKY NAV BACKGROUND ENHANCEMENT
   * Adds `.scrolled` class to `.nav` when the page is scrolled.
   * =================================================================== */
  const initStickyNav = () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const SCROLL_THRESHOLD = 10;

    const onScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    // Use passive listener for scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on init in case the page loads mid-scroll
    onScroll();
  };

  /* ===================================================================
   * 4. PRODUCT EXPERIENCE TAB SWITCHER
   * Manages tabbed content panels with a fade-in transition.
   * =================================================================== */
  const initProductTabs = () => {
    const tabs = document.querySelectorAll('.product-tab');
    const panels = document.querySelectorAll('.product-panel');

    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // Deactivate all tabs and panels
        tabs.forEach((t) => t.classList.remove('active'));
        panels.forEach((p) => {
          p.classList.remove('active');
          p.style.animation = 'none';
        });

        // Activate clicked tab
        tab.classList.add('active');

        // Show corresponding panel with animation
        const activePanel = document.querySelector(
          `.product-panel[data-panel="${target}"]`
        );
        if (activePanel) {
          activePanel.classList.add('active');
          // Force reflow before re-applying animation
          void activePanel.offsetWidth;
          activePanel.style.animation =
            'fade-in 0.4s var(--ease-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards';
        }
      });
    });
  };

  /* ===================================================================
   * 5. ANIMATED COUNTERS
   * Smoothly counts from 0 → target using requestAnimationFrame with
   * an ease-out cubic curve. Formats large numbers with commas.
   * =================================================================== */
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    if (Number.isNaN(target)) return;

    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000; // ms
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => counterObserver.observe(el));
  };

  /* ===================================================================
   * 6. RPG XP BAR ANIMATION
   * Triggers the CSS-driven XP fill animation when the bar scrolls
   * into view, by adding the `.animated` class.
   * =================================================================== */
  const initXpBar = () => {
    const xpBar = document.querySelector('.rpg-xp-bar');
    if (!xpBar) return;

    const xpFill = xpBar.querySelector('.rpg-xp-fill');
    if (!xpFill) return;

    const xpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            xpFill.classList.add('animated');
            xpObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    xpObserver.observe(xpBar);
  };

  /* ===================================================================
   * 7. KNOWLEDGE GRAPH INTERACTIONS
   * Highlights connected edges on node hover within the SVG graph.
   * =================================================================== */
  const initKnowledgeGraph = () => {
    const graphNodes = document.querySelectorAll('.graph-node');
    const graphEdges = document.querySelectorAll('.graph-edge');

    if (!graphNodes.length) return;

    graphNodes.forEach((node) => {
      node.addEventListener('mouseenter', () => {
        const connections = node.dataset.connections?.split(',') || [];
        const nodeId = node.dataset.id;

        graphEdges.forEach((edge) => {
          const edgeNodes = edge.dataset.nodes?.split('-') || [];
          if (
            connections.some((c) => edgeNodes.includes(c)) ||
            edgeNodes.includes(nodeId)
          ) {
            edge.classList.add('active');
          }
        });

        node.classList.add('hovered');
      });

      node.addEventListener('mouseleave', () => {
        graphEdges.forEach((edge) => edge.classList.remove('active'));
        node.classList.remove('hovered');
      });
    });
  };

  /* ===================================================================
   * 8. SMOOTH SCROLL FOR ANCHOR LINKS
   * Intercepts hash links and scrolls to the target section smoothly.
   * =================================================================== */
  const initSmoothScroll = () => {
    // Use event delegation on the document for all anchor clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile nav if open
      const navLinks = document.querySelector('.nav-links');
      const toggle = document.querySelector('.nav-mobile-toggle');
      if (navLinks?.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    });
  };

  /* ===================================================================
   * 9. FLOATING UPGRADE BUTTON
   * Shows `.floating-upgrade` after scrolling past the hero section.
   * =================================================================== */
  const initFloatingUpgrade = () => {
    const floatingBtn = document.querySelector('.floating-upgrade');
    const hero = document.querySelector('.hero');

    if (!floatingBtn || !hero) return;

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show the button when the hero is NOT intersecting (scrolled past)
          if (entry.isIntersecting) {
            floatingBtn.classList.remove('visible');
          } else {
            floatingBtn.classList.add('visible');
          }
        });
      },
      { threshold: 0 }
    );

    heroObserver.observe(hero);
  };

  /* ===================================================================
   * 10. CHAT TYPING ANIMATION
   * Shows a typing indicator then reveals the AI response message.
   * Only triggers once when the AI companion section enters viewport.
   * =================================================================== */
  const initChatTyping = () => {
    const aiSection = document.querySelector('.ai-companion');
    if (!aiSection) return;

    const typingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !aiSection.dataset.animated) {
            aiSection.dataset.animated = 'true';

            const typing = aiSection.querySelector('.chat-typing');
            const aiResponse = aiSection.querySelector('.chat-msg-ai.delayed');

            if (typing && aiResponse) {
              typing.style.display = 'flex';

              setTimeout(() => {
                typing.style.display = 'none';
                aiResponse.style.display = 'block';
                aiResponse.style.animation =
                  'slide-up 0.4s var(--ease-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards';
              }, 2000);
            }

            typingObserver.unobserve(aiSection);
          }
        });
      },
      { threshold: 0.3 }
    );

    typingObserver.observe(aiSection);
  };

  /* ===================================================================
   * 11. HERO DASHBOARD ANIMATIONS
   * Sequentially animates hero dashboard elements after page load.
   * =================================================================== */
  const initHeroDashboard = () => {
    const dashboard = document.querySelector('.hero-dashboard');
    if (!dashboard) return;

    const steps = [
      { selector: '.rpg-xp-fill', className: 'animated', delay: 500 },
      { selector: '.streak-counter', className: 'visible', delay: 1000 },
      { selector: '.chat-bubble', className: 'visible', delay: 1500 },
      { selector: '.graph-nodes', className: 'connected', delay: 2000 },
    ];

    steps.forEach(({ selector, className, delay }) => {
      const el = dashboard.querySelector(selector);
      if (el) {
        setTimeout(() => {
          el.classList.add(className);
        }, delay);
      }
    });
  };

  /* ===================================================================
   * 12. PRICING TOGGLE (Monthly / Yearly)
   * Swaps displayed pricing when a billing-period toggle is clicked.
   * Falls back gracefully if the toggle doesn't exist yet.
   * =================================================================== */
  const initPricingToggle = () => {
    const toggle = document.querySelector('.pricing-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const isYearly = toggle.classList.toggle('yearly');

      document.querySelectorAll('.pricing-card').forEach((card) => {
        const monthly = card.querySelector('.price-monthly');
        const yearly = card.querySelector('.price-yearly');

        if (monthly && yearly) {
          monthly.style.display = isYearly ? 'none' : 'block';
          yearly.style.display = isYearly ? 'block' : 'none';
        }
      });
    });
  };

  /* ===================================================================
   * 13. ACTIVE NAV LINK HIGHLIGHTING
   * Uses IntersectionObserver to detect which page section is currently
   * visible and highlights the corresponding nav link.
   * =================================================================== */
  const initActiveNavHighlight = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    // Build a map of section IDs → nav links for quick lookup
    const linkMap = new Map();
    navLinks.forEach((link) => {
      const id = link.getAttribute('href').slice(1);
      if (id) linkMap.set(id, link);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkMap.get(entry.target.id);
          if (!link) return;

          if (entry.isIntersecting) {
            // Remove active from all, add to current
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      {
        // Trigger when the top of the section crosses the upper third of the viewport
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  };

  /* ===================================================================
   * INITIALIZE ALL MODULES
   * =================================================================== */
  initScrollReveal();
  initMobileNav();
  initStickyNav();
  initProductTabs();
  initCounters();
  initXpBar();
  initKnowledgeGraph();
  initSmoothScroll();
  initFloatingUpgrade();
  initChatTyping();
  initHeroDashboard();
  initPricingToggle();
  initActiveNavHighlight();

  /* ===================================================================
   * 14. THEME MANAGEMENT SYSTEM
   * Implements Light Mode, Dark Mode, and Auto Theme.
   * Persists the setting in localStorage.
   * =================================================================== */
  const initTheme = () => {
    const applyTheme = (theme) => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = theme === 'dark' || (theme === 'auto' && prefersDark);
      
      if (isDark) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
      }
    };

    const savedTheme = localStorage.getItem('theme') || 'auto';
    applyTheme(savedTheme);

    // Watch for system preference changes when set to auto
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const currentTheme = localStorage.getItem('theme') || 'auto';
      if (currentTheme === 'auto') {
        applyTheme('auto');
      }
    });

    // Expose functions globally for the settings UI
    window.setThemeSetting = (theme) => {
      localStorage.setItem('theme', theme);
      applyTheme(theme);
      updateThemeSelectorUI(theme);
    };

    const updateThemeSelectorUI = (theme) => {
      const selectors = document.querySelectorAll('.theme-selector-btn');
      selectors.forEach((btn) => {
        if (btn.dataset.theme === theme) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    };

    updateThemeSelectorUI(savedTheme);
  };
  initTheme();
});
