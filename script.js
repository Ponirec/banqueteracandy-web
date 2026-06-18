const WHATSAPP_NUMBER = "56954452333";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

(() => {
  const GENERAL_MESSAGE = 'Hola, quiero cotizar un servicio de banquetería. ¿Me pueden ayudar?';

  const products = [
    {
      name: 'Tapaditos',
      image: 'img/tapaditos.jpg',
      category: 'Salados',
      tags: ['salados', 'unidad'],
      description: 'Tapaditos frescos y variados, ideales para eventos familiares, reuniones, cumpleaños y celebraciones.',
      whatsappMessage: 'Hola, quiero cotizar tapaditos para un evento.'
    },
    {
      name: 'Tortas',
      image: 'img/tortas.jpg',
      category: 'Dulces',
      tags: ['dulces', 'pedido'],
      description: 'Tortas personalizadas para celebraciones, cumpleaños, matrimonios y eventos especiales.',
      whatsappMessage: 'Hola, quiero cotizar una torta para un evento.'
    },
    {
      name: 'Pastelitos surtidos',
      image: 'img/pastelitos-surtidos.jpg',
      category: 'Dulces',
      tags: ['dulces', 'packs'],
      description: 'Pastelitos dulces surtidos, preparados para cócteles, coffee breaks, celebraciones y mesas dulces.',
      whatsappMessage: 'Hola, quiero cotizar pastelitos surtidos para un evento.'
    }
  ];

  function renderProducts() {
    const grid = document.querySelector('#product-grid');
    grid.innerHTML = products.map((product) => {
      return `
        <article class="product-card" data-tags="${product.tags.join(' ')}">
          <img class="product-image" src="${product.image}" alt="${product.name} de La Dulzura de Candy" loading="lazy" />
          <div class="product-body">
            <div class="product-meta">
              <span class="badge">${product.category}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a class="btn btn-primary product-quote" href="${buildWhatsAppUrl(product.whatsappMessage)}" target="_blank" rel="noopener">Cotizar por WhatsApp</a>
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
      link.setAttribute('href', buildWhatsAppUrl(GENERAL_MESSAGE));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupFilters();
    setupMenu();
    setupWhatsappLinks();
    document.querySelector('#year').textContent = new Date().getFullYear();
  });
})();
