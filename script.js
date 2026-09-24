/* ---------- Mengambil elemen dari DOM ---------- */
const menuToggle = document.getElementById('menu-toggle');
const nav        = document.getElementById('nav');
const yearEl     = document.getElementById('year');


function setMenu(isOpen) {
  nav.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
}

menuToggle.addEventListener('click', () => {
  setMenu(!nav.classList.contains('open'));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

/*TAHUN OTOMATIS DI FOOTER*/
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}