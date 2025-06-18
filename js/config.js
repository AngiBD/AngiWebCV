// 🎨 ARCHIVO DE CONFIGURACIÓN PERSONAL
// Edita este archivo para personalizar tu CV fácilmente

const CONFIG = {
    // 👤 INFORMACIÓN PERSONAL
    personal: {
        name: "Angie Blas",
        title: "Developer Full Stack Junior",
        age: 22,
        location: "Ciudad de México",
        email: "angie.blas@email.com",
        phone: "+52 55 1234-5678",
        
        // 📝 BIOGRAFÍA (máximo 200 palabras)
        bio: `Soy una desarrolladora Full Stack Junior apasionada por la tecnología y el diseño. 
              Me encanta crear aplicaciones web interactivas y funcionales que brinden experiencias 
              excepcionales a los usuarios. Siempre estoy aprendiendo nuevas tecnologías y 
              mejorando mis habilidades para estar al día con las tendencias del desarrollo web.`,
        
        // 🖼️ IMAGEN DE PERFIL
        profileImage: "https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=AB"
        // Para usar tu propia imagen: "images/mi-foto.jpg"
    },

    // 🔗 REDES SOCIALES
    social: {
        linkedin: "https://linkedin.com/in/tu-perfil",
        github: "https://github.com/tu-usuario",
        email: "mailto:tu-email@gmail.com",
        portfolio: "https://tu-portfolio.com",
        twitter: "https://twitter.com/tu-usuario", // opcional
        instagram: "https://instagram.com/tu-usuario" // opcional
    },

    // 📊 ESTADÍSTICAS
    stats: {
        projects: "10+",
        experience: "2+",
        technologies: "5+"
    },

    // 💼 EXPERIENCIA LABORAL
    experience: [
        {
            position: "Frontend Developer",
            company: "TechCorp Solutions",
            period: "2023 - Presente",
            description: [
                "Desarrollo de interfaces de usuario responsivas",
                "Optimización de rendimiento web",
                "Implementación de diseños modernos",
                "Colaboración con equipos de backend"
            ],
            technologies: ["React", "CSS3", "JavaScript"],
            logo: "fas fa-building" // Icono de Font Awesome
        },
        {
            position: "Web Developer Intern",
            company: "Digital Agency MX",
            period: "2022 - 2023",
            description: [
                "Desarrollo de sitios web responsivos",
                "Mantenimiento de aplicaciones web",
                "Pruebas y debugging de código",
                "Documentación técnica"
            ],
            technologies: ["HTML5", "CSS3", "jQuery"],
            logo: "fas fa-laptop-code"
        },
        {
            position: "Freelance Developer",
            company: "Proyectos Independientes",
            period: "2021 - 2022",
            description: [
                "Desarrollo de portfolios personales",
                "Sitios web para pequeñas empresas",
                "Optimización SEO",
                "Consultoría técnica"
            ],
            technologies: ["WordPress", "PHP", "MySQL"],
            logo: "fas fa-graduation-cap"
        }
    ],

    // 🚀 HABILIDADES TÉCNICAS
    skills: [
        // Frontend
        { name: "HTML5", level: 90, category: "frontend", icon: "fab fa-html5" },
        { name: "CSS3", level: 85, category: "frontend", icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: 80, category: "frontend", icon: "fab fa-js" },
        { name: "React", level: 75, category: "frontend", icon: "fab fa-react" },
        
        // Backend
        { name: "Node.js", level: 70, category: "backend", icon: "fab fa-node-js" },
        { name: "Python", level: 65, category: "backend", icon: "fab fa-python" },
        
        // Herramientas
        { name: "Git", level: 80, category: "tools", icon: "fab fa-git-alt" },
        { name: "Figma", level: 75, category: "tools", icon: "fab fa-figma" }
    ],

    // 💡 PROYECTOS DESTACADOS
    projects: [
        {
            id: "project1",
            title: "E-Commerce App",
            description: "Aplicación de comercio electrónico con carrito de compras, autenticación y pasarela de pagos.",
            image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=E-Commerce",
            technologies: ["React", "Node.js", "MongoDB"],
            features: [
                "Catálogo de productos con filtros",
                "Carrito de compras persistente",
                "Sistema de autenticación",
                "Pasarela de pagos integrada",
                "Panel de administración"
            ],
            liveUrl: "https://tu-proyecto1.com",
            githubUrl: "https://github.com/tu-usuario/proyecto1"
        },
        {
            id: "project2",
            title: "Task Manager",
            description: "Gestor de tareas con funcionalidades de drag & drop, filtros y sincronización en tiempo real.",
            image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Task+Manager",
            technologies: ["JavaScript", "CSS3", "LocalStorage"],
            features: [
                "Crear, editar y eliminar tareas",
                "Drag & drop para reorganizar",
                "Filtros por categoría y estado",
                "Almacenamiento local persistente",
                "Interfaz responsiva"
            ],
            liveUrl: "https://tu-proyecto2.com",
            githubUrl: "https://github.com/tu-usuario/proyecto2"
        },
        {
            id: "project3",
            title: "Weather App",
            description: "Aplicación del clima con geolocalización, pronóstico extendido y diseño adaptativo.",
            image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Weather+App",
            technologies: ["Vue.js", "API", "Chart.js"],
            features: [
                "Clima actual por geolocalización",
                "Pronóstico de 7 días",
                "Búsqueda por ciudad",
                "Gráficos interactivos",
                "Modo offline básico"
            ],
            liveUrl: "https://tu-proyecto3.com",
            githubUrl: "https://github.com/tu-usuario/proyecto3"
        }
    ],

    // 🎨 PERSONALIZACIÓN DE COLORES
    colors: {
        primary: "#8B5CF6",      // Morado principal
        secondary: "#EC4899",    // Rosa
        accent: "#06B6D4",       // Azul cian
        neonGreen: "#10B981",    // Verde neón
        electricBlue: "#3B82F6", // Azul eléctrico
        brightPink: "#F59E0B"    // Rosa brillante
    },

    // ⚙️ CONFIGURACIONES ADICIONALES
    settings: {
        typewriterSpeed: 100,        // Velocidad del efecto typewriter (ms)
        animationDuration: 1000,     // Duración de animaciones (ms)
        particlesEnabled: true,      // Activar partículas del cursor
        darkModeDefault: false,      // Modo oscuro por defecto
        smoothScroll: true,          // Scroll suave activado
        
        // 📱 Configuración responsive
        mobileBreakpoint: 768,       // Punto de quiebre para móvil
        tabletBreakpoint: 1024       // Punto de quiebre para tablet
    }
};

// 🔧 FUNCIONES DE UTILIDAD PARA PERSONALIZACIÓN
const PersonalizationUtils = {
    // Aplicar configuración de colores
    applyColors: function() {
        const root = document.documentElement;
        Object.keys(CONFIG.colors).forEach(key => {
            root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}-color`, CONFIG.colors[key]);
        });
    },

    // Generar HTML de habilidades
    generateSkillsHTML: function() {
        return CONFIG.skills.map(skill => `
            <div class="skill-chip" data-category="${skill.category}" data-skill="${skill.name}">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
                <div class="skill-level" data-level="${skill.level}"></div>
            </div>
        `).join('');
    },

    // Generar HTML de experiencia
    generateExperienceHTML: function() {
        return CONFIG.experience.map(exp => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="experience-card" data-aos="fade-up">
                    <div class="company-logo">
                        <i class="${exp.logo}"></i>
                    </div>
                    <h3>${exp.position}</h3>
                    <h4>${exp.company}</h4>
                    <p class="period">${exp.period}</p>
                    <div class="experience-details">
                        <ul>
                            ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="technologies">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Generar HTML de proyectos
    generateProjectsHTML: function() {
        return CONFIG.projects.map(project => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="project-card" data-aos="fade-up">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="project-overlay">
                            <button class="project-btn" onclick="openProjectModal('${project.id}')">
                                <i class="fas fa-eye"></i>
                            </button>
                            <a href="${project.liveUrl}" class="project-btn" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
};

// 🚀 INSTRUCCIONES DE USO:
/*
1. Edita la información en el objeto CONFIG arriba
2. Cambia las URLs de las imágenes por las tuyas
3. Actualiza los enlaces de redes sociales
4. Modifica la experiencia laboral y proyectos
5. Ajusta los niveles de habilidades
6. Personaliza los colores si deseas
7. Guarda el archivo y recarga tu CV

💡 TIPS:
- Las imágenes deben estar en la carpeta 'images/'
- Los iconos son de Font Awesome (https://fontawesome.com/icons)
- Los colores deben estar en formato hexadecimal (#RRGGBB)
- Las URLs deben incluir http:// o https://
*/

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
