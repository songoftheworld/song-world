const albums = [
    // Пример альбома, который мы уже сделали
    { 
        name: "Kisii Rain", 
        nameEn: "Kisii Rain", 
        type: "EP", // Или "Альбом"
        cover: "https://music.song-world.ru/kisii_rain_bg.jpg", // Путь к обложке
        playerUrl: "https://music.song-world.ru/kisii_rain.html", // Ссылка на страницу с плеером
        vkUrl: "" // Ссылка на пост ВК (если есть)
    }
];

// ===== СЛОВАРИ ПЕРЕВОДОВ ИНТЕРФЕЙСА =====
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

let currentLang = localStorage.getItem('emeraldLang') || 'ru';

function getAlbumName(album) {
    return currentLang === 'ru' ? album.name : (album.nameEn || album.name);
}

// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
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
            const li = document.createElement("li");
            li.className = "album-item";
            
            // Обложка
            const img = document.createElement("img");
            img.src = album.cover;
            img.alt = getAlbumName(album);
            img.className = "album-cover";
            
            // Название
            const title = document.createElement("h3");
            title.textContent = getAlbumName(album);
            
            // Кнопка PLAY (ведёт на нашу страницу с плеером)
            const playBtn = document.createElement("a");
            playBtn.href = album.playerUrl;
            playBtn.target = "_blank";
            playBtn.textContent = "▶ PLAY";
            playBtn.className = "play-btn";
            
            li.appendChild(img);
            li.appendChild(title);
            li.appendChild(playBtn);
            
            // Если есть ссылка на ВК, добавляем кнопку
            if (album.vkUrl) {
                const vkBtn = document.createElement("a");
                vkBtn.href = album.vkUrl;
                vkBtn.target = "_blank";
                vkBtn.textContent = "🎵 VK";
                vkBtn.className = "vk-btn";
                li.appendChild(vkBtn);
            }
            
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
