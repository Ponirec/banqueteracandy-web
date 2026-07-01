const WHATSAPP_NUMBER = "56954452333";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

(() => {
  const GENERAL_MESSAGE = 'Hola, quiero cotizar un servicio de banquetería. ¿Me pueden ayudar?';

  // Catálogo maestro: mantener exactamente 9 productos. No eliminar productos solo porque aún no tengan foto real; usar placeholder mientras se agregan nuevas imágenes.
  const products = [
    {
      name: 'Tapaditos',
      image: 'img/tapaditos.jpg',
      category: 'Salados',
      price: '$480 c/u',
      presentation: 'Por unidad',
      tags: ['salados', 'unidad'],
      description: 'Pequeños sándwiches ideales para cócteles, reuniones y celebraciones.',
      whatsappMessage: 'Hola, quiero consultar por Tapaditos para un evento.'
    },
    {
      name: 'Empanaditas',
      image: 'img/empanaditas.jpg',
      category: 'Salados',
      price: '$450 c/u',
      presentation: 'Por unidad',
      tags: ['salados', 'unidad'],
      description: 'Empanaditas de cóctel perfectas para eventos familiares y empresariales.',
      whatsappMessage: 'Hola, quiero consultar por Empanaditas para un evento.'
    },
    {
      name: 'Quiche',
      image: 'img/quiche.jpg',
      category: 'Salados',
      price: '$450 c/u',
      presentation: 'Por unidad',
      tags: ['salados', 'unidad'],
      description: 'Porciones individuales de quiche, ideales para mesas de cóctel y coffee break.',
      whatsappMessage: 'Hola, quiero consultar por Quiche para un evento.'
    },
    {
      name: 'Pizzas mini',
      image: 'img/pizzas-mini.jpg',
      category: 'Salados',
      price: '$450 c/u',
      presentation: 'Por unidad',
      tags: ['salados', 'unidad'],
      description: 'Mini pizzas prácticas y sabrosas para compartir en celebraciones y reuniones.',
      whatsappMessage: 'Hola, quiero consultar por Pizzas mini para un evento.'
    },
    {
      name: 'Chaparritas mini',
      image: 'img/chaparritas-mini.jpg',
      category: 'Salados',
      price: '$190 c/u',
      presentation: 'Por unidad',
      tags: ['salados', 'unidad'],
      description: 'Mini chaparritas para cócteles, cumpleaños y reuniones informales.',
      whatsappMessage: 'Hola, quiero consultar por Chaparritas mini para un evento.'
    },
    {
      name: 'Fajitas mini',
      image: 'img/fajitas-mini.jpg',
      category: 'Salados',
      price: '$480 c/u',
      presentation: 'Por unidad',
      tags: ['salados', 'unidad'],
      description: 'Mini fajitas ideales para agregar variedad a la mesa salada.',
      whatsappMessage: 'Hola, quiero consultar por Fajitas mini para un evento.'
    },
    {
      name: 'Sopaipillas mini',
      image: 'img/sopaipillas.jpg',
      category: 'Salados',
      price: '$11.500',
      presentation: '50 unidades',
      tags: ['salados', 'packs'],
      description: 'Sopaipillas mini en formato de 50 unidades, ideales para compartir.',
      whatsappMessage: 'Hola, quiero consultar por Sopaipillas mini para un evento.'
    },
    {
      name: 'Pastelitos surtidos',
      image: 'img/pastelitos-surtidos.jpg',
      category: 'Dulces',
      price: '$20.000',
      presentation: '50 unidades',
      tags: ['dulces', 'packs'],
      description: 'Variedad de pastelitos dulces surtidos para celebraciones, cumpleaños y eventos.',
      whatsappMessage: 'Hola, quiero consultar por Pastelitos surtidos para un evento.'
    },
    {
      name: 'Tortas',
      image: 'img/tortas.jpg',
      category: 'Dulces',
      price: 'Desde $17.000',
      presentation: 'A pedido',
      tags: ['dulces', 'pedido'],
      description: 'Tortas preparadas a pedido para cumpleaños, celebraciones familiares y eventos especiales.',
      whatsappMessage: 'Hola, quiero consultar por Tortas para un evento.'
    }
  ];
  function renderProducts() {
    const grid = document.querySelector('#product-grid');
    grid.innerHTML = products.map((product) => {
      return `
        <article class="product-card" data-tags="${product.tags.join(' ')}">
          <img class="product-image" src="${product.image}" alt="${product.name} de Dulzura Navarrete" loading="lazy" onerror="this.onerror=null; this.src='img/placeholder.svg';" />
          <div class="product-body">
            <div class="product-meta">
              <span class="badge">${product.category}</span>
              <span class="badge badge-soft">${product.presentation}</span>
            </div>
            <h3>${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <p>${product.description}</p>
            <a class="btn btn-primary product-quote" href="${buildWhatsAppUrl(product.whatsappMessage)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
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

    document.querySelectorAll('.js-whatsapp-pack').forEach((link) => {
      link.setAttribute('href', buildWhatsAppUrl(link.dataset.whatsappMessage));
    });
  }

  function setupSmoothInternalLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          if (targetId === '#inicio' && window.history && window.history.replaceState) {
            window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
          }
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#inicio' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    renderProducts();
    setupFilters();
    setupMenu();
    setupWhatsappLinks();
    setupSmoothInternalLinks();
    document.querySelector('#year').textContent = new Date().getFullYear();
  });
})();
