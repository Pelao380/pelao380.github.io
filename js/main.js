(() => {
  const P = PORTFOLIO; // definido en js/data.js
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const esc = (str = '') =>
    String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const ICONS = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    twitter: '<path d="M4 4l16 16M20 4L4 20"/>',
    email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

  /* ---------- Datos simples ---------- */
  const initials = P.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const values = { name: P.name, role: P.role, tagline: P.tagline, initials, year: new Date().getFullYear() };
  $$('[data-bind]').forEach((el) => (el.textContent = values[el.dataset.bind] ?? ''));
  document.title = `${P.name} — ${P.role}`;

  // Contacto: mensaje ya dirigido a tu correo, con asunto y saludo listos.
  // mailto: solo funciona si el visitante tiene una app de correo configurada,
  // por eso el botón principal abre Gmail en el navegador.
  const subject = `Contacto desde tu portafolio`;
  const body = `Hola ${P.name.split(' ')[0]},\n\n`;
  const q = (o) => new URLSearchParams(o).toString().replace(/\+/g, '%20');
  const links = {
    cv: P.cv,
    gmail: `https://mail.google.com/mail/?${q({ view: 'cm', fs: '1', to: P.email, su: subject, body })}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?${q({ to: P.email, subject, body })}`,
    mailto: `mailto:${P.email}?${q({ subject, body })}`,
  };
  $$('[data-bind-text="email"]').forEach((el) => (el.textContent = P.email));
  $$('[data-copy="email"]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      const label = btn.textContent;
      try {
        await navigator.clipboard.writeText(P.email);
        btn.textContent = '¡Copiado!';
      } catch (e) {
        btn.textContent = P.email; // sin permiso de portapapeles: al menos se muestra
      }
      setTimeout(() => (btn.textContent = label), 2000);
    })
  );
  $$('[data-bind-href]').forEach((el) => (el.href = links[el.dataset.bindHref]));
  $$('[data-bind-data]').forEach((el) => (el.data = links[el.dataset.bindData]));
  $$('[data-bind-src]').forEach((el) => (el.src = P[el.dataset.bindSrc]));

  /* ---------- Secciones ---------- */
  $('[data-render="about"]').innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join('');
  $('[data-render="skills"]').innerHTML = P.skills.map((s) => `<li>${esc(s)}</li>`).join('');

  const socials = Object.entries(P.socials).filter(([, url]) => url);
  socials.push(['email', links.gmail]);
  $('[data-render="socials"]').innerHTML = socials
    .map(([k, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${k}" title="${k}">${icon(k)}</a></li>`)
    .join('');

  /* ---------- Proyectos ---------- */
  const projectsEl = $('[data-render="projects"]');
  const renderProjects = (filter = 'Todos') => {
    const list = P.projects.filter((p) => filter === 'Todos' || p.tags.includes(filter));
    projectsEl.innerHTML = list
      .map((p) => {
        const imgs = p.images || [p.image];
        const idx = P.projects.indexOf(p);
        return `
      <article class="project${p.featured ? ' featured' : ''}">
        <button class="project-shot" data-project="${idx}" aria-label="Ver capturas de ${esc(p.title)}">
          <img src="${esc(imgs[0])}" alt="Captura de ${esc(p.title)}" loading="lazy">
          ${imgs.length > 1 ? `<span class="shot-count">${imgs.length} capturas</span>` : ''}
        </button>
        <div class="project-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          ${p.highlights ? `<ul class="highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
          <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          <div class="project-links">
            ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${icon('external')} Demo</a>` : ''}
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">${icon('github')} Código</a>` : ''}
          </div>
        </div>
      </article>`;
      })
      .join('');
  };

  const tags = ['Todos', ...new Set(P.projects.flatMap((p) => p.tags))];
  const filtersEl = $('[data-render="filters"]');
  filtersEl.innerHTML = tags
    .map((t, i) => `<button class="filter" aria-pressed="${i === 0}">${esc(t)}</button>`)
    .join('');
  filtersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    $$('.filter', filtersEl).forEach((b) => b.setAttribute('aria-pressed', b === btn));
    renderProjects(btn.textContent);
  });
  renderProjects();

  /* ---------- Lightbox ---------- */
  const lightbox = $('.lightbox');
  const lbImg = $('img', lightbox);
  let gallery = { imgs: [], i: 0, title: '' };
  const showShot = (i) => {
    const n = gallery.imgs.length;
    gallery.i = (i + n) % n;
    lbImg.src = gallery.imgs[gallery.i];
    lbImg.alt = `Captura ${gallery.i + 1} de ${n} de ${gallery.title}`;
    $('.lightbox-count', lightbox).textContent = n > 1 ? `${gallery.i + 1} / ${n}` : '';
    lightbox.classList.toggle('multi', n > 1);
  };
  projectsEl.addEventListener('click', (e) => {
    const shot = e.target.closest('.project-shot');
    if (!shot) return;
    const p = P.projects[shot.dataset.project];
    gallery = { imgs: p.images || [p.image], i: 0, title: p.title };
    showShot(0);
    lightbox.showModal();
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.closest('.lightbox-close')) lightbox.close();
    else if (e.target.closest('.lightbox-prev')) showShot(gallery.i - 1);
    else if (e.target.closest('.lightbox-next')) showShot(gallery.i + 1);
  });
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showShot(gallery.i - 1);
    if (e.key === 'ArrowRight') showShot(gallery.i + 1);
  });

  /* ---------- Menú móvil ---------- */
  const toggle = $('.nav-toggle');
  const navLinks = $('#nav-links');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !open);
    navLinks.classList.toggle('open', !open);
  });
  navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });

  /* ---------- Tema claro/oscuro ---------- */
  $('.theme-toggle').addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  /* ---------- Sección activa en el menú + animación de entrada ---------- */
  const navMap = new Map($$('.nav-links a').map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('visible');
        navMap.forEach((a, id) => a.classList.toggle('active', id === en.target.id));
      }),
    { rootMargin: '-40% 0px -55% 0px' }
  );
  $$('main section').forEach((s) => io.observe(s));

  const reveal = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
    { threshold: 0.1 }
  );
  $$('.section').forEach((s) => reveal.observe(s));
})();
