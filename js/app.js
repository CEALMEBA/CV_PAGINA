document.addEventListener('DOMContentLoaded', function() {
  // Initialize Sidenav
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});

  // Close Sidenav when any link inside it is clicked (for single page mobile experience)
  var sidenavLinks = document.querySelectorAll('.sidenav li a');
  sidenavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
      if (sidenavInstance) {
        sidenavInstance.close();
      }
    });
  });

  // Profile Switching Logic
  const tabButtons = document.querySelectorAll('.profile-tab-btn');
  const profileRole = document.getElementById('profile-role');
  const aboutDescription = document.getElementById('about-description');
  const skillsContainer = document.getElementById('skills-container');
  const experienceTimeline = document.getElementById('experience-timeline');

  function updateProfile(profileKey) {
    const data = cvProfiles[profileKey];
    if (!data) return;

    // Apply fade-out class to make content disappear smoothly
    const targets = [profileRole, aboutDescription, skillsContainer, experienceTimeline];
    targets.forEach(el => {
      if (el) el.classList.add('fade-out');
    });

    // Wait for transition duration to swap values
    setTimeout(() => {
      // 1. Update Role and Summary
      if (profileRole) {
        profileRole.textContent = data.role;
      }
      if (aboutDescription) {
        aboutDescription.textContent = data.summary;
      }

      // 2. Render Skills
      if (skillsContainer) {
        let skillsHtml = '';
        data.skills.forEach((skillGroup, index) => {
          const borderTopStyle = index === 0 ? 'border-top: none; padding-top: 0;' : '';
          skillsHtml += `
            <h5 class="skills-section-title" style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; color: ${skillGroup.color}; ${borderTopStyle}">
              <i class="fas ${skillGroup.icon}"></i> ${skillGroup.category}
            </h5>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
              ${skillGroup.items.map(item => `
                <span class="skill-badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-primary); padding: 8px 14px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid var(--card-border); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">${item}</span>
              `).join('')}
            </div>
          `;
        });
        skillsContainer.innerHTML = skillsHtml;
      }

      // 3. Render Experience
      if (experienceTimeline) {
        const grouped = [];
        data.experience.forEach(exp => {
          const existing = grouped.find(g => g.company === exp.company);
          if (existing) {
            existing.roles.push(exp);
          } else {
            grouped.push({
              company: exp.company,
              roles: [exp]
            });
          }
        });

        let expHtml = '';
        grouped.forEach(group => {
          if (group.roles.length > 1) {
            expHtml += `
              <div class="timeline-company-group" style="margin-bottom: 25px;">
                <h6 class="timeline-company-title" style="font-size: 1.1rem; font-weight: bold; color: var(--accent-teal); margin-bottom: 15px;">
                  ${group.company}
                </h6>
                <div style="padding-left: 15px; border-left: 2px dashed rgba(255,255,255,0.15);">
                  ${group.roles.map(role => `
                    <div class="timeline-item sub-role" style="margin-bottom: 20px;">
                      <div class="timeline-date" style="font-weight: 500; font-size: 0.85rem;">${role.date}</div>
                      <h6 class="timeline-title" style="margin-top: 4px; margin-bottom: 6px;">
                        ${role.title}
                      </h6>
                      <p class="timeline-description">${role.description}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          } else {
            const role = group.roles[0];
            expHtml += `
              <div class="timeline-item">
                <div class="timeline-date">${role.date}</div>
                <h6 class="timeline-title">
                  ${role.title} <span style="color: var(--text-muted); font-weight: 400;">| ${group.company}</span>
                </h6>
                <p class="timeline-description">${role.description}</p>
              </div>
            `;
          }
        });
        experienceTimeline.innerHTML = expHtml;
      }

      // Toggle animation classes
      targets.forEach(el => {
        if (el) {
          el.classList.remove('fade-out');
          el.classList.add('fade-in');
          setTimeout(() => el.classList.remove('fade-in'), 200);
        }
      });
    }, 200);
  }

  // Add event listeners to switcher tab buttons
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const profileKey = this.getAttribute('data-profile');
      updateProfile(profileKey);
    });
  });
});
