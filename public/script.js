/*******************************************************
 * UN AÑO CONTIGO — script principal
 *******************************************************/

/* ===================== CONFIGURACIÓN ===================== */

const FECHA_INICIO = new Date('2025-09-29T00:00:00');

// Playlist de Spotify (solo el ID; el nombre de la playlist queda oculto).
const SPOTIFY_PLAYLIST_ID = '1bsbPbbTVofpz485xz0tle';

// Álbumes de fotos: [archivo sin extensión, ancho, alto] de la miniatura en images/mini/.
// La foto grande está en images/<archivo>.jpg. Para añadir una foto, agrégala aquí.
const ALBUMES = [
    {
        titulo: 'Nosotros en nuestras casitas',
        nota: 'casita',
        fotos: [['casita_1', 541, 720], ['casita_2', 540, 720], ['casita_3', 720, 405], ['casita_4', 720, 540], ['casita_5', 405, 720], ['casita_6', 541, 720]]
    },
    {
        titulo: 'Momentos invaluables para mí',
        nota: 'momento',
        fotos: [['momento_1', 720, 540], ['momento_2', 542, 720], ['momento_3', 405, 720], ['momento_4', 541, 720], ['momento_5', 542, 720], ['momento_6', 405, 720], ['momento_7', 541, 720], ['momento_8', 640, 483], ['momento_9', 720, 378], ['momento_10', 720, 540], ['momento_11', 640, 483], ['momento_12', 540, 720], ['momento_13', 543, 720], ['momento_14', 543, 720], ['momento_15', 640, 483]]
    },
    {
        titulo: 'Mis fotos favoritas tuyas',
        nota: 'favorita',
        fotos: [['favorita_1', 720, 541], ['favorita_2', 404, 720], ['favorita_3', 541, 720], ['favorita_4', 720, 720], ['favorita_5', 541, 720], ['favorita_6', 720, 404], ['favorita_7', 542, 720], ['favorita_8', 640, 483], ['favorita_9', 540, 720], ['favorita_10', 540, 720], ['favorita_11', 640, 640], ['favorita_12', 640, 481], ['favorita_13', 640, 480], ['favorita_14', 640, 480]]
    }
];

// Mensajitos "extráñame". El audio es opcional: si el archivo no existe, solo se muestra el texto.
const AUDIOS_EXTRANAME = [
    { text: 'Un mensajito directo a tu corazón, para alegrarte el día. 💜', file: 'audio/extraname_1.m4a' },
    { text: 'Recuerda siempre lo muchísimo que vales, mi niña preciosa. 💜', file: 'audio/extraname_2.m4a' },
    { text: 'Aquí estoy, cerquita de ti, abrazándote a la distancia pase lo que pase. ✨', file: 'audio/extraname_3.m4a' },
    { text: 'Eres mi pensamiento favorito de cada día. ¡Te amo con todo mi ser! 😘', file: 'audio/extraname_4.m4a' },
    { text: 'Sonríe, mi bebeshita boñita: tu sonrisita de gatito ilumina todo mi mundo. 🌟', file: 'audio/extraname_5.m4a' },
    { text: 'Nunca olvides que eres mi constante, mi norte y mi calma. ¡Te extraño! 💜', file: 'audio/extraname_6.m4a' },
    { text: 'Cada segundito sin ti se siente largo, pero saber que existes lo compensa todo. 🧸', file: 'audio/extraname_7.m4a' },
    { text: 'Daría lo que fuera por darte un abracito justo ahora, mi niña hermosa. 🫂', file: 'audio/extraname_8.m4a' },
    { text: 'Gracias por existir, por cruzarte en mi camino hace cuatro años y por hacer mi vida tan feliz. 💜', file: 'audio/extraname_9.m4a' },
    { text: 'Cierra los ojitos un segundo, respira profundo y recuerda lo mucho que te amo. 🧘‍♀️💜', file: 'audio/extraname_10.m4a' },
    { text: 'Eres mi sueño hecho realidad y mi futuro favorito. ¡Te quiero muchísimo! 🔮✨', file: 'audio/extraname_11.m4a' },
    { text: 'Solo pasaba a recordarte que eres la mujer más perfecta y preciosa del universo entero. 🌺', file: 'audio/extraname_12.m4a' },
    { text: 'Eres mi estrellita, mi luz chiquitita, y hoy también quiero que lo recuerdes. ✨', file: 'audio/extraname_13.m4a' },
    { text: 'Un horizonte no es un muro: aunque estemos lejos, aquí estoy contigo. 🌙💜', file: 'audio/extraname_14.m4a' },
    { text: 'Eres mi hogar, mi brújula y la nota a la que siempre regreso. 🏡💜', file: 'audio/extraname_15.m4a' },
    { text: 'Te amo en la calma y en la tormenta, en la risa y en el silencio. 💜', file: 'audio/extraname_16.m4a' },
    { text: 'Aquí te dejo una lucecita prendida, por si la necesitas. 🕯️✨', file: 'audio/extraname_17.m4a' },
    { text: 'Un año contigo y todavía me enamoro de ti cada día un poquito más. 💜🫰', file: 'audio/extraname_18.m4a' }
];

const RAZONES = [
    'Por tus lindos ojitos, que brillan como dos luceros y me guían incluso en mis noches más oscuras.',
    'Por tu sonrisita cambiante, a veces al revés y a veces de gatito, que tiene el poder de iluminar mi mundo entero.',
    'Por la inmensa paz que me das, siendo mi refugio seguro cuando todo lo demás es tormenta.',
    'Por esa conexión especial e invisible que nos une, como si nuestras almas se conocieran desde siempre.',
    'Porque me entiendes sin necesidad de palabras, y en tu comprensión encuentro el verdadero significado del amor.',
    "Porque compartimos la misma locura encantadora, y ser 'raritos' juntos es mi estado favorito del ser.",
    'Por la dulce melodía de tu voz, que es la única canción que mi corazón desea escuchar.',
    'Por cada curva y detalle de tu cuerpo perfecto: tu cinturita, tu colita, tu pancita, tus tititas, tus piernitas... que son el lienzo más hermoso que la vida ha creado.',
    'Por lo que me haces sentir cada vez que me miras, una emoción tan profunda que las palabras no alcanzan a describir.',
    'Porque a tu lado he descubierto qué significa realmente ser inmensamente feliz.',
    'Por tus ojitos de café oscuro con miel en la noche, donde caben universos enteros.',
    'Por tu carita de porcelana, ese lienzo vivo que guarda luz en cada detalle.',
    'Por esa sonrisita tuya que sale al revés, casi un idioma secreto que me avisa que algo bonito te pasó.',
    'Por tu risa a carcajadas, esa sinfonía que uno no se quiere perder.',
    'Porque eres chaparrita, sí, pero enorme en presencia.',
    'Por tu cabellito cayendo como río suave y tu cabecita tan perfecta para mis caricias.',
    'Por tus manitas, tus piecitos chiquitos y cutes y tus cachetitos.',
    'Porque antes de ser tu novio fui tu amigo, y en esos tres años ya me habías regalado tantísimo.',
    'Por las cafeterías, las cocas y los frappés de chocolate blanco que nos rescataban de la monotonía.',
    'Por todas esas ocurrencias que solo se nos ocurren a nosotros.',
    'Porque en nuestra amistad aprendí lo que es la lealtad.',
    'Porque siempre fuiste la persona en la que más confié, y esa confianza creció en lugar de gastarse.',
    'Porque antes me sentía un bicho raro, y contigo la nota que no encajaba encontró su lugar.',
    'Porque cuando te recargas en mí, por cercanía y por confianza, todo se acomoda.',
    'Porque amo a la persona que eres, con tus errores, tus enojos, tus rabietas y hasta tus espacios.',
    'Porque me quedo con la Reni de ahora y con la que poquito a poquito vas siendo.',
    'Porque eres calma, y eres fuerza disfrazada de ternura.',
    'Porque eres mi flor de invierno: floreciste cuando todo estaba quieto y trajiste color.',
    'Porque eres mi brújula: cuando pienso en ti, todas las direcciones se ordenan solitas.',
    'Porque hogar dejó de ser un lugar y empezó a tener tu nombre, tu voz y tu risa.',
    'Porque eres la primera estrella que se enciende al caer la noche.',
    'Porque cada latido tiene un nombre: el tuyo.',
    'Porque contigo todo es más cálido, como si el mundo por fin hubiera decidido volverse hogar.',
    'Porque me haces querer ser mejor, para crecer y para seguir.',
    'Porque incluso en los días más grises, contigo nace algo hermoso.'
];

// Vales del talonario. El id se usa para recordar cuáles ya se canjearon.
const VALES = [
    { id: 'ramen', emoji: '🍜', titulo: 'Ir a por un Ramen Elote', regalo: 'Un Ramen Elote calientito y delicioso' },
    { id: 'auditorio', emoji: '🏟️', titulo: 'Ir al auditorio a sentarnos juntos', regalo: 'Ir al auditorio a sentarnos juntitos' },
    { id: 'deportiva', emoji: '⚽', titulo: 'Ir a la unidad deportiva', regalo: 'Una vueltecita a la unidad deportiva' },
    { id: 'cine', emoji: '🍿', titulo: 'Ir al cine juntitos', regalo: 'Ir al cine juntos a ver tu peli favorita' },
    { id: 'coquita', emoji: '🥤', titulo: 'Una coquita bien fría', regalo: 'Una coquita bien fría compartida' },
    { id: 'doritos', emoji: '🔥', titulo: 'Unos Doritos Flaming Hot', regalo: 'Unos Doritos Flaming Hot' },
    { id: 'bonice', emoji: '🧊', titulo: 'Un BonIce rico', regalo: 'El BonIce del sabor que tú elijas' },
    { id: 'colorear', emoji: '🎨', titulo: 'Una tarde coloreando', regalo: 'Una tardecita coloreando juntos' },
    { id: 'helado', emoji: '🍨', titulo: 'Un heladito delicioso', regalo: 'Un heladito artesanal para mi niña' },
    { id: 'mimos', emoji: '💆', titulo: 'Mimos y masaje infinitos', regalo: 'Un masajito, piojito y muchos mimos' },
    { id: 'cafeteria', emoji: '☕', titulo: 'Una tarde de cafetería', regalo: 'Una tarde de cafetería, como cuando éramos solo amigos' },
    { id: 'frappe', emoji: '🧋', titulo: 'Un frappé de chocolate blanco', regalo: 'Un frappé de chocolate blanco para rescatarnos de la monotonía' },
    { id: 'bailar', emoji: '💃', titulo: 'Bailar juntos', regalo: 'Bailar juntos, aunque sea en la sala' },
    { id: 'estrellas', emoji: '🌌', titulo: 'Una noche viendo estrellas', regalo: 'Una noche acostaditos viendo estrellas' },
    { id: 'fogata', emoji: '🏕️', titulo: 'Una fogatita y pláticas', regalo: 'Una fogatita en medio de la noche, tú y yo platicando' },
    { id: 'carta', emoji: '✉️', titulo: 'Una carta escrita a mano', regalo: 'Una carta escrita a mano, solo para ti' },
    { id: 'abrazo', emoji: '🫂', titulo: 'Un abrazo largo, sin prisa', regalo: 'Un abrazo largo, sin prisa y sin soltarte' },
    { id: 'platica', emoji: '💬', titulo: 'Platicar de todo y de nada', regalo: 'Una platiquita larga de todo y de nada' },
    { id: 'fotos', emoji: '📸', titulo: 'Una sesión de fotitos', regalo: 'Una sesión de fotitos juntos para el próximo año' },
    { id: 'ramo', emoji: '💐', titulo: 'Un ramo de verdad', regalo: 'Un ramo de tulipanes, gerberas y lirios de verdad' },
    { id: 'maraton', emoji: '📺', titulo: 'Maratón de series acurrucados', regalo: 'Un maratón de pelis o series acurrucaditos' },
    { id: 'discusion', emoji: '🏳️', titulo: 'Ganar una discusión', regalo: 'Ganar una discusión sin peros (solo una vez 😜)' }
];

/* ===================== UTILIDADES ===================== */

const $ = (sel) => document.querySelector(sel);
const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const azar = (min, max) => min + Math.random() * (max - min);

function leerGuardado(clave, porDefecto) {
    try {
        const valor = localStorage.getItem(clave);
        return valor ? JSON.parse(valor) : porDefecto;
    } catch (e) {
        return porDefecto;
    }
}

function guardar(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* sin almacenamiento: no pasa nada */ }
}

let temporizadorAviso;
function mostrarAviso(texto) {
    const aviso = $('#aviso');
    aviso.textContent = texto;
    aviso.classList.add('visible');
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => aviso.classList.remove('visible'), 4200);
}

/* ===================== PORTADA ===================== */

(function portada() {
    const el = $('#portada');
    document.body.classList.add('bloqueado');
    $('#btn-abrir-portada').addEventListener('click', () => {
        el.classList.add('abierta');
        document.body.classList.remove('bloqueado');
        document.body.classList.add('listo');
        setTimeout(() => el.remove(), 1200);
    });
})();

/* ===================== CIELO DE ESTRELLAS ===================== */
// Tres capas a distinta profundidad: al hacer scroll o mover el cursor se desplazan
// a distinta velocidad (paralaje). Las más cercanas son destellos de cuatro puntas.

(function cielo() {
    const canvas = $('#cielo');
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;

    const COLORES = ['#ffffff', '#ebe2ff', '#c8a6ff', '#a66bff', '#fff1d6'];
    const PESOS = [0.3, 0.3, 0.22, 0.1, 0.08];

    function colorAzar() {
        let r = Math.random(), acc = 0;
        for (let i = 0; i < COLORES.length; i++) {
            acc += PESOS[i];
            if (r <= acc) return COLORES[i];
        }
        return COLORES[0];
    }

    // Sprites pre-dibujados: punto con halo y destello de cuatro puntas.
    function crearSprite(color, destello) {
        const t = 64, c = document.createElement('canvas');
        c.width = c.height = t;
        const g = c.getContext('2d');
        const halo = g.createRadialGradient(t / 2, t / 2, 0, t / 2, t / 2, t / 2);
        halo.addColorStop(0, color);
        halo.addColorStop(destello ? 0.08 : 0.15, color);
        halo.addColorStop(destello ? 0.25 : 0.4, color + '55');
        halo.addColorStop(1, color + '00');
        g.fillStyle = halo;
        g.fillRect(0, 0, t, t);
        if (destello) {
            g.globalCompositeOperation = 'lighter';
            [[1, 0], [0, 1]].forEach(([dx, dy]) => {
                const lin = g.createLinearGradient(t / 2 - dx * t / 2, t / 2 - dy * t / 2, t / 2 + dx * t / 2, t / 2 + dy * t / 2);
                lin.addColorStop(0, color + '00');
                lin.addColorStop(0.5, '#ffffff');
                lin.addColorStop(1, color + '00');
                g.fillStyle = lin;
                if (dx) g.fillRect(0, t / 2 - 1, t, 2);
                else g.fillRect(t / 2 - 1, 0, 2, t);
            });
        }
        return c;
    }

    const sprites = {};
    COLORES.forEach(c => { sprites[c] = { punto: crearSprite(c, false), destello: crearSprite(c, true) }; });

    const CAPAS = [
        { cantidad: 150, prof: 0.05, tam: [3, 6], tipo: 'punto' },
        { cantidad: 70, prof: 0.14, tam: [5, 10], tipo: 'punto' },
        { cantidad: 16, prof: 0.3, tam: [18, 34], tipo: 'destello' }
    ];

    let estrellas = [];
    function crearEstrellas() {
        const factor = Math.min(1, (W * H) / (1280 * 800)) * 0.6 + 0.4;
        estrellas = [];
        CAPAS.forEach(capa => {
            const n = Math.round(capa.cantidad * factor);
            for (let i = 0; i < n; i++) {
                estrellas.push({
                    x: Math.random(), y: Math.random(),       // posición normalizada
                    tam: azar(capa.tam[0], capa.tam[1]),
                    prof: capa.prof,
                    sprite: sprites[colorAzar()][capa.tipo],
                    fase: Math.random() * Math.PI * 2,
                    vel: azar(0.4, 1.6),
                    base: azar(0.45, 1)
                });
            }
        });
    }

    function redimensionar() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (!estrellas.length) crearEstrellas();
        if (movimientoReducido) dibujar(0);
    }

    // Paralaje con cursor (suavizado)
    let px = 0, py = 0, objX = 0, objY = 0;
    window.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        objX = (e.clientX / W - 0.5);
        objY = (e.clientY / H - 0.5);
    }, { passive: true });

    // Estrella fugaz
    let fugaz = null;
    let proximaFugaz = performance.now() + azar(3000, 7000);
    function lanzarFugaz(ahora) {
        const desdeIzq = Math.random() < 0.5;
        fugaz = {
            x: desdeIzq ? azar(0, W * 0.5) : azar(W * 0.5, W),
            y: azar(0, H * 0.45),
            vx: (desdeIzq ? 1 : -1) * azar(0.9, 1.4),
            vy: azar(0.35, 0.6),
            inicio: ahora,
            dur: azar(900, 1400)
        };
    }

    function dibujarFugaz(ahora) {
        const t = (ahora - fugaz.inicio) / fugaz.dur;
        if (t >= 1) { fugaz = null; return; }
        const recorrido = t * fugaz.dur * 0.9;
        const hx = fugaz.x + fugaz.vx * recorrido;
        const hy = fugaz.y + fugaz.vy * recorrido;
        const largo = 140;
        const norm = Math.hypot(fugaz.vx, fugaz.vy);
        const tx = hx - (fugaz.vx / norm) * largo;
        const ty = hy - (fugaz.vy / norm) * largo;
        const alfa = Math.sin(t * Math.PI);
        const grad = ctx.createLinearGradient(hx, hy, tx, ty);
        grad.addColorStop(0, `rgba(255,255,255,${alfa})`);
        grad.addColorStop(0.3, `rgba(200,166,255,${alfa * 0.6})`);
        grad.addColorStop(1, 'rgba(138,63,252,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(hx, hy);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        ctx.globalAlpha = alfa;
        ctx.drawImage(sprites['#ffffff'].destello, hx - 10, hy - 10, 20, 20);
        ctx.globalAlpha = 1;
    }

    function dibujar(ahora) {
        ctx.clearRect(0, 0, W, H);
        px += (objX - px) * 0.04;
        py += (objY - py) * 0.04;
        const scroll = window.scrollY;
        const seg = ahora / 1000;

        for (const s of estrellas) {
            let x = s.x * W - px * s.prof * 160;
            let y = (s.y * H - scroll * s.prof - py * s.prof * 120) % H;
            if (y < 0) y += H;
            const brillo = movimientoReducido ? s.base : s.base * (0.55 + 0.45 * Math.sin(seg * s.vel + s.fase));
            ctx.globalAlpha = Math.max(0.05, brillo);
            ctx.drawImage(s.sprite, x - s.tam / 2, y - s.tam / 2, s.tam, s.tam);
        }
        ctx.globalAlpha = 1;

        if (!movimientoReducido) {
            if (!fugaz && ahora > proximaFugaz) {
                lanzarFugaz(ahora);
                proximaFugaz = ahora + azar(6000, 12000);
            }
            if (fugaz) dibujarFugaz(ahora);
        }
    }

    function bucle(ahora) {
        dibujar(ahora);
        requestAnimationFrame(bucle);
    }

    window.addEventListener('resize', redimensionar);
    redimensionar();
    if (movimientoReducido) {
        window.addEventListener('scroll', () => dibujar(0), { passive: true });
    } else {
        requestAnimationFrame(bucle);
    }
})();

/* ===================== CONSTELACIÓN DE CORAZÓN (hero) ===================== */

(function constelacion() {
    const svg = $('#constelacion');
    const NS = 'http://www.w3.org/2000/svg';
    const N = 15;
    const puntos = [];
    // Pequeñas irregularidades fijas para que parezca una constelación real y no un dibujo perfecto
    const desvio = [[0, 3], [2, -1], [-2, 2], [1, -2], [-1, 1], [2, 2], [-2, -1], [0, 2], [2, -2], [-1, 2], [1, 1], [-2, -2], [2, 1], [-1, -1], [1, 2]];

    for (let i = 0; i < N; i++) {
        const t = (i / N) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        puntos.push([100 + x * 5.4 + desvio[i][0], 92 - y * 5.2 + desvio[i][1]]);
    }

    const linea = document.createElementNS(NS, 'polygon');
    linea.setAttribute('class', 'linea');
    linea.setAttribute('points', puntos.map(p => p.join(',')).join(' '));
    linea.setAttribute('pathLength', '1');
    svg.appendChild(linea);

    function estrella(x, y, tam, clase) {
        const use = document.createElementNS(NS, 'use');
        use.setAttribute('href', '#destello');
        use.setAttribute('x', x - tam / 2);
        use.setAttribute('y', y - tam / 2);
        use.setAttribute('width', tam);
        use.setAttribute('height', tam);
        if (clase) use.setAttribute('class', clase);
        use.style.setProperty('--dur', azar(2.2, 4.5).toFixed(2) + 's');
        use.style.setProperty('--retraso', (-azar(0, 4)).toFixed(2) + 's');
        svg.appendChild(use);
    }

    puntos.forEach((p, i) => estrella(p[0], p[1], i % 4 === 0 ? 7 : (i % 3 === 0 ? 5.5 : 4)));
    // Estrellitas sueltas alrededor
    [[22, 30], [178, 40], [12, 120], [190, 132], [60, 186], [150, 190], [100, 8], [34, 76], [168, 88]]
        .forEach(([x, y]) => estrella(x, y, azar(2, 3.5), 'suelta'));

    if (movimientoReducido) return;
    // El corazón se queda un poco atrás al hacer scroll: da sensación de profundidad.
    const hero = $('.hero');
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) hero.style.setProperty('--desplazo', (y * 0.35).toFixed(1) + 'px');
    }, { passive: true });
})();

/* ===================== CONTADOR ===================== */

(function contador() {
    const el = {
        anios: $('#c-anios'), meses: $('#c-meses'), dias: $('#c-dias'),
        horas: $('#c-horas'), min: $('#c-min'), seg: $('#c-seg'), total: $('#c-total')
    };
    const dos = n => String(n).padStart(2, '0');

    function actualizar() {
        const ahora = new Date();
        let meses = (ahora.getFullYear() - FECHA_INICIO.getFullYear()) * 12 + (ahora.getMonth() - FECHA_INICIO.getMonth());
        let ref = new Date(FECHA_INICIO);
        ref.setMonth(ref.getMonth() + meses);
        if (ref > ahora) {
            meses--;
            ref = new Date(FECHA_INICIO);
            ref.setMonth(ref.getMonth() + meses);
        }
        const ms = ahora - ref;
        const anios = Math.floor(meses / 12);
        el.anios.textContent = anios;
        el.anios.nextElementSibling.textContent = anios === 1 ? 'Año' : 'Años';
        el.meses.textContent = dos(meses % 12);
        el.dias.textContent = dos(Math.floor(ms / 86400000));
        el.horas.textContent = dos(Math.floor((ms % 86400000) / 3600000));
        el.min.textContent = dos(Math.floor((ms % 3600000) / 60000));
        el.seg.textContent = dos(Math.floor((ms % 60000) / 1000));
        el.total.textContent = Math.floor((ahora - FECHA_INICIO) / 86400000).toLocaleString('es');
    }
    actualizar();
    setInterval(actualizar, 1000);
})();

/* ===================== GALERÍA + VISOR ===================== */

const galeria = (function () {
    const contenedor = $('#albumes');
    const lista = []; // todas las fotos en orden, para navegar en el visor
    const ROTACIONES = [-2.2, 1.6, -1, 2.4, -1.8, 0.8, 1.9, -2.6, 1.2];

    ALBUMES.forEach((album) => {
        const bloque = document.createElement('div');
        bloque.className = 'album';
        bloque.innerHTML = `<div class="album-cabecera"><h3 class="album-titulo"></h3><span class="album-cuenta">${album.fotos.length} fotos</span></div><div class="mosaico"></div>`;
        bloque.querySelector('.album-titulo').textContent = album.titulo;
        const mosaico = bloque.querySelector('.mosaico');

        album.fotos.forEach(([archivo, ancho, alto], i) => {
            const indice = lista.length;
            const numero = String(i + 1).padStart(2, '0');
            lista.push({ src: `images/${archivo}.jpg`, titulo: `${album.titulo}`, nota: `${album.nota} · ${numero}` });

            const foto = document.createElement('div');
            foto.className = 'foto' + (indice % 3 === 1 ? ' cinta' : '');
            foto.style.setProperty('--rot', ROTACIONES[indice % ROTACIONES.length] + 'deg');
            foto.style.setProperty('--cinta', (indice % 2 ? 5 : -4) + 'deg');

            const boton = document.createElement('button');
            boton.className = 'foto-marco';
            boton.setAttribute('aria-label', `Ver ${album.nota} ${numero} en grande`);
            boton.addEventListener('click', () => abrir(indice));

            const img = document.createElement('img');
            img.alt = `${album.titulo}, ${album.nota} ${numero}`;
            img.width = ancho;
            img.height = alto;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.addEventListener('load', () => img.classList.add('cargada'));
            img.src = `images/mini/${archivo}.jpg`;
            if (img.complete) img.classList.add('cargada');

            const nota = document.createElement('span');
            nota.className = 'foto-nota';
            nota.textContent = `${album.nota} · ${numero}`;

            boton.append(img, nota);
            foto.append(boton);
            mosaico.append(foto);
        });
        contenedor.append(bloque);
    });

    const visor = $('#visor');
    const visorImg = $('#visor-img');
    let actual = 0;
    let ultimoFoco = null;

    function mostrar(i) {
        actual = (i + lista.length) % lista.length;
        const f = lista[actual];
        visorImg.classList.add('cambiando');
        const precarga = new Image();
        precarga.onload = precarga.onerror = () => {
            visorImg.src = f.src;
            visorImg.alt = `${f.titulo}, ${f.nota}`;
            visorImg.classList.remove('cambiando');
        };
        precarga.src = f.src;
        $('#visor-titulo').textContent = f.nota;
        $('#visor-cuenta').textContent = `${actual + 1} / ${lista.length}`;
    }

    function abrir(i) {
        ultimoFoco = document.activeElement;
        mostrar(i);
        visor.classList.add('activo');
        document.body.classList.add('bloqueado');
        $('#visor-cerrar').focus();
    }

    function cerrar() {
        visor.classList.remove('activo');
        document.body.classList.remove('bloqueado');
        if (ultimoFoco) ultimoFoco.focus();
    }

    $('#visor-cerrar').addEventListener('click', cerrar);
    $('#visor-prev').addEventListener('click', () => mostrar(actual - 1));
    $('#visor-sig').addEventListener('click', () => mostrar(actual + 1));
    visor.addEventListener('click', (e) => { if (e.target === visor) cerrar(); });

    document.addEventListener('keydown', (e) => {
        if (!visor.classList.contains('activo')) return;
        if (e.key === 'Escape') cerrar();
        if (e.key === 'ArrowLeft') mostrar(actual - 1);
        if (e.key === 'ArrowRight') mostrar(actual + 1);
    });

    // Deslizar con el dedo en el celular
    let inicioX = null;
    visor.addEventListener('touchstart', (e) => { inicioX = e.touches[0].clientX; }, { passive: true });
    visor.addEventListener('touchend', (e) => {
        if (inicioX === null) return;
        const dx = e.changedTouches[0].clientX - inicioX;
        if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
        inicioX = null;
    });

    return { cerrar };
})();

/* ===================== FLORES ===================== */
// Cada flor se dibuja en un espacio de 64 × 90 con la base del tallo en (32, 88),
// para poder colocarlas en el ramo o dejarlas caer sueltas.

const PALETAS = {
    blanco: { base: '#f4effc', claro: '#ffffff', oscuro: '#bcaed6' },
    amarillo: { base: '#f7cf2e', claro: '#fff0a3', oscuro: '#c48a0c' },
    morado: { base: '#9d4edd', claro: '#d3a8ff', oscuro: '#4a1486' }
};

let idFlor = 0;
const nuevoId = (prefijo) => prefijo + (idFlor++);

// Tallo con un brillo lateral para que no se vea plano
function tallo(d) {
    return `<path d="${d}" stroke="#346a31" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <path d="${d}" stroke="#7fbf6a" stroke-opacity=".45" stroke-width=".8" fill="none" stroke-linecap="round" transform="translate(-.6 0)"/>`;
}

// Hoja larga con nervio central
function hoja(d, nervio, relleno) {
    return `<path d="${d}" fill="${relleno}"/><path d="${nervio}" stroke="#9fd48a" stroke-opacity=".45" stroke-width=".6" fill="none" stroke-linecap="round"/>`;
}

// Tulipán: copa cerrada, pétalos con brillo y venas suaves, base algo más oscura.
function florTulipan(p) {
    const g = nuevoId('tu'), h = nuevoId('th'), b = nuevoId('tb');
    return `<defs>
        <linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${p.claro}"/><stop offset=".5" stop-color="${p.base}"/><stop offset=".92" stop-color="${p.oscuro}"/><stop offset="1" stop-color="#5d7f3e"/>
        </linearGradient>
        <radialGradient id="${b}" cx=".35" cy=".35" r=".6">
            <stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="${h}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#2c6431"/><stop offset=".55" stop-color="#5f9f56"/><stop offset="1" stop-color="#386f36"/>
        </linearGradient>
    </defs>
    ${tallo('M32 88 C32.5 72 33 58 32 44')}
    ${hoja('M31 88 C18 80 12 64 16.5 46 C20 57 25 68 31 76 Z', 'M30 84 C22 76 18 64 17.5 50', `url(#${h})`)}
    ${hoja('M33 88 C45 82 51.5 69 48.5 53 C44.5 63 39 72 33 78 Z', 'M34 84 C42 77 46 67 47.5 57', `url(#${h})`)}
    <path d="M32 45 C24 45 21 33 23 20 C25 14 28 9 32 6 C36 9 39 14 41 20 C43 33 40 45 32 45 Z" fill="${p.oscuro}" opacity=".9"/>
    <path d="M32 46 C22 46 16 38 17 26 C17.5 19 19 14 21.5 9.5 C25 14 28 20 30 28 C31 35 32 40 32 46 Z" fill="url(#${g})"/>
    <path d="M32 46 C42 46 48 38 47 26 C46.5 19 45 14 42.5 9.5 C39 14 36 20 34 28 C33 35 32 40 32 46 Z" fill="url(#${g})"/>
    <path d="M20 28 C21 21 22 16 22.5 13" stroke="#fff" stroke-opacity=".3" stroke-width=".6" fill="none"/>
    <path d="M44 28 C43 21 42 16 41.5 13" stroke="${p.oscuro}" stroke-opacity=".35" stroke-width=".6" fill="none"/>
    <path d="M32 47.5 C25 47.5 22 40 23 31 C24 23 27 17 32 11.5 C37 17 40 23 41 31 C42 40 39 47.5 32 47.5 Z" fill="url(#${g})" stroke="${p.oscuro}" stroke-opacity=".35" stroke-width=".45"/>
    <path d="M32 47.5 C25 47.5 22 40 23 31 C24 23 27 17 32 11.5 C37 17 40 23 41 31 C42 40 39 47.5 32 47.5 Z" fill="url(#${b})"/>
    <path d="M28.5 42 C27.4 34 28.3 25 31.3 18" stroke="${p.oscuro}" stroke-opacity=".22" stroke-width=".45" fill="none"/>
    <path d="M35.5 42 C36.6 34 35.7 25 32.7 18" stroke="${p.oscuro}" stroke-opacity=".22" stroke-width=".45" fill="none"/>
    <path d="M26.8 38 C26 31 27.5 23.5 30.6 17.5" stroke="#fff" stroke-opacity=".55" stroke-width="1" fill="none" stroke-linecap="round"/>`;
}

// Gerbera: dos coronas de pétalos con surco central y punta dentada, centro con florecillas y polen.
function florGerbera(p) {
    const g = nuevoId('ge');
    const petalo = (l, w) => `M${-w * 0.5} -5 C${-w} ${-l * 0.4} ${-w} ${-l + 3} ${-w * 0.6} ${-l + 0.6} L${-w * 0.22} ${-l + 1.3} L0 ${-l + 0.3} L${w * 0.22} ${-l + 1.3} L${w * 0.6} ${-l + 0.6} C${w} ${-l + 3} ${w} ${-l * 0.4} ${w * 0.5} -5 Z`;
    let rayos = '', surcos = '', internos = '', flosculos = '', polen = '';
    for (let i = 0; i < 24; i++) {
        const l = i % 2 ? 23.2 : 24.4, a = (i * 15).toFixed(1);
        rayos += `<path d="${petalo(l, 2.75)}" transform="translate(32 30) rotate(${a})"/>`;
        surcos += `<path d="M0 -8 L0 ${-l + 3}" transform="translate(32 30) rotate(${a})"/>`;
    }
    for (let i = 0; i < 18; i++) internos += `<path d="${petalo(16.5, 2.2)}" transform="translate(32 30) rotate(${i * 20 + 10})"/>`;
    for (let i = 0; i < 22; i++) {
        const a = i * (360 / 22) * Math.PI / 180;
        flosculos += `<circle cx="${(32 + Math.cos(a) * 6.2).toFixed(2)}" cy="${(30 + Math.sin(a) * 6.2).toFixed(2)}" r="${i % 2 ? 0.9 : 1.1}"/>`;
        polen += `<circle cx="${(32 + Math.cos(a + 0.14) * 8.1).toFixed(2)}" cy="${(30 + Math.sin(a + 0.14) * 8.1).toFixed(2)}" r=".45"/>`;
    }
    return `<defs>
        <radialGradient id="${g}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="24">
            <stop offset=".25" stop-color="${p.oscuro}"/><stop offset=".55" stop-color="${p.base}"/><stop offset="1" stop-color="${p.claro}"/>
        </radialGradient>
    </defs>
    ${tallo('M32 88 C31 72 33 58 32 44')}
    ${hoja('M32 86 C22 86 12 80 9 72 C14 72 18 70 21 72 C24 76 28 80 32 82 Z', 'M31 84 C24 82 17 78 12 73.5', '#4c8a45')}
    ${hoja('M32 86 C40 84 48 80 51 73 C46 73 42 74 39 77 C37 80 35 82 32 83 Z', 'M33 84 C39 82 44 79 48.5 74.5', '#3f7a3a')}
    <g fill="url(#${g})" stroke="${p.oscuro}" stroke-opacity=".3" stroke-width=".3">${rayos}</g>
    <g stroke="${p.oscuro}" stroke-opacity=".28" stroke-width=".35" fill="none">${surcos}</g>
    <g fill="${p.claro}" opacity=".82">${internos}</g>
    <circle cx="32" cy="30" r="8" fill="#3a2a0e"/>
    <g fill="#f2d65a">${polen}</g>
    <g fill="#d9b93a">${flosculos}</g>
    <circle cx="32" cy="30" r="4.6" fill="#2a1a08"/>
    <circle cx="32" cy="30" r="2.6" fill="#3d5a1e" opacity=".7"/>
    <circle cx="30.3" cy="28.3" r="1.4" fill="#fff" opacity=".2"/>`;
}

// Lirio: seis tépalos con guía de color, bordes claros, puntas curvadas, pecas y estambres largos, más un botón.
function florLirio(p) {
    const g = nuevoId('li'), bt = nuevoId('lb');
    const tepalo = (l, w) => `M0 -2 C${-w} -6 ${-w * 1.1} ${-l * 0.55} ${-w * 0.45} ${-l * 0.85} C${-w * 0.25} ${-l * 0.95} -0.6 ${-l} 0 ${-l - 1.5} C0.6 ${-l} ${w * 0.25} ${-l * 0.95} ${w * 0.45} ${-l * 0.85} C${w * 1.1} ${-l * 0.55} ${w} -6 0 -2 Z`;
    let tepalos = '', pecas = '', estambres = '';
    [[30, 25, 7], [150, 25, 7], [270, 25, 7], [90, 22, 5.6], [210, 22, 5.6], [330, 22, 5.6]].forEach(([a, l, w]) => {
        tepalos += `<g transform="translate(32 32) rotate(${a})">
            <path d="${tepalo(l, w)}" fill="url(#${g})" stroke="${p.claro}" stroke-opacity=".7" stroke-width=".45"/>
            <path d="M0 -3 C-.8 -7 -.5 -11 0 -14" stroke="${p.oscuro}" stroke-opacity=".45" stroke-width="1.3" fill="none" stroke-linecap="round"/>
            <path d="M0 -4 C-0.6 ${-l * 0.45} -0.4 ${-l * 0.75} 0 ${-l + 1}" stroke="#fff" stroke-opacity=".55" stroke-width=".6" fill="none"/>
            <path d="M-1.1 ${-l + 0.8} C-.4 ${-l - 1.6} .9 ${-l - 1.4} 1.3 ${-l - 0.2}" stroke="#fff" stroke-opacity=".7" stroke-width=".55" fill="none" stroke-linecap="round"/>
        </g>`;
        for (let s = 0; s < 6; s++) {
            pecas += `<circle cx="${((s % 2 ? 1 : -1) * (1.3 + (s % 3) * 0.55)).toFixed(1)}" cy="${-(5.5 + s * 2.1)}" r="${(0.62 - s * 0.05).toFixed(2)}" transform="translate(32 32) rotate(${a})"/>`;
        }
    });
    for (let i = 0; i < 6; i++) {
        const a = i * 60 + (i % 2 ? 8 : -8), largo = i % 2 ? 16.5 : 15.2;
        estambres += `<g transform="translate(32 32) rotate(${a})">
            <path d="M0 0 C1 -6 -1 -11 0 ${-largo}" stroke="#dcebb4" stroke-width=".7" fill="none"/>
            <ellipse cx="0" cy="${-largo - 0.6}" rx="2.4" ry=".95" fill="#9c4a16"/>
            <ellipse cx="-.6" cy="${-largo - 0.9}" rx="1" ry=".35" fill="#e08a3c" opacity=".8"/>
        </g>`;
    }
    return `<defs>
        <radialGradient id="${g}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="26">
            <stop offset="0" stop-color="#eef4c8"/><stop offset=".2" stop-color="${p.claro}"/><stop offset=".6" stop-color="${p.base}"/><stop offset=".92" stop-color="${p.base}"/><stop offset="1" stop-color="${p.claro}"/>
        </radialGradient>
        <linearGradient id="${bt}" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#6d9a4a"/><stop offset=".45" stop-color="${p.base}"/><stop offset="1" stop-color="${p.claro}"/>
        </linearGradient>
    </defs>
    ${tallo('M32 88 C32 74 31 60 32 46')}
    <path d="M32 62 C38 58 42 54 45 49" stroke="#346a31" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <path d="M45 49 C42 45 42.5 38 46.5 31 C47.8 29 49 28.5 49.6 28.4 C50.6 32 50.8 39 49 45 C48.2 47.6 46.6 49.2 45 49 Z" fill="url(#${bt})" stroke="${p.oscuro}" stroke-opacity=".25" stroke-width=".35"/>
    <path d="M46.6 46 C45.6 41 46.4 35 48.6 30.5" stroke="#fff" stroke-opacity=".45" stroke-width=".6" fill="none"/>
    ${hoja('M32 78 C24 77 17 73 14 66 C21 67 27 70 32 74 Z', 'M31 76 C25 74.5 20 71.5 16 67', '#4c8a45')}
    ${hoja('M32 70 C40 68.5 45 64 47 58 C41 59.5 36 62.5 32 66 Z', 'M33 68 C38.5 66 42.5 62.5 45.5 59', '#3f7a3a')}
    ${tepalos}
    <g fill="${p.oscuro}" opacity=".65">${pecas}</g>
    <circle cx="32" cy="32" r="2.6" fill="#b9d27a"/>
    ${estambres}
    <path d="M32 32 C33 26 31 22 32 17.5" stroke="#c8dc8a" stroke-width="1" fill="none"/>
    <g fill="#8fb04a"><circle cx="31.2" cy="17" r=".9"/><circle cx="32.8" cy="17" r=".9"/><circle cx="32" cy="16" r=".9"/></g>`;
}

// Pétalos sueltos para la lluvia
function petaloTulipan(p) {
    const g = nuevoId('pt');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -15 20 30" aria-hidden="true"><defs>
        <linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.claro}"/><stop offset=".6" stop-color="${p.base}"/><stop offset="1" stop-color="${p.oscuro}"/></linearGradient></defs>
        <path d="M0 13 C-8 10 -9 -2 -6 -9 C-4 -13 -1 -14 0 -14 C1 -14 4 -13 6 -9 C9 -2 8 10 0 13Z" fill="url(#${g})" stroke="${p.oscuro}" stroke-opacity=".3" stroke-width=".4"/>
        <path d="M-3 8 C-4.5 2 -4 -5 -1.5 -10" stroke="#fff" stroke-opacity=".5" stroke-width=".9" fill="none" stroke-linecap="round"/></svg>`;
}

function petaloGerbera(p) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -14 8 28" aria-hidden="true">
        <path d="M-1.6 12 C-3 3 -3.2 -7 -2 -11.2 L-1 -12.6 L0 -11.8 L1 -12.6 L2 -11.2 C3.2 -7 3 3 1.6 12Z" fill="${p.base}" stroke="${p.oscuro}" stroke-opacity=".35" stroke-width=".3"/>
        <path d="M0 10 L0 -10" stroke="${p.oscuro}" stroke-opacity=".3" stroke-width=".35"/></svg>`;
}

function petaloLirio(p) {
    const g = nuevoId('pl');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -16 16 32" aria-hidden="true"><defs>
        <linearGradient id="${g}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#eef4c8"/><stop offset=".35" stop-color="${p.claro}"/><stop offset="1" stop-color="${p.base}"/></linearGradient></defs>
        <path d="M0 14 C-7 9 -7.5 -3 -3 -10 C-1.6 -12.5 -.5 -14 0 -15 C.5 -14 1.6 -12.5 3 -10 C7.5 -3 7 9 0 14Z" fill="url(#${g})" stroke="${p.claro}" stroke-opacity=".7" stroke-width=".4"/>
        <path d="M0 12 C-.5 4 -.3 -5 0 -12" stroke="#fff" stroke-opacity=".5" stroke-width=".5" fill="none"/>
        <g fill="${p.oscuro}" opacity=".6"><circle cx="-1.4" cy="6" r=".6"/><circle cx="1.3" cy="3.6" r=".55"/><circle cx="-1.1" cy="1.4" r=".5"/><circle cx="1.5" cy="-.8" r=".45"/></g></svg>`;
}

const TIPOS_FLOR = [florTulipan, florGerbera, florLirio];
const TIPOS_PETALO = [petaloTulipan, petaloGerbera, petaloLirio];
const svgSuelto = (fn, paleta) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 90" aria-hidden="true">${fn(paleta)}</svg>`;

(function flores() {
    // [flor, paleta, ángulo, escala, tallo extra]; se dibujan de atrás hacia adelante.
    // Todas nacen del mismo punto (170, 282), escondido detrás del papel.
    const RAMO = [
        [florLirio, 'morado', -50, 1.4, 44], [florTulipan, 'blanco', -25, 1.5, 58], [florGerbera, 'amarillo', 0, 1.45, 62],
        [florTulipan, 'morado', 25, 1.5, 58], [florLirio, 'amarillo', 50, 1.4, 44],
        [florGerbera, 'blanco', -36, 1.3, 10], [florTulipan, 'amarillo', -12, 1.35, 22], [florLirio, 'blanco', 13, 1.3, 20],
        [florGerbera, 'morado', 37, 1.28, 10]
    ];
    const velo = [];
    for (let i = 0; i < 30; i++) {
        const a = azar(-1.1, 1.1), r = azar(105, 160);
        velo.push(`<circle cx="${(170 + Math.sin(a) * r).toFixed(1)}" cy="${(282 - Math.cos(a) * r).toFixed(1)}" r="${azar(0.7, 1.5).toFixed(1)}"/>`);
    }
    const flores = RAMO.map(([fn, pal, ang, esc, extra], i) =>
        `<g transform="translate(170 282) rotate(${ang})">
            <path d="M0 0 L0 ${-extra - 2}" stroke="#3d7438" stroke-width="${(2.6 * esc).toFixed(1)}" stroke-linecap="round"/>
            <g transform="translate(0 ${-extra}) scale(${esc}) translate(-32 -88)">
                <g class="mece" style="animation-delay:${(-i * 0.6).toFixed(1)}s">${fn(PALETAS[pal])}</g>
            </g>
        </g>`).join('');

    $('#ramo').innerHTML = `<svg viewBox="10 70 320 310" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="papel-ramo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#e9ddfb"/><stop offset=".6" stop-color="#c9b0ef"/><stop offset="1" stop-color="#9f7ad8"/>
            </linearGradient>
            <linearGradient id="papel-ramo-atras" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#b99be6"/><stop offset="1" stop-color="#7c56bd"/>
            </linearGradient>
        </defs>
        <path d="M78 262 L112 138 L170 200 L228 132 L264 262 Z" fill="url(#papel-ramo-atras)" opacity=".9"/>
        <g fill="#f3ecff" opacity=".55">${velo.join('')}</g>
        ${flores}
        <path d="M76 236 Q170 262 264 236 L188 364 Q170 374 152 364 Z" fill="url(#papel-ramo)"/>
        <path d="M76 236 Q120 250 150 252 L162 368 Q156 368 152 364 Z" fill="#fff" opacity=".22"/>
        <path d="M200 250 L182 360" stroke="#7c56bd" stroke-opacity=".35" stroke-width="1" fill="none"/>
        <g fill="#6a2bc4">
            <path d="M170 304 C152 286 128 290 134 306 C139 318 158 314 170 304 Z"/>
            <path d="M170 304 C188 286 212 290 206 306 C201 318 182 314 170 304 Z"/>
            <path d="M166 306 L150 346 L159 341 L163 350 L170 308 Z"/>
            <path d="M174 306 L190 346 L181 341 L177 350 L170 308 Z"/>
            <circle cx="170" cy="305" r="6.5" fill="#8a3ffc"/>
        </g>
    </svg>`;

    // Lluvia: pétalos y flores enteras a distintas profundidades. Cada una cae con su propio
    // balanceo, viento y giro; los pétalos además dan vueltas en 3D como en el aire real.
    const NOMBRES_PALETA = Object.keys(PALETAS);
    const lluvia = $('#lluvia-flores');
    const elegir = (lista) => lista[Math.floor(Math.random() * lista.length)];

    function soltar() {
        const esPetalo = Math.random() < 0.55;
        const cercania = Math.random();                 // 0 = lejos, 1 = cerca
        const escala = 0.55 + cercania * 0.75;
        const paleta = PALETAS[elegir(NOMBRES_PALETA)];
        const dur = (esPetalo ? azar(7, 10.5) : azar(5.5, 8)) * (1.3 - cercania * 0.45) * 1000;

        const cae = document.createElement('div');
        cae.className = 'flor-cae' + (cercania < 0.3 ? ' lejos' : '');
        cae.style.left = azar(-4, 98) + 'vw';
        cae.style.width = (esPetalo ? 16 : 44) * escala + 'px';
        cae.style.zIndex = Math.round(cercania * 10);
        const gira = document.createElement('div');
        gira.className = 'flor-gira';
        gira.innerHTML = esPetalo ? elegir(TIPOS_PETALO)(paleta) : svgSuelto(elegir(TIPOS_FLOR), paleta);
        cae.appendChild(gira);
        lluvia.appendChild(cae);

        const amp = azar(18, 50) * (esPetalo ? 1.5 : 1) * escala;
        const ciclos = azar(1.3, 2.8), fase = Math.random() * Math.PI * 2;
        const viento = azar(-30, 110) * escala;
        const r0 = azar(-35, 35), giro = azar(90, 300) * (Math.random() < 0.5 ? -1 : 1);
        const vueltas = azar(1.5, 3.5) * (Math.random() < 0.5 ? -1 : 1);
        const caida = [], vuelo = [], pasos = 32;

        for (let k = 0; k <= pasos; k++) {
            const t = k / pasos;
            const ola = Math.sin(t * ciclos * Math.PI * 2 + fase);
            caida.push({
                transform: `translate3d(${(ola * amp + t * viento).toFixed(1)}px, ${(-14 + t * 128).toFixed(2)}vh, 0)`,
                opacity: t < 0.06 ? t / 0.06 : t > 0.88 ? (1 - t) / 0.12 : 1
            });
            if (movimientoReducido) continue;
            // Se inclina hacia el lado al que se balancea; los pétalos además voltean.
            const angulo = r0 + t * giro + ola * 22;
            const volteo = esPetalo ? `rotate3d(1, .35, 0, ${(t * vueltas * 360).toFixed(1)}deg)` : `rotateY(${(ola * 38).toFixed(1)}deg)`;
            vuelo.push({ transform: `rotate(${angulo.toFixed(1)}deg) ${volteo}` });
        }
        const anim = cae.animate(caida, { duration: dur, easing: 'linear', fill: 'forwards' });
        if (vuelo.length) gira.animate(vuelo, { duration: dur, easing: 'linear', fill: 'forwards' });
        anim.finished.then(() => cae.remove()).catch(() => cae.remove());
    }

    $('#btn-flores').addEventListener('click', () => {
        if (lluvia.childElementCount > 150) return;      // evita saturar si se toca muchas veces
        const total = movimientoReducido ? 12 : 60;
        for (let i = 0; i < total; i++) setTimeout(soltar, i * 95 + Math.random() * 80);
    });
})();

/* ===================== ESPIRALES DE FONDO ===================== */
// Trazos finos en forma de espiral repartidos por la página. Son muy tenues a propósito.

(function espirales() {
    const capa = $('#espirales');
    const NS = 'http://www.w3.org/2000/svg';

    // Espiral logarítmica de dos brazos (tipo galaxia) o espiral simple (trazo a mano)
    function camino(tipo, fase) {
        const pts = [];
        if (tipo === 'galaxia') {
            for (let t = 0; t <= 17.2; t += 0.08) {
                const r = 3 * Math.exp(0.2 * t);
                pts.push([r * Math.cos(t + fase), r * Math.sin(t + fase)]);
            }
        } else {
            for (let t = 0.4; t <= Math.PI * 7; t += 0.07) {
                const r = 4.4 * t;
                pts.push([r * Math.cos(t + fase), r * Math.sin(t + fase) * 0.92]);
            }
        }
        return 'M' + pts.map(([x, y]) => x.toFixed(1) + ' ' + y.toFixed(1)).join(' L');
    }

    // Las grandes a los costados; las pequeñas (op < 1) más tenues y repartidas entre capítulos
    const LUGARES = [
        { top: '2%', left: '-8%', tam: 420, tipo: 'galaxia' },
        { top: '6%', right: '14%', tam: 120, tipo: 'trazo', op: 0.8 },
        { top: '9%', right: '-6%', tam: 300, tipo: 'trazo' },
        { top: '17%', left: '8%', tam: 150, tipo: 'galaxia', op: 0.8 },
        { top: '24%', left: '-10%', tam: 340, tipo: 'trazo' },
        { top: '31%', right: '4%', tam: 170, tipo: 'trazo', op: 0.85 },
        { top: '38%', right: '-9%', tam: 420, tipo: 'galaxia' },
        { top: '46%', left: '6%', tam: 130, tipo: 'trazo', op: 0.8 },
        { top: '55%', left: '-7%', tam: 300, tipo: 'galaxia' },
        { top: '61%', right: '10%', tam: 150, tipo: 'galaxia', op: 0.75 },
        { top: '68%', right: '-6%', tam: 320, tipo: 'trazo' },
        { top: '76%', left: '10%', tam: 140, tipo: 'trazo', op: 0.8 },
        { top: '84%', left: '-9%', tam: 380, tipo: 'trazo' },
        { top: '91%', right: '-5%', tam: 280, tipo: 'galaxia', op: 0.8 }
    ];

    LUGARES.forEach((l, i) => {
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('viewBox', '-100 -100 200 200');
        svg.setAttribute('class', 'espiral');
        svg.style.top = l.top;
        if (l.left) svg.style.left = l.left;
        if (l.right) svg.style.right = l.right;
        svg.style.setProperty('--tam', `min(${l.tam}px, 80vw)`);
        svg.style.setProperty('--dur', (140 + i * 25) + 's');
        if (l.op) svg.style.opacity = (0.55 * l.op).toFixed(2);
        svg.style.setProperty('--sentido', i % 2 ? 'reverse' : 'normal');
        let contenido = `<path d="${camino(l.tipo, 0)}"/>`;
        if (l.tipo === 'galaxia') {
            contenido += `<path d="${camino(l.tipo, Math.PI)}"/>`;
            for (let k = 0; k < 26; k++) {
                const t = azar(2, 16), r = 3 * Math.exp(0.2 * t), f = k % 2 ? Math.PI : 0;
                contenido += `<circle cx="${(r * Math.cos(t + f) + azar(-3, 3)).toFixed(1)}" cy="${(r * Math.sin(t + f) + azar(-3, 3)).toFixed(1)}" r="${azar(0.4, 1.1).toFixed(2)}"/>`;
            }
        }
        svg.innerHTML = contenido;
        capa.appendChild(svg);
    });
})();

/* ===================== RAZONES ===================== */

(function razones() {
    const texto = $('#razon-texto');
    let bolsa = [];
    let vistas = 0;
    $('#btn-razon').addEventListener('click', () => {
        // Sin repetir hasta haberlas visto todas
        if (!bolsa.length) bolsa = RAZONES.map((_, i) => i).sort(() => Math.random() - 0.5);
        const razon = RAZONES[bolsa.pop()];
        vistas = Math.min(vistas + 1, RAZONES.length);
        $('#razon-cuenta').textContent = `${vistas} de ${RAZONES.length} razones (y contando)`;
        texto.classList.add('saliendo');
        setTimeout(() => {
            texto.textContent = razon;
            texto.classList.remove('saliendo');
        }, 300);
    });
})();

/* ===================== VALES ===================== */

(function vales() {
    const canjeados = leerGuardado('vales-canjeados', []);
    const lista = $('#vales-lista');
    VALES.forEach(({ id, emoji, titulo, regalo }, i) => {
        const vale = document.createElement('button');
        vale.className = 'vale';
        vale.dataset.vale = id;
        vale.dataset.regalo = regalo;
        vale.style.setProperty('--inclinacion', ((i % 5) - 2) * 0.6 + 'deg');
        vale.innerHTML = `<span class="vale-numero">Nº ${String(i + 1).padStart(2, '0')}</span><span class="vale-kicker">Vale por</span><span class="vale-emoji" aria-hidden="true"></span><span class="vale-titulo"></span><span class="vale-estado">Canjear</span>`;
        vale.querySelector('.vale-emoji').textContent = emoji;
        vale.querySelector('.vale-titulo').textContent = titulo;
        lista.appendChild(vale);
        const marcar = () => {
            vale.classList.add('canjeado');
            vale.querySelector('.vale-estado').textContent = 'Canjeado 💜';
        };
        if (canjeados.includes(id)) marcar();
        vale.addEventListener('click', () => {
            if (vale.classList.contains('canjeado')) {
                mostrarAviso('Este vale ya es tuyo. ¡Pídemelo cuando quieras! 💜');
                return;
            }
            marcar();
            canjeados.push(id);
            guardar('vales-canjeados', canjeados);
            mostrarAviso(`¡Canjeado, mi vida! Vale por: ${vale.dataset.regalo}. Te amo.`);
        });
    });
})();

/* ===================== SOBRE DE LA CARTA ===================== */

(function sobre() {
    const btn = $('#sobre');
    const papel = $('#carta-papel');
    btn.addEventListener('click', () => {
        btn.classList.add('abierto');
        btn.setAttribute('aria-expanded', 'true');
        papel.classList.add('revelada');
        papel.setAttribute('tabindex', '-1');
        papel.focus({ preventScroll: true });
        // Espera un cuadro a que el sobre desaparezca y luego lleva al inicio de la carta
        requestAnimationFrame(() => {
            const destino = papel.getBoundingClientRect().top + window.scrollY - 24;
            window.scrollTo({ top: destino, behavior: movimientoReducido ? 'auto' : 'smooth' });
        });
    });
})();

/* ===================== MÚSICA (Spotify) ===================== */
// Usa la API oficial de iFrame de Spotify para tener play/pausa propios.
// La cabecera del reproductor (portada y nombre de la playlist) se recorta con CSS.

const musica = (function () {
    const cont = $('#musica');
    const pastilla = $('#musica-pastilla');
    const estado = $('#musica-estado');
    const controles = $('#musica-controles');
    const barra = $('#musica-barra');
    const destino = $('#spotify-embed');
    const URL_EMBED = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;
    let controlador = null;
    let iniciado = false;
    let sonando = false;

    function alto() {
        const css = getComputedStyle(document.documentElement);
        return parseInt(css.getPropertyValue('--spotify-visible')) + parseInt(css.getPropertyValue('--spotify-recorte'));
    }

    function iframeSimple() {
        if (controlador) return;
        destino.innerHTML = `<iframe src="${URL_EMBED}" height="${alto()}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Nuestras canciones"></iframe>`;
        estado.textContent = 'Elige una canción';
    }

    function actualizar(datos) {
        sonando = !datos.isPaused;
        cont.classList.toggle('sonando', sonando);
        estado.textContent = sonando ? 'Sonando ♪' : 'En pausa';
        $('#musica-play').setAttribute('aria-label', sonando ? 'Pausar' : 'Reproducir');
        if (datos.duration) barra.style.width = (100 * datos.position / datos.duration).toFixed(1) + '%';
    }

    function iniciar() {
        if (iniciado) return;
        iniciado = true;
        estado.textContent = 'Cargando…';
        const respaldo = setTimeout(iframeSimple, 8000);

        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            IFrameAPI.createController(destino, {
                uri: `spotify:playlist:${SPOTIFY_PLAYLIST_ID}`,
                width: '100%',
                height: alto()
            }, (ctrl) => {
                clearTimeout(respaldo);
                controlador = ctrl;
                controles.hidden = false;
                estado.textContent = 'Elige una canción';
                ctrl.addListener('playback_update', (e) => actualizar(e.data));
            });
        };

        const script = document.createElement('script');
        script.src = 'https://open.spotify.com/embed/iframe-api/v1';
        script.async = true;
        script.onerror = () => { clearTimeout(respaldo); iframeSimple(); };
        document.body.appendChild(script);
    }

    function alternarPanel(abrir) {
        const abierto = abrir ?? !cont.classList.contains('abierta');
        cont.classList.toggle('abierta', abierto);
        pastilla.setAttribute('aria-expanded', String(abierto));
        if (abierto) iniciar();
    }

    // En el celular la pastilla se reduce al disquito para no tapar las cartas
    window.addEventListener('scroll', () => {
        cont.classList.toggle('compacta', window.scrollY > window.innerHeight * 0.6);
    }, { passive: true });

    pastilla.addEventListener('click', () => alternarPanel());
    $('#musica-cerrar').addEventListener('click', () => alternarPanel(false));
    $('#musica-play').addEventListener('click', () => controlador && controlador.togglePlay());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') alternarPanel(false); });

    return {
        pausar() { if (controlador && sonando) controlador.pause(); }
    };
})();

/* ===================== MODALES ===================== */

let focoPrevioModal = null;
function abrirModal(id, conservarFocoPrevio = false) {
    if (!conservarFocoPrevio) focoPrevioModal = document.activeElement;
    const modal = $('#' + id);
    modal.classList.add('activo');
    document.body.classList.add('bloqueado');
    const primero = modal.querySelector('input, button');
    if (primero) setTimeout(() => primero.focus({ preventScroll: true }), 60);
}

function cerrarModal(id, restaurarFoco = true) {
    const modal = $('#' + id);
    modal.classList.remove('activo');
    if (!document.querySelector('.modal.activo')) document.body.classList.remove('bloqueado');
    if (id === 'modal-secreto') $('#secreto-video').pause();
    if (id === 'modal-extraname') {
        const audio = $('#extraname-audio');
        audio.pause();
        audio.removeAttribute('src');
    }
    if (restaurarFoco && focoPrevioModal) focoPrevioModal.focus();
}

document.querySelectorAll('[data-cerrar]').forEach(b => b.addEventListener('click', () => cerrarModal(b.dataset.cerrar)));
document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', (e) => { if (e.target === m) cerrarModal(m.id); }));
document.addEventListener('keydown', (e) => {
    const abierto = document.querySelector('.modal.activo');
    if (e.key === 'Escape' && abierto) cerrarModal(abierto.id);
});

/* --- Extráñame --- */
(function extraname() {
    const texto = $('#extraname-texto');
    const audio = $('#extraname-audio');
    let ultimo = -1;

    audio.addEventListener('loadedmetadata', () => { audio.hidden = false; });
    audio.addEventListener('error', () => { audio.hidden = true; });

    function mensajeAzar() {
        let i;
        do { i = Math.floor(Math.random() * AUDIOS_EXTRANAME.length); } while (i === ultimo && AUDIOS_EXTRANAME.length > 1);
        ultimo = i;
        texto.style.opacity = 0;
        setTimeout(() => {
            texto.textContent = AUDIOS_EXTRANAME[i].text;
            texto.style.opacity = 1;
        }, 200);
        audio.hidden = true;
        audio.src = AUDIOS_EXTRANAME[i].file;
        audio.play().catch(() => { /* sin audio o sin permiso de autoplay */ });
    }

    $('#btn-extraname').addEventListener('click', () => {
        musica.pausar();
        abrirModal('modal-extraname');
        mensajeAzar();
    });
    $('#btn-otro-mensaje').addEventListener('click', mensajeAzar);
})();

/* --- Secreto --- */
(function secreto() {
    const campo = $('#input-secreto');
    const error = $('#error-password');

    $('#btn-secreto').addEventListener('click', () => {
        error.hidden = true;
        campo.value = '';
        abrirModal('modal-password');
    });

    function verificar() {
        const respuesta = campo.value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        if (respuesta === 'bebe grande') {
            cerrarModal('modal-password', false);
            abrirModal('modal-secreto', true);
            const video = $('#secreto-video');
            video.currentTime = 0;
            if (!movimientoReducido) video.play().catch(() => { video.controls = true; });
            else video.controls = true;
        } else {
            error.hidden = false;
            campo.classList.remove('error');
            void campo.offsetWidth; // reinicia la animación
            campo.classList.add('error');
        }
    }

    $('#btn-verificar').addEventListener('click', verificar);
    campo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            verificar();
        }
    });
})();

/* ===================== REVELADO + ÍNDICE ACTIVO ===================== */

(function scroll() {
    const revelar = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                revelar.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.revelar').forEach(el => revelar.observe(el));

    const enlaces = {};
    document.querySelectorAll('[data-indice]').forEach(a => { enlaces[a.dataset.indice] = a; });
    const indice = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
            if (!e.isIntersecting) return;
            Object.values(enlaces).forEach(a => a.classList.remove('activo'));
            if (enlaces[e.target.id]) enlaces[e.target.id].classList.add('activo');
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('#inicio, .capitulo').forEach(s => indice.observe(s));
})();

/* ===================== CHISPAS AL TOCAR ===================== */

(function chispas() {
    if (movimientoReducido) return;
    let ultimo = 0;
    document.addEventListener('click', (e) => {
        if (e.target.closest('button, a, input, audio, iframe, .modal, .visor, .musica')) return;
        const ahora = Date.now();
        if (ahora - ultimo < 400) return;
        ultimo = ahora;
        for (let i = 0; i < 7; i++) {
            const ang = (i / 7) * Math.PI * 2 + Math.random() * 0.5;
            const dist = azar(30, 70);
            const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            s.setAttribute('class', 'chispa');
            s.innerHTML = '<use href="#destello" width="12" height="12"/>';
            s.style.left = e.pageX + 'px';
            s.style.top = e.pageY + 'px';
            s.style.setProperty('--dx', (Math.cos(ang) * dist).toFixed(1) + 'px');
            s.style.setProperty('--dy', (Math.sin(ang) * dist).toFixed(1) + 'px');
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 950);
        }
    });
})();
