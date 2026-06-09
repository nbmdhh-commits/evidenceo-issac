// ISSAC Core UI Controller
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sync Theme
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
    
    // Update active state of buttons if we are on the profile page
    const themeBtns = document.querySelectorAll('.theme-btn');
    if (themeBtns.length > 0) {
      themeBtns.forEach(btn => {
        if (btn.dataset.theme === theme) {
          btn.classList.add('issac-btn-primary');
          btn.classList.remove('issac-btn-outline');
        } else {
          btn.classList.remove('issac-btn-primary');
          btn.classList.add('issac-btn-outline');
        }
      });
    }
  };

  const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
  applyTheme(currentTheme);

  // Watch for system preference changes when set to auto
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const themeSetting = localStorage.getItem('theme') || 'dark';
    if (themeSetting === 'auto') {
      applyTheme('auto');
    }
  });

  // Expose theme switcher globally
  window.setThemeSetting = (theme) => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  };

  // 2. Rewrite Logo and User Card for global consistency
  const logoEl = document.querySelector('.issac-logo');
  if (logoEl) {
    logoEl.href = 'dashboard.html';
    logoEl.innerHTML = `
      <svg class="issac-logo-svg" width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brainGradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="50%" stop-color="#6366f1"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
        </defs>
        <path d="M18 10C14 10 11 12 11 15.5C11 17 12 18 13 18.5C12.5 19.5 12.5 21 13.5 22C14.5 23 16 23 18 23" stroke="url(#brainGradLogo)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M18 10C22 10 25 12 25 15.5C25 17 24 18 23 18.5C23.5 19.5 23.5 21 22.5 22C21.5 23 20 23 18 23" stroke="url(#brainGradLogo)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="18" y1="10" x2="18" y2="23" stroke="url(#brainGradLogo)" stroke-width="2.5"/>
        <circle cx="14" cy="13" r="1.5" fill="#6366f1"/>
        <circle cx="22" cy="13" r="1.5" fill="#6366f1"/>
        <circle cx="12" cy="17" r="1" fill="#3b82f6"/>
        <circle cx="24" cy="17" r="1" fill="#3b82f6"/>
        <circle cx="15" cy="21" r="1.5" fill="#8b5cf6"/>
        <circle cx="21" cy="21" r="1.5" fill="#8b5cf6"/>
        <line x1="14" y1="13" x2="12" y2="17" stroke="#6366f1" stroke-width="0.75"/>
        <line x1="22" y1="13" x2="24" y2="17" stroke="#6366f1" stroke-width="0.75"/>
        <line x1="12" y1="17" x2="15" y2="21" stroke="#3b82f6" stroke-width="0.75"/>
        <line x1="24" y1="17" x2="21" y2="21" stroke="#3b82f6" stroke-width="0.75"/>
      </svg>
      <span style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--issac-text); margin-left: 0.5rem;">ISSAC</span>
    `;
  }

  const userCard = document.querySelector('.issac-sidebar-user');
  if (userCard) {
    const isAnchor = userCard.tagName === 'A';
    if (!isAnchor) {
      // Recreate as anchor
      const parent = userCard.parentNode;
      const anchorCard = document.createElement('a');
      anchorCard.href = 'profile.html';
      anchorCard.className = 'issac-sidebar-user';
      anchorCard.style.textDecoration = 'none';
      anchorCard.innerHTML = `
        <div class="issac-avatar">DS</div>
        <div class="issac-user-info">
          <span class="issac-username">Dr. Sravya</span>
          <span class="issac-userrank">MBBS Student / Scholar</span>
        </div>
      `;
      parent.replaceChild(anchorCard, userCard);
    } else {
      userCard.href = 'profile.html';
      userCard.innerHTML = `
        <div class="issac-avatar">DS</div>
        <div class="issac-user-info">
          <span class="issac-username">Dr. Sravya</span>
          <span class="issac-userrank">MBBS Student / Scholar</span>
        </div>
      `;
    }
  }

  // 3. Sync Profile Details in Sidebar
  const updateSidebarProfile = () => {
    const name = localStorage.getItem('profile_name') || 'Dr. Sravya';
    const specialty = localStorage.getItem('profile_spec') || 'MBBS Student';
    const year = localStorage.getItem('profile_year') || 'Scholar';
    const avatarData = localStorage.getItem('profile_avatar'); // base64 if uploaded
    
    const nameEls = document.querySelectorAll('.issac-username');
    const subtitleEls = document.querySelectorAll('.issac-userrank');
    const avatarEls = document.querySelectorAll('.issac-avatar');
    
    nameEls.forEach(el => el.textContent = name);
    subtitleEls.forEach(el => el.textContent = `${specialty} / ${year}`);
    
    avatarEls.forEach(avatarEl => {
      if (avatarData) {
        avatarEl.style.backgroundImage = `url(${avatarData})`;
        avatarEl.style.backgroundSize = 'cover';
        avatarEl.style.backgroundPosition = 'center';
        avatarEl.textContent = '';
      } else {
        avatarEl.style.backgroundImage = 'none';
        // initials
        const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        avatarEl.textContent = initials || 'DS';
      }
    });
  };
  
  updateSidebarProfile();
  
  // Expose profile sync globally
  window.updateSidebarProfile = updateSidebarProfile;

  // 4. Highlight Active Link
  const path = window.location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.issac-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 5. Map Smart Map / Knowledge Map actions to knowledge.html
  const mapSmartButtons = () => {
    document.querySelectorAll('a, button, .issac-btn').forEach(el => {
      const text = (el.textContent || '').trim().toLowerCase();
      if (text.includes('explore smart map') || text.includes('view knowledge map') || text.includes('knowledge map')) {
        if (el.tagName === 'A') {
          el.setAttribute('href', 'knowledge.html');
        } else {
          // Replace click handlers
          const newEl = el.cloneNode(true);
          newEl.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'knowledge.html';
          });
          if (el.parentNode) {
            el.parentNode.replaceChild(newEl, el);
          }
        }
      }
    });
  };
  mapSmartButtons();

  // Watch for dynamic DOM changes to map new buttons
  const observer = new MutationObserver(() => {
    mapSmartButtons();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
