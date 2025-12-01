// script.js - Código completo para MSC STUDY SPA
document.addEventListener("DOMContentLoaded", function() {
  console.log("MSC STUDY SPA cargada correctamente");
  
  // Inicializar todos los sistemas
  initializeSPA();
  initializeModals();
  initializeEventListeners();
  checkLoggedInUser();
  initializeLanguage();
  
  // Navegar a la sección inicial basada en el hash de la URL
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

// Navegar a una sección específica
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
  
  // Simular carga de datos
  setTimeout(() => {
    contentContainer.innerHTML = `
      <section class="courses-section">
        <h2 class="section-title">Todos Nuestros Cursos</h2>
        <p class="main-description">Explora nuestra completa oferta de cursos musicales diseñados para todos los niveles.</p>
        
        <div class="courses-grid">
          <div class="course-card" data-course="wind">
            <h3>Instrumentos de Viento</h3>
            <div class="instrument-types">
              <span class="instrument-type">🎺</span>
              <span class="instrument-type">🎷</span>
              <span class="instrument-type">🪈</span>
            </div>
            <p>Aprende a dominar los instrumentos de viento con nuestros expertos.</p>
          </div>
          <div class="course-card" data-course="string">
            <h3>Instrumentos de Cuerda</h3>
            <div class="instrument-types">
              <span class="instrument-type">🎸</span>
              <span class="instrument-type">🎻</span>
              <span class="instrument-type">🪕</span>
            </div>
            <p>Domina la técnica de los instrumentos de cuerda desde nivel básico a avanzado.</p>
          </div>
          <div class="course-card" data-course="piano">
            <h3>Piano & Teclados</h3>
            <div class="instrument-types">
              <span class="instrument-type">🎹</span>
              <span class="instrument-type">🎹</span>
            </div>
            <p>Desarrolla tu habilidad con el piano y teclados con métodos probados.</p>
          </div>
          <div class="course-card" data-course="percussion">
            <h3>Percusión</h3>
            <div class="instrument-types">
              <span class="instrument-type">🥁</span>
              <span class="instrument-type">🎵</span>
              <span class="instrument-type">🪘</span>
            </div>
            <p>Aprende ritmos y técnicas de percusión de diferentes estilos musicales.</p>
          </div>
          <div class="course-card" data-course="theory">
            <h3>Teoría Musical</h3>
            <div class="instrument-types">
              <span class="instrument-type">🎼</span>
              <span class="instrument-type">📚</span>
            </div>
            <p>Comprende los fundamentos de la música y mejora tu comprensión musical.</p>
          </div>
        </div>
      </section>
    `;
    
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
    // Contenido completo de historia de la música
    contentContainer.innerHTML = `
      <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
          <i class="fas fa-arrow-left"></i> Volver a Cursos
        </button>
        <h2>La Historia de la Música: Origen, Evolución y su Importancia</h2>
        
        <div class="history-intro">
          <p>La música es una de las expresiones culturales más antiguas y universales de la humanidad. Acompaña al ser humano desde sus inicios y ha sido un puente para comunicar emociones, transmitir historias y unir comunidades.</p>
          <p>A lo largo de los siglos, la música evolucionó, acompañando los cambios sociales, culturales y tecnológicos de cada civilización.</p>
        </div>

        <h3>🎼 Pilares fundamentales en la historia de la música</h3>
        
        <div class="pillar-section">
          <h4>1. Las antiguas civilizaciones</h4>
          <ul>
            <li><strong>Mesopotamia, Egipto, Grecia y Roma</strong> utilizaron la música en rituales, celebraciones y teatro.</li>
            <li>Los griegos fueron los primeros en estudiar la música como ciencia.</li>
          </ul>
        </div>
        
        <div class="pillar-section">
          <h4>2. La música medieval y renacentista</h4>
          <ul>
            <li>Nacen los <strong>cantos gregorianos</strong> y la música sacra europea.</li>
            <li>Se desarrollan las bases de la armonía y la notación musical.</li>
          </ul>
        </div>
        
        <div class="pillar-section">
          <h4>3. La música clásica</h4>
          <p>Compositores revolucionarios:</p>
          <ul>
            <li><strong>Johann Sebastian Bach</strong></li>
            <li><strong>Wolfgang Amadeus Mozart</strong></li>
            <li><strong>Ludwig van Beethoven</strong></li>
          </ul>
        </div>
        
        <div class="pillar-section">
          <h4>4. La música moderna</h4>
          <p>Con la llegada de la tecnología del siglo XX surgieron:</p>
          <ul>
            <li>El jazz</li>
            <li>El rock</li>
            <li>La música pop</li>
            <li>La música electrónica</li>
          </ul>
        </div>

        <h3>🌎 La música como idioma universal</h3>
        
        <p>La música es considerada un <strong>lenguaje universal</strong>, porque transmite emociones sin necesidad de palabras.</p>
        
        <div class="influence-section">
          <h4>✔ Desarrollo emocional</h4>
          <ul>
            <li>Ayuda a manejar el estrés y la tristeza.</li>
            <li>Aumenta la felicidad, la motivación y la energía.</li>
          </ul>
        </div>
        
        <div class="influence-section">
          <h4>✔ Desarrollo cognitivo y motriz</h4>
          <ul>
            <li>Mejora la concentración, la memoria y la creatividad.</li>
            <li>En niños, fortalece la coordinación y la motricidad fina.</li>
          </ul>
        </div>

        <div class="final-quote">
          <strong>La música une, inspira, sana y acompaña.<br>Y lo más hermoso es que siempre está lista para cualquiera que quiera escucharla o interpretarla.</strong> 🎶💫
        </div>
      </div>
    `;
  }, 300);
}

function loadTheorySection() {
  const contentContainer = document.getElementById('theory-content');
  
  setTimeout(() => {
    contentContainer.innerHTML = `
      <div class="course-detail">
        <button class="back-button" onclick="navigateTo('#courses')">
          <i class="fas fa-arrow-left"></i> Volver a Cursos
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
          <li><strong>Básico:</strong> Notas, escalas mayores y menores, intervalos, acordes tríada</li>
          <li><strong>Intermedio:</strong> Armonía funcional, modulación, formas binaria y ternaria</li>
          <li><strong>Avanzado:</strong> Contrapunto, armonía jazz, análisis de obras complejas</li>
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
      </div>
    `;
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
    
    // Inicializar carrusel si estamos en la sección de viento
    if (courseType === 'wind') {
      initializeCarousel();
    }
  }, 300);
}

// ===== CARRUSEL DE IMÁGENES =====
let carouselInterval;
let currentSlide = 0;

function initializeCarousel() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const totalSlides = slides.length;
  
  // Función para mostrar una diapositiva específica
  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === currentSlide);
    });
  }
  
  // Función para siguiente diapositiva
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  // Función para diapositiva anterior
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Agregar event listeners a los botones
  document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);
  
  // Agregar event listeners a los indicadores
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      showSlide(i);
    });
  });
  
  // Iniciar cambio automático cada 4 segundos
  carouselInterval = setInterval(nextSlide, 4000);
  
  // Pausar el carrusel cuando el mouse está sobre él
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 4000);
  });
}

// ===== CONTENIDO ESPECÍFICO DE CURSOS =====
function getWindInstrumentsContent() {
  return `
    <div class="course-detail">
      <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> Volver a Cursos
      </button>
      <h2>Instrumentos de Viento</h2>
      <p>Los instrumentos de viento producen sonido mediante la vibración del aire dentro de un tubo. Se dividen en dos categorías principales: viento-madera y viento-metal.</p>
      
      <!-- Carrusel de imágenes -->
<div class="carousel-container">
  <div class="carousel">
    <div class="carousel-slide">
      <img src="img/flauta (1) (1).jpg" alt="Flauta">
      <div class="carousel-caption">
        <h3>Flauta</h3>
        <p>Instrumento de sonido dulce y brillante</p>
      </div>
    </div>
    <div class="carousel-slide">
      <img src="img/sax alto (1).jpeg" alt="Saxofón">
      <div class="carousel-caption">
        <h3>Saxofón</h3>
        <p>Icono del jazz con sonido expresivo</p>
      </div>
    </div>
    <div class="carousel-slide">
      <img src="img/trumpet1 (1) (1).jpeg" alt="Trompeta">
      <div class="carousel-caption">
        <h3>Trompeta</h3>
        <p>Brillante y enérgico, rey de los metales</p>
      </div>
    </div>
    <div class="carousel-slide">
      <img src="img/clarinete 2 (1).jpg" alt="Clarinete">
      <div class="carousel-caption">
        <h3>Clarinete</h3>
        <p>Versátil con sonido cálido y expresivo</p>
      </div>
    </div>
  </div>
  
  <!-- Botones de navegación -->
  <button class="carousel-btn prev">
    <i class="fas fa-chevron-left"></i>
  </button>
  <button class="carousel-btn next">
    <i class="fas fa-chevron-right"></i>
  </button>
  
  <!-- Indicadores -->
  <div class="carousel-indicators">
    <span class="carousel-indicator active"></span>
    <span class="carousel-indicator"></span>
    <span class="carousel-indicator"></span>
    <span class="carousel-indicator"></span>
  </div>
</div>
      <h3>Instrumentos de Viento-Madera</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Flauta</h4>
          <p>Instrumento de sonido dulce y brillante, perfecto para melodías fluidas.</p>
        </div>
        <div class="instrument-card">
          <h4>Clarinete</h4>
          <p>Versátil instrumento con un rango amplio y sonido cálido.</p>
        </div>
        <div class="instrument-card">
          <h4>Saxofón</h4>
          <p>Icono del jazz, con un sonido expresivo y lleno de carácter.</p>
        </div>
        <div class="instrument-card">
          <h4>Oboe</h4>
          <p>Instrumento con sonido penetrante, usado para afinar la orquesta.</p>
        </div>
      </div>
      
      <h3>Instrumentos de Viento-Metal</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Trompeta</h4>
          <p>El más agudo de los metales, con sonido brillante y enérgico.</p>
        </div>
        <div class="instrument-card">
          <h4>Trombón</h4>
          <p>Único por su vara deslizante, con sonido potente y flexible.</p>
        </div>
        <div class="instrument-card">
          <h4>Tuba</h4>
          <p>El más grave de los metales, base fundamental de la armonía.</p>
        </div>
        <div class="instrument-card">
          <h4>Corneta</h4>
          <p>Similar a la trompeta pero con sonido más suave y redondo.</p>
        </div>
      </div>
      
      <h3>Niveles de Aprendizaje</h3>
      <ul>
        <li><strong>Básico:</strong> Postura, embocadura, primeras notas y escalas simples</li>
        <li><strong>Intermedio:</strong> Técnica de respiración, vibrato, repertorio básico</li>
        <li><strong>Avanzado:</strong> Estilos específicos, improvisación, repertorio complejo</li>
      </ul>
      
      <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
  `;
}

function getStringInstrumentsContent() {
  return `
    <div class="course-detail">
      <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> Volver a Cursos
      </button>
      <h2>Instrumentos de Cuerda</h2>
      <p>Los instrumentos de cuerda producen sonido mediante la vibración de cuerdas tensadas. Pueden ser frotados, pulsados o percutidos.</p>
      
      <h3>Instrumentos de Cuerda Frotada</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Violín</h4>
          <p>El más agudo de la familia, con sonido brillante y expresivo.</p>
        </div>
        <div class="instrument-card">
          <h4>Viola</h4>
          <p>Ligeramente más grande que el violín, con sonido más cálido y profundo.</p>
        </div>
        <div class="instrument-card">
          <h4>Violonchelo</h4>
          <p>Instrumento con sonido rico y aterciopelado, se toca sentado.</p>
        </div>
        <div class="instrument-card">
          <h4>Contrabajo</h4>
          <p>El más grave de la familia, fundamental en jazz y música clásica.</p>
        </div>
      </div>
      
      <h3>Instrumentos de Cuerda Pulsada</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Guitarra</h4>
          <p>Versátil instrumento presente en casi todos los géneros musicales.</p>
        </div>
        <div class="instrument-card">
          <h4>Bajo Eléctrico</h4>
          <p>Columna vertebral de la sección rítmica en música popular.</p>
        </div>
        <div class="instrument-card">
          <h4>Arpa</h4>
          <p>Instrumento antiguo con sonido celestial y etéreo.</p>
        </div>
        <div class="instrument-card">
          <h4>Ukulele</h4>
          <p>Pequeño instrumento hawaiano con sonido alegre y distintivo.</p>
        </div>
      </div>
      
      <h3>Niveles de Aprendizaje</h3>
      <ul>
        <li><strong>Básico:</strong> Afinación, postura, digitación básica, acordes simples</li>
        <li><strong>Intermedio:</strong>Técnicas específicas, repertorio variado, lectura a primera vista</li>
        <li><strong>Avanzado:</strong> Virtuosismo, estilos especializados, interpretación profesional</li>
      </ul>
      
      <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
  `;
}

function getPianoContent() {
  return `
    <div class="course-detail">
      <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> Volver a Cursos
      </button>
      <h2>Piano & Teclados</h2>
      <p>El piano es un instrumento versátil que sirve como base para el estudio de la música. Permite tocar melodía, armonía y ritmo simultáneamente.</p>
      
      <h3>Tipos de Piano y Teclados</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Piano Acústico</h4>
          <p>El instrumento tradicional con cuerdas y martillos, sonido rico y natural.</p>
        </div>
        <div class="instrument-card">
          <h4>Piano Digital</h4>
          <p>Versión moderna que reproduce sonidos de piano acústico con tecnología.</p>
        </div>
        <div class="instrument-card">
          <h4>Teclado Arranger</h4>
          <p>Ideal para principiantes, con acompañamientos automáticos.</p>
        </div>
        <div class="instrument-card">
          <h4>Sintetizador</h4>
          <p>Para creación de sonidos electrónicos y producción musical.</p>
        </div>
      </div>
      
      <h3>Enfoques de Estudio</h3>
      <ul>
        <li><strong>Clásico:</strong> Técnica tradicional, repertorio de compositores clásicos</li>
        <li><strong>Jazz:</strong> Improvisación, armonía jazzística, estándares</li>
        <li><strong>Popular:</strong> Acordes, acompañamiento, tocar en bandas</li>
        <li><strong>Composición:</strong> Crear música original usando el piano como herramienta</li>
      </ul>
      
      <h3>Niveles de Aprendizaje</h3>
      <ul>
        <li><strong>Básico:</strong> Postura, nombres de las notas, escalas mayores, acordes básicos</li>
        <li><strong>Intermedio:</strong> Técnica de escalas y arpegios, repertorio de nivel medio, acompañamiento</li>
        <li><strong>Avanzado:</strong> Obras complejas, improvisación, lectura a primera vista avanzada</li>
      </ul>
      
      <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
  `;
}

function getPercussionContent() {
  return `
    <div class="course-detail">
      <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> Volver a Cursos
      </button>
      <h2>Percusión</h2>
      <p>Los instrumentos de percusión producen sonido al ser golpeados, agitados o frotados. Son los instrumentos más antiguos y diversos.</p>
      
      <h3>Percusión Melódica</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Xilófono</h4>
          <p>Instrumento de láminas de madera con sonido brillante y penetrante.</p>
        </div>
        <div class="instrument-card">
          <h4>Marimba</h4>
          <p>Similar al xilófono pero más grande, con sonido más cálido y resonante.</p>
        </div>
        <div class="instrument-card">
          <h4>Vibráfono</h4>
          <p>De láminas de metal, con resonadores que producen efecto vibrato.</p>
        </div>
        <div class="instrument-card">
          <h4>Glockenspiel</h4>
          <p>Pequeño instrumento de láminas metálicas, sonido muy agudo y brillante.</p>
        </div>
      </div>
      
      <h3>Percusión de Membranas</h3>
      <div class="instrument-grid">
        <div class="instrument-card">
          <h4>Batería</h4>
          <p>Conjunto de tambores y platillos, corazón de la música popular moderna.</p>
        </div>
        <div class="instrument-card">
          <h4>Bongós</h4>
          <p>Pareja de pequeños tambores de origen cubano, esencial en la salsa.</p>
        </div>
        <div class="instrument-card">
          <h4>Congas</h4>
          <p>Tambores altos de origen africano, fundamentales en música latina.</p>
        </div>
        <div class="instrument-card">
          <h4>Timbal</h4>
          <p>Tambor orquestal con parche tensable, produce notas definidas.</p>
        </div>
      </div>
      
      <h3>Niveles de Aprendizaje</h3>
      <ul>
        <li><strong>Básico:</strong> Técnica de baquetas, ritmos simples, coordinación básica</li>
        <li><strong>Intermedio:</strong> Ritmos complejos, independencia de extremidades, diversos estilos</li>
        <li><strong>Avanzado:</strong> Solos, lectura compleja, técnicas especializadas, interpretación profesional</li>
      </ul>
      
      <button class="cta-button" onclick="abrirModal('registerModal')">Inscribirse en este Curso</button>
    </div>
  `;
}

function getTheoryContent() {
  return `
    <div class="course-detail">
      <button class="back-button" onclick="navigateTo('#courses')">
        <i class="fas fa-arrow-left"></i> Volver a Cursos
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
        <li><strong>Básico:</strong> Notas, escalas mayores y menores, intervalos, acordes tríada</li>
        <li><strong>Intermedio:</strong> Armonía funcional, modulación, formas binaria y ternaria</li>
        <li><strong>Avanzado:</strong> Contrapunto, armonía jazz, análisis de obras complejas</li>
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

// ===== INICIALIZACIÓN DE MÓDULOS EXISTENTES =====
function initializeModals() {
  // Ocultar modales al inicio
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");
  
  if (loginModal) loginModal.style.display = "none";
  if (registerModal) registerModal.style.display = "none";
}

function initializeEventListeners() {
  // Botones de autenticación
  const loginBtn = document.querySelector(".login-btn");
  const signupBtn = document.querySelector(".signup-btn");
  
  if (loginBtn) {
    loginBtn.addEventListener("click", function(e) {
      e.preventDefault();
      abrirModal('loginModal');
    });
  }
  
  if (signupBtn) {
    signupBtn.addEventListener("click", function(e) {
      e.preventDefault();
      abrirModal('registerModal');
    });
  }
  
  // Cerrar modales
  const closeLogin = document.querySelector(".close-login");
  const closeRegister = document.querySelector(".close-register");
  
  if (closeLogin) {
    closeLogin.addEventListener("click", function() {
      cerrarModal('loginModal');
    });
  }
  
  if (closeRegister) {
    closeRegister.addEventListener("click", function() {
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
  
  // Logo click para recargar la página
  const navLogo = document.querySelector('.nav-logo');
  if (navLogo) {
    navLogo.addEventListener('click', function(e) {
      e.preventDefault();
      navigateTo('#home');
    });
    
    // Agregar estilo de cursor pointer
    navLogo.style.cursor = 'pointer';
  }
  
  // Event listeners para las tarjetas de curso en la página de inicio
  document.querySelectorAll('.course-card[data-course]').forEach(card => {
    card.addEventListener('click', function() {
      const courseType = this.getAttribute('data-course');
      navigateTo(`#course-${courseType}`);
    });
  });
  
  // Botón CTA
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      navigateTo('#courses');
    });
  }
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
  try {
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
      throw new Error('Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error en login:', error);
    mostrarMensaje('formMessage', 'Email o contraseña incorrectos', 'error');
  }
}

async function procesarRegistro(name, email, password) {
  try {
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
  } catch (error) {
    console.error('Error en registro:', error);
    mostrarMensaje('registerMessage', 'Error al crear la cuenta. Intenta nuevamente.', 'error');
  }
}

// ===== INTERFAZ DE USUARIO =====
function checkLoggedInUser() {
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

// ===== SISTEMA DE IDIOMAS =====
function initializeLanguage() {
  const lang = document.querySelector(".languaje");
  if (!lang) return;
  
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
      btnSignup: "Cadastrar",
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
    });
  });

  return translations;
}