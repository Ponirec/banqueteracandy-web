# La Dulzura de Candy

Landing page completa tipo catálogo/cotización para La Dulzura de Candy. Está construida con HTML, CSS y JavaScript vanilla, sin frameworks ni librerías externas.

## Archivos del proyecto

- `index.html`: estructura de la landing page, secciones, menú y datos de contacto.
- `styles.css`: estilos, paleta de colores, responsive y componentes visuales.
- `script.js`: productos, filtros, menú hamburguesa y enlaces de WhatsApp.
- `img/collage-hero.jpg`: collage fotográfico usado como imagen principal del hero.
- `img/placeholder.svg`: imagen placeholder disponible para futuros reemplazos o pruebas.
- `img/logodulzura.jpg`: logo principal de La Dulzura de Candy usado en el header y en el hero.

## Cómo usar

Abre `index.html` directamente en el navegador o publica estos archivos en cualquier hosting estático.

## Editar WhatsApp

En `script.js`, cambia la constante:

```js
const WHATSAPP_NUMBER = "56954452333";
```

Usa el formato internacional sin `+`, espacios ni guiones. Ejemplo para Chile:

```js
const WHATSAPP_NUMBER = "56954452333";
```

Los enlaces se generan desde la función reutilizable:

```js
function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

También puedes editar el mensaje general en `script.js` dentro de la configuración de enlaces de WhatsApp.

## Editar productos

Los productos están en el arreglo `products` dentro de `script.js`. Cada producto puede tener:

- `name`: nombre del producto.
- `price`: precio visible.
- `presentation`: presentación opcional, por ejemplo `50 unidades` o `A pedido`.
- `category`: `Salados` o `Dulces`.
- `tags`: filtros asociados (`salados`, `dulces`, `unidad`, `packs`, `pedido`).
- `description`: descripción del producto.
- `icon`: emoji usado como visual temporal.

Ejemplo:

```js
{ name: 'Tapaditos', price: '$480 c/u', category: 'Salados', tags: ['salados', 'unidad'], description: 'Pequeños sándwiches ideales para cócteles, reuniones y celebraciones.', icon: '🥪' }
```

## Editar colores

La paleta está al inicio de `styles.css` en `:root`:

```css
:root {
  --cream: #fff8f3;
  --rose: #f4b8c6;
  --burgundy: #8b3a4a;
  --beige: #dcc0a2;
  --black-soft: #2f2024;
}
```

Cambia estos valores para adaptar la identidad visual.

## Editar imágenes

La web usa `img/collage-hero.jpg` como collage del hero, `img/logodulzura.jpg` para la marca en el header y como logo protagonista del hero, además de fondos visuales elegantes en las tarjetas. Para cambiar fotos:

1. Guarda las imágenes dentro de la carpeta `img`.
2. Para reemplazar el collage principal, actualiza la ruta del hero en `index.html` o reemplaza el archivo `img/collage-hero.jpg` manteniendo el mismo nombre.
3. Si quieres fotos por producto, agrega una propiedad `image` a cada producto en `script.js` y ajusta el renderizado de `.product-visual`.

### Reemplazar el logo

El logo principal está referenciado en `img/logodulzura.jpg`. Para cambiarlo en el futuro, reemplaza ese archivo manteniendo el mismo nombre y ruta. Si prefieres usar otro nombre o formato, actualiza el `src` del logo en `index.html` y conserva un `alt` descriptivo con el nombre `La Dulzura de Candy`.

## Secciones incluidas

- Header responsive con menú hamburguesa.
- Hero con el logo protagonista, frase de apoyo, descripción y llamadas a la acción.
- Catálogo con filtros funcionales.
- Packs sugeridos sin precios inventados.
- Pasos para cotizar.
- Sección de confianza.
- Contacto editable.
- Footer y botón flotante de WhatsApp.
