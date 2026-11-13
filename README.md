# Portafolio personal

Sitio hecho con HTML, CSS y JavaScript puro (sin frameworks ni build).

## Estructura

```
index.html            Página principal
css/styles.css        Estilos (modo claro/oscuro, responsive)
js/data.js            ← TU INFORMACIÓN: nombre, bio, skills, redes, proyectos
js/main.js            Lógica (render, filtros, lightbox, menú, tema)
assets/img/           Foto de perfil, favicon y capturas de proyectos
assets/cv/CV.pdf      Tu CV (reemplázalo por el tuyo)
```

## Personalizar

1. Edita `js/data.js` con tus datos.
2. Pon tu foto en `assets/img/` y actualiza `photo` en `data.js`.
3. Guarda las capturas de cada proyecto en `assets/img/projects/` (PNG/JPG/WebP, idealmente 1280×800) y apunta `image` a ellas.
4. Reemplaza `assets/cv/CV.pdf` por tu CV.

## Ver en local

Abre `index.html` en el navegador, o levanta un servidor:

```bash
npx serve .
```

## Publicar (gratis)

- **GitHub Pages**: sube el repo → Settings → Pages → rama `main`, carpeta `/ (root)`.
- **Netlify / Vercel**: arrastra la carpeta o conecta el repo; no hace falta comando de build.

## Al publicar cambios

Los navegadores guardan `css/` y `js/` en caché hasta 10 minutos. Cuando cambies
esos archivos, sube el número de versión en `index.html` (`?v=2` → `?v=3`) para que
los visitantes vean la versión nueva de inmediato.
