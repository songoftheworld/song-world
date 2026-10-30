const languages = [
    { name: "Абхазский язык", nameEn: "Abkhazian", url: "https://vk.cc/d0wOz9" },
    { name: "Аварский язык", nameEn: "Avar", url: "https://vk.cc/d0wOG1" },
    { name: "Авестийский язык", nameEn: "Avestan", url: "https://vk.cc/d06576" },
    { name: "Австрийский язык", nameEn: "Austrian", url: "https://vk.cc/cZQHYT" },
    { name: "Адыгейский язык", nameEn: "Adyghe", url: "https://vk.cc/d0Quek" },
    { name: "Азербайджанский язык", nameEn: "Azerbaijani", url: "https://vk.cc/d0fzY6" },
    { name: "Аймара язык", nameEn: "Aymara", url: "https://vk.cc/d2HSKQ" },
    { name: "Айнский язык", nameEn: "Ainu", url: "https://vk.cc/cZQKEF" },
    { name: "Албанский язык", nameEn: "Albanian", url: "https://vk.cc/d2lROy" },
    { name: "Алтайский язык", nameEn: "Altai", url: "https://vk.cc/d1TCP8" },
    { name: "Амхарский язык", nameEn: "Amharic", url: "https://vk.cc/d2dwGG" },
    { name: "Английский (Америка)", nameEn: "English (America)", url: "https://vk.cc/d1vdGJ" },
    { name: "Арабский язык", nameEn: "Arabic", url: "https://vk.cc/cZQHqP" },
    { name: "Аранта язык", nameEn: "Arrernte", url: "https://vk.cc/cZQQNg" },
    { name: "Армянский язык", nameEn: "Armenian", url: "https://vk.cc/d1pFyD" },
    { name: "Африкаанс язык", nameEn: "Afrikaans", url: "https://vk.cc/d008UN" },
    { name: "Баскский язык", nameEn: "Basque", url: "https://vk.cc/cZQIIg" },
    { name: "Башкирский язык", nameEn: "Bashkir", url: "https://vk.cc/cZQKLJ" },
    { name: "Белорусский язык", nameEn: "Belarusian", url: "https://vk.cc/cZQJZ3" },
    { name: "Бенгальский язык", nameEn: "Bengali", url: "https://vk.cc/cZQQi6" },
    { name: "Бирманский язык", nameEn: "Burmese", url: "https://vk.cc/d1pFId" },
    { name: "Болгарский язык", nameEn: "Bulgarian", url: "https://vk.cc/d08V33" },
    { name: "Боснийский язык", nameEn: "Bosnian", url: "https://vk.cc/cZQJVG" },
    { name: "Бразилия-Португальский", nameEn: "Brazilian Portuguese", url: "https://vk.cc/cZQK4P" },
    { name: "Бретонский язык", nameEn: "Breton", url: "https://vk.cc/cZQJAE" },
    { name: "Бурятский язык", nameEn: "Buryat", url: "https://vk.cc/cZQIt6" },
    { name: "Валлийский язык", nameEn: "Welsh", url: "https://vk.cc/d0wOCN" },
    { name: "Венгерский язык", nameEn: "Hungarian", url: "https://vk.cc/cZQIfV" },
    { name: "Вепсский язык", nameEn: "Veps", url: "https://vk.cc/cZRuRe" },
    { name: "Вьетнамский язык", nameEn: "Vietnamese", url: "https://vk.cc/cZQHNn" },
    { name: "Гавайский язык (РЕЛИЗ)", nameEn: "Hawaiian (Release)", url: "https://vk.cc/cZQLfH" },
    { name: "Галисийский язык", nameEn: "Galician", url: "https://vk.cc/d27Vx3" },
    { name: "Греческий язык", nameEn: "Greek", url: "https://vk.cc/cZQHuJ" },
    { name: "Грузинский язык", nameEn: "Georgian", url: "https://vk.cc/cZQJ0e" },
    { name: "Гуарани язык", nameEn: "Guarani", url: "https://vk.cc/d1TD0t" },
    { name: "Гуджарати язык", nameEn: "Gujarati", url: "https://vk.cc/d22dOr" },
    { name: "Даргинский язык", nameEn: "Dargwa", url: "https://vk.cc/cZQQpT" },
    { name: "Датский язык", nameEn: "Danish", url: "https://vk.cc/d1gnqf" },
    { name: "Дия", nameEn: "Diya", url: "https://vk.cc/cZQQTU" },
    { name: "Долганский язык", nameEn: "Dolgan", url: "https://vk.cc/d0A9hV" },
    { name: "Древнеармянский язык", nameEn: "Old Armenian", url: "https://vk.cc/cZQKmc" },
    { name: "Зулусский язык", nameEn: "Zulu", url: "https://vk.cc/cZQKTu" },
    { name: "Иврит язык", nameEn: "Hebrew", url: "https://vk.cc/cZQI1L" },
    { name: "Ингушский язык", nameEn: "Ingush", url: "https://vk.cc/cZQR6a" },
    { name: "Индонезийский язык", nameEn: "Indonesian", url: "https://vk.cc/cZQKI0" },
    { name: "Ирландский язык", nameEn: "Irish", url: "https://vk.cc/cZQKsZ" },
    { name: "Исландский язык", nameEn: "Icelandic", url: "https://vk.cc/cZQIjc" },
    { name: "Испанский язык", nameEn: "Spanish", url: "https://vk.cc/cZQCW9" },
    { name: "Итальянский язык", nameEn: "Italian", url: "https://vk.cc/cZQH3q" },
    { name: "Ительменский язык (РЕЛИЗ)", nameEn: "Itelmen (Release)", url: "https://vk.cc/cZQL3G" },
    { name: "Ишанский язык", nameEn: "Ishan", url: "https://vk.cc/d1lNWG" },
    { name: "Йоруба язык", nameEn: "Yoruba", url: "https://vk.cc/d0nTFk" },
    { name: "Кабардино-черкесский язык", nameEn: "Kabardian", url: "https://vk.cc/d147Ra" },
    { name: "Казахский язык", nameEn: "Kazakh", url: "https://vk.cc/cZQKBm" },
    { name: "Калмыцкий язык", nameEn: "Kalmyk", url: "https://vk.cc/d2C4H9" },
    { name: "Карачаево-балкарский", nameEn: "Karachay-Balkar", url: "https://vk.cc/d17PbD" },
    { name: "Карельский язык", nameEn: "Karelian", url: "https://vk.cc/d0cBUl" },
    { name: "Кечуа язык", nameEn: "Quechua", url: "https://vk.cc/cZQIxf" },
    { name: "Кетский язык", nameEn: "Ket", url: "https://vk.cc/cZQR0K" },
    { name: "Киргизский язык", nameEn: "Kyrgyz", url: "https://vk.ru/wall-237994889_916" },
    { name: "Китайский язык", nameEn: "Chinese", url: "https://vk.cc/cZQCPC" },
    { name: "Коми-Зырянский язык", nameEn: "Komi-Zyrian", url: "https://vk.cc/d1C182" },
    { name: "Корейский язык", nameEn: "Korean", url: "https://vk.cc/cZQHBC" },
    { name: "Корнский язык", nameEn: "Cornish", url: "https://vk.cc/cZQK1D" },
    { name: "Корсиканский язык", nameEn: "Corsican", url: "https://vk.cc/cZQHJq" },
    { name: "Косо язык", nameEn: "Xhosa", url: "https://vk.cc/cZQImQ" },
    { name: "Крымскотатарский язык", nameEn: "Crimean Tatar", url: "https://vk.cc/cZQJEc" },
    { name: "Куба-Испанский", nameEn: "Cuban Spanish", url: "https://vk.cc/cZQQXS" },
    { name: "Кумыкский язык", nameEn: "Kumyk", url: "https://vk.cc/d1jHzK" },
    { name: "Кунвиньку язык", nameEn: "Kunwinjku", url: "https://vk.cc/d0sQR5" },
    { name: "Кхмерский язык", nameEn: "Khmer", url: "https://vk.cc/d0fzGY" },
    { name: "Латинский язык", nameEn: "Latin", url: "https://vk.cc/d2QqIr" },
    { name: "Латышский язык", nameEn: "Latvian", url: "https://vk.cc/d27i5m" },
    { name: "Лезгинский язык", nameEn: "Lezgian", url: "https://vk.cc/d1vdpC" },
    { name: "Литовский язык", nameEn: "Lithuanian", url: "https://vk.cc/d1CwdB" },
    { name: "Луо язык", nameEn: "Luo", url: "https://vk.cc/d0ShZu" },
    { name: "Люксембургский язык", nameEn: "Luxembourgish", url: "https://vk.cc/d2QqQZ" },
    { name: "Малайский язык", nameEn: "Malay", url: "https://vk.cc/d1TCCX" },
    { name: "Малаяламский язык", nameEn: "Malayalam", url: "https://vk.cc/d1jHFf" },
    { name: "Мальтийский язык", nameEn: "Maltese", url: "https://vk.cc/cZQL03" },
    { name: "Маори язык", nameEn: "Maori", url: "https://vk.cc/d0098E" },
    { name: "Мапуче язык", nameEn: "Mapuche", url: "https://vk.cc/cZQR3a" },
    { name: "Маратхи язык", nameEn: "Marathi", url: "https://vk.cc/d2lS08" },
    { name: "Марийский язык", nameEn: "Mari", url: "https://vk.cc/d148ch" },
    { name: "Масайский язык", nameEn: "Maasai", url: "https://vk.cc/d0gOia" },
    { name: "Молдавский язык", nameEn: "Moldavian", url: "https://vk.cc/d0lTro" },
    { name: "Монгольский язык", nameEn: "Mongolian", url: "https://vk.cc/d147zX" },
    { name: "Мордовский (Мокшанский) язык", nameEn: "Mordovian (Moksha)", url: "https://vk.cc/d0Qui8" },
    { name: "Мордовский (Эрзянский) язык", nameEn: "Mordovian (Erzya)", url: "https://vk.cc/cZQIEs" },
    { name: "Навахо язык", nameEn: "Navajo", url: "https://vk.cc/d0KRVq" },
    { name: "Нанайский язык", nameEn: "Nanai", url: "https://vk.cc/d27i1R" },
    { name: "Немецкий язык", nameEn: "German", url: "https://vk.cc/cZQH87" },
    { name: "Непальский язык", nameEn: "Nepali", url: "https://vk.cc/d22e7d" },
    { name: "Нивхский язык", nameEn: "Nivkh", url: "https://vk.cc/cZQLm7" },
    { name: "Ногайский язык", nameEn: "Nogai", url: "https://vk.cc/d22edU" },
    { name: "Норвежский язык", nameEn: "Norwegian", url: "https://vk.cc/cZQHQI" },
    { name: "Окситанский язык", nameEn: "Occitan", url: "https://vk.cc/d2QqXN" },
    { name: "Оромо язык", nameEn: "Oromo", url: "https://vk.cc/cZTjWC" },
    { name: "Осетинский язык", nameEn: "Ossetian", url: "https://vk.cc/cZULr5" },
    { name: "Панджаби язык", nameEn: "Punjabi", url: "https://vk.cc/d2dwNG" },
    { name: "Персидский язык", nameEn: "Persian", url: "https://vk.cc/d0b2q3" },
    { name: "Польский язык", nameEn: "Polish", url: "https://vk.cc/cZQI94" },
    { name: "Португальский язык", nameEn: "Portuguese", url: "https://vk.cc/cZQHhW" },
    { name: "Пушту язык", nameEn: "Pashto", url: "https://vk.cc/d0zM26" },
    { name: "Румынский язык", nameEn: "Romanian", url: "https://vk.cc/d1TCte" },
    { name: "Русский язык", nameEn: "Russian", url: "https://vk.cc/cZQD3w" },
    { name: "Русский язык (РЕЛИЗ «Свет Мира»)", nameEn: "Russian (Release «Light of the World»)", url: "https://vk.cc/cZQJHz" },
    { name: "Санскрит", nameEn: "Sanskrit", url: "https://vk.cc/cZWn2p" },
    { name: "Сардинский язык", nameEn: "Sardinian", url: "https://vk.cc/d2P8vv" },
    { name: "Сингальский язык", nameEn: "Sinhala", url: "https://vk.cc/d22eok" },
    { name: "Суахили язык", nameEn: "Swahili", url: "https://vk.cc/cZQIPW" },
    { name: "Сунданский язык", nameEn: "Sundanese", url: "https://vk.cc/d2lRTL" },
    { name: "Тагальский язык", nameEn: "Tagalog", url: "https://vk.cc/d22dZz" },
    { name: "Таджикский язык", nameEn: "Tajik", url: "https://vk.cc/d0jXv0" },
    { name: "Таино язык", nameEn: "Taino", url: "https://vk.cc/cZQQn3" },
    { name: "Тайский язык", nameEn: "Thai", url: "https://vk.cc/cZQIA7" },
    { name: "Тамильский язык", nameEn: "Tamil", url: "https://vk.cc/d0kR93" },
    { name: "Татарский язык", nameEn: "Tatar", url: "https://vk.cc/d1lNMM" },
    { name: "Тауширо язык", nameEn: "Taushiro", url: "https://vk.cc/cZQL79" },
    { name: "Телугу язык", nameEn: "Telugu", url: "https://vk.cc/d2mInM" },
    { name: "Тибетский язык", nameEn: "Tibetan", url: "https://vk.cc/cZQKxE" },
    { name: "Тонганский язык", nameEn: "Tongan", url: "https://vk.cc/cZQQt7" },
    { name: "Тофаларский язык", nameEn: "Tofalar", url: "https://vk.cc/cZQQko" },
    { name: "Тувинский язык", nameEn: "Tuvan", url: "https://vk.cc/cZQQx0" },
    { name: "Тунисский язык", nameEn: "Tunisian", url: "https://vk.cc/cZQIMs" },
    { name: "Туркменский язык", nameEn: "Turkmen", url: "https://vk.cc/cZQJKu" },
    { name: "Турецкий язык", nameEn: "Turkish", url: "https://vk.cc/cZQHFT" },
    { name: "Удмуртский язык", nameEn: "Udmurt", url: "https://vk.cc/d1C12z" },
    { name: "Удэгейский язык", nameEn: "Udege", url: "https://vk.cc/cZQQe2" },
    { name: "Узбекский язык", nameEn: "Uzbek", url: "https://vk.cc/d0DG2E" },
    { name: "Урартский язык", nameEn: "Urartian", url: "https://vk.cc/cZQJPo" },
    { name: "Урду язык", nameEn: "Urdu", url: "https://vk.cc/d2lS8M" },
    { name: "Фиджи язык", nameEn: "Fijian", url: "https://vk.cc/d0KRRI" },
    { name: "Финский язык", nameEn: "Finnish", url: "https://vk.cc/cZQIcw" },
    { name: "Французский язык", nameEn: "French", url: "https://vk.cc/cZQD80" },
    { name: "Фризский язык", nameEn: "Frisian", url: "https://vk.cc/d1TCmo" },
    { name: "Хакасский язык", nameEn: "Khakas", url: "https://vk.cc/d2tcln" },
    { name: "Хауса язык", nameEn: "Hausa", url: "https://vk.cc/cZQQQd" },
    { name: "Хинди язык", nameEn: "Hindi", url: "https://vk.cc/cZQHxY" },
    { name: "Цыганский язык", nameEn: "Romani", url: "https://vk.cc/d03Y8x" },
    { name: "Чероки язык", nameEn: "Cherokee", url: "https://vk.cc/d0Wg6C" },
    { name: "Чеченский язык", nameEn: "Chechen", url: "https://vk.cc/d076lB" },
    { name: "Чешский язык", nameEn: "Czech", url: "https://vk.cc/cZQHUV" },
    { name: "Чувашский язык", nameEn: "Chuvash", url: "https://vk.cc/d0qFJ7" },
    { name: "Чукотский язык", nameEn: "Chukchi", url: "https://vk.cc/cZQJ9N" },
    { name: "Шведский язык", nameEn: "Swedish", url: "https://vk.cc/d1vdTB" },
    { name: "Швейцарский язык", nameEn: "Swiss German", url: "https://vk.cc/cZQJ4V" },
    { name: "Шорский язык", nameEn: "Shor", url: "https://vk.cc/cZQKWV" },
    { name: "Шотландский язык", nameEn: "Scottish Gaelic", url: "https://vk.cc/d0MlG1" },
    { name: "Эсперанто язык", nameEn: "Esperanto", url: "https://vk.cc/cZQIql" },
    { name: "Яванския язык", nameEn: "Javanese", url: "https://vk.cc/d2dwJV" },
    { name: "Якутский язык", nameEn: "Yakut", url: "https://vk.cc/d0TdQO" },
    { name: "Сицилийский язык", nameEn: "Sicilian", url: "https://vk.ru/wall-237994889_845" },
    { name: "Каталанский язык", nameEn: "Catalan", url: "https://vk.ru/wall-237994889_848" },
    { name: "Токипона язык", nameEn: "Toki Pona", url: "https://vk.ru/wall-237994889_855" },
    { name: "Гренландский язык", nameEn: "Greenlandic", url: "https://vk.ru/wall-237994889_860" },
    { name: "Акан язык", nameEn: "Akan", url: "https://vk.ru/wall-237994889_863" },
    { name: "Афарский язык", nameEn: "Afar", url: "https://vk.ru/wall-237994889_867" },
    { name: "Волоф язык", nameEn: "Wolof", url: "https://vk.ru/wall-237994889_871" },
    { name: "Гэльский шотландия", nameEn: "Scottish Gaelic", url: "https://vk.ru/wall-237994889_877" },
    { name: "Кантонский язык", nameEn: "Cantonese", url: "https://vk.ru/wall-237994889_881" },
    { name: "Гаитянский креольский язык", nameEn: "Haitian Creole", url: "https://vk.ru/wall-237994889_885" },
    { name: "Бислама язык", nameEn: "Bislama", url: "https://vk.ru/wall-237994889_889" },
    { name: "Чви язык", nameEn: "Twi", url: "https://vk.ru/wall-237994889_894" },
    { name: "Рутульский язык", nameEn: "Rutul", url: "https://vk.ru/wall-237994889_898" },
    { name: "Йолнгу язык", nameEn: "Yolngu", url: "https://vk.ru/wall-237994889_902" },
    { name: "Лингала язык", nameEn: "Lingala", url: "https://vk.ru/wall-237994889_906" },
    { name: "Каннада язык", nameEn: "Kannada", url: "https://vk.ru/wall-237994889_910" },
    { name: "Лакский язык", nameEn: "Lak", url: "https://vk.ru/wall-237994889_922" },
    { name: "Японский язык", nameEn: "Japanese", url: "https://vk.cc/cZQHel" }
];

// ===== СЛОВАРИ ПЕРЕВОДОВ ИНТЕРФЕЙСА =====
const translations = {
    ru: {
        title: "ЗОЛОТАЯ КНИГА",
        subtitle: "«Песня Мира» — Алексей Роньжин. Авторский проект.",
        desc1: "Одна песня звучит на всех языках мира.",
        desc2: "Каждая ссылка ведёт на пост VK с текстом, переводом и аудио.",
        desc3: "Слушай. Чувствуй. Рождается наш общий свет.",
        btnRadio: "📻 Радио",
        btnVk: "🎵 ВКонтакте",
        btnYt: "▶️ YouTube",
        btnTg: "✈️ Telegram",
        searchPlaceholder: "Поиск по языку...",
        pinTitle: "📌 Наш Pinterest",
        footer: "© Алексей Роньжин. «Песня Мира».",
        countText: (n) => {
            const lastDigit = n % 10;
            const lastTwo = n % 100;
            let word = "языков";
            if (lastTwo < 11 || lastTwo > 14) {
                if (lastDigit === 1) word = "язык";
                else if (lastDigit >= 2 && lastDigit <= 4) word = "языка";
            }
            return `В книге: ${n} ${word}`;
        }
    },
    en: {
        title: "THE GOLDEN BOOK",
        subtitle: "«Song of the World» — Alexey Ronzhin. Original project.",
        desc1: "One song sounds in all languages of the world.",
        desc2: "Each link leads to a VK post with lyrics, translation and audio.",
        desc3: "Listen. Feel. Our shared light is born.",
        btnRadio: "📻 Radio",
        btnVk: "🎵 VK",
        btnYt: "▶️ YouTube",
        btnTg: "✈️ Telegram",
        searchPlaceholder: "Search by language...",
        pinTitle: "📌 Our Pinterest",
        footer: "© Alexey Ronzhin. «Song of the World».",
        countText: (n) => `In the book: ${n} languages`
    }
};

let currentLang = localStorage.getItem('siteLang') || 'ru';

// ===== ПОЛУЧЕНИЕ ИМЕНИ ЯЗЫКА =====
function getLangName(lang) {
    if (currentLang === 'ru') return lang.name;
    return lang.nameEn || lang.name; // Если nameEn нет, покажет русское название
}

// ===== АВТОСОРТИРОВКА =====
languages.sort((a, b) => getLangName(a).localeCompare(getLangName(b), currentLang === 'ru' ? 'ru' : 'en'));

// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
function switchLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('siteLang', langCode);
    
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
    
    const pinHeader = document.querySelector('.pinterest-widget h2');
    if (pinHeader) pinHeader.textContent = t.pinTitle;
    
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.innerHTML = t.footer;
    
    const btnRu = document.getElementById('btn-ru');
    const btnEn = document.getElementById('btn-en');
    if (btnRu) btnRu.style.opacity = langCode === 'ru' ? '1' : '0.4';
    if (btnEn) btnEn.style.opacity = langCode === 'en' ? '1' : '0.4';
    
    languages.sort((a, b) => getLangName(a).localeCompare(getLangName(b), langCode === 'ru' ? 'ru' : 'en'));
    renderLanguages(document.getElementById('search').value);
}

function renderLanguages(filter = "") {
    const list = document.getElementById("lang-list");
    if (!list) return;
    
    list.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    
    languages
        .filter(lang => getLangName(lang).toLowerCase().includes(lowerFilter))
        .forEach(lang => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = lang.url;
            a.target = "_blank";
            a.textContent = getLangName(lang);
            li.appendChild(a);
            list.appendChild(li);
        });

    const counter = document.getElementById("lang-count");
    if (counter) {
        counter.textContent = translations[currentLang].countText(languages.length);
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
