// Variables globales
let isDarkMode = false;
let cursor = null;
let cursorFollower = null;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Función principal de inicialización
function initializePage() {
    initializeCustomCursor();
    initializeDarkMode();
    initializeTypewriterEffect();
    initializeScrollEffects();
    initializeSkillsSection();
    initializeContactForm();
    initializeAnimations();
    initializeParticleEffects();
    
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Cursor personalizado
function initializeCustomCursor() {
    // Solo en dispositivos de escritorio
    if (window.innerWidth > 768) {
        cursor = document.querySelector('.cursor');
        cursorFollower = document.querySelector('.cursor-follower');
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Animación del cursor principal
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        // Animación del seguidor del cursor
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.05;
            followerY += (mouseY - followerY) * 0.05;
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        
        animateCursor();
        animateFollower();
        
        // Efectos hover para elementos interactivos
        const interactiveElements = document.querySelectorAll('a, button, .skill-chip, .experience-card, .project-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = 'var(--secondary-color)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--primary-color)';
            });
        });
    }
}

// Modo oscuro
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    
    darkModeToggle.addEventListener('click', () => {
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        isDarkMode = true;
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        body.removeAttribute('data-theme');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        isDarkMode = false;
        localStorage.setItem('theme', 'light');
    }
}

// Efecto máquina de escribir
function initializeTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const timer = setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    // Quitar el cursor parpadeante después de completar
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 1000);
                }
            }, 100);
        }, index * 2000);
    });
}

// Efectos de scroll suave
function initializeScrollEffects() {
    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Parallax effect para elementos flotantes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-code');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Sección de habilidades
function initializeSkillsSection() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const skillChips = document.querySelectorAll('.skill-chip');
    
    // Filtro de categorías
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Actualizar botón activo
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar habilidades
            skillChips.forEach(chip => {
                const chipCategory = chip.getAttribute('data-category');
                
                if (category === 'all' || chipCategory === category) {
                    chip.style.display = 'block';
                    chip.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    chip.style.display = 'none';
                }
            });
        });
    });
    
    // Animación de barras de progreso al hacer hover
    skillChips.forEach(chip => {
        const skillLevel = chip.querySelector('.skill-level');
        const level = skillLevel.getAttribute('data-level');
        
        chip.addEventListener('mouseenter', () => {
            skillLevel.style.setProperty('--level', level + '%');
        });
        
        // Modal de información de habilidad
        chip.addEventListener('click', () => {
            const skillName = chip.getAttribute('data-skill');
            showSkillModal(skillName, level);
        });
    });
}

// Modal de habilidades
function showSkillModal(skillName, level) {
    const modal = new bootstrap.Modal(document.getElementById('skillModal'));
    const modalTitle = document.getElementById('skillModalTitle');
    const modalDescription = document.getElementById('skillDescription');
    const progressBar = document.getElementById('skillProgressBar');
    
    modalTitle.textContent = skillName;
    progressBar.style.width = level + '%';
    
    // Información dinámica de habilidades
    const skillInfo = {
        'HTML5': 'Experto en HTML semántico, accesibilidad web y mejores prácticas de estructura.',
        'CSS3': 'Dominio de CSS moderno, Flexbox, Grid, animaciones y diseño responsivo.',
        'JavaScript': 'Sólidos conocimientos en ES6+, DOM manipulation, async/await y APIs.',
        'React': 'Experiencia con hooks, context, estado global y ecosistema React.',
        'Node.js': 'Desarrollo backend con Express, APIs RESTful y bases de datos.',
        'Python': 'Conocimientos en Django, Flask y automatización de tareas.',
        'Git': 'Control de versiones, branching strategies y colaboración en equipo.',
        'Figma': 'Diseño UI/UX, prototipado y colaboración con equipos de diseño.'
    };
    
    modalDescription.innerHTML = `
        <p>${skillInfo[skillName] || 'Habilidad técnica desarrollada a través de proyectos prácticos y aprendizaje continuo.'}</p>
        <div class="skill-progress-container">
            <div class="skill-progress-bar">
                <div class="skill-progress-fill" style="width: ${level}%"></div>
            </div>
            <span class="skill-percentage">${level}%</span>
        </div>
    `;
    
    modal.show();
}

// Formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animación de envío
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simular envío (aquí conectarías con tu backend)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
            submitBtn.style.background = 'linear-gradient(135deg, var(--neon-green), var(--accent-color))';
            
            // Limpiar formulario
            form.reset();
            
            // Restaurar botón después de 3 segundos
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 2000);
    });
    
    // Efectos de focus para inputs
    const formInputs = form.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// Animaciones adicionales
function initializeAnimations() {
    // Animación de contador para estadísticas
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
            }, 20);
        });
    };
    
    // Ejecutar animación cuando las estadísticas sean visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Animación de las tarjetas de experiencia
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}

// Efectos de partículas
function initializeParticleEffects() {
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            // Crear partículas ocasionalmente
            if (Math.random() > 0.95) {
                createParticle(e.clientX, e.clientY);
            }
        });
    }
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Color aleatorio de la paleta
    const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)', 'var(--neon-green)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
    
    // Remover la partícula después de la animación
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Función para abrir modales de proyectos
function openProjectModal(projectId) {
    const modal = new bootstrap.Modal(document.getElementById('projectModal' + projectId.slice(-1)));
    modal.show();
}

// Efectos adicionales para redes sociales
document.addEventListener('DOMContentLoaded', () => {
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Efecto de ripple
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Estilo para el efecto ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .social-btn {
        position: relative;
        overflow: hidden;
    }
    
    .skill-progress-container {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .skill-progress-bar {
        flex: 1;
        height: 8px;
        background: var(--border-color);
        border-radius: 4px;
        overflow: hidden;
    }
    
    .skill-progress-fill {
        height: 100%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        border-radius: 4px;
        transition: width 1s ease-in-out;
    }
    
    .skill-percentage {
        font-weight: 600;
        color: var(--primary-color);
        font-size: 0.9rem;
    }
    
    .experience-card.expanded .experience-details {
        max-height: 300px;
        padding-top: 1rem;
    }
    
    .focused {
        transform: scale(1.02);
    }
`;

document.head.appendChild(style);

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimización de rendimiento para eventos de scroll
const optimizedScrollHandler = debounce(() => {
    // Manejar efectos de scroll aquí
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Preloader (opcional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Gestión de errores
window.addEventListener('error', (e) => {
    console.warn('Error capturado:', e.error);
});

// Compatibilidad con navegadores antiguos
if (!window.IntersectionObserver) {
    // Fallback para navegadores sin soporte para IntersectionObserver
    console.warn('IntersectionObserver no soportado, usando fallback');
}

console.log('🚀 CV Interactivo cargado correctamente!');
