// script.js - Código completo y funcional
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    // ===== INICIALIZACIÓN =====
    inicializarModales();
    inicializarEventListeners();
    verificarUsuarioLogueado();
    inicializarIdioma();
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
            course5: "Teoría Musical"
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
            course5: "Music Theory"
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
            course5: "Teoria Musical"
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
        });
    });
}