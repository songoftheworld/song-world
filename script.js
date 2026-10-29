const languages = [
    { name: "Абхазский язык", url: "https://vk.cc/d0wOz9" },
    { name: "Аварский язык", url: "https://vk.cc/d0wOG1" },
    { name: "Авестийский язык", url: "https://vk.cc/d06576" },
    { name: "Австрийский язык", url: "https://vk.cc/cZQHYT" },
    { name: "Адыгейский язык", url: "https://vk.cc/d0Quek" },
    { name: "Азербайджанский язык", url: "https://vk.cc/d0fzY6" },
    { name: "Аймара язык", url: "https://vk.cc/d2HSKQ" },
    { name: "Айнский язык", url: "https://vk.cc/cZQKEF" },
    { name: "Албанский язык", url: "https://vk.cc/d2lROy" },
    { name: "Алтайский язык", url: "https://vk.cc/d1TCP8" },
    { name: "Амхарский язык", url: "https://vk.cc/d2dwGG" },
    { name: "Английский (Америка)", url: "https://vk.cc/d1vdGJ" },
    { name: "Арабский язык", url: "https://vk.cc/cZQHqP" },
    { name: "Аранта язык", url: "https://vk.cc/cZQQNg" },
    { name: "Армянский язык", url: "https://vk.cc/d1pFyD" },
    { name: "Африкаанс язык", url: "https://vk.cc/d008UN" },
    { name: "Баскский язык", url: "https://vk.cc/cZQIIg" },
    { name: "Башкирский язык", url: "https://vk.cc/cZQKLJ" },
    { name: "Белорусский язык", url: "https://vk.cc/cZQJZ3" },
    { name: "Бенгальский язык", url: "https://vk.cc/cZQQi6" },
    { name: "Бирманский язык", url: "https://vk.cc/d1pFId" },
    { name: "Болгарский язык", url: "https://vk.cc/d08V33" },
    { name: "Боснийский язык", url: "https://vk.cc/cZQJVG" },
    { name: "Бразилия-Португальский", url: "https://vk.cc/cZQK4P" },
    { name: "Бретонский язык", url: "https://vk.cc/cZQJAE" },
    { name: "Бурятский язык", url: "https://vk.cc/cZQIt6" },
    { name: "Валлийский язык", url: "https://vk.cc/d0wOCN" },
    { name: "Венгерский язык", url: "https://vk.cc/cZQIfV" },
    { name: "Вепсский язык", url: "https://vk.cc/cZRuRe" },
    { name: "Вьетнамский язык", url: "https://vk.cc/cZQHNn" },
    { name: "Гавайский язык (РЕЛИЗ)", url: "https://vk.cc/cZQLfH" },
    { name: "Галисийский язык", url: "https://vk.cc/d27Vx3" },
    { name: "Греческий язык", url: "https://vk.cc/cZQHuJ" },
    { name: "Грузинский язык", url: "https://vk.cc/cZQJ0e" },
    { name: "Гуарани язык", url: "https://vk.cc/d1TD0t" },
    { name: "Гуджарати язык", url: "https://vk.cc/d22dOr" },
    { name: "Даргинский язык", url: "https://vk.cc/cZQQpT" },
    { name: "Датский язык", url: "https://vk.cc/d1gnqf" },
    { name: "Дия", url: "https://vk.cc/cZQQTU" },
    { name: "Долганский язык", url: "https://vk.cc/d0A9hV" },
    { name: "Древнеармянский язык", url: "https://vk.cc/cZQKmc" },
    { name: "Зулусский язык", url: "https://vk.cc/cZQKTu" },
    { name: "Иврит язык", url: "https://vk.cc/cZQI1L" },
    { name: "Ингушский язык", url: "https://vk.cc/cZQR6a" },
    { name: "Индонезийский язык", url: "https://vk.cc/cZQKI0" },
    { name: "Ирландский язык", url: "https://vk.cc/cZQKsZ" },
    { name: "Исландский язык", url: "https://vk.cc/cZQIjc" },
    { name: "Испанский язык", url: "https://vk.cc/cZQCW9" },
    { name: "Итальянский язык", url: "https://vk.cc/cZQH3q" },
    { name: "Ительменский язык (РЕЛИЗ)", url: "https://vk.cc/cZQL3G" },
    { name: "Ишанский язык", url: "https://vk.cc/d1lNWG" },
    { name: "Йоруба язык", url: "https://vk.cc/d0nTFk" },
    { name: "Кабардино-черкесский язык", url: "https://vk.cc/d147Ra" },
    { name: "Казахский язык", url: "https://vk.cc/cZQKBm" },
    { name: "Калмыцкий язык", url: "https://vk.cc/d2C4H9" },
    { name: "Карачаево-балкарский", url: "https://vk.cc/d17PbD" },
    { name: "Карельский язык", url: "https://vk.cc/d0cBUl" },
    { name: "Кечуа язык", url: "https://vk.cc/cZQIxf" },
    { name: "Кетский язык", url: "https://vk.cc/cZQR0K" },
    { name: "Китайский язык", url: "https://vk.cc/cZQCPC" },
    { name: "Коми-Зырянский язык", url: "https://vk.cc/d1C182" },
    { name: "Корейский язык", url: "https://vk.cc/cZQHBC" },
    { name: "Корнский язык", url: "https://vk.cc/cZQK1D" },
    { name: "Корсиканский язык", url: "https://vk.cc/cZQHJq" },
    { name: "Косо язык", url: "https://vk.cc/cZQImQ" },
    { name: "Крымскотатарский язык", url: "https://vk.cc/cZQJEc" },
    { name: "Куба-Испанский", url: "https://vk.cc/cZQQXS" },
    { name: "Кумыкский язык", url: "https://vk.cc/d1jHzK" },
    { name: "Кунвиньку язык", url: "https://vk.cc/d0sQR5" },
    { name: "Кхмерский язык", url: "https://vk.cc/d0fzGY" },
    { name: "Латинский язык", url: "https://vk.cc/d2QqIr" },
    { name: "Латышский язык", url: "https://vk.cc/d27i5m" },
    { name: "Лезгинский язык", url: "https://vk.cc/d1vdpC" },
    { name: "Литовский язык", url: "https://vk.cc/d1CwdB" },
    { name: "Луо язык", url: "https://vk.cc/d0ShZu" },
    { name: "Люксембургский язык", url: "https://vk.cc/d2QqQZ" },
    { name: "Малайский язык", url: "https://vk.cc/d1TCCX" },
    { name: "Малаяламский язык", url: "https://vk.cc/d1jHFf" },
    { name: "Мальтийский язык", url: "https://vk.cc/cZQL03" },
    { name: "Маори язык", url: "https://vk.cc/d0098E" },
    { name: "Мапуче язык", url: "https://vk.cc/cZQR3a" },
    { name: "Маратхи язык", url: "https://vk.cc/d2lS08" },
    { name: "Марийский язык", url: "https://vk.cc/d148ch" },
    { name: "Масайский язык", url: "https://vk.cc/d0gOia" },
    { name: "Молдавский язык", url: "https://vk.cc/d0lTro" },
    { name: "Монгольский язык", url: "https://vk.cc/d147zX" },
    { name: "Мордовский (Мокшанский) язык", url: "https://vk.cc/d0Qui8" },
    { name: "Мордовский (Эрзянский) язык", url: "https://vk.cc/cZQIEs" },
    { name: "Навахо язык", url: "https://vk.cc/d0KRVq" },
    { name: "Нанайский язык", url: "https://vk.cc/d27i1R" },
    { name: "Немецкий язык", url: "https://vk.cc/cZQH87" },
    { name: "Непальский язык", url: "https://vk.cc/d22e7d" },
    { name: "Нивхский язык", url: "https://vk.cc/cZQLm7" },
    { name: "Ногайский язык", url: "https://vk.cc/d22edU" },
    { name: "Норвежский язык", url: "https://vk.cc/cZQHQI" },
    { name: "Окситанский язык", url: "https://vk.cc/d2QqXN" },
    { name: "Оромо язык", url: "https://vk.cc/cZTjWC" },
    { name: "Осетинский язык", url: "https://vk.cc/cZULr5" },
    { name: "Панджаби язык", url: "https://vk.cc/d2dwNG" },
    { name: "Персидский язык", url: "https://vk.cc/d0b2q3" },
    { name: "Польский язык", url: "https://vk.cc/cZQI94" },
    { name: "Португальский язык", url: "https://vk.cc/cZQHhW" },
    { name: "Пушту язык", url: "https://vk.cc/d0zM26" },
    { name: "Румынский язык", url: "https://vk.cc/d1TCte" },
    { name: "Русский язык", url: "https://vk.cc/cZQD3w" },
    { name: "Русский язык (РЕЛИЗ «Свет Мира»)", url: "https://vk.cc/cZQJHz" },
    { name: "Санскрит", url: "https://vk.cc/cZWn2p" },
    { name: "Сардинский язык", url: "https://vk.cc/d2P8vv" },
    { name: "Сингальский язык", url: "https://vk.cc/d22eok" },
    { name: "Суахили язык", url: "https://vk.cc/cZQIPW" },
    { name: "Сунданский язык", url: "https://vk.cc/d2lRTL" },
    { name: "Тагальский язык", url: "https://vk.cc/d22dZz" },
    { name: "Таджикский язык", url: "https://vk.cc/d0jXv0" },
    { name: "Таино язык", url: "https://vk.cc/cZQQn3" },
    { name: "Тайский язык", url: "https://vk.cc/cZQIA7" },
    { name: "Тамильский язык", url: "https://vk.cc/d0kR93" },
    { name: "Татарский язык", url: "https://vk.cc/d1lNMM" },
    { name: "Тауширо язык", url: "https://vk.cc/cZQL79" },
    { name: "Телугу язык", url: "https://vk.cc/d2mInM" },
    { name: "Тибетский язык", url: "https://vk.cc/cZQKxE" },
    { name: "Тонганский язык", url: "https://vk.cc/cZQQt7" },
    { name: "Тофаларский язык", url: "https://vk.cc/cZQQko" },
    { name: "Тувинский язык", url: "https://vk.cc/cZQQx0" },
    { name: "Тунисский язык", url: "https://vk.cc/cZQIMs" },
    { name: "Туркменский язык", url: "https://vk.cc/cZQJKu" },
    { name: "Турецкий язык", url: "https://vk.cc/cZQHFT" },
    { name: "Удмуртский язык", url: "https://vk.cc/d1C12z" },
    { name: "Удэгейский язык", url: "https://vk.cc/cZQQe2" },
    { name: "Узбекский язык", url: "https://vk.cc/d0DG2E" },
    { name: "Урартский язык", url: "https://vk.cc/cZQJPo" },
    { name: "Урду язык", url: "https://vk.cc/d2lS8M" },
    { name: "Фиджи язык", url: "https://vk.cc/d0KRRI" },
    { name: "Финский язык", url: "https://vk.cc/cZQIcw" },
    { name: "Французский язык", url: "https://vk.cc/cZQD80" },
    { name: "Фризский язык", url: "https://vk.cc/d1TCmo" },
    { name: "Хакасский язык", url: "https://vk.cc/d2tcln" },
    { name: "Хауса язык", url: "https://vk.cc/cZQQQd" },
    { name: "Хинди язык", url: "https://vk.cc/cZQHxY" },
    { name: "Цыганский язык", url: "https://vk.cc/d03Y8x" },
    { name: "Чероки язык", url: "https://vk.cc/d0Wg6C" },
    { name: "Чеченский язык", url: "https://vk.cc/d076lB" },
    { name: "Чешский язык", url: "https://vk.cc/cZQHUV" },
    { name: "Чувашский язык", url: "https://vk.cc/d0qFJ7" },
    { name: "Чукотский язык", url: "https://vk.cc/cZQJ9N" },
    { name: "Шведский язык", url: "https://vk.cc/d1vdTB" },
    { name: "Швейцарский язык", url: "https://vk.cc/cZQJ4V" },
    { name: "Шорский язык", url: "https://vk.cc/cZQKWV" },
    { name: "Шотландский язык", url: "https://vk.cc/d0MlG1" },
    { name: "Эсперанто язык", url: "https://vk.cc/cZQIql" },
    { name: "Яванския язык", url: "https://vk.cc/d2dwJV" },
    { name: "Якутский язык", url: "https://vk.cc/d0TdQO" },
    { name: "Сицилийский язык", url: "https://vk.ru/wall-237994889_845" },
    { name: "Каталанский язык", url: "https://vk.ru/wall-237994889_848" },
    { name: "Токипона язык", url: "https://vk.ru/wall-237994889_855" },
    { name: "Гренландский язык", url: "https://vk.ru/wall-237994889_860" },
    { name: "Акан язык", url: "https://vk.ru/wall-237994889_863" },
    { name: "Афарский язык", url: "https://vk.ru/wall-237994889_867" },
    { name: "Волоф язык", url: "https://vk.ru/wall-237994889_871" },
    { name: "Гэльский шотландия", url: "https://vk.ru/wall-237994889_877" },
    { name: "Кантонский язык", url: "https://vk.ru/wall-237994889_881" },
    { name: "Гаитянский креольский язык", url: "https://vk.ru/wall-237994889_885" },
    { name: "Бислама язык", url: "https://vk.ru/wall-237994889_889" },
    { name: "Чви язык", url: "https://vk.ru/wall-237994889_894" },
    { name: "Рутульский язык", url: "https://vk.ru/wall-237994889_898" },
    { name: "Йолнгу язык", url: "https://vk.ru/wall-237994889_902" },
    { name: "Лингала язык", url: "https://vk.ru/wall-237994889_906" },
    { name: "Каннада язык", url: "https://vk.ru/wall-237994889_910" },
    { name: "Киргизский язык", url: "https://vk.ru/wall-237994889_916" },
    { name: "Японский язык", url: "https://vk.cc/cZQHel" }
];

// Словарь английских названий
const englishNames = {
    "Абхазский": "Abkhazian", "Аварский": "Avar", "Авестийский": "Avestan", "Австрийский": "Austrian",
    "Адыгейский": "Adyghe", "Азербайджанский": "Azerbaijani", "Аймара": "Aymara", "Айнский": "Ainu",
    "Албанский": "Albanian", "Алтайский": "Altai", "Амхарский": "Amharic", "Английский (Америка)": "English (America)",
    "Арабский": "Arabic", "Аранта": "Arrernte", "Армянский": "Armenian", "Африкаанс": "Afrikaans",
    "Баскский": "Basque", "Башкирский": "Bashkir", "Белорусский": "Belarusian", "Бенгальский": "Bengali",
    "Бирманский": "Burmese", "Болгарский": "Bulgarian", "Боснийский": "Bosnian", "Бразилия-Португальский": "Brazilian Portuguese",
    "Бретонский": "Breton", "Бурятский": "Buryat", "Валлийский": "Welsh", "Венгерский": "Hungarian",
    "Вепсский": "Veps", "Вьетнамский": "Vietnamese", "Гавайский": "Hawaiian", "Галисийский": "Galician",
    "Греческий": "Greek", "Грузинский": "Georgian", "Гуарани": "Guarani", "Гуджарати": "Gujarati",
    "Даргинский": "Dargwa", "Датский": "Danish", "Дия": "Diya", "Долганский": "Dolgan",
    "Древнеармянский": "Old Armenian", "Зулусский": "Zulu", "Иврит": "Hebrew", "Ингушский": "Ingush",
    "Индонезийский": "Indonesian", "Ирландский": "Irish", "Исландский": "Icelandic", "Испанский": "Spanish",
    "Итальянский": "Italian", "Ительменский": "Itelmen", "Ишанский": "Ishan", "Йоруба": "Yoruba",
    "Кабардино-черкесский": "Kabardian", "Казахский": "Kazakh", "Калмыцкий": "Kalmyk", "Карачаево-балкарский": "Karachay-Balkar",
    "Карельский": "Karelian", "Кечуа": "Quechua", "Кетский": "Ket", "Китайский": "Chinese",
    "Коми-Зырянский": "Komi-Zyrian", "Корейский": "Korean", "Корнский": "Cornish", "Корсиканский": "Corsican",
    "Косо": "Xhosa", "Крымскотатарский": "Crimean Tatar", "Куба-Испанский": "Cuban Spanish", "Кумыкский": "Kumyk",
    "Кунвиньку": "Kunwinjku", "Кхмерский": "Khmer", "Латинский": "Latin", "Латышский": "Latvian",
    "Лезгинский": "Lezgian", "Литовский": "Lithuanian", "Луо": "Luo", "Люксембургский": "Luxembourgish",
    "Малайский": "Malay", "Малаяламский": "Malayalam", "Мальтийский": "Maltese", "Маори": "Maori",
    "Мапуче": "Mapuche", "Маратхи": "Marathi", "Марийский": "Mari", "Масайский": "Maasai",
    "Молдавский": "Moldavian", "Монгольский": "Mongolian", "Мордовский (Мокшанский)": "Mordovian (Moksha)",
    "Мордовский (Эрзянский)": "Mordovian (Erzya)", "Навахо": "Navajo", "Нанайский": "Nanai", "Немецкий": "German",
    "Непальский": "Nepali", "Нивхский": "Nivkh", "Ногайский": "Nogai", "Норвежский": "Norwegian",
    "Окситанский": "Occitan", "Оромо": "Oromo", "Осетинский": "Ossetian", "Панджаби": "Punjabi",
    "Персидский": "Persian", "Польский": "Polish", "Португальский": "Portuguese", "Пушту": "Pashto",
    "Румынский": "Romanian", "Русский": "Russian", "Санскрит": "Sanskrit", "Сардинский": "Sardinian",
    "Сингальский": "Sinhala", "Суахили": "Swahili", "Сунданский": "Sundanese", "Тагальский": "Tagalog",
    "Таджикский": "Tajik", "Таино": "Taino", "Тайский": "Thai", "Тамильский": "Tamil",
    "Татарский": "Tatar", "Тауширо": "Taushiro", "Телугу": "Telugu", "Тибетский": "Tibetan",
    "Тонганский": "Tongan", "Тофаларский": "Tofalar", "Тувинский": "Tuvan", "Тунисский": "Tunisian",
    "Туркменский": "Turkmen", "Турецкий": "Turkish", "Удмуртский": "Udmurt", "Удэгейский": "Udege",
    "Узбекский": "Uzbek", "Урартский": "Urartian", "Урду": "Urdu", "Фиджи": "Fijian",
    "Финский": "Finnish", "Французский": "French", "Фризский": "Frisian", "Хакасский": "Khakas",
    "Хауса": "Hausa", "Хинди": "Hindi", "Цыганский": "Romani", "Чероки": "Cherokee",
    "Чеченский": "Chechen", "Чешский": "Czech", "Чувашский": "Chuvash", "Чукотский": "Chukchi",
    "Шведский": "Swedish", "Швейцарский": "Swiss German", "Шорский": "Shor", "Шотландский": "Scottish Gaelic",
    "Эсперанто": "Esperanto", "Яванския": "Javanese", "Якутский": "Yakut", "Сицилийский": "Sicilian",
    "Каталанский": "Catalan", "Токипона": "Toki Pona", "Гренландский": "Greenlandic", "Акан": "Akan",
    "Афарский": "Afar", "Волоф": "Wolof", "Гэльский шотландия": "Scottish Gaelic", "Кантонский": "Cantonese",
    "Гаитянский креольский": "Haitian Creole", "Бислама": "Bislama", "Чви": "Twi", "Рутульский": "Rutul",
    "Йолнгу": "Yolngu", "Лингала": "Lingala", "Каннада": "Kannada", "Японский": "Japanese"
};

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
    
    if (lang.nameEn) return lang.nameEn;

    let cleanName = lang.name.replace(/ язык/i, '').trim();
    let searchName = cleanName.replace(/ \(РЕЛИЗ\)/i, '').trim();
    
    if (cleanName.includes("Мордовский (Мокшанский)")) return "Mordovian (Moksha)";
    if (cleanName.includes("Мордовский (Эрзянский)")) return "Mordovian (Erzya)";
    if (cleanName.includes("Русский (РЕЛИЗ")) return "Russian (Release)";

    if (englishNames[searchName]) {
        if (lang.name.includes("РЕЛИЗ")) {
            return englishNames[searchName] + " (Release)";
        }
        return englishNames[searchName];
    }
    
    return cleanName; 
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
