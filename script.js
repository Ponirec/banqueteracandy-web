const WHATSAPP_NUMBER = '56954452333';
const GENERAL_MESSAGE = 'Hola, quiero cotizar un servicio de banquetería. ¿Me pueden ayudar?';

const products = [
  { name: 'Tapaditos', price: '$480 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Pequeños sándwiches ideales para cócteles, reuniones y celebraciones.', icon: '🥪' },
  { name: 'Empanaditas', price: '$450 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Empanaditas de cóctel perfectas para eventos familiares y empresariales.', icon: '🥟' },
  { name: 'Quiche', price: '$450 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Porciones individuales de quiche, ideales para mesas de cóctel y coffee break.', icon: '🥧' },
  { name: 'Pizzas mini', price: '$450 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Mini pizzas prácticas y sabrosas para compartir.', icon: '🍕' },
  { name: 'Chaparritas mini', price: '$190 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Mini chaparritas para cócteles, cumpleaños y reuniones informales.', icon: '🌭' },
  { name: 'Fajitas mini', price: '$480 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Mini fajitas ideales para agregar variedad a la mesa salada.', icon: '🌯' },
  { name: 'Sopaipillas mini', price: '$11.500', presentation: '50 unidades', category: 'Salados', tags: ['salados', 'packs'], description: 'Sopaipillas mini en formato de 50 unidades, ideales para compartir.', icon: '🫓' },
  { name: 'Pastelitos surtidos', price: '$20.000', presentation: '50 unidades', category: 'Dulces', tags: ['dulces', 'packs'], description: 'Variedad de pastelitos dulces surtidos para celebraciones, cumpleaños y eventos.', icon: '🧁' },
  { name: 'Tortas', price: 'Desde $17.000', presentation: 'A pedido', category: 'Dulces', tags: ['dulces', 'pedido'], description: 'Tortas preparadas a pedido para cumpleaños, celebraciones familiares y eventos especiales.', icon: '🎂' }
];

const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function renderProducts() {
  const grid = document.querySelector('#product-grid');
  grid.innerHTML = products.map((product) => {
    const message = `Hola, quiero cotizar ${product.name}. Me gustaría saber disponibilidad y valores según cantidad.`;
    const presentation = product.presentation ? `<span class="badge">${product.presentation}</span>` : '';

    return `
      <article class="product-card" data-tags="${product.tags.join(' ')}">
        <div class="product-visual" aria-hidden="true">${product.icon}</div>
        <div class="product-body">
          <div class="product-meta">
            <span class="badge">${product.category}</span>
            ${presentation}
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price">${product.price}</div>
          <a class="btn btn-primary" href="${whatsappUrl(message)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
        </div>
      </article>`;
  }).join('');
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.product-card').forEach((card) => {
        const tags = card.dataset.tags.split(' ');
        card.hidden = filter !== 'todos' && !tags.includes(filter);
      });
    });
  });
}

function setupMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.nav-panel');
  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupWhatsappLinks() {
  document.querySelectorAll('.js-whatsapp-general').forEach((link) => {
    link.setAttribute('href', whatsappUrl(GENERAL_MESSAGE));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilters();
  setupMenu();
  setupWhatsappLinks();
  document.querySelector('#year').textContent = new Date().getFullYear();
});
