/* Simple translation engine shared across pages */
const translations = {
  es: {
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_events: "Eventos",
    nav_contact: "Contacto",
    nav_donations: "Donaciones",
    home_intro_title: "Bienvenidos a Casa",
    home_intro_text: "Información esencial sobre nuestra iglesia",
    ministries_title: "Nuestros Ministerios",
    ministry_women: "Damas",
    ministry_men: "Caballeros",
    ministry_kids: "Niños",
    ministry_youth: "Jóvenes",
    ministry_marriage: "Matrimonio",
    ministry_worship: "Adoración",
    about_title: "Acerca de Nosotros",
    services_title: "Nuestros Servicios",
    events_title: "Eventos del Mes",
    contact_title: "Contacto",
    donations_title: "Donaciones"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_events: "Events",
    nav_contact: "Contact",
    nav_donations: "Donations",
    home_intro_title: "Welcome Home",
    home_intro_text: "Essential information about our church",
    ministries_title: "Our Ministries",
    ministry_women: "Women",
    ministry_men: "Men",
    ministry_kids: "Kids",
    ministry_youth: "Youth",
    ministry_marriage: "Marriage",
    ministry_worship: "Worship",
    about_title: "About Us",
    services_title: "Our Services",
    events_title: "Events of the Month",
    contact_title: "Contact",
    donations_title: "Donations"
  },
  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_services: "服务",
    nav_events: "活动",
    nav_contact: "联系我们",
    nav_donations: "捐款",
    home_intro_title: "欢迎回家",
    home_intro_text: "关于我们教会的基本信息",
    ministries_title: "我们的事工",
    ministry_women: "妇女",
    ministry_men: "男士",
    ministry_kids: "儿童",
    ministry_youth: "青年",
    ministry_marriage: "婚姻",
    ministry_worship: "敬拜",
    about_title: "关于我们",
    services_title: "我们的服务",
    events_title: "本月活动",
    contact_title: "联系我们",
    donations_title: "捐款"
  }
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
}

function initLanguageSelector() {
  const selector = document.getElementById('languageSelector');
  if (!selector) return;
  const stored = localStorage.getItem('site_lang') || 'es';
  selector.value = stored;
  applyTranslations(stored);
  selector.addEventListener('change', () => {
    const lang = selector.value;
    localStorage.setItem('site_lang', lang);
    applyTranslations(lang);
  });
}

document.addEventListener('DOMContentLoaded', initLanguageSelector);


