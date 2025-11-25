/* Complete translation engine for all page content */
const translations = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_ministries: "Ministerios",
    nav_services: "Servicios",
    nav_events: "Eventos",
    nav_contact: "Contacto",
    nav_donations: "Donaciones",
    
    // Carousel
    carousel1_title: "Bienvenidos a Espíritu de Vida",
    carousel1_text: "Un lugar donde encontrarás fe, esperanza y comunidad",
    carousel2_title: "Comunidad en Cristo",
    carousel2_text: "Creciendo juntos en fe y amor",
    carousel3_title: "Sirviendo con Amor",
    carousel3_text: "Extendiendo la mano a quienes más lo necesitan",
    cta_join: "Únete a nosotros",
    cta_schedule: "Ver horarios",
    cta_events: "Próximos eventos",
    cta_learn_more: "Conoce más",
    
    // Home Intro Section
    home_intro_title: "Bienvenidos a Casa",
    home_intro_text: "Un lugar donde encontrarás fe, esperanza y comunidad en el corazón de Panamá",
    home_intro_paragraph1: "Este es un espacio de fe, esperanza y crecimiento espiritual, donde trabajamos por formar discípulos comprometidos con el amor de Dios y el servicio a los demás.",
    home_intro_paragraph2: "Creemos en la presencia constante del Señor y en la promesa de una gloria mayor para Su pueblo.",
    home_intro_paragraph3: "Nos honra contar con su visita y compartir juntos este camino de bendición.",
    
    // Ministries Section
    ministries_title: "Nuestros Ministerios",
    ministry_women: "Damas",
    ministry_women_desc: "Espacio de crecimiento y apoyo para mujeres de todas las edades.",
    ministry_men: "Caballeros",
    ministry_men_desc: "Formación de varones para liderar con integridad y servicio.",
    ministry_kids: "Niños",
    ministry_kids_desc: "Aprendizaje bíblico creativo para los más pequeños.",
    ministry_youth: "Jóvenes",
    ministry_youth_desc: "Un espacio dinámico para descubrir propósito en Cristo.",
    ministry_marriage: "Matrimonio",
    ministry_marriage_desc: "Fortaleciendo hogares con principios bíblicos y comunión.",
    ministry_worship: "Adoración",
    ministry_worship_desc: "Exaltamos a Dios con excelencia y un corazón rendido.",
    
    // About Section
    about_title: "Acerca de Nosotros",
    about_hero_subtitle: "Conoce nuestra historia, misión y el corazón que nos impulsa a servir a Dios y a nuestra comunidad",
    about_who_we_are: "Quiénes Somos",
    about_intro_text: "Somos una comunidad cristiana comprometida con compartir el amor de Cristo y transformar vidas a través del evangelio en el corazón de Panamá.",
    about_subtitle: "Nuestra Misión",
    about_mission: "En Ministerio Internacional Espíritu de Vida Panamá, nuestra misión es compartir el amor de Cristo con todos, creando una comunidad vibrante donde cada persona pueda experimentar el poder transformador del Espíritu Santo. Buscamos ser un faro de esperanza en nuestra ciudad y más allá.",
    about_vision_title: "Nuestra Visión",
    about_vision: "Nuestra visión es ver vidas transformadas por el evangelio, familias restauradas y comunidades impactadas por el amor de Dios. Nos esforzamos por ser una iglesia relevante que conecte la fe con la vida cotidiana.",
    about_beliefs_title: "Nuestras Creencias",
    about_beliefs: "Creemos en la Biblia como la Palabra inspirada de Dios, en la salvación a través de Jesucristo, y en el poder del Espíritu Santo para guiar y capacitar a los creyentes. Valoramos la adoración, la comunidad y el servicio como expresiones de nuestra fe.",
    pastors_title: "Pastores",
    
    // Services Section
    services_title: "Nuestros Servicios",
    service1_title: "Culto Dominical",
    service1_time: "Domingos a las 10:00 am",
    service1_desc: "Únete a nosotros para un tiempo de adoración, alabanza y una palabra profética que fortalecerá tu fe y renovará tu esperanza.",
    service2_title: "Célular",
    service2_time: "Martes a las 7:00 pm",
    service2_desc: "Reuniones en los hogares para compartir, orar y crecer juntos en la fe en un ambiente familiar y de comunión.",
    service3_title: "Estudio Bíblico",
    service3_time: "Viernes a las 7:00 pm",
    service3_desc: "Profundiza en las Escrituras y descubre los tesoros de la sabiduría divina para aplicarlos a tu vida diaria.",
    service4_title: "Reunión de Oración",
    service4_time: "Lunes a las 7:00 pm",
    service4_desc: "Un poderoso tiempo de intercesión donde clamamos por las necesidades de nuestra comunidad, nación y el mundo.",
    
    // Events Section
    events_title: "Eventos del Mes",
    filter_current_month: "Mes Actual",
    show_all_events: "Todos los Eventos",
    sort_oldest: "Más Antiguos",
    sort_newest: "Más Recientes",
    event1_title: "Santa Cena",
    event1_date: "Domingo 12 de octubre",
    event1_time: "10:00 am",
    event1_desc: "Conmemoramos el sacrificio de Jesús en una mesa de comunión, reflexión y renovación de nuestra alianza con Dios.",
    event2_title: "Vigilia",
    event2_date: "Viernes 17 de octubre",
    event2_time: "7:00 pm",
    event2_desc: "Una noche de búsqueda incesante de la presencia de Dios a través de la oración, alabanza y la palabra.",
    event3_title: "Culto Juvenil",
    event3_date: "Sábado 18 de octubre",
    event3_time: "4:00 pm",
    event3_desc: "Un espacio dinámico diseñado para los jóvenes, con música contemporánea, mensajes relevantes y actividades que fortalecen su fe.",
    event4_title: "Clínica Espiritual",
    event4_date: "Sábado 8 a Domingo 9 de noviembre",
    event4_time: "6:00 am",
    event4_desc: "Un fin de semana de inmersión espiritual con enseñanzas profundas, oración y ministración para sanidad y liberación.",
    event5_title: "Día de las Madres",
    event5_date: "Domingo 7 de diciembre",
    event5_time: "10:00 am",
    event5_desc: "Celebramos y honramos a todas las madres en este día especial.",
    event6_title: "Academia",
    event6_date: "Domingo 14 de diciembre",
    event6_time: "9:00 am",
    event6_desc: "Tiempo de formación y crecimiento en la fe.",
    event7_title: "GAP 2025",
    event7_date: "Sábado 20 de diciembre",
    event7_time: "9:00 am",
    event7_desc: "Gran evento de preparación para el nuevo año.",
    event8_title: "Academia",
    event8_date: "Domingo 21 de diciembre",
    event8_time: "9:00 am",
    event8_desc: "Tiempo de formación y crecimiento en la fe.",
    event9_title: "La Navidad es Jesús",
    event9_date: "Miércoles 24 de diciembre",
    event9_time: "7:00 pm",
    event9_desc: "Celebramos el verdadero significado de la Navidad: el nacimiento de nuestro Salvador.",
    event10_title: "Gran Fiesta de las Promesas",
    event10_date: "Miércoles 31 de diciembre",
    event10_time: "7:00 pm",
    event10_desc: "Cerramos el año celebrando las promesas de Dios y recibiendo las bendiciones para el nuevo año.",
    
    // Quote Section
    quote_text: "\"La gloria postrera de esta casa será mayor que la primera\", dice el Señor de los ejércitos. \"Y en este lugar daré la paz\", dice el Señor de los ejércitos.",
    quote_author: "Hageo 2:9",
    
    // Contact Section
    contact_title: "Contacto",
    contact_info_title: "Información de Contacto",
    contact_address_title: "Dirección",
    contact_address: "XFHC+J7Q, Panamá, Provincia de Panamá",
    contact_phone_title: "Teléfono",
    contact_email_title: "Correo Electrónico",
    contact_hours_title: "Horarios de Servicio",
    contact_hours: "Domingos: 9:00 AM.<br>Miércoles: 7:00 PM.<br>Viernes: 7:00 PM.",
    contact_form_title: "Envíanos un Mensaje",
    contact_name: "Nombre",
    contact_email: "Correo Electrónico",
    contact_subject: "Asunto",
    contact_message: "Tu Mensaje",
    contact_submit: "Enviar Mensaje",
    
    // Donations Section
    donations_title: "Donaciones",
    donations_verse: "Proverbios 11:25",
    donations_subtitle: "Vive de manera generosa con todo lo que Dios te ha dado.",
    donation1_title: "Transferencia Bancaria",
    donation_account_holder: "Titular:",
    donation_bank: "Banco:",
    donation_account_type: "Tipo de cuenta:",
    donation_account_type_value: "Cuenta Corriente",
    donation_account_number: "Número de cuenta:",
    donation1_note: "Por favor, envíanos el comprobante para confirmar tu donación.",
    donation2_title: "Donación Presencial",
    donation2_desc: "Puedes donar en nuestros servicios.",
    donation2_note: "Pregunta por los sobres de ofrendas a nuestro equipo de servidores en el templo.",
    donation3_title: "Contacto para Ayuda",
    donation3_desc: "Si necesitas asistencia para donar, contáctanos.",
    
    // Footer
    footer_about: "Sobre Nosotros",
    footer_about_text: "Ministerio Internacional Espíritu de Vida Panamá es una comunidad cristiana comprometida con hacer discípulos y enseñar las enseñanzas de Cristo, cumpliendo la misión que Él nos dejó en Mateo 28:19-20.",
    footer_links: "Enlaces Rápidos",
    footer_about_link: "Acerca de Nosotros",
    footer_ministries_link: "Ministerios",
    footer_services_link: "Servicios",
    footer_events_link: "Eventos",
    footer_donations_link: "Donaciones",
    footer_contact_link: "Contacto",
    footer_contact: "Contacto",
    footer_rights: "Todos los derechos reservados.",
    
    // Services Page
    services_page_title: "Nuestros Servicios",
    services_hero_subtitle: "Descubre las diferentes formas en que puedes conectarte con Dios y nuestra comunidad",
    
    // Events Page  
    events_page_title: "Eventos",
    events_hero_subtitle: "Únete a nosotros en nuestros próximos eventos y actividades especiales",
    
    // Contact Page
    contact_page_title: "Contacto", 
    contact_hero_subtitle: "Estamos aquí para ti. Contáctanos y permítenos ser parte de tu caminar espiritual",
    
    // Donations Page
    donations_page_title: "Donaciones",
    donations_hero_subtitle: "Tu generosidad hace posible que continuemos compartiendo el amor de Cristo"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_ministries: "Ministries",
    nav_services: "Services",
    nav_events: "Events",
    nav_contact: "Contact",
    nav_donations: "Donations",
    
    // Carousel
    carousel1_title: "Welcome to Spirit of Life",
    carousel1_text: "A place where you'll find faith, hope and community",
    carousel2_title: "Community in Christ",
    carousel2_text: "Growing together in faith and love",
    carousel3_title: "Serving with Love",
    carousel3_text: "Reaching out to those in need",
    cta_join: "Join Us",
    cta_schedule: "View Schedule",
    cta_events: "Upcoming Events",
    cta_learn_more: "Learn More",
    
    // Home Intro Section
    home_intro_title: "Welcome Home",
    home_intro_text: "A place where you'll find faith, hope and community in the heart of Panama",
    home_intro_paragraph1: "This is a space of faith, hope and spiritual growth, where we work to form disciples committed to God's love and service to others.",
    home_intro_paragraph2: "We believe in the constant presence of the Lord and in the promise of greater glory for His people.",
    home_intro_paragraph3: "We are honored to have your visit and to share together this path of blessing.",
    
    // Ministries Section
    ministries_title: "Our Ministries",
    ministry_women: "Women",
    ministry_women_desc: "A space for growth and support for women of all ages.",
    ministry_men: "Men",
    ministry_men_desc: "Training men to lead with integrity and service.",
    ministry_kids: "Children",
    ministry_kids_desc: "Creative biblical learning for the little ones.",
    ministry_youth: "Youth",
    ministry_youth_desc: "A dynamic space to discover purpose in Christ.",
    ministry_marriage: "Marriage",
    ministry_marriage_desc: "Strengthening homes with biblical principles and fellowship.",
    ministry_worship: "Worship",
    ministry_worship_desc: "We exalt God with excellence and a surrendered heart.",
    
    // About Section
    about_title: "About Us",
    about_hero_subtitle: "Learn about our history, mission and the heart that drives us to serve God and our community",
    about_who_we_are: "Who We Are",
    about_intro_text: "We are a Christian community committed to sharing Christ's love and transforming lives through the gospel in the heart of Panama.",
    about_subtitle: "Our Mission",
    about_mission: "At International Ministry Spirit of Life Panama, our mission is to share the love of Christ with everyone, creating a vibrant community where each person can experience the transformative power of the Holy Spirit. We seek to be a beacon of hope in our city and beyond.",
    about_vision_title: "Our Vision",
    about_vision: "Our vision is to see lives transformed by the gospel, families restored, and communities impacted by God's love. We strive to be a relevant church that connects faith with everyday life.",
    about_beliefs_title: "Our Beliefs",
    about_beliefs: "We believe in the Bible as the inspired Word of God, in salvation through Jesus Christ, and in the power of the Holy Spirit to guide and equip believers. We value worship, community, and service as expressions of our faith.",
    pastors_title: "Pastors",
    
    // Services Section
    services_title: "Our Services",
    service1_title: "Sunday Service",
    service1_time: "Sundays at 10:00 am",
    service1_desc: "Join us for a time of worship, praise, and a prophetic word that will strengthen your faith and renew your hope.",
    service2_title: "Cell Group",
    service2_time: "Tuesdays at 7:00 pm",
    service2_desc: "Home meetings to share, pray, and grow together in faith in a family and fellowship environment.",
    service3_title: "Bible Study",
    service3_time: "Fridays at 7:00 pm",
    service3_desc: "Deepen in the Scriptures and discover the treasures of divine wisdom to apply them to your daily life.",
    service4_title: "Prayer Meeting",
    service4_time: "Mondays at 7:00 pm",
    service4_desc: "A powerful time of intercession where we cry out for the needs of our community, nation, and the world.",
    
    // Events Section
    events_title: "Events of the Month",
    filter_current_month: "Current Month",
    show_all_events: "All Events",
    sort_oldest: "Oldest First",
    sort_newest: "Newest First",
    event1_title: "Holy Communion",
    event1_date: "Sunday, October 12th",
    event1_time: "10:00 am",
    event1_desc: "We commemorate the sacrifice of Jesus at a table of communion, reflection, and renewal of our covenant with God.",
    event2_title: "Vigil",
    event2_date: "Friday, October 17th",
    event2_time: "7:00 pm",
    event2_desc: "A night of relentless seeking of God's presence through prayer, praise, and the Word.",
    event3_title: "Youth Service",
    event3_date: "Saturday, October 18th",
    event3_time: "4:00 pm",
    event3_desc: "A dynamic space designed for young people, with contemporary music, relevant messages, and activities that strengthen their faith.",
    event4_title: "Spiritual Clinic",
    event4_date: "Saturday, Nov 8th to Sunday, Nov 9th",
    event4_time: "6:00 am",
    event4_desc: "A weekend of spiritual immersion with deep teachings, prayer, and ministry for healing and deliverance.",
    event5_title: "Mother's Day",
    event5_date: "Sunday, December 7th",
    event5_time: "10:00 am",
    event5_desc: "We celebrate and honor all mothers on this special day.",
    event6_title: "Academy",
    event6_date: "Sunday, December 14th",
    event6_time: "9:00 am",
    event6_desc: "Time of formation and growth in faith.",
    event7_title: "GAP 2025",
    event7_date: "Saturday, December 20th",
    event7_time: "9:00 am",
    event7_desc: "Great event preparing for the new year.",
    event8_title: "Academy",
    event8_date: "Sunday, December 21st",
    event8_time: "9:00 am",
    event8_desc: "Time of formation and growth in faith.",
    event9_title: "Christmas is Jesus",
    event9_date: "Wednesday, December 24th",
    event9_time: "7:00 pm",
    event9_desc: "We celebrate the true meaning of Christmas: the birth of our Savior.",
    event10_title: "Great Feast of Promises",
    event10_date: "Wednesday, December 31st",
    event10_time: "7:00 pm",
    event10_desc: "We close the year celebrating God's promises and receiving blessings for the new year.",
    
    // Quote Section
    quote_text: "\"The glory of this present house will be greater than the glory of the former house,\" says the Lord Almighty. \"And in this place I will grant peace,\" says the Lord Almighty.",
    quote_author: "Haggai 2:9",
    
    // Contact Section
    contact_title: "Contact",
    contact_info_title: "Contact Information",
    contact_address_title: "Address",
    contact_address: "XFHC+J7Q, Panama, Panama Province",
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_hours_title: "Service Hours",
    contact_hours: "Sundays: 9:00 AM<br>Wednesdays: 7:00 PM<br>Fridays: 7:00 PM",
    contact_form_title: "Send Us a Message",
    contact_name: "Name",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Your Message",
    contact_submit: "Send Message",
    
    // Donations Section
    donations_title: "Donations",
    donations_verse: "Proverbs 11:25",
    donations_subtitle: "Live generously with everything God has given you.",
    donation1_title: "Bank Transfer",
    donation_account_holder: "Account Holder:",
    donation_bank: "Bank:",
    donation_account_type: "Account Type:",
    donation_account_type_value: "Checking Account",
    donation_account_number: "Account Number:",
    donation1_note: "Please send us the receipt to confirm your donation.",
    donation2_title: "In-Person Donation",
    donation2_desc: "You can donate at our services.",
    donation2_note: "Ask for offering envelopes from our serving team at the temple.",
    donation3_title: "Contact for Help",
    donation3_desc: "If you need assistance to donate, contact us.",
    
    // Footer
    footer_about: "About Us",
    footer_about_text: "International Ministry Spirit of Life Panama is a Christian community committed to making disciples and teaching Christ's teachings, fulfilling the mission He left us in Matthew 28:19-20.",
    footer_links: "Quick Links",
    footer_about_link: "About Us",
    footer_ministries_link: "Ministries",
    footer_services_link: "Services",
    footer_events_link: "Events",
    footer_donations_link: "Donations",
    footer_contact_link: "Contact",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
    
    // Services Page
    services_page_title: "Our Services",
    services_hero_subtitle: "Discover the different ways you can connect with God and our community",
    
    // Events Page
    events_page_title: "Events",
    events_hero_subtitle: "Join us for our upcoming events and special activities",
    
    // Contact Page
    contact_page_title: "Contact",
    contact_hero_subtitle: "We are here for you. Contact us and let us be part of your spiritual journey",
    
    // Donations Page
    donations_page_title: "Donations", 
    donations_hero_subtitle: "Your generosity makes it possible for us to continue sharing Christ's love"
  },
  zh: {
    // Navigation
    nav_home: "首页",
    nav_about: "关于我们",
    nav_ministries: "事工",
    nav_services: "服务",
    nav_events: "活动",
    nav_contact: "联系我们",
    nav_donations: "捐款",
    
    // Carousel
    carousel1_title: "欢迎来到生命之灵",
    carousel1_text: "一个您能找到信仰、希望和社区的地方",
    carousel2_title: "基督里的社区",
    carousel2_text: "在信仰和爱中共同成长",
    carousel3_title: "用爱服务",
    carousel3_text: "向有需要的人伸出援手",
    cta_join: "加入我们",
    cta_schedule: "查看时间表",
    cta_events: "即将举行的活动",
    cta_learn_more: "了解更多",
    
    // Home Intro Section
    home_intro_title: "欢迎回家",
    home_intro_text: "一个您能在巴拿马中心找到信仰、希望和社区的地方",
    home_intro_paragraph1: "这是一个信仰、希望和属灵成长的空间，我们致力于培养致力于上帝的爱和服务他人的门徒。",
    home_intro_paragraph2: "我们相信主的持续同在，以及祂子民更大荣耀的应许。",
    home_intro_paragraph3: "我们很荣幸有您的访问，并一起分享这条祝福之路。",
    
    // Ministries Section
    ministries_title: "我们的事工",
    ministry_women: "妇女",
    ministry_women_desc: "为各个年龄段的妇女提供成长和支持的空间。",
    ministry_men: "男士",
    ministry_men_desc: "培训男士以正直和服务精神领导。",
    ministry_kids: "儿童",
    ministry_kids_desc: "为小朋友提供创意圣经学习。",
    ministry_youth: "青年",
    ministry_youth_desc: "一个在基督里发现目标的动态空间。",
    ministry_marriage: "婚姻",
    ministry_marriage_desc: "用圣经原则和团契加强家庭。",
    ministry_worship: "敬拜",
    ministry_worship_desc: "我们以卓越和降服的心赞美上帝。",
    
    // About Section
    about_title: "关于我们",
    about_hero_subtitle: "了解我们的历史、使命和驱使我们服务上帝和社区的心",
    about_who_we_are: "我们是谁",
    about_intro_text: "我们是一个致力于在巴拿马中心分享基督的爱并通过福音改变生命的基督教社区。",
    about_subtitle: "我们的使命",
    about_mission: "在巴拿马国际生命之灵事工，我们的使命是与每个人分享基督的爱，创建一个充满活力的社区，让每个人都能体验圣灵的变革力量。我们寻求成为我们城市及更远地区的希望灯塔。",
    about_vision_title: "我们的愿景",
    about_vision: "我们的愿景是看到生命被福音改变，家庭得到恢复，社区被上帝的爱所影响。我们努力成为一个相关的教会，将信仰与日常生活联系起来。",
    about_beliefs_title: "我们的信仰",
    about_beliefs: "我们相信圣经是上帝启示的话语，通过耶稣基督得救，以及圣灵引导和装备信徒的力量。我们重视敬拜、社区和服务作为我们信仰的表达。",
    pastors_title: "牧师",
    
    // Services Section
    services_title: "我们的服务",
    service1_title: "主日崇拜",
    service1_time: "周日上午10:00",
    service1_desc: "加入我们进行敬拜、赞美和预言话语的时间，这将加强你的信心并更新你的希望。",
    service2_title: "小组聚会",
    service2_time: "周二晚上7:00",
    service2_desc: "在家庭聚会中分享、祈祷和一起在信仰中成长，在家庭和团契的环境中。",
    service3_title: "圣经学习",
    service3_time: "周五晚上7:00",
    service3_desc: "深入圣经，发现神圣智慧的宝藏，将其应用到你的日常生活中。",
    service4_title: "祷告会",
    service4_time: "周一晚上7:00",
    service4_desc: "一个强有力的代祷时间，我们为社区、国家和世界的需要呼求。",
    
    // Events Section
    events_title: "本月活动",
    filter_current_month: "本月",
    show_all_events: "所有活动",
    sort_oldest: "最早",
    sort_newest: "最新",
    event1_title: "圣餐",
    event1_date: "10月12日星期日",
    event1_time: "上午10:00",
    event1_desc: "我们在圣餐桌上纪念耶稣的牺牲，反思和更新我们与上帝的盟约。",
    event2_title: "守夜",
    event2_date: "10月17日星期五",
    event2_time: "晚上7:00",
    event2_desc: "一个通过祷告、赞美和话语不断寻求上帝同在的夜晚。",
    event3_title: "青年崇拜",
    event3_date: "10月18日星期六",
    event3_time: "下午4:00",
    event3_desc: "一个为年轻人设计的动态空间，有当代音乐、相关信息和加强他们信仰的活动。",
    event4_title: "属灵诊所",
    event4_date: "11月8-9日星期六至星期日",
    event4_time: "上午6:00",
    event4_desc: "一个属灵沉浸的周末，有深刻的教导、祷告和医治释放的服事。",
    event5_title: "母亲节",
    event5_date: "12月7日星期日",
    event5_time: "上午10:00",
    event5_desc: "我们在这个特殊的日子里庆祝和尊敬所有的母亲。",
    event6_title: "学院",
    event6_date: "12月14日星期日",
    event6_time: "上午9:00",
    event6_desc: "信仰形成和成长的时间。",
    event7_title: "GAP 2025",
    event7_date: "12月20日星期六",
    event7_time: "上午9:00",
    event7_desc: "为新的一年做准备的大型活动。",
    event8_title: "学院",
    event8_date: "12月21日星期日",
    event8_time: "上午9:00",
    event8_desc: "信仰形成和成长的时间。",
    event9_title: "圣诞节就是耶稣",
    event9_date: "12月24日星期三",
    event9_time: "晚上7:00",
    event9_desc: "我们庆祝圣诞节的真正意义：我们救主的诞生。",
    event10_title: "应许的盛宴",
    event10_date: "12月31日星期三",
    event10_time: "晚上7:00",
    event10_desc: "我们通过庆祝上帝的应许并为新的一年接受祝福来结束这一年。",
    
    // Quote Section
    quote_text: "\"这殿后来的荣耀必大过先前的荣耀\"，万军之耶和华说。\"在这地方我必赐平安\"，万军之耶和华说。",
    quote_author: "哈该书2:9",
    
    // Contact Section
    contact_title: "联系我们",
    contact_info_title: "联系信息",
    contact_address_title: "地址",
    contact_address: "XFHC+J7Q，巴拿马，巴拿马省",
    contact_phone_title: "电话",
    contact_email_title: "电子邮件",
    contact_hours_title: "服务时间",
    contact_hours: "周日：上午9:00<br>周三：晚上7:00<br>周五：晚上7:00",
    contact_form_title: "发送消息",
    contact_name: "姓名",
    contact_email: "电子邮件",
    contact_subject: "主题",
    contact_message: "您的消息",
    contact_submit: "发送消息",
    
    // Donations Section
    donations_title: "捐款",
    donations_verse: "箴言 11:25",
    donations_subtitle: "慷慨地生活，用上帝赐给你的一切。",
    donation1_title: "银行转账",
    donation_account_holder: "账户持有人:",
    donation_bank: "银行:",
    donation_account_type: "账户类型:",
    donation_account_type_value: "活期账户",
    donation_account_number: "账户号码:",
    donation1_note: "请发送收据给我们以确认您的捐款。",
    donation2_title: "现场捐款",
    donation2_desc: "您可以在我们的服务中捐款。",
    donation2_note: "在圣殿向我们的服务团队询问奉献信封。",
    donation3_title: "联系帮助",
    donation3_desc: "如果您需要捐款帮助，请联系我们。",
    
    // Footer
    footer_about: "关于我们",
    footer_about_text: "巴拿马国际生命之灵事工是一个致力于做门徒和教导基督教导的基督教社区，履行他在马太福音28:19-20中留给我们的使命。",
    footer_links: "快速链接",
    footer_about_link: "关于我们",
    footer_ministries_link: "事工",
    footer_services_link: "服务",
    footer_events_link: "活动",
    footer_donations_link: "捐款",
    footer_contact_link: "联系我们",
    footer_contact: "联系我们",
    footer_rights: "版权所有。",
    
    // Services Page
    services_page_title: "我们的服务",
    services_hero_subtitle: "发现与上帝和我们社区联系的不同方式",
    
    // Events Page
    events_page_title: "活动",
    events_hero_subtitle: "加入我们即将举行的活动和特别活动",
    
    // Contact Page
    contact_page_title: "联系我们",
    contact_hero_subtitle: "我们在这里为您服务。联系我们，让我们成为您属灵旅程的一部分",
    
    // Donations Page
    donations_page_title: "捐款",
    donations_hero_subtitle: "您的慷慨使我们能够继续分享基督的爱"
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
  // Handle new language button
  const languageToggleBtn = document.getElementById('languageToggleBtn');
  const languageDropdown = document.getElementById('languageDropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  const currentLangSpan = document.querySelector('.current-lang');
  
  // Handle legacy selector (if exists)
  const selector = document.getElementById('languageSelector');
  
  const stored = localStorage.getItem('site_lang') || 'es';
  
  // Update current language display
  if (currentLangSpan) {
    currentLangSpan.textContent = stored.toUpperCase();
  }
  
  // Apply translations
  applyTranslations(stored);
  
  // New language button functionality
  if (languageToggleBtn && languageDropdown) {
    languageToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!languageToggleBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('show');
      }
    });
    
    // Handle language option clicks
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        localStorage.setItem('site_lang', lang);
        applyTranslations(lang);
        currentLangSpan.textContent = lang.toUpperCase();
        languageDropdown.classList.remove('show');
      });
    });
  }
  
  // Legacy selector functionality (if exists)
  if (selector) {
    selector.value = stored;
    selector.addEventListener('change', () => {
      const lang = selector.value;
      localStorage.setItem('site_lang', lang);
      applyTranslations(lang);
      if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initLanguageSelector);


