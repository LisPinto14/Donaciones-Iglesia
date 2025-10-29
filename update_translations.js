// Script para actualizar todas las páginas con el sistema de traducciones

// Elementos comunes que necesitan traducción en todas las páginas
const commonTranslations = {
    // Selector de idioma HTML
    languageSelector: `
            <!-- Language Selector Button - Top Right -->
            <div class="language-button-container">
                <button class="language-toggle-btn" id="languageToggleBtn">
                    <i class="fas fa-globe"></i>
                    <span class="current-lang">ES</span>
                </button>
                <div class="language-dropdown-menu" id="languageDropdown">
                    <a href="#" class="language-option" data-lang="es">
                        <span class="flag">🇪🇸</span>
                        <span>Español</span>
                    </a>
                    <a href="#" class="language-option" data-lang="en">
                        <span class="flag">🇺🇸</span>
                        <span>English</span>
                    </a>
                    <a href="#" class="language-option" data-lang="zh">
                        <span class="flag">🇨🇳</span>
                        <span>中文</span>
                    </a>
                </div>
            </div>`,
    
    // CSS para el selector de idioma
    languageCSS: `
        /* Language Selector Styles */
        .language-button-container { position: absolute; top: 20px; right: 20px; z-index: 1001; }
        .language-toggle-btn { background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); color: white; padding: 8px 12px; border-radius: 25px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .language-toggle-btn:hover { background: var(--secondary-color); color: var(--primary-color); transform: translateY(-2px); }
        .language-dropdown-menu { position: absolute; top: 100%; right: 0; background: white; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); min-width: 150px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; z-index: 1002; }
        .language-dropdown-menu.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .language-option { display: flex; align-items: center; gap: 10px; padding: 12px 16px; color: var(--text-color); text-decoration: none; transition: all 0.3s ease; }
        .language-option:hover { background: var(--light-bg); color: var(--primary-color); }
        .language-option .flag { font-size: 1.2rem; }`,
    
    // Navegación con traducciones
    navigation: `
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html" data-translate="nav_home">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link" href="nosotros.html" data-translate="nav_about">Nosotros</a></li>
                            <li class="nav-item"><a class="nav-link" href="servicios.html" data-translate="nav_services">Servicios</a></li>
                            <li class="nav-item"><a class="nav-link" href="eventos.html" data-translate="nav_events">Eventos</a></li>
                            <li class="nav-item"><a class="nav-link" href="contacto.html" data-translate="nav_contact">Contacto</a></li>
                            <li class="nav-item"><a class="nav-link" href="donaciones.html" data-translate="nav_donations">Donaciones</a></li>
                        </ul>`
};

console.log('Script de traducciones creado');