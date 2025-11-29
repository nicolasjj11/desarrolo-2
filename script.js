document.addEventListener("DOMContentLoaded", () => {
  // ----- MODAL CREAR CUENTA -----
  const modal = document.getElementById("modal-registro");
  const btnSignup = document.querySelector(".signup-btn");
  const btnCerrar = document.querySelector(".cerrar");

  // Mostrar el modal
  btnSignup.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar al hacer clic en la X
  btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ----- CAMBIO DE IDIOMA -----
  const lang = document.querySelector(".languaje");
  const dropdown = lang.querySelector("ul");
  const selected = lang.querySelector(".languaje-selected");

  // Traducciones CORREGIDAS
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
        
        btnViewCourse: "Ver Curso",
       
        // ... tus traducciones actuales ...
        
        // === AGREGA ESTO COMPLETO ===
        coursesSectionTitle: "Explora Nuestros Cursos",
        coursesSectionDescription: "Sumérgete en el mundo de la música con nuestra amplia variedad de cursos diseñados para todos los niveles. Desde principiantes hasta músicos avanzados, tenemos algo para todos.",
        
        historySectionTitle: "Historia de la Música", 
        historySectionDescription: "Viaja a través del tiempo y descubre cómo la música ha evolucionado a lo largo de los siglos, desde las primeras civilizaciones hasta la era moderna.",
        
        theorySectionTitle: "Teoría Musical",
        theorySectionDescription: "Domina el lenguaje universal de la música. Aprende sobre escalas, acordes, armonía y ritmo para llevar tu comprensión musical al siguiente nivel.",
        
        // TRADUCCIONES DE VIDEOS - AGREGA ESTO
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
        course5: "Music Theory",coursesSectionTitle: "Explore Our Courses",
        coursesSectionDescription: "Dive into the world of music with our wide variety of courses designed for all levels. From beginners to advanced musicians, we have something for everyone.",
        
        historySectionTitle: "Music History",
        historySectionDescription: "Travel through time and discover how music has evolved over the centuries, from the earliest civilizations to the modern era.",
        
        theorySectionTitle: "Music Theory", 
        theorySectionDescription: "Master the universal language of music. Learn about scales, chords, harmony, and rhythm to take your musical understanding to the next level.",
        
        btnViewCourse: "View Course",
        coursesSectionTitle: "Explore Our Courses",
        coursesSectionDescription: "Dive into the world of music with our wide variety of courses designed for all levels. From beginners to advanced musicians, we have something for everyone.",
        
        historySectionTitle: "Music History",
        historySectionDescription: "Travel through time and discover how music has evolved over the centuries, from the earliest civilizations to the modern era.",
        
        theorySectionTitle: "Music Theory", 
        theorySectionDescription: "Master the universal language of music. Learn about scales, chords, harmony, and rhythm to take your musical understanding to the next level.",
        
        // TRADUCCIONES DE VIDEOS - AGREGA ESTO
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
        
        btnViewCourse: "Ver Curso",
        coursesSectionTitle: "Explore Nossos Cursos",
        coursesSectionDescription: "Mergulhe no mundo da música com nossa ampla variedade de cursos projetados para todos os níveis. De iniciantes a músicos avançados, temos algo para todos.",
        
        historySectionTitle: "História da Música",
        historySectionDescription: "Viaje através do tempo e descubra como a música evoluiu ao longo dos séculos, desde as primeiras civilizações até a era moderna.",
        
        theorySectionTitle: "Teoria Musical",
        theorySectionDescription: "Domine a linguagem universal da música. Aprenda sobre escalas, acordes, harmonia e ritmo para levar sua compreensão musical ao próximo nível.",
        
        // TRADUCCIONES DE VIDEOS - AGREGA ESTO
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
};// ===== CONTENIDO DINÁMICO PARA CURSOS, HISTORIA Y TEORÍA =====
const dynamicContent = document.getElementById("dynamic-content");
const navLinks = document.querySelectorAll(".nav-link");

// Contenido para cada sección - VERSIÓN CON TRADUCCIONES
// REEMPLAZA solo el objeto sectionContent con este:
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

// Función para mostrar contenido de sección - VERSIÓN CON TRADUCCIONES
// REEMPLAZA solo la función showSection con esta:
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
    const currentTranslations = translations[currentLang];
    
    // Construir HTML del contenido usando las traducciones
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
}
// Event listeners para los enlaces del menú
// En el event listener del cambio de idioma, AGREGA esto:
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
            el.textContent = translations[selectedLang][key];
        });

        // Cambiar placeholder
        document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-translate-placeholder");
            el.placeholder = translations[selectedLang][key];
        });

        // ACTUALIZAR SECCIÓN ACTIVA SI HAY UNA
        const activeSectionLink = document.querySelector('.nav-link.active-section');
        if (activeSectionLink) {
            const section = activeSectionLink.getAttribute("data-translate");
            let sectionKey = "";
            
            if (section === "menuCourses") sectionKey = "courses";
            else if (section === "menuHistory") sectionKey = "history"; 
            else if (section === "menuTheory") sectionKey = "theory";
            
            if (sectionKey) {
                showSection(sectionKey, selectedLang);
            }
        }
    });
});
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
        }
    });
});

  selected.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });

  lang.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const flagUrl = item.getAttribute("data-flag");
      const selectedLang = item.getAttribute("data-lang");

      selected.innerHTML = `<span class="flag" style="background-image: url('${flagUrl}');"></span>`;
      dropdown.classList.remove("show");

      document.querySelectorAll("[data-translate]").forEach((el) => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[selectedLang][key];
      });
    });
  });
});
// Funcionalidad del modal de login
document.addEventListener("DOMContentLoaded", function() {
  // Elementos del DOM
  const loginModal = document.getElementById("loginModal");
  const loginBtn = document.querySelector(".login-btn");
  const closeLogin = document.querySelector(".close-login");
  const loginForm = document.getElementById("loginForm");
  const formMessage = document.getElementById("formMessage");
  const registerLink = document.querySelector('.register-link');
  const forgotPassword = document.querySelector('.forgot-password');

  // Abrir modal
  loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    openLoginModal();
  });

  // Cerrar modal
  closeLogin.addEventListener("click", closeLoginModal);

  // Cerrar al hacer clic fuera del modal
  loginModal.addEventListener("click", function(e) {
    if (e.target === loginModal) {
      closeLoginModal();
    }
  });

  // Cerrar con ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && loginModal.style.display === "flex") {
      closeLoginModal();
    }
  });

  // Envío del formulario
  loginForm.addEventListener("submit", handleLoginSubmit);

  // Enlace de registro
  registerLink?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Funcionalidad de registro próximamente...');
    // Aquí puedes redirigir a la página de registro o abrir otro modal
  });

  // Olvidé mi contraseña
  forgotPassword?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Funcionalidad de recuperación de contraseña próximamente...');
  });

  // Funciones
  function openLoginModal() {
    loginModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    resetForm();
  }

  function closeLoginModal() {
    loginModal.style.display = "none";
    document.body.style.overflow = "auto";
    resetForm();
  }

  function resetForm() {
    loginForm.reset();
    formMessage.style.display = 'none';
    formMessage.className = 'form-message';
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const remember = formData.get('remember');
    
    // Validaciones básicas
    if (!validateEmail(email)) {
      showMessage('Por favor, ingresa un email válido', 'error');
      return;
    }

    if (password.length < 6) {
      showMessage('La contraseña debe tener al menos 6 caracteres', 'error');
      return;
    }

    // Simular envío al servidor
    await simulateLogin(email, password, remember);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-ocultar mensajes de éxito después de 3 segundos
    if (type === 'success') {
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 3000);
    }
  }

  // Reemplaza la función simulateLogin con esta para usar una API real:
async function realLogin(email, password) {
  try {
    const response = await fetch('https://tu-api.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (response.ok) {
      return data; // { success: true, user: {...}, token: '...' }
    } else {
      throw new Error(data.message || 'Error en el login');
    }
  } catch (error) {
    throw new Error('Error de conexión: ' + error.message);
  }
}

  // Verificar si hay sesión guardada
  function checkSavedLogin() {
    const savedToken = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
    const savedEmail = localStorage.getItem('userEmail');
    
    if (savedToken && savedEmail) {
      // Auto-login o mostrar información del usuario
      console.log('Usuario ya ha iniciado sesión:', savedEmail);
      // Puedes redirigir automáticamente o mostrar un estado diferente
    }
  }

  // Verificar al cargar la página
  checkSavedLogin();
});

// Función global para abrir el modal desde otros lugares
function openLogin() {
  const loginModal = document.getElementById("loginModal");
  if (loginModal) {
    loginModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// Función global para cerrar el modal
function closeLogin() {
  const loginModal = document.getElementById("loginModal");
  if (loginModal) {
    loginModal.style.display = "none";
    document.body.style.overflow = "auto";

  }
  
}
// Logo recarga la página - VERSIÓN FINAL
setTimeout(function() {
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo && !navLogo.hasAttribute('data-listener-added')) {
        navLogo.style.cursor = 'pointer';
        navLogo.setAttribute('data-listener-added', 'true');
        
        navLogo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Recargando página...');
            window.location.reload(true);
        });
    }
}, 1000);
// Agregar después del código existente

document.addEventListener("DOMContentLoaded", () => {
  // ... código existente ...
  
  // ----- CONTENIDO DINÁMICO -----
  const dynamicContent = document.getElementById("dynamic-content");
  const navLinks = document.querySelectorAll(".nav-link");
  const homeLink = document.querySelector('.nav-link[data-translate="menuHome"]');
  
  // Contenido para cada sección
  const sectionContent = {
    courses: {
      title: "Explora Nuestros Cursos",
      description: "Sumérgete en el mundo de la música con nuestra amplia variedad de cursos diseñados para todos los niveles. Desde principiantes hasta músicos avanzados, tenemos algo para todos.",
      videos: [
        {
          title: "Introducción a la Teoría Musical",
          description: "Aprende los fundamentos de la teoría musical en este curso introductorio.",
          icon: "🎼"
        },
        {
          title: "Técnicas de Guitarra para Principiantes",
          description: "Domina los acordes básicos y técnicas esenciales para tocar guitarra.",
          icon: "🎸"
        },
        {
          title: "Fundamentos del Piano",
          description: "Comienza tu viaje con el piano aprendiendo las notas y escalas básicas.",
          icon: "🎹"
        },
        {
          title: "Historia de la Música Clásica",
          description: "Descubre los compositores y obras que definieron la música clásica.",
          icon: "🎵"
        }
      ]
    },
    history: {
      title: "Historia de la Música",
      description: "Viaja a través del tiempo y descubre cómo la música ha evolucionado a lo largo de los siglos, desde las primeras civilizaciones hasta la era moderna.",
      videos: [
        {
          title: "Música en la Antigua Grecia",
          description: "Explora el papel de la música en la sociedad griega antigua.",
          icon: "🏛️"
        },
        {
          title: "El Renacimiento Musical",
          description: "Descubre cómo el Renacimiento transformó la composición musical.",
          icon: "🎨"
        },
        {
          title: "La Era del Barroco",
          description: "Conoce a los grandes compositores del período barroco.",
          icon: "🎻"
        },
        {
          title: "Música del Siglo XX",
          description: "Analiza las revoluciones musicales del siglo pasado.",
          icon: "📻"
        }
      ]
    },
    theory: {
      title: "Teoría Musical",
      description: "Domina el lenguaje universal de la música. Aprende sobre escalas, acordes, armonía y ritmo para llevar tu comprensión musical al siguiente nivel.",
      videos: [
        {
          title: "Lectura de Partituras",
          description: "Aprende a leer y entender partituras musicales.",
          icon: "📜"
        },
        {
          title: "Armonía Básica",
          description: "Comprende los principios fundamentales de la armonía musical.",
          icon: "🎶"
        },
        {
          title: "Ritmo y Compás",
          description: "Domina los conceptos de ritmo, tempo y compás.",
          icon: "🥁"
        },
        {
          title: "Improvisación Musical",
          description: "Desarrolla habilidades para improvisar sobre progresiones de acordes.",
          icon: "🎹"
        }
      ]
    }
  };

  // Función para mostrar contenido de sección
  function showSection(section) {
    // Ocultar todos los contenidos primero
    dynamicContent.classList.remove("active");
    
    // Remover clase activa de todos los enlaces
    navLinks.forEach(link => {
      link.classList.remove("active-section");
    });
    
    // Si es la página de inicio, solo ocultar el contenido dinámico
    if (section === "home") {
      setTimeout(() => {
        dynamicContent.style.display = "none";
      }, 500);
      return;
    }
    
    // Obtener contenido de la sección
    const content = sectionContent[section];
    
    // Construir HTML del contenido
    let videosHTML = '';
    content.videos.forEach(video => {
      videosHTML += `
        <div class="video-card">
          <div class="video-thumbnail">
            ${video.icon}
          </div>
          <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
            <a href="#" class="video-link">Ver Curso</a>
          </div>
        </div>
      `;
    });
    
    // Insertar contenido en el contenedor
    dynamicContent.innerHTML = `
      <div class="content-header">
        <h2 class="content-title">${content.title}</h2>
        <p class="content-description">${content.description}</p>
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
        link.classList.add("active-section");
      } else if (section === "menuHistory") {
        sectionKey = "history";
        link.classList.add("active-section");
      } else if (section === "menuTheory") {
        sectionKey = "theory";
        link.classList.add("active-section");
      } else if (section === "menuHome") {
        sectionKey = "home";
        link.classList.add("active-section");
      }
      
      // Mostrar la sección correspondiente
      if (sectionKey) {
        showSection(sectionKey);
      }
    });
  });

  // ... resto del código existente ...
});// AGREGA ESTA FUNCIÓN - TE FALTA
function getCurrentLanguage() {
    const flagStyle = document.querySelector('.languaje-selected .flag').style.backgroundImage;
    if (flagStyle.includes('ES')) return 'es';
    if (flagStyle.includes('GB')) return 'en';
    if (flagStyle.includes('BR')) return 'pt';
    return 'es'; // Por defecto español
}