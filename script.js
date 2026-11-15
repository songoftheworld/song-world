const languages = [
    { name: "Абхазский язык", nameEn: "Abkhazian", url: "https://vk.cc/d0wOz9" },
    // ... (все остальные языки из твоего файла) ...
    { name: "Японский язык", nameEn: "Japanese", url: "https://vk.cc/cZQHel" }
];

// ===== СПИСОК АЛЬБОМОВ =====
const albums = [
    { 
        name: "Гусии (Кения)", albumName: "Поцелуй дождя", 
        nameEn: "Gusii (Kenya)", albumNameEn: "Kisii Rain",
        cover: "https://music.song-world.ru/Kisii_Rain_album.jpg", 
        playerUrl: "https://music.song-world.ru/kisii_rain.html"
    },
    { 
        name: "Бамбара (Мали)", albumName: "Карнавал джаза", 
        nameEn: "Bambara (Mali)", albumNameEn: "Jazz Carnival",
        cover: "https://music.song-world.ru/Bambara_ST_1280_720.jpg", // Замени на реальную обложку
        playerUrl: "https://music.song-world.ru/bambara_carnival.html"
    }
];

const translations = {
    ru: {
        title: "ЗОЛОТАЯ КНИГА",
        subtitle: "«Песня Мира» — Алексей Роньжин. Авторский проект.",
        desc1: "Одна песня звучит на всех языках мира.",
        desc2: "Каждая ссылка ведёт на пост VK с текстом, переводом и аудио.",
        desc3: "Слушай. Чувствуй. Рождается наш общий свет.",
        btnRadio: "📻 Радио", btnVk: "🎵 ВКонтакте", btnYt: "▶️ YouTube", btnTg: "✈️ Telegram",
        searchPlaceholder: "Поиск по языку...",
        pinterestTitle: "Pinterest",
        footer: "© Алексей Роньжин",
        countText: (n) => `В книге: ${n} языков`,
        
        emeraldTitle: "ИЗУМРУДНАЯ КНИГА",
        emeraldSubtitle: "«Музыка Мира» — Алексей Роньжин. Инструментальный проект.",
        emeraldDesc1: "Музыка, которая не нуждается в переводе.",
        emeraldDesc2: "Целые альбомы, созданные для вдохновения и путешествий.",
        emeraldDesc3: "Слушай. Чувствуй. Рождается наш общий свет.",
        emeraldSearchPlaceholder: "Поиск по альбомам..."
    },
    en: {
        title: "THE GOLDEN BOOK",
        subtitle: "«Song of the World» — Alexey Ronzhin. Original project.",
        desc1: "One song sounds in all languages of the world.",
        desc2: "Each link leads to a VK post with lyrics, translation and audio.",
        desc3: "Listen. Feel. Our shared light is born.",
        btnRadio: "📻 Radio", btnVk: "🎵 VK", btnYt: "▶️ YouTube", btnTg: "✈️ Telegram",
        searchPlaceholder: "Search by language...",
        pinterestTitle: "Pinterest",
        footer: "© Alexey Ronzhin",
        countText: (n) => `In the book: ${n} languages`,
        
        emeraldTitle: "THE EMERALD BOOK",
        emeraldSubtitle: "«Music of the World» — Alexey Ronzhin. Instrumental project.",
        emeraldDesc1: "Music that needs no translation.",
        emeraldDesc2: "Full albums created for inspiration and travel.",
        emeraldDesc3: "Listen. Feel. Our shared light is born.",
        emeraldSearchPlaceholder: "Search by album..."
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

function switchLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('siteLang', langCode);
    const t = translations[langCode];
    
    // Золотая книга
    document.querySelector('header h1').textContent = t.title;
    document.querySelector('header .subtitle').textContent = t.subtitle;
    const desc = document.querySelector('header .description');
    if (desc) desc.innerHTML = t.desc1 + '<br>' + t.desc2 + '<br>' + t.desc3;
    
    const links = document.querySelectorAll('.links a');
    if (links.length >= 4) {
        links[0].textContent = t.btnRadio; links[1].textContent = t.btnVk;
        links[2].textContent = t.btnYt; links[3].textContent = t.btnTg;
    }
    
    document.getElementById('search').placeholder = t.searchPlaceholder;
    
    const pinTitle = document.getElementById('pinterest-title');
    if (pinTitle) pinTitle.textContent = t.pinterestTitle;
    
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.textContent = t.footer;
    
    // Изумрудная книга
    const emeraldTitle = document.getElementById('emerald-title');
    const emeraldSubtitle = document.getElementById('emerald-subtitle');
    const emeraldDesc = document.getElementById('emerald-description');
    
    if (emeraldTitle) emeraldTitle.textContent = t.emeraldTitle;
    if (emeraldSubtitle) emeraldSubtitle.textContent = t.emeraldSubtitle;
    if (emeraldDesc) emeraldDesc.innerHTML = t.emeraldDesc1 + '<br>' + t.emeraldDesc2 + '<br>' + t.emeraldDesc3;
    
    const emRadio = document.getElementById('em-radio');
    const emVk = document.getElementById('em-vk');
    const emYt = document.getElementById('em-yt');
    const emTg = document.getElementById('em-tg');
    if (emRadio) emRadio.textContent = t.btnRadio;
    if (emVk) emVk.textContent = t.btnVk;
    if (emYt) emYt.textContent = t.btnYt;
    if (emTg) emTg.textContent = t.btnTg;
    
    const emeraldSearch = document.getElementById('emerald-search');
    if (emeraldSearch) emeraldSearch.placeholder = t.emeraldSearchPlaceholder;
    
    renderLanguages(document.getElementById('search').value);
    renderAlbums(document.getElementById('emerald-search').value);
    
    const btnRu = document.getElementById('btn-ru');
    const btnEn = document.getElementById('btn-en');
    if (btnRu) btnRu.style.opacity = langCode === 'ru' ? '1' : '0.4';
    if (btnEn) btnEn.style.opacity = langCode === 'en' ? '1' : '0.4';

    const btnRuEm = document.getElementById('btn-ru-emerald');
    const btnEnEm = document.getElementById('btn-en-emerald');
    if (btnRuEm) btnRuEm.style.opacity = langCode === 'ru' ? '1' : '0.4';
    if (btnEnEm) btnEnEm.style.opacity = langCode === 'en' ? '1' : '0.4';
}

function renderLanguages(filter = "") {
    const list = document.getElementById("lang-list");
    if (!list) return;
    list.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    
    languages
        .filter(lang => (currentLang === 'ru' ? lang.name : lang.nameEn || lang.name).toLowerCase().includes(lowerFilter))
        .forEach(lang => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = lang.url;
            a.target = "_blank";
            a.textContent = currentLang === 'ru' ? lang.name : (lang.nameEn || lang.name);
            li.appendChild(a);
            list.appendChild(li);
        });

    const counter = document.getElementById("lang-count");
    if (counter) counter.textContent = translations[currentLang].countText(languages.length);
}

function renderAlbums(filter = "") {
    const list = document.getElementById("emerald-album-list");
    if (!list) return;
    list.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    
    albums
        .filter(album => (currentLang === 'ru' ? album.name : album.nameEn || album.name).toLowerCase().includes(lowerFilter))
        .forEach(album => {
            const li = document.createElement("li");
            li.className = "album-item";
            
            const cardLink = document.createElement("a");
            cardLink.href = album.playerUrl;
            cardLink.target = "_blank";
            cardLink.className = "album-link";
            
            const img = document.createElement("img");
            img.src = album.cover;
            img.alt = currentLang === 'ru' ? album.name : album.nameEn;
            img.className = "album-cover";
            
            const title = document.createElement("h3");
            title.className = "album-title";
            title.textContent = currentLang === 'ru' ? album.name : album.nameEn;
            
            const subtitle = document.createElement("p");
            subtitle.className = "album-subtitle";
            subtitle.textContent = currentLang === 'ru' ? album.albumName : album.albumNameEn;
            
            const playText = document.createElement("div");
            playText.className = "play-text";
            playText.textContent = "▶ PLAY";
            
            cardLink.appendChild(img);
            cardLink.appendChild(title);
            cardLink.appendChild(subtitle);
            cardLink.appendChild(playText);
            li.appendChild(cardLink);
            list.appendChild(li);
        });
        
    const albumCounter = document.getElementById("album-count");
    if (albumCounter) {
        albumCounter.textContent = currentLang === 'ru' ? `Альбомов: ${albums.length}` : `Albums: ${albums.length}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    switchLanguage(currentLang);
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderLanguages(e.target.value);
        });
    }
    const emeraldSearchInput = document.getElementById("emerald-search");
    if (emeraldSearchInput) {
        emeraldSearchInput.addEventListener("input", (e) => {
            renderAlbums(e.target.value);
        });
    }
});

// ===== ЗВЁЗДЫ =====
const canvas = document.getElementById('stars');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [], width, height;
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        stars = [];
        for (let i = 0; i < Math.floor(width * height / 8000); i++) {
            stars.push({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.5 + 0.3, alpha: Math.random(), speed: Math.random() * 0.02 + 0.005 });
        }
    }
    function draw() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => {
            s.alpha += s.speed;
            if (s.alpha > 1 || s.alpha < 0.1) s.speed *= -1;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`; ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', resize); resize(); draw();
}
