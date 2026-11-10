const albums = [
    { 
        name: "Гусии (Кения)", 
        albumName: "Поцелуй дождя", 
        nameEn: "Gusii (Kenya)", 
        albumNameEn: "Kisii Rain",
        cover: "https://music.song-world.ru/Kisii_Rain_album.jpg", // Новая ссылка на твою квадратную обложку
        playerUrl: "https://music.song-world.ru/kisii_rain.html"
    }
];

const translations = {
    ru: {
        title: "ИЗУМРУДНАЯ КНИГА",
        subtitle: "«Музыка Мира» — Алексей Роньжин. Инструментальный проект.",
        desc1: "Музыка, которая не нуждается в переводе.",
        desc2: "Целые альбомы, созданные для вдохновения и путешествий.",
        desc3: "Слушай. Чувствуй. Рождается наш общий свет.",
        btnRadio: "📻 Радио",
        btnVk: "🎵 ВКонтакте",
        btnYt: "▶️ YouTube",
        btnTg: "✈️ Telegram",
        searchPlaceholder: "Поиск по альбомам...",
        footer: "© Алексей Роньжин. «Музыка Мира».",
        countText: (n) => `Альбомов: ${n}`
    },
    en: {
        title: "THE EMERALD BOOK",
        subtitle: "«Music of the World» — Alexey Ronzhin. Instrumental project.",
        desc1: "Music that needs no translation.",
        desc2: "Full albums created for inspiration and travel.",
        desc3: "Listen. Feel. Our shared light is born.",
        btnRadio: "📻 Radio",
        btnVk: "🎵 VK",
        btnYt: "▶️ YouTube",
        btnTg: "✈️ Telegram",
        searchPlaceholder: "Search by album...",
        footer: "© Alexey Ronzhin. «Music of the World».",
        countText: (n) => `Albums: ${n}`
    }
};

let urlLang = new URLSearchParams(window.location.search).get('lang');
let currentLang = urlLang || localStorage.getItem('emeraldLang') || 'ru';

function getAlbumName(album) {
    return currentLang === 'ru' ? album.name : (album.nameEn || album.name);
}

function switchLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('emeraldLang', langCode);
    
    const t = translations[langCode];
    
    document.querySelector('h1').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    
    const desc = document.querySelector('.description');
    if (desc) {
        desc.innerHTML = t.desc1 + '<br>' + t.desc2 + '<br>' + t.desc3;
    }

    const links = document.querySelectorAll('.links a');
    if (links.length >= 4) {
        links[0].textContent = t.btnRadio;
        links[1].textContent = t.btnVk;
        links[2].textContent = t.btnYt;
        links[3].textContent = t.btnTg;
    }

    document.getElementById('search').placeholder = t.searchPlaceholder;
    
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.innerHTML = t.footer;
    
    const btnRu = document.getElementById('btn-ru');
    const btnEn = document.getElementById('btn-en');
    if (btnRu) btnRu.style.opacity = langCode === 'ru' ? '1' : '0.4';
    if (btnEn) btnEn.style.opacity = langCode === 'en' ? '1' : '0.4';
    
    renderAlbums(document.getElementById('search').value);
}

function renderAlbums(filter = "") {
    const list = document.getElementById("album-list");
    if (!list) return;
    
    list.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    
    albums
        .filter(album => getAlbumName(album).toLowerCase().includes(lowerFilter))
        .forEach(album => {
            // Создаём ссылку на весь квадрат
            const cardLink = document.createElement("a");
            cardLink.href = album.playerUrl;
            cardLink.target = "_blank";
            cardLink.className = "album-link"; 
            
            // Обложка
            const img = document.createElement("img");
            img.src = album.cover;
            img.alt = getAlbumName(album);
            img.className = "album-cover";
            
            // Название языка и страны
            const title = document.createElement("h3");
            title.className = "album-title";
            title.textContent = currentLang === 'ru' ? album.name : album.nameEn;
            
            // Название альбома
            const subtitle = document.createElement("p");
            subtitle.className = "album-subtitle";
            subtitle.textContent = currentLang === 'ru' ? album.albumName : album.albumNameEn;
            
            // Надпись PLAY (просто текст внутри ссылки)
            const playText = document.createElement("div");
            playText.className = "play-text";
            playText.textContent = "▶ PLAY";
            
            // Собираем карточку
            cardLink.appendChild(img);
            cardLink.appendChild(title);
            cardLink.appendChild(subtitle);
            cardLink.appendChild(playText); // Добавляем надпись
            
            // Создаём li и кладём туда ссылку
            const li = document.createElement("li");
            li.className = "album-item";
            li.appendChild(cardLink);
            
            list.appendChild(li);
        });

    const counter = document.getElementById("lang-count");
    if (counter) {
        counter.textContent = translations[currentLang].countText(albums.length);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    switchLanguage(currentLang);

    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderAlbums(e.target.value);
        });
    }
});

// ===== ЗВЁЗДЫ =====
const canvas = document.getElementById('stars');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        stars = [];
        const count = Math.floor(width * height / 8000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 1.5 + 0.3,
                alpha: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => {
            s.alpha += s.speed;
            if (s.alpha > 1 || s.alpha < 0.1) s.speed *= -1;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
}
