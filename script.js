// ===== SISTEMA DE IDIOMAS COMPLETO =====
let currentLang = 'es'; // Idioma por defecto

// Traducciones completas para TODO el contenido
const translations = {
    es: {
        // Navegación
        "menuHome": "Inicio",
        "menuCourses": "Cursos",
        "menuHistory": "Historia de la Música",
        "menuTheory": "Teoría Musical",
        
        // Botones generales
        "btnLogin": "Iniciar Sesión",
        "btnSignup": "Crear Cuenta",
        "btnStart": "Comenzar Ahora",
        "backButton": "Volver a Cursos",
        "enrollButton": "Inscribirse en este Curso",
        
        // Títulos principales
        "title": "Bienvenido a MSC STUDY, el lugar donde aprender música se convierte en una experiencia única",
        "description": "Explora clases interactivas, conoce la historia de la música y descubre cómo cada nota puede transformar tu forma de sentir y expresarte. ¡Empieza hoy tu viaje musical con nosotros!",
        "coursesTitle": "Cursos Populares",
        "allCoursesTitle": "Todos Nuestros Cursos",
        "allCoursesDesc": "Explora nuestra completa oferta de cursos musicales diseñados para todos los niveles.",
        
        // Cursos
        "course1": "Instrumentos de Viento",
        "course1Desc": "Aprende a dominar los instrumentos de viento con nuestros expertos.",
        "course2": "Instrumentos de Cuerda",
        "course2Desc": "Domina la técnica de los instrumentos de cuerda desde nivel básico a avanzado.",
        "course3": "Piano & Teclados",
        "course3Desc": "Desarrolla tu habilidad con el piano y teclados con métodos probados.",
        "course4": "Percusión",
        "course4Desc": "Aprende ritmos y técnicas de percusión de diferentes estilos musicales.",
        "course5": "Teoría Musical",
        "course5Desc": "Comprende los fundamentos de la música y mejora tu comprensión musical.",
        
        // Historia
        "historyTitle": "Historia de la Música",
        "historyIntro1": "La música es una de las expresiones culturales más antiguas y universales de la humanidad.",
        "historyIntro2": "Acompaña al ser humano desde sus inicios y ha sido un puente para comunicar emociones, transmitir historias y unir comunidades.",
        "historyIntro3": "A lo largo de los siglos, la música evolucionó, acompañando los cambios sociales, culturales y tecnológicos de cada civilización.",
        "historyPillarsTitle": "🎼 Pilares fundamentales en la historia de la música",
        "historyPillar1Title": "1. Las antiguas civilizaciones",
        "historyPillar1Point1": "Mesopotamia, Egipto, Grecia y Roma utilizaron la música en rituales, celebraciones y teatro.",
        "historyPillar1Point2": "Los griegos fueron los primeros en estudiar la música como ciencia.",
        "historyPillar2Title": "2. La música medieval y renacentista",
        "historyPillar2Point1": "Nacen los cantos gregorianos y la música sacra europea.",
        "historyPillar2Point2": "Se desarrollan las bases de la armonía y la notación musical.",
        "historyPillar3Title": "3. La música clásica",
        "historyPillar3Desc": "Compositores revolucionarios:",
        "historyPillar3Point1": "Johann Sebastian Bach",
        "historyPillar3Point2": "Wolfgang Amadeus Mozart",
        "historyPillar3Point3": "Ludwig van Beethoven",
        "historyPillar4Title": "4. La música moderna",
        "historyPillar4Desc": "Con la llegada de la tecnología del siglo XX surgieron:",
        "historyPillar4Point1": "El jazz",
        "historyPillar4Point2": "El rock",
        "historyPillar4Point3": "La música pop",
        "historyPillar4Point4": "La música electrónica",
        "historyUniversalTitle": "🌎 La música como idioma universal",
        "historyUniversalDesc": "La música es considerada un lenguaje universal, porque transmite emociones sin necesidad de palabras.",
        "historyEmotionalTitle": "✔ Desarrollo emocional",
        "historyEmotionalPoint1": "Ayuda a manejar el estrés y la tristeza.",
        "historyEmotionalPoint2": "Aumenta la felicidad, la motivación y la energía.",
        "historyCognitiveTitle": "✔ Desarrollo cognitivo y motriz",
        "historyCognitivePoint1": "Mejora la concentración, la memoria y la creatividad.",
        "historyCognitivePoint2": "En niños, fortalece la coordinación y la motricidad fina.",
        "historyQuote": "La música une, inspira, sana y acompaña. Y lo más hermoso es que siempre está lista para cualquiera que quiera escucharla o interpretarla.",
        
        // Teoría
        "theoryTitle": "Teoría Musical",
        "theoryDesc": "La teoría musical es el estudio de las prácticas y posibilidades de la música. Comprenderla te permitirá leer, escribir y analizar música con mayor profundidad.",
        "theoryAreasTitle": "Áreas de Estudio",
        "theoryAreasHarmony": "Armonía",
        "theoryAreasHarmonyDesc": "Estudio de los acordes y su progresión, fundamento de la música tonal.",
        "theoryAreasMelody": "Melodía",
        "theoryAreasMelodyDesc": "Arte de crear líneas musicales coherentes y expresivas.",
        "theoryAreasRhythm": "Ritmo",
        "theoryAreasRhythmDesc": "Organización del tiempo en la música, patrones y métricas.",
        "theoryAreasForm": "Forma Musical",
        "theoryAreasFormDesc": "Estructura y organización de las obras musicales.",
        "theoryLevelsTitle": "Niveles de Estudio",
        "theoryLevelsBasic": "Básico: Notas, escalas mayores y menores, intervalos, acordes tríada",
        "theoryLevelsIntermediate": "Intermedio: Armonía funcional, modulación, formas binaria y ternaria",
        "theoryLevelsAdvanced": "Avanzado: Contrapunto, armonía jazz, análisis de obras complejas",
        "theoryApplicationsTitle": "Aplicaciones Prácticas",
        "theoryApplicationsDesc": "El estudio de la teoría musical te ayudará a:",
        "theoryApplications1": "Improvisar con mayor confianza y creatividad",
        "theoryApplications2": "Componer tus propias piezas musicales",
        "theoryApplications3": "Analizar obras para entender su estructura",
        "theoryApplications4": "Comunicarte efectivamente con otros músicos",
        "theoryApplications5": "Desarrollar tu oído musical",
        
        // Instrumentos de viento
        "windTitle": "Instrumentos de Viento",
        "windDesc": "Los instrumentos de viento producen sonido mediante la vibración del aire dentro de un tubo. Se dividen en dos categorías principales: viento-madera y viento-metal.",
        "windWoodwindsTitle": "Instrumentos de Viento-Madera",
        "windWoodwindsFlute": "Flauta",
        "windWoodwindsFluteDesc": "Instrumento de sonido dulce y brillante, perfecto para melodías fluidas.",
        "windWoodwindsClarinet": "Clarinete",
        "windWoodwindsClarinetDesc": "Versátil instrumento con un rango amplio y sonido cálido.",
        "windWoodwindsSaxophone": "Saxofón",
        "windWoodwindsSaxophoneDesc": "Icono del jazz, con un sonido expresivo y lleno de carácter.",
        "windWoodwindsOboe": "Oboe",
        "windWoodwindsOboeDesc": "Instrumento con sonido penetrante, usado para afinar la orquesta.",
        "windBrassTitle": "Instrumentos de Viento-Metal",
        "windBrassTrumpet": "Trompeta",
        "windBrassTrumpetDesc": "El más agudo de los metales, con sonido brillante y enérgico.",
        "windBrassTrombone": "Trombón",
        "windBrassTromboneDesc": "Único por su vara deslizante, con sonido potente y flexible.",
        "windBrassTuba": "Tuba",
        "windBrassTubaDesc": "El más grave de los metales, base fundamental de la armonía.",
        "windBrassCornet": "Corneta",
        "windBrassCornetDesc": "Similar a la trompeta pero con sonido más suave y redondo.",
        "windLevelsTitle": "Niveles de Aprendizaje",
        "windLevelsBasic": "Básico: Postura, embocadura, primeras notas y escalas simples",
        "windLevelsIntermediate": "Intermedio: Técnica de respiración, vibrato, repertorio básico",
        "windLevelsAdvanced": "Avanzado: Estilos específicos, improvisación, repertorio complejo",
        
        // Búsqueda
        "searchPlaceholder": "Buscar cursos...",
        
        // Perfil de usuario
        "myProfile": "Mi Perfil",
        "settings": "Configuración",
        "logout": "Cerrar Sesión",
        
        // Modales
        "loginTitle": "Iniciar Sesión",
        "registerTitle": "Crear Cuenta",
        "emailLabel": "Email",
        "passwordLabel": "Contraseña",
        "fullNameLabel": "Nombre Completo",
        "confirmPasswordLabel": "Confirmar Contraseña",
        "rememberMe": "Recuérdame",
        "forgotPassword": "¿Olvidaste tu contraseña?",
        "loginButton": "Entrar",
        "createAccountButton": "Crear Cuenta",
        "noAccount": "¿No tienes cuenta?",
        "registerLink": "Regístrate",
        "haveAccount": "¿Ya tienes cuenta?",
        "loginLink": "Iniciar Sesión",
        
        // Footer
        "footerTagline": "Transformando vidas a través de la educación musical.",
        "quickLinks": "Enlaces Rápidos",
        "policiesSupport": "Políticas & Soporte",
        "privacyPolicy": "Política de Privacidad",
        "terms": "Términos de Servicio",
        "cookies": "Política de Cookies",
        "faq": "Preguntas Frecuentes",
        "support": "Soporte Técnico",
        "copyright": "Todos los derechos reservados.",
        "developedBy": "Desarrollado por"
    },
    
    en: {
        // Navigation
        "menuHome": "Home",
        "menuCourses": "Courses",
        "menuHistory": "Music History",
        "menuTheory": "Music Theory",
        
        // General buttons
        "btnLogin": "Login",
        "btnSignup": "Sign Up",
        "btnStart": "Start Now",
        "backButton": "Back to Courses",
        "enrollButton": "Enroll in this Course",
        
        // Main titles
        "title": "Welcome to MSC STUDY, where learning music becomes a unique experience",
        "description": "Explore interactive classes, learn about music history, and discover how every note can transform your way of feeling and expressing. Start your musical journey with us today!",
        "coursesTitle": "Popular Courses",
        "allCoursesTitle": "All Our Courses",
        "allCoursesDesc": "Explore our complete range of music courses designed for all levels.",
        
        // Courses
        "course1": "Wind Instruments",
        "course1Desc": "Learn to master wind instruments with our experts.",
        "course2": "String Instruments",
        "course2Desc": "Master string instrument technique from basic to advanced level.",
        "course3": "Piano & Keyboards",
        "course3Desc": "Develop your piano and keyboard skills with proven methods.",
        "course4": "Percussion",
        "course4Desc": "Learn rhythms and percussion techniques from different musical styles.",
        "course5": "Music Theory",
        "course5Desc": "Understand the fundamentals of music and improve your musical comprehension.",
        
        // History
        "historyTitle": "History of Music",
        "historyIntro1": "Music is one of the oldest and most universal cultural expressions of humanity.",
        "historyIntro2": "It has accompanied humans since their beginnings and has been a bridge to communicate emotions, transmit stories, and unite communities.",
        "historyIntro3": "Throughout the centuries, music evolved, accompanying the social, cultural, and technological changes of each civilization.",
        "historyPillarsTitle": "🎼 Fundamental pillars in music history",
        "historyPillar1Title": "1. Ancient civilizations",
        "historyPillar1Point1": "Mesopotamia, Egypt, Greece, and Rome used music in rituals, celebrations, and theater.",
        "historyPillar1Point2": "The Greeks were the first to study music as a science.",
        "historyPillar2Title": "2. Medieval and Renaissance music",
        "historyPillar2Point1": "Gregorian chants and European sacred music were born.",
        "historyPillar2Point2": "The foundations of harmony and musical notation were developed.",
        "historyPillar3Title": "3. Classical music",
        "historyPillar3Desc": "Revolutionary composers:",
        "historyPillar3Point1": "Johann Sebastian Bach",
        "historyPillar3Point2": "Wolfgang Amadeus Mozart",
        "historyPillar3Point3": "Ludwig van Beethoven",
        "historyPillar4Title": "4. Modern music",
        "historyPillar4Desc": "With the arrival of 20th-century technology emerged:",
        "historyPillar4Point1": "Jazz",
        "historyPillar4Point2": "Rock",
        "historyPillar4Point3": "Pop music",
        "historyPillar4Point4": "Electronic music",
        "historyUniversalTitle": "🌎 Music as a universal language",
        "historyUniversalDesc": "Music is considered a universal language because it transmits emotions without the need for words.",
        "historyEmotionalTitle": "✔ Emotional development",
        "historyEmotionalPoint1": "Helps manage stress and sadness.",
        "historyEmotionalPoint2": "Increases happiness, motivation, and energy.",
        "historyCognitiveTitle": "✔ Cognitive and motor development",
        "historyCognitivePoint1": "Improves concentration, memory, and creativity.",
        "historyCognitivePoint2": "In children, strengthens coordination and fine motor skills.",
        "historyQuote": "Music unites, inspires, heals, and accompanies. And the most beautiful thing is that it's always ready for anyone who wants to listen or play it.",
        
        // Theory
        "theoryTitle": "Music Theory",
        "theoryDesc": "Music theory is the study of the practices and possibilities of music. Understanding it will allow you to read, write, and analyze music more deeply.",
        "theoryAreasTitle": "Study Areas",
        "theoryAreasHarmony": "Harmony",
        "theoryAreasHarmonyDesc": "Study of chords and their progression, foundation of tonal music.",
        "theoryAreasMelody": "Melody",
        "theoryAreasMelodyDesc": "Art of creating coherent and expressive musical lines.",
        "theoryAreasRhythm": "Rhythm",
        "theoryAreasRhythmDesc": "Organization of time in music, patterns and metrics.",
        "theoryAreasForm": "Musical Form",
        "theoryAreasFormDesc": "Structure and organization of musical works.",
        "theoryLevelsTitle": "Study Levels",
        "theoryLevelsBasic": "Basic: Notes, major and minor scales, intervals, triad chords",
        "theoryLevelsIntermediate": "Intermediate: Functional harmony, modulation, binary and ternary forms",
        "theoryLevelsAdvanced": "Advanced: Counterpoint, jazz harmony, analysis of complex works",
        "theoryApplicationsTitle": "Practical Applications",
        "theoryApplicationsDesc": "Studying music theory will help you:",
        "theoryApplications1": "Improvise with greater confidence and creativity",
        "theoryApplications2": "Compose your own musical pieces",
        "theoryApplications3": "Analyze works to understand their structure",
        "theoryApplications4": "Communicate effectively with other musicians",
        "theoryApplications5": "Develop your musical ear",
        
        // Wind instruments
        "windTitle": "Wind Instruments",
        "windDesc": "Wind instruments produce sound through the vibration of air inside a tube. They are divided into two main categories: woodwinds and brass.",
        "windWoodwindsTitle": "Woodwind Instruments",
        "windWoodwindsFlute": "Flute",
        "windWoodwindsFluteDesc": "Instrument with sweet and bright sound, perfect for fluid melodies.",
        "windWoodwindsClarinet": "Clarinet",
        "windWoodwindsClarinetDesc": "Versatile instrument with a wide range and warm sound.",
        "windWoodwindsSaxophone": "Saxophone",
        "windWoodwindsSaxophoneDesc": "Icon of jazz, with an expressive and full of character sound.",
        "windWoodwindsOboe": "Oboe",
        "windWoodwindsOboeDesc": "Instrument with penetrating sound, used to tune the orchestra.",
        "windBrassTitle": "Brass Instruments",
        "windBrassTrumpet": "Trumpet",
        "windBrassTrumpetDesc": "The highest-pitched brass, with bright and energetic sound.",
        "windBrassTrombone": "Trombone",
        "windBrassTromboneDesc": "Unique for its slide, with powerful and flexible sound.",
        "windBrassTuba": "Tuba",
        "windBrassTubaDesc": "The lowest brass, fundamental harmonic foundation.",
        "windBrassCornet": "Cornet",
        "windBrassCornetDesc": "Similar to trumpet but with softer and rounder sound.",
        "windLevelsTitle": "Learning Levels",
        "windLevelsBasic": "Basic: Posture, embouchure, first notes and simple scales",
        "windLevelsIntermediate": "Intermediate: Breathing technique, vibrato, basic repertoire",
        "windLevelsAdvanced": "Advanced: Specific styles, improvisation, complex repertoire",
        
        // Search
        "searchPlaceholder": "Search courses...",
        
        // User profile
        "myProfile": "My Profile",
        "settings": "Settings",
        "logout": "Logout",
        
        // Modals
        "loginTitle": "Login",
        "registerTitle": "Create Account",
        "emailLabel": "Email",
        "passwordLabel": "Password",
        "fullNameLabel": "Full Name",
        "confirmPasswordLabel": "Confirm Password",
        "rememberMe": "Remember Me",
        "forgotPassword": "Forgot Password?",
        "loginButton": "Login",
        "createAccountButton": "Create Account",
        "noAccount": "Don't have an account?",
        "registerLink": "Sign Up",
        "haveAccount": "Already have an account?",
        "loginLink": "Login",
        
        // Footer
        "footerTagline": "Transforming lives through music education.",
        "quickLinks": "Quick Links",
        "policiesSupport": "Policies & Support",
        "privacyPolicy": "Privacy Policy",
        "terms": "Terms of Service",
        "cookies": "Cookie Policy",
        "faq": "Frequently Asked Questions",
        "support": "Technical Support",
        "copyright": "All rights reserved.",
        "developedBy": "Developed by"
    },
    
    pt: {
        // Navegação
        "menuHome": "Início",
        "menuCourses": "Cursos",
        "menuHistory": "História da Música",
        "menuTheory": "Teoria Musical",
        
        // Botões gerais
        "btnLogin": "Entrar",
        "btnSignup": "Criar Conta",
        "btnStart": "Começar Agora",
        "backButton": "Voltar aos Cursos",
        "enrollButton": "Inscrever-se neste Curso",
        
        // Títulos principais
        "title": "Bem-vindo ao MSC STUDY, o lugar onde aprender música se torna uma experiência única",
        "description": "Explore aulas interativas, conheça a história da música e descubra como cada nota pode transformar sua forma de sentir e se expressar. Comece sua jornada musical conosco hoje!",
        "coursesTitle": "Cursos Populares",
        "allCoursesTitle": "Todos os Nossos Cursos",
        "allCoursesDesc": "Explore nossa oferta completa de cursos musicais projetados para todos os níveis.",
        
        // Cursos
        "course1": "Instrumentos de Sopro",
        "course1Desc": "Aprenda a dominar os instrumentos de sopro com nossos especialistas.",
        "course2": "Instrumentos de Cordas",
        "course2Desc": "Domine a técnica dos instrumentos de cordas desde o nível básico ao avançado.",
        "course3": "Piano & Teclados",
        "course3Desc": "Desenvolva sua habilidade com piano e teclados com métodos comprovados.",
        "course4": "Percussão",
        "course4Desc": "Aprenda ritmos e técnicas de percussão de diferentes estilos musicais.",
        "course5": "Teoria Musical",
        "course5Desc": "Comprenda os fundamentos da música e melhore sua compreensão musical.",
        
        // História
        "historyTitle": "História da Música",
        "historyIntro1": "A música é uma das expressões culturais mais antigas e universais da humanidade.",
        "historyIntro2": "Acompanha o ser humano desde seus primórdios e tem sido uma ponte para comunicar emoções, transmitir histórias e unir comunidades.",
        "historyIntro3": "Ao longo dos séculos, a música evoluiu, acompanhando as mudanças sociais, culturais e tecnológicas de cada civilização.",
        "historyPillarsTitle": "🎼 Pilares fundamentais na história da música",
        "historyPillar1Title": "1. As antigas civilizações",
        "historyPillar1Point1": "Mesopotâmia, Egito, Grécia e Roma usavam a música em rituais, celebrações e teatro.",
        "historyPillar1Point2": "Os gregos foram os primeiros a estudar a música como ciência.",
        "historyPillar2Title": "2. A música medieval e renascentista",
        "historyPillar2Point1": "Nascem os cantos gregorianos e a música sacra europeia.",
        "historyPillar2Point2": "Desenvolvem-se as bases da harmonia e da notação musical.",
        "historyPillar3Title": "3. A música clássica",
        "historyPillar3Desc": "Compositores revolucionários:",
        "historyPillar3Point1": "Johann Sebastian Bach",
        "historyPillar3Point2": "Wolfgang Amadeus Mozart",
        "historyPillar3Point3": "Ludwig van Beethoven",
        "historyPillar4Title": "4. A música moderna",
        "historyPillar4Desc": "Com a chegada da tecnologia do século XX surgiram:",
        "historyPillar4Point1": "O jazz",
        "historyPillar4Point2": "O rock",
        "historyPillar4Point3": "A música pop",
        "historyPillar4Point4": "A música eletrônica",
        "historyUniversalTitle": "🌎 A música como idioma universal",
        "historyUniversalDesc": "A música é considerada uma linguagem universal, porque transmite emoções sem necessidade de palavras.",
        "historyEmotionalTitle": "✔ Desenvolvimento emocional",
        "historyEmotionalPoint1": "Ajuda a gerenciar o estresse e a tristeza.",
        "historyEmotionalPoint2": "Aumenta a felicidade, a motivação e a energia.",
        "historyCognitiveTitle": "✔ Desenvolvimento cognitivo e motor",
        "historyCognitivePoint1": "Melhora a concentração, a memória e a criatividade.",
        "historyCognitivePoint2": "Em crianças, fortalece a coordenação e a motricidade fina.",
        "historyQuote": "A música une, inspira, cura e acompanha. E o mais bonito é que está sempre pronta para qualquer pessoa que queira ouvi-la ou interpretá-la.",
        
        // Teoria
        "theoryTitle": "Teoria Musical",
        "theoryDesc": "A teoria musical é o estudo das práticas e possibilidades da música. Compreendê-la permitirá ler, escrever e analisar música com maior profundidade.",
        "theoryAreasTitle": "Áreas de Estudo",
        "theoryAreasHarmony": "Harmonia",
        "theoryAreasHarmonyDesc": "Estudo dos acordes e sua progressão, fundamento da música tonal.",
        "theoryAreasMelody": "Melodia",
        "theoryAreasMelodyDesc": "Arte de criar linhas musicais coerentes e expressivas.",
        "theoryAreasRhythm": "Ritmo",
        "theoryAreasRhythmDesc": "Organização do tempo na música, padrões e métricas.",
        "theoryAreasForm": "Forma Musical",
        "theoryAreasFormDesc": "Estrutura e organização das obras musicais.",
        "theoryLevelsTitle": "Níveis de Estudo",
        "theoryLevelsBasic": "Básico: Notas, escalas maiores e menores, intervalos, acordes tríade",
        "theoryLevelsIntermediate": "Intermediário: Harmonia funcional, modulação, formas binária e ternária",
        "theoryLevelsAdvanced": "Avançado: Contraponto, harmonia jazz, análise de obras complexas",
        "theoryApplicationsTitle": "Aplicações Práticas",
        "theoryApplicationsDesc": "O estudo da teoria musical o ajudará a:",
        "theoryApplications1": "Improvisar com maior confiança e criatividade",
        "theoryApplications2": "Compor suas próprias peças musicais",
        "theoryApplications3": "Analisar obras para entender sua estrutura",
        "theoryApplications4": "Comunicar-se efetivamente com outros músicos",
        "theoryApplications5": "Desenvolver seu ouvido musical",
        
        // Instrumentos de sopro
        "windTitle": "Instrumentos de Sopro",
        "windDesc": "Os instrumentos de sopro produzem som através da vibração do ar dentro de um tubo. Dividem-se em duas categorias principais: sopro de madeira e sopro de metal.",
        "windWoodwindsTitle": "Instrumentos de Sopro de Madeira",
        "windWoodwindsFlute": "Flauta",
        "windWoodwindsFluteDesc": "Instrumento de som doce e brilhante, perfeito para melodias fluidas.",
        "windWoodwindsClarinet": "Clarinete",
        "windWoodwindsClarinetDesc": "Instrumento versátil com ampla extensão e som quente.",
        "windWoodwindsSaxophone": "Saxofone",
        "windWoodwindsSaxophoneDesc": "Ícone do jazz, com som expressivo e cheio de caráter.",
        "windWoodwindsOboe": "Oboé",
        "windWoodwindsOboeDesc": "Instrumento com som penetrante, usado para afinar a orquestra.",
        "windBrassTitle": "Instrumentos de Sopro de Metal",
        "windBrassTrumpet": "Trompete",
        "windBrassTrumpetDesc": "O mais agudo dos metais, com som brilhante e energético.",
        "windBrassTrombone": "Trombone",
        "windBrassTromboneDesc": "Único por sua vara deslizante, com som potente e flexível.",
        "windBrassTuba": "Tuba",
        "windBrassTubaDesc": "O mais grave dos metais, base fundamental da harmonia.",
        "windBrassCornet": "Corneta",
        "windBrassCornetDesc": "Similar ao trompete, mas com som mais suave e redondo.",
        "windLevelsTitle": "Níveis de Aprendizagem",
        "windLevelsBasic": "Básico: Postura, embocadura, primeiras notas e escalas simples",
        "windLevelsIntermediate": "Intermediário: Técnica de respiração, vibrato, repertório básico",
        "windLevelsAdvanced": "Avançado: Estilos específicos, improvisação, repertório complexo",
        
        // Busca
        "searchPlaceholder": "Buscar cursos...",
        
        // Perfil do usuário
        "myProfile": "Meu Perfil",
        "settings": "Configurações",
        "logout": "Sair",
        
        // Modais
        "loginTitle": "Entrar",
        "registerTitle": "Criar Conta",
        "emailLabel": "Email",
        "passwordLabel": "Senha",
        "fullNameLabel": "Nome Completo",
        "confirmPasswordLabel": "Confirmar Senha",
        "rememberMe": "Lembrar-me",
        "forgotPassword": "Esqueceu sua senha?",
        "loginButton": "Entrar",
        "createAccountButton": "Criar Conta",
        "noAccount": "Não tem uma conta?",
        "registerLink": "Cadastre-se",
        "haveAccount": "Já tem uma conta?",
        "loginLink": "Entrar",
        
        // Rodapé
        "footerTagline": "Transformando vidas através da educação musical.",
        "quickLinks": "Links Rápidos",
        "policiesSupport": "Políticas & Suporte",
        "privacyPolicy": "Política de Privacidade",
        "terms": "Termos de Serviço",
        "cookies": "Política de Cookies",
        "faq": "Perguntas Frequentes",
        "support": "Suporte Técnico",
        "copyright": "Todos os direitos reservados.",
        "developedBy": "Desenvolvido por"
    }
};

// ===== FUNCIONES DEL SISTEMA DE IDIOMAS =====
function initializeLanguage() {
    // Cargar idioma guardado
    const savedLang = localStorage.getItem('mscStudyLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateLanguageSelector(savedLang);
    }
    
    // Aplicar traducciones iniciales
    applyTranslations();
    
    // Configurar selector de idioma
    setupLanguageSelector();
}

function applyTranslations() {
    const lang = currentLang;
    const langTranslations = translations[lang];
    
    // Traducir elementos estáticos
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (langTranslations[key]) {
            element.textContent = langTranslations[key];
        }
    });
    
    // Traducir placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (langTranslations[key]) {
            element.placeholder = langTranslations[key];
        }
    });
    
    // Traducir contenido dinámico si está cargado
    translateDynamicContent();
}

function translateDynamicContent() {
    const lang = currentLang;
    const langTranslations = translations[lang];
    
    // Verificar qué sección está activa
    const activeSection = document.querySelector('.section-content.active');
    if (!activeSection) return;
    
    // Traducir según el ID de la sección
    const sectionId = activeSection.id;
    
    switch(sectionId) {
        case 'courses-section':
            translateCoursesContent(langTranslations);
            break;
        case 'history-section':
            translateHistoryContent(langTranslations);
            break;
        case 'theory-section':
            translateTheoryContent(langTranslations);
            break;
        case 'course-detail-section':
            translateCourseDetailContent(langTranslations);
            break;
    }
}

function translateCoursesContent(translations) {
    const section = document.getElementById('courses-content');
    if (!section) return;
    
    // Traducir elementos con data-translate
    section.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

function translateHistoryContent(translations) {
    const section = document.getElementById('history-content');
    if (!section) return;
    
    // Traducir elementos con data-translate
    section.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
    
    // Traducir también otros elementos específicos
    const elements = section.querySelectorAll('h2, h3, h4, p, li, strong');
    elements.forEach(element => {
        const text = element.textContent.trim();
        // Buscar la traducción por el texto
        Object.keys(translations).forEach(key => {
            if (translations[key] === text) {
                element.textContent = translations[key];
            }
        });
    });
}

function translateTheoryContent(translations) {
    const section = document.getElementById('theory-content');
    if (!section) return;
    
    // Traducir elementos con data-translate
    section.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

function translateCourseDetailContent(translations) {
    const section = document.getElementById('course-detail-content');
    if (!section) return;
    
    // Traducir elementos con data-translate
    section.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

function setupLanguageSelector() {
    const langSelector = document.querySelector('.languaje');
    if (!langSelector) return;
    
    const selected = langSelector.querySelector('.languaje-selected');
    const dropdown = langSelector.querySelector('ul');
    
    // Mostrar/ocultar menú
    selected.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    
    // Cambiar idioma
    langSelector.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const flagUrl = item.getAttribute('data-flag');
            const lang = item.getAttribute('data-lang');
            
            // Cambiar idioma
            changeLanguage(lang, flagUrl);
            
            // Cerrar menú
            dropdown.classList.remove('show');
        });
    });
}

function changeLanguage(lang, flagUrl) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('mscStudyLang', lang);
    
    // Actualizar selector visual
    updateLanguageSelector(lang, flagUrl);
    
    // Aplicar traducciones
    applyTranslations();
}

function updateLanguageSelector(lang, flagUrl = null) {
    const selected = document.querySelector('.languaje-selected');
    if (!selected) return;
    
    // Si no se proporciona flagUrl, buscarla
    if (!flagUrl) {
        flagUrl = getFlagUrl(lang);
    }
    
    if (flagUrl) {
        selected.innerHTML = `<span class="flag" style="background-image: url('${flagUrl}');"></span>`;
    }
}

function getFlagUrl(lang) {
    const flags = {
        es: 'https://flagsapi.com/ES/flat/64.png',
        en: 'https://flagsapi.com/GB/flat/64.png',
        pt: 'https://flagsapi.com/BR/flat/64.png'
    };
    return flags[lang] || flags.es;
}

// ===== SISTEMA DE MODALES =====
function initializeModals() {
    // Botones para abrir modales
    document.querySelectorAll('.login-btn, .login-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal('loginModal');
        });
    });
    
    document.querySelectorAll('.signup-btn, .register-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal('registerModal');
        });
    });
    
    // Cerrar modales
    document.querySelectorAll('.close-login, .close-register').forEach(btn => {
        btn.addEventListener('click', cerrarModal);
    });
    
    // Cerrar modal al hacer clic fuera
    document.querySelectorAll('.wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            if (e.target === wrapper) {
                cerrarModal();
            }
        });
    });
    
    // Manejo de formularios
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
}

function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModal() {
    document.querySelectorAll('.wrapper').forEach(wrapper => {
        wrapper.classList.remove('active');
        setTimeout(() => {
            wrapper.style.display = 'none';
        }, 300);
    });
    document.body.style.overflow = 'auto';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Mostrar mensaje de carga
    const message = document.getElementById('formMessage');
    message.textContent = 'Iniciando sesión...';
    message.className = 'form-message loading';
    message.style.display = 'block';
    
    // Simulación de login
    setTimeout(() => {
        if (email && password) {
            // Guardar datos del usuario
            const userData = {
                email: email,
                name: email.split('@')[0],
                loggedIn: true
            };
            
            localStorage.setItem('mscStudyUser', JSON.stringify(userData));
            if (remember) {
                localStorage.setItem('mscStudyRemember', 'true');
            }
            
            // Mostrar mensaje de éxito
            message.textContent = '¡Inicio de sesión exitoso!';
            message.className = 'form-message success';
            
            // Cerrar modal después de 1.5 segundos
            setTimeout(() => {
                cerrarModal();
                checkLoggedInUser();
            }, 1500);
        } else {
            message.textContent = 'Por favor, completa todos los campos.';
            message.className = 'form-message error';
        }
    }, 1500);
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    // Validaciones
    const message = document.getElementById('registerMessage');
    
    if (!name || !email || !password || !confirmPassword) {
        message.textContent = 'Por favor, completa todos los campos.';
        message.className = 'form-message error';
        message.style.display = 'block';
        return;
    }
    
    if (password !== confirmPassword) {
        message.textContent = 'Las contraseñas no coinciden.';
        message.className = 'form-message error';
        message.style.display = 'block';
        return;
    }
    
    if (password.length < 6) {
        message.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        message.className = 'form-message error';
        message.style.display = 'block';
        return;
    }
    
    // Mostrar mensaje de carga
    message.textContent = 'Creando tu cuenta...';
    message.className = 'form-message loading';
    message.style.display = 'block';
    
    // Simulación de registro
    setTimeout(() => {
        // Guardar datos del usuario
        const userData = {
            email: email,
            name: name,
            loggedIn: true
        };
        
        localStorage.setItem('mscStudyUser', JSON.stringify(userData));
        
        // Mostrar mensaje de éxito
        message.textContent = '¡Cuenta creada exitosamente!';
        message.className = 'form-message success';
        
        // Cerrar modal después de 1.5 segundos y mostrar login
        setTimeout(() => {
            cerrarModal();
            checkLoggedInUser();
        }, 1500);
    }, 1500);
}

function checkLoggedInUser() {
    const userData = localStorage.getItem('mscStudyUser');
    const userProfile = document.getElementById('userProfile');
    const mobileUserProfile = document.getElementById('mobileUserProfile');
    const navAuth = document.querySelector('.nav-auth.desktop-auth');
    const mobileNavAuth = document.querySelector('.nav-auth.mobile-auth');
    
    if (userData) {
        const user = JSON.parse(userData);
        if (user.loggedIn) {
            // Mostrar perfil de usuario en desktop
            document.getElementById('userName').textContent = user.name || 'Usuario';
            userProfile.style.display = 'block';
            if (navAuth) navAuth.style.display = 'none';
            
            // Mostrar perfil de usuario en móvil
            document.getElementById('mobileUserName').textContent = user.name || 'Usuario';
            mobileUserProfile.style.display = 'block';
            if (mobileNavAuth) mobileNavAuth.style.display = 'none';
            
            // Configurar menú de usuario desktop
            document.getElementById('userMenuBtn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                document.getElementById('userDropdown').classList.toggle('show');
            });
            
            // Configurar menú de usuario móvil
            document.getElementById('mobileUserMenuBtn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                document.getElementById('mobileUserDropdown').classList.toggle('show');
            });
            
            // Cerrar menús al hacer clic fuera
            document.addEventListener('click', () => {
                document.getElementById('userDropdown')?.classList.remove('show');
                document.getElementById('mobileUserDropdown')?.classList.remove('show');
            });
            
            // Logout desktop
            document.getElementById('logoutLink')?.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });
            
            // Logout móvil
            document.getElementById('mobileLogoutLink')?.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });
            
            return;
        }
    }
    
    // Si no hay usuario logueado
    userProfile.style.display = 'none';
    mobileUserProfile.style.display = 'none';
    if (navAuth) navAuth.style.display = 'flex';
    if (mobileNavAuth) mobileNavAuth.style.display = 'flex';
}

function logoutUser() {
    localStorage.removeItem('mscStudyUser');
    checkLoggedInUser();
    navigateTo('#home');
    
    // Cerrar menú móvil si está abierto
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
}

function initializeEventListeners() {
    // Botón CTA principal
    document.querySelector('.cta-button')?.addEventListener('click', () => {
        navigateTo('#courses');
    });
    
    // Tarjetas de curso en home
    document.querySelectorAll('#home-section .course-card').forEach(card => {
        card.addEventListener('click', function() {
            const courseType = this.getAttribute('data-course');
            navigateTo(`#course-${courseType}`);
        });
    });
    
    // MENÚ HAMBURGUESA MEJORADO
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Cambiar ícono
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-btn')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Búsqueda (simulación)
    document.querySelectorAll('.search-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert('Funcionalidad de búsqueda en desarrollo...');
            }
        });
    });
    
    // Cerrar menús al hacer clic en cualquier parte
    document.addEventListener('click', (e) => {
        // Cerrar menú de idioma si está abierto
        if (!e.target.closest('.languaje')) {
            document.querySelector('.languaje ul')?.classList.remove('show');
        }
    });
}

// ===== INICIALIZACIÓN PRINCIPAL =====
document.addEventListener("DOMContentLoaded", function() {
    console.log("MSC STUDY SPA cargada correctamente");
    
    // Inicializar sistemas
    initializeLanguage(); // ¡PRIMERO el idioma!
    initializeSPA();
    initializeModals();
    initializeEventListeners();
    checkLoggedInUser();
    
    // Navegar a la sección inicial
    const initialHash = window.location.hash || '#home';
    navigateTo(initialHash);
});

// ===== SISTEMA DE ENRUTAMIENTO SPA =====
function initializeSPA() {
    // Manejar cambios en el hash de la URL
    window.addEventListener('hashchange', function() {
        navigateTo(window.location.hash);
    });
    
    // Prevenir comportamiento por defecto de enlaces internos
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            navigateTo(href);
        }
    });
}

function navigateTo(hash) {
    const sectionId = hash.substring(1); // Remover el #
    
    // Ocultar todas las secciones
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    
    // Actualizar enlaces de navegación activos
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
    
    // Mostrar la sección correspondiente
    let targetSection;
    
    switch(sectionId) {
        case 'home':
            targetSection = document.getElementById('home-section');
            break;
        case 'courses':
            targetSection = document.getElementById('courses-section');
            loadCoursesSection();
            break;
        case 'history':
            targetSection = document.getElementById('history-section');
            loadHistorySection();
            break;
        case 'theory':
            targetSection = document.getElementById('theory-section');
            loadTheorySection();
            break;
        default:
            // Verificar si es un curso específico
            if (sectionId.startsWith('course-')) {
                const courseType = sectionId.substring(7); // Remover "course-"
                targetSection = document.getElementById('course-detail-section');
                loadCourseDetail(courseType);
            } else {
                // Por defecto, mostrar home
                targetSection = document.getElementById('home-section');
                window.location.hash = 'home';
            }
    }
    
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Aplicar traducciones después de un breve delay para asegurar que el contenido se cargó
        setTimeout(() => {
            applyTranslations();
        }, 350);
        
        // Desplazar suavemente hacia la parte superior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ===== CARGA DINÁMICA DE CONTENIDO =====
function loadCoursesSection() {
    const contentContainer = document.getElementById('courses-content');
    
    setTimeout(() => {
        contentContainer.innerHTML = `
        <section class="courses-section">
            <h2 class="section-title" data-translate="allCoursesTitle">Todos Nuestros Cursos</h2>
            <p class="main-description" data-translate="allCoursesDesc">Explora nuestra completa oferta de cursos musicales diseñados para todos los niveles.</p>
            
            <div class="courses-grid">
            <div class="course-card" data-course="wind">
                <h3 data-translate="course1">Instrumentos de Viento</h3>
                <div class="instrument-types">
                <span class="instrument-type">🎺</span>
                <span class="instrument-type">🎷</span>
                <span class="instrument-type">🪈</span>
                </div>
                <p data-translate="course1Desc">Aprende a dominar los instrumentos de viento con nuestros expertos.</p>
            </div>
            <div class="course-card" data-course="string">
                <h3 data-translate="course2">Instrumentos de Cuerda</h3>
                <div class="instrument-types">
                <span class="instrument-type">🎸</span>
                <span class="instrument-type">🎻</span>
                <span class="instrument-type">🪕</span>
                </div>
                <p data-translate="course2Desc">Domina la técnica de los instrumentos de cuerda desde nivel básico a avanzado.</p>
            </div>
            <div class="course-card" data-course="piano">
                <h3 data-translate="course3">Piano & Teclados</h3>
                <div class="instrument-types">
                <span class="instrument-type">🎹</span>
                <span class="instrument-type">🎹</span>
                </div>
                <p data-translate="course3Desc">Desarrolla tu habilidad con el piano y teclados con métodos probados.</p>
            </div>
            <div class="course-card" data-course="percussion">
                <h3 data-translate="course4">Percusión</h3>
                <div class="instrument-types">
                <span class="instrument-type">🥁</span>
                <span class="instrument-type">🎵</span>
                <span class="instrument-type">🪘</span>
                </div>
                <p data-translate="course4Desc">Aprende ritmos y técnicas de percusión de diferentes estilos musicales.</p>
            </div>
            <div class="course-card" data-course="theory">
                <h3 data-translate="course5">Teoría Musical</h3>
                <div class="instrument-types">
                <span class="instrument-type">🎼</span>
                <span class="instrument-type">📚</span>
                </div>
                <p data-translate="course5Desc">Comprende los fundamentos de la música y mejora tu comprensión musical.</p>
            </div>
            </div>
        </section>
        `;
        
        // Aplicar traducciones al contenido recién cargado
        applyTranslations();
        
        // Agregar event listeners a las tarjetas de curso
        document.querySelectorAll('#courses-content .course-card').forEach(card => {
            card.addEventListener('click', function() {
                const courseType = this.getAttribute('data-course');
                navigateTo(`#course-${courseType}`);
            });
        });
    }, 300);
}

function loadHistorySection() {
    const contentContainer = document.getElementById('history-content');
    
    setTimeout(() => {
        contentContainer.innerHTML = `
        <div class="course-detail">
            <button class="back-button" onclick="navigateTo('#courses')">
            <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
            </button>
            <h2 data-translate="historyTitle">Historia de la Música</h2>
            
            <div class="history-intro">
            <p data-translate="historyIntro1">La música es una de las expresiones culturales más antiguas y universales de la humanidad.</p>
            <p data-translate="historyIntro2">Acompaña al ser humano desde sus inicios y ha sido un puente para comunicar emociones, transmitir historias y unir comunidades.</p>
            <p data-translate="historyIntro3">A lo largo de los siglos, la música evolucionó, acompañando los cambios sociales, culturales y tecnológicos de cada civilización.</p>
            </div>

            <h3 data-translate="historyPillarsTitle">🎼 Pilares fundamentales en la historia de la música</h3>
            
            <div class="pillar-section">
            <h4 data-translate="historyPillar1Title">1. Las antiguas civilizaciones</h4>
            <ul>
                <li><strong data-translate="historyPillar1Point1">Mesopotamia, Egipto, Grecia y Roma utilizaron la música en rituales, celebraciones y teatro.</strong></li>
                <li data-translate="historyPillar1Point2">Los griegos fueron los primeros en estudiar la música como ciencia.</li>
            </ul>
            </div>
            
            <div class="pillar-section">
            <h4 data-translate="historyPillar2Title">2. La música medieval y renacentista</h4>
            <ul>
                <li data-translate="historyPillar2Point1">Nacen los cantos gregorianos y la música sacra europea.</li>
                <li data-translate="historyPillar2Point2">Se desarrollan las bases de la armonía y la notación musical.</li>
            </ul>
            </div>
            
            <div class="pillar-section">
            <h4 data-translate="historyPillar3Title">3. La música clásica</h4>
            <p data-translate="historyPillar3Desc">Compositores revolucionarios:</p>
            <ul>
                <li data-translate="historyPillar3Point1">Johann Sebastian Bach</li>
                <li data-translate="historyPillar3Point2">Wolfgang Amadeus Mozart</li>
                <li data-translate="historyPillar3Point3">Ludwig van Beethoven</li>
            </ul>
            </div>
            
            <div class="pillar-section">
            <h4 data-translate="historyPillar4Title">4. La música moderna</h4>
            <p data-translate="historyPillar4Desc">Con la llegada de la tecnología del siglo XX surgieron:</p>
            <ul>
                <li data-translate="historyPillar4Point1">El jazz</li>
                <li data-translate="historyPillar4Point2">El rock</li>
                <li data-translate="historyPillar4Point3">La música pop</li>
                <li data-translate="historyPillar4Point4">La música electrónica</li>
            </ul>
            </div>

            <h3 data-translate="historyUniversalTitle">🌎 La música como idioma universal</h3>
            
            <p data-translate="historyUniversalDesc">La música es considerada un lenguaje universal, porque transmite emociones sin necesidad de palabras.</p>
            
            <div class="influence-section">
            <h4 data-translate="historyEmotionalTitle">✔ Desarrollo emocional</h4>
            <ul>
                <li data-translate="historyEmotionalPoint1">Ayuda a manejar el estrés y la tristeza.</li>
                <li data-translate="historyEmotionalPoint2">Aumenta la felicidad, la motivación y la energía.</li>
            </ul>
            </div>
            
            <div class="influence-section">
            <h4 data-translate="historyCognitiveTitle">✔ Desarrollo cognitivo y motriz</h4>
            <ul>
                <li data-translate="historyCognitivePoint1">Mejora la concentración, la memoria y la creatividad.</li>
                <li data-translate="historyCognitivePoint2">En niños, fortalece la coordinación y la motricidad fina.</li>
            </ul>
            </div>

            <div class="final-quote">
            <strong data-translate="historyQuote">La música une, inspira, sana y acompaña. Y lo más hermoso es que siempre está lista para cualquiera que quiera escucharla o interpretarla.</strong> 🎶💫
            </div>
        </div>
        `;
        
        // Aplicar traducciones
        applyTranslations();
    }, 300);
}

function loadTheorySection() {
    const contentContainer = document.getElementById('theory-content');
    
    setTimeout(() => {
        contentContainer.innerHTML = `
        <div class="course-detail">
            <button class="back-button" onclick="navigateTo('#courses')">
            <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
            </button>
            <h2 data-translate="theoryTitle">Teoría Musical</h2>
            <p data-translate="theoryDesc">La teoría musical es el estudio de las prácticas y posibilidades de la música. Comprenderla te permitirá leer, escribir y analizar música con mayor profundidad.</p>
            
            <h3 data-translate="theoryAreasTitle">Áreas de Estudio</h3>
            <div class="instrument-grid">
            <div class="instrument-card">
                <h4 data-translate="theoryAreasHarmony">Armonía</h4>
                <p data-translate="theoryAreasHarmonyDesc">Estudio de los acordes y su progresión, fundamento de la música tonal.</p>
            </div>
            <div class="instrument-card">
                <h4 data-translate="theoryAreasMelody">Melodía</h4>
                <p data-translate="theoryAreasMelodyDesc">Arte de crear líneas musicales coherentes y expresivas.</p>
            </div>
            <div class="instrument-card">
                <h4 data-translate="theoryAreasRhythm">Ritmo</h4>
                <p data-translate="theoryAreasRhythmDesc">Organización del tiempo en la música, patrones y métricas.</p>
            </div>
            <div class="instrument-card">
                <h4 data-translate="theoryAreasForm">Forma Musical</h4>
                <p data-translate="theoryAreasFormDesc">Estructura y organización de las obras musicales.</p>
            </div>
            </div>
            
            <h3 data-translate="theoryLevelsTitle">Niveles de Estudio</h3>
            <ul>
            <li><strong data-translate="theoryLevelsBasic">Básico: Notas, escalas mayores y menores, intervalos, acordes tríada</strong></li>
            <li><strong data-translate="theoryLevelsIntermediate">Intermedio: Armonía funcional, modulación, formas binaria y ternaria</strong></li>
            <li><strong data-translate="theoryLevelsAdvanced">Avanzado: Contrapunto, armonía jazz, análisis de obras complejas</strong></li>
            </ul>
            
            <h3 data-translate="theoryApplicationsTitle">Aplicaciones Prácticas</h3>
            <p data-translate="theoryApplicationsDesc">El estudio de la teoría musical te ayudará a:</p>
            <ul>
            <li data-translate="theoryApplications1">Improvisar con mayor confianza y creatividad</li>
            <li data-translate="theoryApplications2">Componer tus propias piezas musicales</li>
            <li data-translate="theoryApplications3">Analizar obras para entender su estructura</li>
            <li data-translate="theoryApplications4">Comunicarte efectivamente con otros músicos</li>
            <li data-translate="theoryApplications5">Desarrollar tu oído musical</li>
            </ul>
            
            <button class="cta-button" onclick="abrirModal('registerModal')" data-translate="enrollButton">Inscribirse en este Curso</button>
        </div>
        `;
        
        // Aplicar traducciones
        applyTranslations();
    }, 300);
}

function loadCourseDetail(courseType) {
    const contentContainer = document.getElementById('course-detail-content');
    
    setTimeout(() => {
        let courseContent = '';
        
        switch(courseType) {
            case 'wind':
                courseContent = getWindInstrumentsContent();
                break;
            case 'string':
                courseContent = getStringInstrumentsContent();
                break;
            case 'piano':
                courseContent = getPianoContent();
                break;
            case 'percussion':
                courseContent = getPercussionContent();
                break;
            case 'theory':
                courseContent = getTheoryContent();
                break;
            default:
                courseContent = `<p>Curso no encontrado.</p>`;
        }
        
        contentContainer.innerHTML = courseContent;
        
        // Aplicar traducciones
        applyTranslations();
        
        // Inicializar carrusel si estamos en la sección de viento
        if (courseType === 'wind') {
            setTimeout(() => {
                initializeCarousel();
            }, 100);
        }
    }, 300);
}

// ===== CONTENIDO ESPECÍFICO DE CURSOS =====
function getWindInstrumentsContent() {
    return `
    <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
        </button>
        <h2 data-translate="windTitle">Instrumentos de Viento</h2>
        <p data-translate="windDesc">Los instrumentos de viento producen sonido mediante la vibración del aire dentro de un tubo. Se dividen en dos categorías principales: viento-madera y viento-metal.</p>
        
        <!-- Carrusel de imágenes CORREGIDO -->
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-slide">
                    <img src="img/sax alto (1).jpeg" alt="Flauta y Saxofón">
                    <div class="carousel-caption">Flauta y Saxofón - Instrumentos de viento-madera</div>
                </div>
                <div class="carousel-slide">
                    <img src="img/tumpet20.jpg" alt="Trompeta">
                    <div class="carousel-caption">Trompeta - Instrumento de viento-metal</div>
                </div>
                <div class="carousel-slide">
                    <img src="img/clarinete 10.webp" alt="Clarinete">
                    <div class="carousel-caption">Clarinete - Instrumento de viento-madera</div>
                </div>
                <div class="carousel-slide">
                    <img src="img/Trombone 2.jpeg" alt="Trombón">
                    <div class="carousel-caption">Trombón - Instrumento de viento-metal con vara deslizante</div>
                </div>
                <div class="carousel-slide">
                    <img src="img/flauta2.jpg" alt="Flauta y Saxofón">
                    <div class="carousel-caption">Flauta  - Instrumentos de viento-madera</div>
                </div>
                <div class="carousel-slide">
                    <img src="img/orquesta.jpeg" alt="Instrumentos de viento en orquesta">
                    <div class="carousel-caption">Sección de vientos en una orquesta sinfónica</div>
                </div>
            </div>
            <button class="carousel-btn prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-btn next">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="carousel-indicators"></div>
        </div>
        
        <h3 data-translate="windWoodwindsTitle">Instrumentos de Viento-Madera</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4 data-translate="windWoodwindsFlute">Flauta</h4>
            <p data-translate="windWoodwindsFluteDesc">Instrumento de sonido dulce y brillante, perfecto para melodías fluidas.</p>
        </div>
        <div class="instrument-card">
            <h4 data-translate="windWoodwindsClarinet">Clarinete</h4>
            <p data-translate="windWoodwindsClarinetDesc">Versátil instrumento con un rango amplio y sonido cálido.</p>
        </div>
        <div class="instrument-card">
            <h4 data-translate="windWoodwindsSaxophone">Saxofón</h4>
            <p data-translate="windWoodwindsSaxophoneDesc">Icono del jazz, con un sonido expresivo y lleno de carácter.</p>
        </div>
        <div class="instrument-card">
            <h4 data-translate="windWoodwindsOboe">Oboe</h4>
            <p data-translate="windWoodwindsOboeDesc">Instrumento con sonido penetrante, usado para afinar la orquesta.</p>
        </div>
        </div>
        
        <h3 data-translate="windBrassTitle">Instrumentos de Viento-Metal</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4 data-translate="windBrassTrumpet">Trompeta</h4>
            <p data-translate="windBrassTrumpetDesc">El más agudo de los metales, con sonido brillante y enérgico.</p>
        </div>
        <div class="instrument-card">
            <h4 data-translate="windBrassTrombone">Trombón</h4>
            <p data-translate="windBrassTromboneDesc">Único por su vara deslizante, con sonido potente y flexible.</p>
        </div>
        <div class="instrument-card">
            <h4 data-translate="windBrassTuba">Tuba</h4>
            <p data-translate="windBrassTubaDesc">El más grave de los metales, base fundamental de la armonía.</p>
        </div>
        <div class="instrument-card">
            <h4 data-translate="windBrassCornet">Corneta</h4>
            <p data-translate="windBrassCornetDesc">Similar a la trompeta pero con sonido más suave y redondo.</p>
        </div>
        </div>
        
        <h3 data-translate="windLevelsTitle">Niveles de Aprendizaje</h3>
        <ul>
        <li><strong data-translate="windLevelsBasic">Básico: Postura, embocadura, primeras notas y escalas simples</strong></li>
        <li><strong data-translate="windLevelsIntermediate">Intermedio: Técnica de respiración, vibrato, repertorio básico</strong></li>
        <li><strong data-translate="windLevelsAdvanced">Avanzado: Estilos específicos, improvisación, repertorio complejo</strong></li>
        </ul>
        
        <button class="cta-button" onclick="abrirModal('registerModal')" data-translate="enrollButton">Inscribirse en este Curso</button>
    </div>
    `;
}

function getStringInstrumentsContent() {
    return `
    <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
        </button>
        <h2>Instrumentos de Cuerda</h2>
        <p>Los instrumentos de cuerda producen sonido mediante la vibración de cuerdas tensadas sobre una caja de resonancia. Son fundamentales en orquestas y música popular.</p>
        
        <h3>Instrumentos de Cuerda Frotada</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Violín</h4>
            <p>El más agudo de la familia, con sonido brillante y expresivo. Base de las orquestas.</p>
        </div>
        <div class="instrument-card">
            <h4>Viola</h4>
            <p>Ligeramente más grave que el violín, con sonido cálido y melancólico.</p>
        </div>
        <div class="instrument-card">
            <h4>Violonchelo</h4>
            <p>De sonido rico y profundo, se toca sentado apoyándolo en el suelo.</p>
        </div>
        <div class="instrument-card">
            <h4>Contrabajo</h4>
            <p>El más grave de la familia, base armónica de orquestas y jazz.</p>
        </div>
        </div>
        
        <h3>Instrumentos de Cuerda Pulsada</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Guitarra</h4>
            <p>Versátil instrumento presente en música clásica, pop, rock y flamenco.</p>
        </div>
        <div class="instrument-card">
            <h4>Bajo Eléctrico</h4>
            <p>Fundamental en música moderna, provee la línea de bajo en bandas.</p>
        </div>
        <div class="instrument-card">
            <h4>Arpa</h4>
            <p>Instrumento de cuerdas verticales, con sonido celestial y etéreo.</p>
        </div>
        <div class="instrument-card">
            <h4>Ukelele</h4>
            <p>Pequeño instrumento hawaiano de cuatro cuerdas, alegre y portátil.</p>
        </div>
        </div>
        
        <h3>Niveles de Aprendizaje</h3>
        <ul>
        <li><strong>Básico: Postura correcta, afinación, acordes y melodías simples</strong></li>
        <li><strong>Intermedio: Técnicas específicas, escalas, repertorio intermedio</strong></li>
        <li><strong>Avanzado: Estilos específicos, improvisación, repertorio complejo</strong></li>
        </ul>
        
        <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
    `;
}

function getPianoContent() {
    return `
    <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
        </button>
        <h2>Piano & Teclados</h2>
        <p>El piano es el instrumento polifónico por excelencia, capaz de producir melodía y armonía simultáneamente. Perfecto para comprender la teoría musical.</p>
        
        <h3>Tipos de Piano</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Piano Acústico</h4>
            <p>Sonido producido por martillos que golpean cuerdas. Incluye piano de cola y vertical.</p>
        </div>
        <div class="instrument-card">
            <h4>Piano Digital</h4>
            <p>Emula el sonido del piano acústico con tecnología digital. Más compacto y versátil.</p>
        </div>
        <div class="instrument-card">
            <h4>Teclado Sintetizador</h4>
            <p>Crea sonidos electrónicos. Ideal para producción musical moderna.</p>
        </div>
        <div class="instrument-card">
            <h4>Órgano</h4>
            <p>Instrumento de teclado con sonido producido por aire a través de tubos.</p>
        </div>
        </div>
        
        <h3>Estilos de Interpretación</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Clásico</h4>
            <p>Interpretación de obras de compositores como Bach, Beethoven, Chopin.</p>
        </div>
        <div class="instrument-card">
            <h4>Jazz</h4>
            <p>Improvisación, acordes complejos y ritmos sincopados.</p>
        </div>
        <div class="instrument-card">
            <h4>Pop/Rock</h4>
            <p>Interpretación de música contemporánea, acompañamiento de bandas.</p>
        </div>
        <div class="instrument-card">
            <h4>Producción</h4>
            <p>Creación de música usando teclados como controladores MIDI.</p>
        </div>
        </div>
        
        <h3>Niveles de Aprendizaje</h3>
        <ul>
        <li><strong>Básico: Posición de manos, lectura de partituras, escalas mayores y menores</strong></li>
        <li><strong>Intermedio: Acordes, arpegios, pedales, repertorio intermedio</strong></li>
        <li><strong>Avanzado: Obras complejas, interpretación expresiva, improvisación</strong></li>
        </ul>
        
        <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
    `;
}

function getPercussionContent() {
    return `
    <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
        </button>
        <h2>Percusión</h2>
        <p>La percusión es el corazón rítmico de la música. Los instrumentos de percusión producen sonido al ser golpeados, agitados o raspados.</p>
        
        <h3>Instrumentos de Percusión Melódica</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Xilófono/Marimba</h4>
            <p>Láminas de madera o metal afinadas, se tocan con baquetas.</p>
        </div>
        <div class="instrument-card">
            <h4>Vibráfono</h4>
            <p>Láminas metálicas con resonadores y motor para vibrato.</p>
        </div>
        <div class="instrument-card">
            <h4>Timbal</h4>
            <p>Tambores afinables, fundamentales en orquestas sinfónicas.</p>
        </div>
        <div class="instrument-card">
            <h4>Campanas Tubulares</h4>
            <p>Conjunto de tubos metálicos que emulan el sonido de campanas.</p>
        </div>
        </div>
        
        <h3>Instrumentos de Percusión No Melódica</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Batería</h4>
            <p>Conjunto de tambores y platillos, corazón del rock y jazz.</p>
        </div>
        <div class="instrument-card">
            <h4>Congas/Bongós</h4>
            <p>Tambores de mano de origen afrocubano, esenciales en salsa.</p>
        </div>
        <div class="instrument-card">
            <h4>Cajón Peruano</h4>
            <p>Caja de madera que se toca sentado, popular en flamenco.</p>
        </div>
        <div class="instrument-card">
            <h4>Accesorios</h4>
            <p>Platillos, panderetas, triángulos, cencerros, güiros.</p>
        </div>
        </div>
        
        <h3>Estilos Rítmicos</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Rock/Pop</h4>
            <p>Patrones de batería estándar, backbeat en tiempos 2 y 4.</p>
        </div>
        <div class="instrument-card">
            <h4>Jazz</h4>
            <p>Ritmos sincopados, swing, improvisación en la batería.</p>
        </div>
        <div class="instrument-card">
            <h4>Latino</h4>
            <p>Clave, salsa, bossa nova, samba, ritmos africanos.</p>
        </div>
        <div class="instrument-card">
            <h4>Orquestal</h4>
            <p>Técnicas clásicas para timbales, xilófono y accesorios.</p>
        </div>
        </div>
        
        <h3>Niveles de Aprendizaje</h3>
        <ul>
        <li><strong>Básico: Técnica de baquetas, ritmos simples, lectura rítmica</strong></li>
        <li><strong>Intermedio: Coordinación independiente, rudimentos, grooves intermedios</strong></li>
        <li><strong>Avanzado: Polirritmos, improvisación, estilos específicos</strong></li>
        </ul>
        
        <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
    `;
}

function getTheoryContent() {
    return `
    <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> <span data-translate="backButton">Volver a Cursos</span>
        </button>
        <h2>Teoría Musical</h2>
        <p>La teoría musical es el estudio de las prácticas y posibilidades de la música. Comprenderla te permitirá leer, escribir y analizar música con mayor profundidad.</p>
        
        <h3>Áreas de Estudio</h3>
        <div class="instrument-grid">
        <div class="instrument-card">
            <h4>Armonía</h4>
            <p>Estudio de los acordes y su progresión, fundamento de la música tonal.</p>
        </div>
        <div class="instrument-card">
            <h4>Melodía</h4>
            <p>Arte de crear líneas musicales coherentes y expresivas.</p>
        </div>
        <div class="instrument-card">
            <h4>Ritmo</h4>
            <p>Organización del tiempo en la música, patrones y métricas.</p>
        </div>
        <div class="instrument-card">
            <h4>Forma Musical</h4>
            <p>Estructura y organización de las obras musicales.</p>
        </div>
        </div>
        
        <h3>Niveles de Estudio</h3>
        <ul>
        <li><strong>Básico: Notas, escalas mayores y menores, intervalos, acordes tríada</strong></li>
        <li><strong>Intermedio: Armonía funcional, modulación, formas binaria y ternaria</strong></li>
        <li><strong>Avanzado: Contrapunto, armonía jazz, análisis de obras complejas</strong></li>
        </ul>
        
        <h3>Aplicaciones Prácticas</h3>
        <p>El estudio de la teoría musical te ayudará a:</p>
        <ul>
        <li>Improvisar con mayor confianza y creatividad</li>
        <li>Componer tus propias piezas musicales</li>
        <li>Analizar obras para entender su estructura</li>
        <li>Comunicarte efectivamente con otros músicos</li>
        <li>Desarrollar tu oído musical</li>
        </ul>
        
        <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
    `;
}

// ===== CARRUSEL FUNCIONAL =====
function initializeCarousel() {
    console.log("Inicializando carrusel...");
    
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    if (!carousel || slides.length === 0) {
        console.log("No se encontró el carrusel o no hay slides");
        return;
    }
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Crear indicadores
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Función para actualizar el carrusel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar indicadores
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Función para ir a un slide específico
    function goToSlide(index) {
        currentSlide = index;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        updateCarousel();
    }
    
    // Función para siguiente slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Función para slide anterior
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Event listeners para botones
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Auto avanzar cada 5 segundos
    let autoplay = setInterval(nextSlide, 5000);
    
    // Pausar autoplay al pasar el mouse
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            autoplay = setInterval(nextSlide, 5000);
        });
    }
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Actualizar inicialmente
    updateCarousel();
    
    console.log("Carrusel inicializado correctamente con", totalSlides, "slides");
}