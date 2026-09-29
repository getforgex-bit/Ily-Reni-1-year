# Un año contigo 💜

Página de primer aniversario (29 · 09 · 2025 → 29 · 09 · 2026). Es HTML, CSS y JavaScript sin dependencias ni proceso de compilación. Todo lo que se publica está en la carpeta `public/`.

## Estructura

| Archivo | Qué contiene |
|---|---|
| `public/index.html` | Portada, capítulos I–VIII con las cartas, modales y reproductor. |
| `public/style.css` | Todo el diseño: paleta violeta, nebulosa, fotos tipo polaroid, carta en papel. |
| `public/script.js` | Cielo de estrellas, constelación, contador, galería, flores, vales, Spotify y modales. La configuración está al inicio. |
| `public/images/` | Fotos optimizadas (máx. 1800 px, sin metadatos EXIF/GPS). Se ven en el visor. |
| `public/images/mini/` | Miniaturas (máx. 720 px) que se muestran en la galería. |
| `public/audio/` | Aquí van los mensajes de voz opcionales `extraname_1.m4a` … `extraname_18.m4a`. |
| `public/video/` | Video del secreto en MP4 (Safari, Chrome, Firefox) y WebM de respaldo. |
| `public/_headers` | Cabeceras de Cloudflare Pages: no indexar, seguridad básica y caché de 30 días para fotos, audio y video. |
| `public/robots.txt`, `public/favicon.svg` | Bloqueo de buscadores e ícono de la pestaña. |

## Cambios habituales

**Añadir una foto**
1. Guarda la foto grande en `images/` y una copia reducida (unos 720 px de lado mayor) en `images/mini/`, con el mismo nombre.
2. En `script.js`, agrega `['nombre_archivo', ancho, alto]` al álbum correspondiente de `ALBUMES`. El ancho y el alto son los de la miniatura.

**Vales y razones**
Están en `VALES` y `RAZONES`, al inicio de `script.js`. Para agregar un vale nuevo, dale un `id` que no se repita: con él se recuerda si ya se canjeó.

**Playlist de Spotify**
- Se cambia con `SPOTIFY_PLAYLIST_ID` en `script.js`.
- La portada y el nombre de la playlist se ocultan recortando la parte superior del reproductor. El recorte se controla con `--spotify-recorte` en `style.css` (152 px por defecto). Si se ve un pedacito del nombre, súbelo; si se tapa la primera canción, bájalo.
- Sin sesión iniciada en Spotify, el reproductor solo reproduce fragmentos de 30 segundos. Es una limitación de Spotify.

**Mensajes "extráñame"**
El texto está en `AUDIOS_EXTRANAME` (`script.js`). Si existe el audio correspondiente en `audio/`, se muestra un reproductor; si no, solo aparece el texto.

Todos los archivos de fotos, audio y video están sin metadatos (sin EXIF, GPS ni fechas de grabación). Si agregas archivos nuevos, límpialos antes de subirlos.

## Publicar en Cloudflare Pages

**Opción A: conectada a GitHub** (se actualiza sola con cada cambio)
1. En Cloudflare: *Workers & Pages* → *Create* → *Pages* → *Connect to Git* y elige este repositorio (funciona también si es privado).
2. Rama de producción: la rama donde está este código.
3. *Framework preset*: **None**. *Build command*: déjalo **vacío**. *Build output directory*: **`public`**.
4. *Save and Deploy*. Te dará una dirección `https://<nombre>.pages.dev`.

**Opción B: subida directa** (sin GitHub)
1. *Workers & Pages* → *Create* → *Pages* → *Upload assets*.
2. Arrastra la carpeta **`public`** completa y publica.

**Para probarla en tu computadora:** abre una terminal en `public/` y ejecuta `python3 -m http.server`, luego entra a `http://localhost:8000`.

**Privacidad:** la página no aparece en buscadores (`robots.txt` y cabecera `noindex`), pero cualquiera con el enlace puede verla. Si quieres que solo ella pueda entrar, activa *Cloudflare Access* en el proyecto (gratis hasta 50 personas) y permite solo su correo.
