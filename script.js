// script.js - Código completo y funcional
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    // ===== INICIALIZACIÓN =====
    inicializarModales();
    inicializarEventListeners();
    inicializarMenuHamburguesa(); // ✅ NUEVA FUNCIÓN AGREGADA
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
    const historySection = document.getElementById("historySection");
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

    // Función para mostrar contenido de sección normal
    function showSection(section) {
        // Ocultar sección de historia primero
        historySection.style.display = "none";
        historySection.classList.remove("active");
        
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

    // Función para mostrar la historia de la música
    function showHistorySection() {
        // Ocultar contenido dinámico normal
        dynamicContent.style.display = "none";
        dynamicContent.classList.remove("active");
        
        // Remover clase activa de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove("active-section");
            link.classList.remove("active");
        });
        
        // Marcar el enlace de historia como activo
        document.querySelector('.nav-link[data-translate="menuHistory"]').classList.add("active-section");
        
        // Cargar el contenido de la historia
        loadHistoryContent();
        
        // Mostrar sección de historia
        historySection.style.display = "block";
        setTimeout(() => {
            historySection.classList.add("active");
        }, 10);
        
        // Desplazar hacia la sección
        historySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Guardar sección actual
        window.currentSection = "history";
    }

    // Función para cargar el contenido de la historia
    function loadHistoryContent() {
        const historyContent = document.querySelector('.history-content');
        
        // Aquí insertamos el contenido del documento que proporcionaste
        historyContent.innerHTML = `
            <button class="back-button" onclick="showSection('home')">
                <i class="fas fa-arrow-left"></i> Volver al Inicio
            </button>
            <div class="history-document">
                <h1>La Historia de la Música: Origen, Evolución y su Importancia para los Seres Humanos</h1>
                
                <p>La música es una de las expresiones culturales más antiguas y universales de la humanidad. Acompaña al ser humano desde sus inicios y ha sido un puente para comunicar emociones, transmitir historias y unir comunidades. Aunque resulta imposible determinar un año exacto de su origen, los arqueólogos estiman que la música <strong>surgió hace más de 40.000 años</strong>, cuando nuestros ancestros comenzaron a utilizar objetos como huesos, piedras o madera para producir sonidos rítmicos.</p>

                <p>A lo largo de los siglos, la música evolucionó, acompañando los cambios sociales, culturales y tecnológicos de cada civilización. Desde los cantos rituales de las primeras culturas, pasando por la música clásica europea, hasta los géneros urbanos actuales, la música siempre ha sido una forma poderosa de expresión humana.</p>

                <h2>🎼 Pilares fundamentales en la historia de la música</h2>
                <p>A través del tiempo, numerosos personajes y culturas marcaron el desarrollo musical. Algunos pilares destacados son:</p>

                <h3>1. Las antiguas civilizaciones</h3>
                <ul>
                    <li><strong>Mesopotamia, Egipto, Grecia y Roma</strong> utilizaron la música en rituales, celebraciones y teatro.</li>
                    <li>Los griegos fueron los primeros en estudiar la música como ciencia; Pitágoras investigó las relaciones matemáticas del sonido.</li>
                </ul>

                <h3>2. La música medieval y renacentista</h3>
                <ul>
                    <li>Nacen los <strong>cantos gregorianos</strong> y la música sacra europea.</li>
                    <li>Se desarrollan las bases de la armonía y la notación musical.</li>
                </ul>

                <h3>3. La música clásica</h3>
                <p>Compositores como:</p>
                <ul>
                    <li><strong>Johann Sebastian Bach</strong></li>
                    <li><strong>Wolfgang Amadeus Mozart</strong></li>
                    <li><strong>Ludwig van Beethoven</strong></li>
                </ul>
                <p>Ellos revolucionaron la música occidental y sentaron las bases de las orquestas, sinfonías y conciertos como los conocemos hoy.</p>

                <h3>4. La música moderna</h3>
                <p>Con la llegada de la tecnología del siglo XX surgieron:</p>
                <ul>
                    <li>El jazz</li>
                    <li>El rock</li>
                    <li>La música pop</li>
                    <li>La música electrónica</li>
                    <li>Los géneros urbanos</li>
                </ul>
                <p>Artistas como <strong>The Beatles, Michael Jackson y Elvis Presley</strong> marcaron épocas completas.</p>

                <h2>🌎 La música como idioma universal y su influencia en la vida humana</h2>
                <p>La música es considerada un <strong>lenguaje universal</strong>, porque transmite emociones sin necesidad de palabras. Nos conecta, nos acompaña y tiene un impacto profundo en diversas áreas:</p>

                <h3>✔ Desarrollo emocional</h3>
                <ul>
                    <li>Ayuda a manejar el estrés y la tristeza.</li>
                    <li>Aumenta la felicidad, la motivación y la energía.</li>
                    <li>Permite expresar lo que a veces no se puede decir con palabras.</li>
                </ul>

                <h3>✔ Desarrollo cognitivo y motriz</h3>
                <ul>
                    <li>Mejora la concentración, la memoria y la creatividad.</li>
                    <li>En niños, fortalece la coordinación, el ritmo y la motricidad fina.</li>
                    <li>En músicos, entrenar un instrumento estimula ambos hemisferios del cerebro.</li>
                </ul>

                <h3>✔ Sentido de identidad y cultura</h3>
                <ul>
                    <li>La música representa un país, una región o una comunidad.</li>
                    <li>Transmite costumbres, historias y valores.</li>
                </ul>

                <h3>✔ Bienestar personal</h3>
                <p>Para quienes interpretan un instrumento o cantan, la música:</p>
                <ul>
                    <li>Sirve como escape de la rutina.</li>
                    <li>Ayuda a superar momentos difíciles.</li>
                    <li>Aporta tranquilidad, disciplina y equilibrio emocional.</li>
                </ul>

                <h3>✔ Une a las personas</h3>
                <p>La música crea comunidades. Cualquiera puede unirse a una canción, a un grupo o a una experiencia musical.</p>
                <p>🎤 Cantamos juntos<br>
                🎶 Bailamos juntos<br>
                🥁 Sentimos juntos</p>
                <p>Es una herramienta poderosa para conectar con otros, sin importar edad o idioma.</p>

                <h2>🎶 Géneros musicales populares en Latinoamérica y sus artistas más icónicos</h2>
                <p>Latinoamérica es una región rica en diversidad musical. Cada país aporta estilos únicos que han trascendido fronteras.</p>

                <h3>1. Reggaetón (Puerto Rico)</h3>
                <p><strong>Importancia:</strong> Género urbano que revolucionó la música mundial desde los 90.<br>
                <strong>Artistas icónicos:</strong> Daddy Yankee, Don Omar, Bad Bunny.<br>
                <strong>Canciones legendarias:</strong> "Gasolina", "Danza Kuduro".</p>

                <h3>2. Salsa (Cuba, Puerto Rico y Colombia)</h3>
                <p><strong>Importancia:</strong> Representa alegría, sabor y tradición caribeña.<br>
                <strong>Artistas icónicos:</strong> Celia Cruz, Héctor Lavoe, Grupo Niche.<br>
                <strong>Canciones destacadas:</strong> "Quimbara", "Rebelión", "Cali Pachanguero".</p>

                <h3>3. Cumbia (Colombia)</h3>
                <p><strong>Importancia:</strong> Símbolo musical colombiano, se expandió a México, Argentina y Perú.<br>
                <strong>Artistas icónicos:</strong> Totó la Momposina, Aniceto Molina, Los Ángeles Azules (versión mexicana).<br>
                <strong>Canciones destacadas:</strong> "La pollera colorá", "Cómo te voy a olvidar".</p>

                <h3>4. Vallenato (Colombia)</h3>
                <p><strong>Importancia:</strong> Música tradicional con acordeón que narra historias y vivencias.<br>
                <strong>Artistas icónicos:</strong> Diomedes Díaz, Carlos Vives, Jorge Celedón.<br>
                <strong>Canciones:</strong> "La Gota Fría", "Obsesión".</p>

                <h3>5. Tango (Argentina)</h3>
                <p><strong>Importancia:</strong> Símbolo cultural argentino; mezcla de melancolía y pasión.<br>
                <strong>Artistas icónicos:</strong> Carlos Gardel, Astor Piazzolla.<br>
                <strong>Canciones:</strong> "Por una cabeza", "Libertango".</p>

                <h3>6. Rock Latino (México, Argentina, Chile)</h3>
                <p><strong>Importancia:</strong> Revolución musical desde los 80 y 90.<br>
                <strong>Artistas:</strong> Soda Stereo, Maná, Café Tacvba.<br>
                <strong>Canciones:</strong> "De música ligera", "Rayando el sol".</p>

                <h3>7. Música Andina (Bolivia, Perú, Ecuador)</h3>
                <p><strong>Importancia:</strong> Sonidos ancestrales con quena, zampoña y charango.<br>
                <strong>Canciones y artistas:</strong> Los Kjarkas, Savia Andina ("Llorando se fue").</p>

                <h3>8. Bachata y Merengue (República Dominicana)</h3>
                <p><strong>Importancia:</strong> Ritmos tropicales que dominan fiestas y celebraciones.<br>
                <strong>Artistas:</strong> Juan Luis Guerra, Romeo Santos.<br>
                <strong>Canciones:</strong> "Bachata en Fukuoka", "Eres Mía".</p>

                <h2>💛 ¿Por qué la música transforma vidas?</h2>
                <p>La música tiene un poder especial: <strong>conecta el alma con las emociones</strong>, nos motiva y nos da compañía incluso en los momentos más difíciles. Para quienes la interpretan, tocar un instrumento o cantar puede significar:</p>
                <ul>
                    <li>Salir de la rutina</li>
                    <li>Encontrar paz mental</li>
                    <li>Mantenerse enfocado</li>
                    <li>Mejorar la disciplina y la paciencia</li>
                    <li>Sentirse acompañado aun en momentos de silencio</li>
                </ul>
                <p>La música nos recuerda que nunca estamos solos. Cada melodía, cada ritmo y cada canción puede convertirse en un refugio, una terapia o una inspiración.</p>

                <h1>Un camino musical para cualquier persona</h1>
                <p>No importa si nunca has tocado un instrumento o si llevas años haciéndolo.<br>
                La música siempre tiene un lugar para ti.</p>

                <h2>🚀 Si estás comenzando</h2>
                <p>Puedes iniciar con:<br>
                🎹 teclado<br>
                🎸 guitarra<br>
                🥁 percusión básica</p>

                <p>La música es un regalo universal.<br>
                No importa la edad, la experiencia o el país.<br>
                Lo único que importa es <strong>sentirla</strong>, dejarse llevar por sus ritmos y permitir que transforme nuestra vida.</p>

                <p><strong>La música une, inspira, sana y acompaña.<br>
                Y lo más hermoso es que siempre está lista para cualquiera que quiera escucharla o interpretarla.</strong> 🎶💫</p>

                <h1>🎺🌬️ Instrumentos de Viento: La Voz del Aire en la Música</h1>

                <p>Los <strong>instrumentos de viento</strong> son aquellos que producen sonido gracias a la <strong>vibración del aire</strong> dentro de un tubo. No importa si son de metal o madera: su magia está en el control del aire, la respiración, la embocadura y la técnica del intérprete.</p>

                <p>Estos instrumentos son fundamentales en bandas sinfónicas, orquestas, grupos populares, jazz, música latina y bandas marciales. A continuación, te presento sus familias más importantes y sus características principales.</p>

                <h2>🥇 1. Instrumentos de Viento-Metal o Bronces</h2>
                <p>Aunque su nombre indica "metal", lo que realmente define a estos instrumentos es <strong>la vibración de los labios del músico en la boquilla</strong>. De esa vibración nace el sonido, que luego viaja por el tubo del instrumento.</p>

                <p>Son conocidos por su <strong>fuerza, brillo, potencia y presencia</strong> en cualquier agrupación.</p>

                <h3>🎺 Trompeta</h3>
                <ul>
                    <li><strong>Tono:</strong> brillante, agudo, enérgico.</li>
                    <li><strong>Material:</strong> latón.</li>
                    <li><strong>Uso:</strong> salsa, jazz, orquesta sinfónica, banda marcial, música popular.</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>Tiene tres pistones.</li>
                            <li>Es uno de los instrumentos más versátiles.</li>
                            <li>Ideal para melodías protagonistas.</li>
                        </ul>
                    </li>
                    <li><strong>Intérpretes icónicos:</strong> Miles Davis, Louis Armstrong, Arturo Sandoval.</li>
                </ul>

                <h3>🎺🎶 Corneta y Cornetín</h3>
                <ul>
                    <li>Muy usados en bandas marciales y procesionales.</li>
                    <li>Parecidos a la trompeta, pero más pequeños y con un sonido más suave.</li>
                </ul>

                <h3>📯 Bombardino (Euphonium)</h3>
                <ul>
                    <li><strong>Tono:</strong> cálido, suave y profundo.</li>
                    <li><strong>Uso:</strong> bandas sinfónicas y marciales.</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>Tiene 3 o 4 pistones.</li>
                            <li>Excelente para solos melódicos.</li>
                        </ul>
                    </li>
                    <li>Muy querido por su sonido dulce y expresivo.</li>
                </ul>

                <h3>🎶 Trombón</h3>
                <ul>
                    <li><strong>Tono:</strong> poderoso y flexible.</li>
                    <li><strong>Uso:</strong> jazz, salsa, bandas, orquestas.</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>No usa pistones: usa una <strong>vara</strong> móvil.</li>
                            <li>Gran capacidad expresiva.</li>
                        </ul>
                    </li>
                    <li><strong>Artistas icónicos:</strong> Willie Colón, Glenn Miller.</li>
                </ul>

                <h3>🎵 Tuba</h3>
                <ul>
                    <li><strong>El más grave de los metales</strong>.</li>
                    <li><strong>Uso:</strong> orquestas, bandas sinfónicas, música cinematográfica.</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>Sonido profundo, base armónica de la agrupación.</li>
                            <li>Puede tener 3 a 5 pistones.</li>
                        </ul>
                    </li>
                    <li>Es el "corazón" de muchas bandas.</li>
                </ul>

                <h2>🪵 2. Instrumentos de Madera</h2>
                <p>Aquí, el sonido se produce por <strong>vibración de una caña (lengüeta)</strong> o por el <strong>aire al pasar por los orificios del instrumento</strong>. Antes eran todos de madera, pero hoy algunos son de metal o plástico, aunque siguen perteneciendo a esta familia por su forma de producir sonido.</p>

                <p>Estos instrumentos tienen sonidos <strong>más suaves, cálidos, melódicos o expresivos</strong>.</p>

                <h3>🎷 Saxofón</h3>
                <p>Aunque está hecho de metal, pertenece a la familia de las <strong>maderas</strong> porque usa una <strong>lengüeta de caña simple</strong>.</p>
                <ul>
                    <li><strong>Tono:</strong> cálido, expresivo y muy versátil.</li>
                    <li><strong>Tipos:</strong> soprano, alto, tenor, barítono.</li>
                    <li><strong>Uso:</strong> jazz, salsa, pop, bandas sinfónicas.</li>
                    <li><strong>Artistas icónicos:</strong> Charlie Parker, Kenny G.</li>
                </ul>

                <h3>🎼 Clarinete</h3>
                <ul>
                    <li><strong>Tono:</strong> dulce, flexible y capaz de tocar muchos registros.</li>
                    <li><strong>Material:</strong> madera (generalmente ébano).</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>Usa una lengüeta simple.</li>
                            <li>Tiene una gran extensión sonora.</li>
                        </ul>
                    </li>
                    <li><strong>Uso:</strong> orquesta, banda sinfónica, jazz, folclor.</li>
                    <li>Muy expresivo y técnico.</li>
                </ul>

                <h3>🎶 Flauta Traversa</h3>
                <ul>
                    <li><strong>Material:</strong> metal o plata, pero pertenece a maderas por su origen histórico.</li>
                    <li><strong>Tono:</strong> brillante, suave, ágil.</li>
                    <li><strong>Uso:</strong> orquestas, música latina, estudios, jazz.</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>Sonido producido por soplar sobre un orificio.</li>
                            <li>Muy virtuosa para melodías rápidas.</li>
                        </ul>
                    </li>
                </ul>

                <h3>🪈 Oboe</h3>
                <ul>
                    <li><strong>Sonido:</strong> muy expresivo, con una calidad "penetrante y dulce".</li>
                    <li><strong>Uso:</strong> orquestas, música clásica.</li>
                    <li><strong>Característica más famosa:</strong>
                        <ul>
                            <li>Da el <strong>La</strong> para afinar la orquesta.</li>
                            <li>Usa una <strong>doble lengüeta</strong>.</li>
                        </ul>
                    </li>
                </ul>

                <h3>🎵 Fagot</h3>
                <ul>
                    <li><strong>Tono:</strong> grave, profundo y lleno de carácter.</li>
                    <li><strong>Uso:</strong> orquestas sinfónicas, banda sinfónica.</li>
                    <li><strong>Características:</strong>
                        <ul>
                            <li>Doble lengüeta.</li>
                            <li>Gran tamaño y sonido cálido.</li>
                        </ul>
                    </li>
                </ul>

                <h2>🌬️ ¿Por qué los instrumentos de viento son tan importantes?</h2>

                <h3>💨 1. Desarrollo de técnica respiratoria</h3>
                <p>Aprender a controlar el aire mejora:<br>
                ✔ capacidad pulmonar<br>
                ✔ salud respiratoria<br>
                ✔ fuerza del diafragma<br>
                ✔ resistencia física</p>

                <h3>😌 2. Mejoran la concentración y disciplina</h3>
                <p>Son instrumentos que requieren técnica, constancia y enfoque.</p>

                <h3>🎶 3. Son protagonistas en muchos géneros</h3>
                <p>Desde música clásica hasta salsa, merengue, jazz, pop y bandas marciales.</p>

                <h3>❤️ 4. Ayudan emocionalmente</h3>
                <p>Tocar un instrumento de viento puede ser una excelente terapia:</p>
                <ul>
                    <li>libera tensión</li>
                    <li>relaja la mente</li>
                    <li>expresa emociones profundas</li>
                </ul>

                <h3>🌎 5. Son parte fundamental de la cultura latinoamericana</h3>
                <p>Las bandas de viento son representación de alegría, tradición y celebración.</p>

                <p>Los instrumentos de viento son una combinación perfecta de <strong>técnica, expresión y emoción</strong>.<br>
                Ya sea que elijas una trompeta que brille en lo alto 🎺, un trombón poderoso 🎶, un saxofón lleno de estilo 🎷 o un clarinete elegante 🎼... cada uno tiene una voz única preparada para contar historias.</p>

                <p>La música de viento invita a cualquier persona ---niños, jóvenes o adultos--- a descubrir un mundo lleno de sonidos, cultura y pasión.</p>
            </div>
        `;
    }

    // Función auxiliar para obtener idioma actual
    function getCurrentLanguage() {
        const selectedFlag = document.querySelector('.languaje-selected .flag');
        if (selectedFlag.style.backgroundImage.includes('ES')) return 'es';
        if (selectedFlag.style.backgroundImage.includes('GB')) return 'en';
        if (selectedFlag.style.backgroundImage.includes('BR')) return 'pt';
        return 'es'; // default
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
                showSection(sectionKey);
            } else if (section === "menuHistory") {
                // Caso especial para historia - mostrar sección especial
                showHistorySection();
                return;
            } else if (section === "menuTheory") {
                sectionKey = "theory";
                showSection(sectionKey);
            } else if (section === "menuHome") {
                sectionKey = "home";
                showSection(sectionKey);
            }
            
            // Marcar enlace como activo (excepto para historia que ya se maneja arriba)
            if (sectionKey && sectionKey !== "history") {
                link.classList.add("active-section");
            }
        });
    });

    // Hacer la función showSection global para que el botón de volver funcione
    window.showSection = showSection;
}

// ===== MENÚ HAMBURGUESA =====
function inicializarMenuHamburguesa() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navSearch = document.querySelector('.nav-search');
    const navAuth = document.querySelector('.nav-auth');
    const languageSelector = document.querySelector('.languaje');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle del menú principal
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Mostrar/ocultar elementos adicionales en móvil
            if (navMenu.classList.contains('active')) {
                // Cuando el menú está abierto
                if (navSearch) navSearch.style.display = 'block';
                if (navAuth) navAuth.style.display = 'flex';
                if (languageSelector) languageSelector.style.display = 'block';
                
                // Añadir estilos para móvil
                document.body.style.overflow = 'hidden';
            } else {
                // Cuando el menú está cerrado
                if (window.innerWidth <= 900) {
                    if (navSearch) navSearch.style.display = 'none';
                    if (navAuth) navAuth.style.display = 'none';
                    if (languageSelector) languageSelector.style.display = 'none';
                }
                
                document.body.style.overflow = 'auto';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    
                    // Ocultar elementos adicionales
                    if (navSearch) navSearch.style.display = 'none';
                    if (navAuth) navAuth.style.display = 'none';
                    if (languageSelector) languageSelector.style.display = 'none';
                }
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 900 && 
                !navMenu.contains(e.target) && 
                !mobileMenuBtn.contains(e.target) &&
                navMenu.classList.contains('active')) {
                
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Ocultar elementos adicionales
                if (navSearch) navSearch.style.display = 'none';
                if (navAuth) navAuth.style.display = 'none';
                if (languageSelector) languageSelector.style.display = 'none';
            }
        });
        
        // Manejar cambios de tamaño de ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                // En pantallas grandes, asegurar que todo esté visible
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                if (navSearch) navSearch.style.display = 'block';
                if (navAuth) navAuth.style.display = 'flex';
                if (languageSelector) languageSelector.style.display = 'block';
            } else {
                // En pantallas pequeñas, ocultar elementos inicialmente
                if (!navMenu.classList.contains('active')) {
                    if (navSearch) navSearch.style.display = 'none';
                    if (navAuth) navAuth.style.display = 'none';
                    if (languageSelector) languageSelector.style.display = 'none';
                }
            }
        });
    }
}