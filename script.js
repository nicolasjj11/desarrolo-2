// script.js - Código completo y funcional
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    // ===== INICIALIZACIÓN =====
    inicializarModales();
    inicializarEventListeners();
    verificarUsuarioLogueado();
    const translations = inicializarIdioma();
    inicializarContenidoDinamico();
    
    // Hacer disponible globalmente para las funciones
    window.translations = translations;
});

function inicializarModales() {
    // Ocultar modales al inicio
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    
    if (loginModal) loginModal.style.display = "none";
    if (registerModal) registerModal.style.display = "none";
}

function inicializarEventListeners() {
    // Botones de autenticación
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    
    if (loginBtn) {
        loginBtn.addEventListener("click", function(e) {
            e.preventDefault();
            console.log("Abriendo modal de login");
            abrirModal('loginModal');
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener("click", function(e) {
            e.preventDefault();
            console.log("Abriendo modal de registro");
            abrirModal('registerModal');
        });
    }
    
    // Cerrar modales
    const closeLogin = document.querySelector(".close-login");
    const closeRegister = document.querySelector(".close-register");
    
    if (closeLogin) {
        closeLogin.addEventListener("click", function() {
            console.log("Cerrando modal de login");
            cerrarModal('loginModal');
        });
    }
    
    if (closeRegister) {
        closeRegister.addEventListener("click", function() {
            console.log("Cerrando modal de registro");
            cerrarModal('registerModal');
        });
    }
    
    // Formularios
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", manejarLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener("submit", manejarRegistro);
    }
    
    // Enlaces entre modales
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            cerrarModal('loginModal');
            setTimeout(() => abrirModal('registerModal'), 300);
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            cerrarModal('registerModal');
            setTimeout(() => abrirModal('loginModal'), 300);
        });
    }
    
    // Menú de usuario
    const userMenuBtn = document.getElementById("userMenuBtn");
    const logoutLink = document.getElementById("logoutLink");
    
    if (userMenuBtn) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const userDropdown = document.getElementById("userDropdown");
            if (userDropdown) {
                userDropdown.classList.toggle('show');
            }
        });
    }
    
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            cerrarSesion();
        });
    }
    
    // Cerrar menú desplegable al hacer clic fuera
    document.addEventListener('click', function() {
        const userDropdown = document.getElementById("userDropdown");
        if (userDropdown) {
            userDropdown.classList.remove('show');
        }
    });
    
    // Cerrar modales con ESC
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            cerrarModal('loginModal');
            cerrarModal('registerModal');
        }
    });
    
    // Cerrar modales al hacer clic fuera
    document.addEventListener("click", function(e) {
        const loginModal = document.getElementById("loginModal");
        const registerModal = document.getElementById("registerModal");
        
        if (loginModal && e.target === loginModal) {
            cerrarModal('loginModal');
        }
        
        if (registerModal && e.target === registerModal) {
            cerrarModal('registerModal');
        }
    });
}

// ===== FUNCIONES DE MODALES =====
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        resetFormularios();
    }
}

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        resetFormularios();
    }
}

function resetFormularios() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const formMessage = document.getElementById("formMessage");
    const registerMessage = document.getElementById("registerMessage");
    
    if (loginForm) loginForm.reset();
    if (registerForm) registerForm.reset();
    
    if (formMessage) {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }
    
    if (registerMessage) {
        registerMessage.style.display = 'none';
        registerMessage.className = 'form-message';
    }
}

// ===== MANEJO DE FORMULARIOS =====
async function manejarLogin(e) {
    e.preventDefault();
    console.log("Procesando login...");
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const remember = formData.get('remember');
    
    // Validaciones
    if (!validarEmail(email)) {
        mostrarMensaje('formMessage', 'Por favor, ingresa un email válido', 'error');
        return;
    }

    if (password.length < 6) {
        mostrarMensaje('formMessage', 'La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }

    // Procesar login
    await procesarLogin(email, password, remember);
}

async function manejarRegistro(e) {
    e.preventDefault();
    console.log("Procesando registro...");
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    // Validaciones
    if (name.length < 2) {
        mostrarMensaje('registerMessage', 'El nombre debe tener al menos 2 caracteres', 'error');
        return;
    }

    if (!validarEmail(email)) {
        mostrarMensaje('registerMessage', 'Por favor, ingresa un email válido', 'error');
        return;
    }

    if (password.length < 6) {
        mostrarMensaje('registerMessage', 'La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }

    if (password !== confirmPassword) {
        mostrarMensaje('registerMessage', 'Las contraseñas no coinciden', 'error');
        return;
    }

    // Procesar registro
    await procesarRegistro(name, email, password);
}

// ===== VALIDACIONES =====
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function mostrarMensaje(elementId, mensaje, tipo) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        elemento.textContent = mensaje;
        elemento.className = `form-message ${tipo}`;
        elemento.style.display = 'block';
    }
}

// ===== BASE DE DATOS (LOCALSTORAGE) =====
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('mscStudyUsers') || '[]');
}

function guardarUsuarios(usuarios) {
    localStorage.setItem('mscStudyUsers', JSON.stringify(usuarios));
}

function obtenerUsuarioActual() {
    return localStorage.getItem('mscStudyCurrentUser') || sessionStorage.getItem('mscStudyCurrentUser');
}

function guardarUsuarioActual(usuario, recordar) {
    if (recordar) {
        localStorage.setItem('mscStudyCurrentUser', JSON.stringify(usuario));
    } else {
        sessionStorage.setItem('mscStudyCurrentUser', JSON.stringify(usuario));
    }
}

function eliminarUsuarioActual() {
    localStorage.removeItem('mscStudyCurrentUser');
    sessionStorage.removeItem('mscStudyCurrentUser');
}

// ===== AUTENTICACIÓN =====
async function procesarLogin(email, password, remember) {
    mostrarMensaje('formMessage', 'Iniciando sesión...', 'loading');
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Buscar usuario en la "base de datos"
    const usuarios = obtenerUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
        // Crear sesión de usuario
        const sesionUsuario = {
            id: usuario.id,
            name: usuario.name,
            email: usuario.email,
            loggedIn: true
        };
        
        guardarUsuarioActual(sesionUsuario, remember);
        
        mostrarMensaje('formMessage', '¡Inicio de sesión exitoso!', 'success');
        
        setTimeout(() => {
            cerrarModal('loginModal');
            actualizarInterfazUsuario(sesionUsuario);
        }, 1000);
    } else {
        mostrarMensaje('formMessage', 'Email o contraseña incorrectos', 'error');
    }
}

async function procesarRegistro(name, email, password) {
    mostrarMensaje('registerMessage', 'Creando cuenta...', 'loading');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Verificar si el email ya existe
    const usuarios = obtenerUsuarios();
    const usuarioExistente = usuarios.find(u => u.email === email);
    
    if (usuarioExistente) {
        mostrarMensaje('registerMessage', 'Este email ya está registrado', 'error');
        return;
    }
    
    // Crear nuevo usuario
    const nuevoUsuario = {
        id: Date.now().toString(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);
    
    mostrarMensaje('registerMessage', '¡Cuenta creada exitosamente!', 'success');
    
    setTimeout(() => {
        cerrarModal('registerModal');
        abrirModal('loginModal');
    }, 1500);
}

// ===== INTERFAZ DE USUARIO =====
function verificarUsuarioLogueado() {
    const usuarioGuardado = obtenerUsuarioActual();
    
    if (usuarioGuardado) {
        try {
            const usuario = JSON.parse(usuarioGuardado);
            actualizarInterfazUsuario(usuario);
        } catch (error) {
            console.error("Error al parsear usuario:", error);
            eliminarUsuarioActual();
        }
    }
}

function actualizarInterfazUsuario(usuario) {
    const navAuth = document.querySelector('.nav-auth');
    const userProfile = document.getElementById("userProfile");
    const userName = document.getElementById("userName");
    
    if (navAuth) navAuth.style.display = 'none';
    if (userProfile) userProfile.style.display = 'block';
    if (userName) userName.textContent = usuario.name.split(' ')[0];
    
    console.log('Usuario logueado:', usuario.name);
}

function cerrarSesion() {
    eliminarUsuarioActual();
    
    const navAuth = document.querySelector('.nav-auth');
    const userProfile = document.getElementById("userProfile");
    const userDropdown = document.getElementById("userDropdown");
    
    if (navAuth) navAuth.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
    if (userDropdown) userDropdown.classList.remove('show');
    
    console.log('Sesión cerrada');
}

// ===== FUNCIONALIDAD DE IDIOMA =====
function inicializarIdioma() {
    const lang = document.querySelector(".languaje");
    if (!lang) return;
    
    const dropdown = lang.querySelector("ul");
    const selected = lang.querySelector(".languaje-selected");

    // Traducciones actualizadas con el nuevo contenido
    const translations = {
        es: {
            menuHome: "Inicio",
            menuCourses: "Cursos",
            menuHistory: "Historia de la Música",
            menuTheory: "Teoría Musical",
            searchPlaceholder: "Buscar cursos...",
            btnLogin: "Iniciar Sesión",
            btnSignup: "Crear Cuenta",
            title: "Bienvenido a MSC STUDY, el lugar donde aprender música se convierte en una experiencia única",
            description: "Explora clases interactivas, conoce la historia de la música y descubre cómo cada nota puede transformar tu forma de sentir y expresarte. ¡Empieza hoy tu viaje musical con nosotros!",
            btnStart: "Comenzar Ahora",
            coursesTitle: "Cursos Populares",
            course1: "Instrumentos de Viento",
            course2: "Instrumentos de Cuerda",
            course3: "Piano & Teclados",
            course4: "Percusión",
            course5: "Teoría Musical",
            coursesSectionTitle: "Explora Nuestros Cursos",
            coursesSectionDescription: "Sumérgete en el mundo de la música con nuestra amplia variedad de cursos diseñados para todos los niveles. Desde principiantes hasta músicos avanzados, tenemos algo para todos.",
            historySectionTitle: "Historia de la Música", 
            historySectionDescription: "Viaja a través del tiempo y descubre cómo la música ha evolucionado a lo largo de los siglos, desde las primeras civilizaciones hasta la era moderna.",
            theorySectionTitle: "Teoría Musical",
            theorySectionDescription: "Domina el lenguaje universal de la música. Aprende sobre escalas, acordes, armonía y ritmo para llevar tu comprensión musical al siguiente nivel.",
            video1Title: "Introducción a la Teoría Musical",
            video1Desc: "Aprende los fundamentos de la teoría musical en este curso introductorio.",
            video2Title: "Técnicas de Guitarra para Principiantes",
            video2Desc: "Domina los acordes básicos y técnicas esenciales para tocar guitarra.",
            video3Title: "Fundamentos del Piano",
            video3Desc: "Comienza tu viaje con el piano aprendiendo las notas y escalas básicas.",
            video4Title: "Historia de la Música Clásica", 
            video4Desc: "Descubre los compositores y obras que definieron la música clásica.",
            video5Title: "Música en la Antigua Grecia",
            video5Desc: "Explora el papel de la música en la sociedad griega antigua.",
            video6Title: "El Renacimiento Musical",
            video6Desc: "Descubre cómo el Renacimiento transformó la composición musical.",
            video7Title: "La Era del Barroco",
            video7Desc: "Conoce a los grandes compositores del período barroco.",
            video8Title: "Música del Siglo XX",
            video8Desc: "Analiza las revoluciones musicales del siglo pasado.",
            video9Title: "Lectura de Partituras",
            video9Desc: "Aprende a leer y entender partituras musicales.",
            video10Title: "Armonía Básica",
            video10Desc: "Comprende los principios fundamentales de la armonía musical.",
            video11Title: "Ritmo y Compás",
            video11Desc: "Domina los conceptos de ritmo, tempo y compás.",
            video12Title: "Improvisación Musical",
            video12Desc: "Desarrolla habilidades para improvisar sobre progresiones de acordes.",
            btnViewCourse: "Ver Curso"
        },
        en: {
            menuHome: "Home",
            menuCourses: "Courses",
            menuHistory: "Music History",
            menuTheory: "Music Theory",
            searchPlaceholder: "Search courses...",
            btnLogin: "Login",
            btnSignup: "Sign Up",
            title: "Welcome to MSC STUDY, where learning music becomes a unique experience",
            description: "Explore interactive lessons, learn about music history, and discover how every note can transform the way you feel and express yourself. Start your musical journey with us today!",
            btnStart: "Start Now",
            coursesTitle: "Popular Courses",
            course1: "Wind Instruments",
            course2: "String Instruments",
            course3: "Piano & Keyboards",
            course4: "Percussion",
            course5: "Music Theory",
            coursesSectionTitle: "Explore Our Courses",
            coursesSectionDescription: "Dive into the world of music with our wide variety of courses designed for all levels. From beginners to advanced musicians, we have something for everyone.",
            historySectionTitle: "Music History",
            historySectionDescription: "Travel through time and discover how music has evolved over the centuries, from the earliest civilizations to the modern era.",
            theorySectionTitle: "Music Theory", 
            theorySectionDescription: "Master the universal language of music. Learn about scales, chords, harmony, and rhythm to take your musical understanding to the next level.",
            video1Title: "Introduction to Music Theory",
            video1Desc: "Learn the fundamentals of music theory in this introductory course.",
            video2Title: "Guitar Techniques for Beginners",
            video2Desc: "Master basic chords and essential techniques for playing guitar.",
            video3Title: "Piano Fundamentals",
            video3Desc: "Start your piano journey by learning basic notes and scales.",
            video4Title: "History of Classical Music",
            video4Desc: "Discover the composers and works that defined classical music.",
            video5Title: "Music in Ancient Greece", 
            video5Desc: "Explore the role of music in ancient Greek society.",
            video6Title: "The Musical Renaissance",
            video6Desc: "Discover how the Renaissance transformed musical composition.",
            video7Title: "The Baroque Era",
            video7Desc: "Meet the great composers of the Baroque period.",
            video8Title: "20th Century Music",
            video8Desc: "Analyze the musical revolutions of the last century.",
            video9Title: "Sheet Music Reading",
            video9Desc: "Learn to read and understand sheet music.",
            video10Title: "Basic Harmony",
            video10Desc: "Understand the fundamental principles of musical harmony.",
            video11Title: "Rhythm and Time",
            video11Desc: "Master the concepts of rhythm, tempo, and time signatures.",
            video12Title: "Musical Improvisation",
            video12Desc: "Develop skills to improvise over chord progressions.",
            btnViewCourse: "View Course"
        },
        pt: {
            menuHome: "Início",
            menuCourses: "Cursos",
            menuHistory: "História da Música",
            menuTheory: "Teoria Musical",
            searchPlaceholder: "Procurar cursos...",
            btnLogin: "Entrar",
            btnSignup: "Criar Conta",
            title: "Bem-vindo ao MSC STUDY, onde aprender música se torna uma experiência única",
            description: "Explore aulas interativas, conheça a história da música e descubra como cada nota pode transformar sua forma de sentir e se expressar. Comece sua jornada musical hoje!",
            btnStart: "Começar Agora",
            coursesTitle: "Cursos Populares",
            course1: "Instrumentos de Sopro",
            course2: "Instrumentos de Corda",
            course3: "Piano & Teclados",
            course4: "Percussão",
            course5: "Teoria Musical",
            coursesSectionTitle: "Explore Nossos Cursos",
            coursesSectionDescription: "Mergulhe no mundo da música com nossa ampla variedade de cursos projetados para todos os níveis. De iniciantes a músicos avançados, temos algo para todos.",
            historySectionTitle: "História da Música",
            historySectionDescription: "Viaje através do tempo e descubra como a música evoluiu ao longo dos séculos, desde as primeiras civilizações até a era moderna.",
            theorySectionTitle: "Teoria Musical",
            theorySectionDescription: "Domine a linguagem universal da música. Aprenda sobre escalas, acordes, harmonia e ritmo para levar sua compreensão musical ao próximo nível.",
            video1Title: "Introdução à Teoria Musical",
            video1Desc: "Aprenda os fundamentos da teoria musical neste curso introdutório.",
            video2Title: "Técnicas de Guitarra para Iniciantes", 
            video2Desc: "Domine acordes básicos e técnicas essenciais para tocar guitarra.",
            video3Title: "Fundamentos do Piano",
            video3Desc: "Comece sua jornada com o piano aprendendo notas e escalas básicas.",
            video4Title: "História da Música Clássica",
            video4Desc: "Descubra os compositores e obras que definiram a música clássica.",
            video5Title: "Música na Grécia Antiga",
            video5Desc: "Explore o papel da música na sociedade grega antiga.",
            video6Title: "O Renascimento Musical",
            video6Desc: "Descubra como o Renascimento transformou a composição musical.",
            video7Title: "A Era do Barroco",
            video7Desc: "Conheça os grandes compositores do período barroco.",
            video8Title: "Música do Século XX",
            video8Desc: "Analise as revoluções musicais do século passado.",
            video9Title: "Leitura de Partituras",
            video9Desc: "Aprenda a ler e entender partituras musicais.",
            video10Title: "Harmonia Básica",
            video10Desc: "Compreenda os princípios fundamentais da harmonia musical.",
            video11Title: "Ritmo e Compasso",
            video11Desc: "Domine os conceitos de ritmo, andamento e compasso.",
            video12Title: "Improvisação Musical",
            video12Desc: "Desenvolva habilidades para improvisar sobre progressões de acordes.",
            btnViewCourse: "Ver Curso"
        }
    };

    // Mostrar / ocultar menú
    selected.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
        dropdown.classList.remove("show");
    });

    // Cambiar idioma
    lang.querySelectorAll("li").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const flagUrl = item.getAttribute("data-flag");
            const selectedLang = item.getAttribute("data-lang");

            selected.innerHTML = `<span class="flag" style="background-image: url('${flagUrl}');"></span>`;
            dropdown.classList.remove("show");

            // Actualizar textos estáticos
            document.querySelectorAll("[data-translate]").forEach((el) => {
                const key = el.getAttribute("data-translate");
                if (translations[selectedLang][key]) {
                    el.textContent = translations[selectedLang][key];
                }
            });

            // Cambiar placeholder
            document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
                const key = el.getAttribute("data-translate-placeholder");
                if (translations[selectedLang][key]) {
                    el.placeholder = translations[selectedLang][key];
                }
            });

            // Actualizar sección activa si hay una
            const activeSection = document.querySelector('.nav-link.active-section');
            if (activeSection && window.currentSection) {
                showSection(window.currentSection);
            }
        });
    });

    return translations;
}

// ===== CONTENIDO DINÁMICO =====
function inicializarContenidoDinamico() {
    const dynamicContent = document.getElementById("dynamic-content");
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Contenido para cada sección
    const sectionContent = {
        courses: {
            titleKey: "coursesSectionTitle",
            descriptionKey: "coursesSectionDescription",
            videos: [
                { titleKey: "video1Title", descriptionKey: "video1Desc", icon: "🎼" },
                { titleKey: "video2Title", descriptionKey: "video2Desc", icon: "🎸" },
                { titleKey: "video3Title", descriptionKey: "video3Desc", icon: "🎹" },
                { titleKey: "video4Title", descriptionKey: "video4Desc", icon: "🎵" }
            ]
        },
        history: {
            titleKey: "historySectionTitle", 
            descriptionKey: "historySectionDescription",
            videos: [
                { titleKey: "video5Title", descriptionKey: "video5Desc", icon: "🏛️" },
                { titleKey: "video6Title", descriptionKey: "video6Desc", icon: "🎨" },
                { titleKey: "video7Title", descriptionKey: "video7Desc", icon: "🎻" },
                { titleKey: "video8Title", descriptionKey: "video8Desc", icon: "📻" }
            ]
        },
        theory: {
            titleKey: "theorySectionTitle",
            descriptionKey: "theorySectionDescription",
            videos: [
                { titleKey: "video9Title", descriptionKey: "video9Desc", icon: "📜" },
                { titleKey: "video10Title", descriptionKey: "video10Desc", icon: "🎶" },
                { titleKey: "video11Title", descriptionKey: "video11Desc", icon: "🥁" },
                { titleKey: "video12Title", descriptionKey: "video12Desc", icon: "🎹" }
            ]
        }
    };

    // Función para mostrar contenido de sección
    function showSection(section) {
        // Remover clase activa de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove("active-section");
            link.classList.remove("active");
        });
        
        // Si es la página de inicio, ocultar el contenido dinámico
        if (section === "home") {
            dynamicContent.style.display = "none";
            document.querySelector('.nav-link[data-translate="menuHome"]').classList.add("active");
            return;
        }
        
        // Obtener el idioma actual
        const currentLang = getCurrentLanguage();
        const content = sectionContent[section];
        const currentTranslations = window.translations[currentLang];
        
        // Construir HTML del contenido
        let videosHTML = '';
        content.videos.forEach(video => {
            videosHTML += `
                <div class="video-card">
                    <div class="video-thumbnail">
                        ${video.icon}
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${currentTranslations[video.titleKey]}</h3>
                        <p class="video-description">${currentTranslations[video.descriptionKey]}</p>
                        <a href="#" class="video-link">${currentTranslations.btnViewCourse}</a>
                    </div>
                </div>
            `;
        });
        
        // Insertar contenido en el contenedor
        dynamicContent.innerHTML = `
            <div class="content-header">
                <h2 class="content-title">${currentTranslations[content.titleKey]}</h2>
                <p class="content-description">${currentTranslations[content.descriptionKey]}</p>
            </div>
            <div class="video-grid">
                ${videosHTML}
            </div>
        `;
        
        // Mostrar contenido con animación
        dynamicContent.style.display = "block";
        setTimeout(() => {
            dynamicContent.classList.add("active");
        }, 10);
        
        // Desplazar hacia la sección
        dynamicContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Guardar sección actual
        window.currentSection = section;
    }

    // Event listeners para los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            const section = link.getAttribute("data-translate");
            let sectionKey = "";
            
            // Determinar qué sección mostrar según el enlace clickeado
            if (section === "menuCourses") {
                sectionKey = "courses";
            } else if (section === "menuHistory") {
                sectionKey = "history";
            } else if (section === "menuTheory") {
                sectionKey = "theory";
            } else if (section === "menuHome") {
                sectionKey = "home";
            }
            
            // Mostrar la sección correspondiente
            if (sectionKey) {
                showSection(sectionKey);
                
                // Marcar enlace como activo
                link.classList.add("active-section");
            }
        });
    });

    // Función auxiliar para obtener idioma actual
    function getCurrentLanguage() {
        const selectedFlag = document.querySelector('.languaje-selected .flag');
        if (selectedFlag.style.backgroundImage.includes('ES')) return 'es';
        if (selectedFlag.style.backgroundImage.includes('GB')) return 'en';
        if (selectedFlag.style.backgroundImage.includes('BR')) return 'pt';
        return 'es'; // default
    }
}