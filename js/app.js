document.addEventListener('DOMContentLoaded', function() {
  // Menú lateral (móvil)
  M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
  document.querySelectorAll('.sidenav li a').forEach(function(link) {
    link.addEventListener('click', function() {
      var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
      if (instance) instance.close();
    });
  });

  const profileRole = document.getElementById('profile-role');
  const aboutDescription = document.getElementById('about-description');
  const skillsContainer = document.getElementById('skills-container');
  const experienceTimeline = document.getElementById('experience-timeline');
  const tabsWrapper = document.getElementById('profile-tabs');
  const langButtons = document.querySelectorAll('.lang-btn');
  const badgeStyle = 'background: rgba(255, 255, 255, 0.05); color: var(--text-primary); padding: 8px 14px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid var(--card-border); box-shadow: 0 1px 2px rgba(0,0,0,0.05);';

  // Estado inicial: ?lang=en&perfil=backend permite mandar un enlace directo a cada versión
  const params = new URLSearchParams(window.location.search);
  let lang = params.get('lang');
  if (!cvProfiles[lang]) lang = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
  let profileKey = params.get('perfil') || params.get('profile');
  if (!cvProfiles[lang][profileKey]) profileKey = 'general';

  function renderRole(role) {
    return `
      <div class="timeline-item sub-role" style="margin-bottom: 20px;">
        <div class="timeline-date" style="font-weight: 500; font-size: 0.85rem;">${role.date}</div>
        <h6 class="timeline-title" style="margin-top: 4px; margin-bottom: 6px;">${role.title}</h6>
        <ul class="browser-default timeline-bullets">
          ${role.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>`;
  }

  function renderStatic() {
    const t = uiText[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t[el.getAttribute('data-i18n')];
      if (value) el.textContent = value;
    });
    const pdf = document.getElementById('cv-download');
    if (pdf) pdf.setAttribute('href', cvPdf[lang]);
    const mail = document.getElementById('contact-mail');
    if (mail) mail.setAttribute('href', mail.getAttribute('data-mail') + '?subject=' + encodeURIComponent(t.mailSubject));
    langButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === lang));

    tabsWrapper.innerHTML = Object.keys(cvProfiles[lang]).map(key =>
      `<button class="profile-tab-btn${key === profileKey ? ' active' : ''}" data-profile="${key}">${cvProfiles[lang][key].tab}</button>`
    ).join('');
  }

  function renderProfile() {
    const data = cvProfiles[lang][profileKey];
    profileRole.textContent = data.role;
    aboutDescription.textContent = data.summary;

    skillsContainer.innerHTML = data.skills.map((group, index) => `
      <h5 class="skills-section-title" style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; color: ${group.color}; ${index === 0 ? 'border-top: none; padding-top: 0;' : ''}">
        <i class="fas ${group.icon}"></i> ${group.category}
      </h5>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
        ${group.items.map(item => `<span class="skill-badge" style="${badgeStyle}">${item}</span>`).join('')}
      </div>`).join('');

    // Agrupa los puestos de una misma empresa
    const grouped = [];
    data.experience.forEach(exp => {
      const existing = grouped.find(g => g.company === exp.company);
      if (existing) existing.roles.push(exp);
      else grouped.push({ company: exp.company, roles: [exp] });
    });
    experienceTimeline.innerHTML = grouped.map(group => `
      <div class="timeline-company-group" style="margin-bottom: 25px;">
        <h6 class="timeline-company-title" style="font-size: 1.1rem; font-weight: bold; color: var(--accent-teal); margin-bottom: 15px;">${group.company}</h6>
        <div style="padding-left: 15px; border-left: 2px dashed rgba(255,255,255,0.15);">
          ${group.roles.map(renderRole).join('')}
        </div>
      </div>`).join('');
  }

  function render(animate) {
    const targets = [profileRole, aboutDescription, skillsContainer, experienceTimeline];
    if (!animate) { renderStatic(); renderProfile(); return; }
    targets.forEach(el => el.classList.add('fade-out'));
    setTimeout(() => {
      renderStatic();
      renderProfile();
      targets.forEach(el => {
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
        setTimeout(() => el.classList.remove('fade-in'), 200);
      });
    }, 200);
  }

  tabsWrapper.addEventListener('click', function(e) {
    const btn = e.target.closest('.profile-tab-btn');
    if (!btn) return;
    profileKey = btn.getAttribute('data-profile');
    render(true);
  });

  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      lang = this.getAttribute('data-lang');
      render(true);
    });
  });

  render(false);
});
