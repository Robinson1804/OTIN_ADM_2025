// Configuración de dashboards
const dashboards = {
    gerencial: {
        poi: {
            url: 'https://app.powerbi.com/view?r=eyJrIjoiZDQwY2NmY2EtYzUwNi00Nzc2LWIxMWUtYWJiMGJiYjJhNDQyIiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
            title: 'Dashboard POI'
        },
        permanencia: {
            url: 'https://app.powerbi.com/view?r=your-permanencia-dashboard-url',
            title: 'Dashboard Permanencia'
        },
        metodologiaabc: {
            url: 'https://app.powerbi.com/view?r=eyJrIjoiMmNiMjEwMWQtZTZlNS00OWMzLThjY2QtNDA4NjVlODRiMTQ1IiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
            title: 'Dashboard Metodología ABC'
        },
        acuerdos: {
            url: 'https://app.powerbi.com/view?r=eyJrIjoiZjNlNzhmY2UtNWE5ZS00NzM0LWE3OGItODE5MWYyZGY0ZjQ3IiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
            title: 'Dashboard Seguimiento de Acuerdos'
        },
        scrum: {
            url: 'https://app.powerbi.com/view?r=your-monitorio-dashboard-url',
            title: 'Dashboard Evaluación de Scrum Masters'
        },
        coodinadores: {
            url: 'https://app.powerbi.com/view?r=your-calidad-dashboard-url',
            title: 'Dashboard Evaluación de Coordinadores'
        },
        logros: {
            url: 'https://app.powerbi.com/view?r=your-calidad-dashboard-url',
            title: 'Dashboard de Logros del Mes'
        }
         
    },
    operacional: {
        
        adquisiciones: {
            url: 'https://app.powerbi.com/view?r=your-adquisiciones-dashboard-url',
            title: 'Dashboard Adquisiciones'
        },
        pagos: {
            url: 'https://app.powerbi.com/view?r=your-adquisiciones-dashboard-url',
            title: 'Dashboard Seguimiento de Pagos'
        },
        presupuesto: {
            url: 'https://app.powerbi.com/view?r=your-adquisiciones-dashboard-url',
            title: 'Dashboard Presupuesto'
        },
        documentacion: {
            url: 'https://app.powerbi.com/view?r=your-adquisiciones-dashboard-url',
            title: 'Dashboard Monitoreo Documentación'
        },
        evidencia: {
            url: 'https://app.powerbi.com/view?r=your-evaluacion-dashboard-url',
            title: 'Dashboard Nivel de calidad de la Evidencia'
        }
    }
};


// Función para manejar la navegación
function navigateTo(path) {
    const [, section, dashboard] = path.split('/');
    
    // Ocultar contenido de inicio
    document.querySelector('.home-content').style.display = 'none';
    
    // Mostrar contenedor de dashboard
    const dashboardContainer = document.getElementById('dashboard-container');
    const dashboardFrame = document.getElementById('dashboard-frame');
    
    if (section && dashboard && dashboards[section]?.[dashboard]) {
        // Cargar dashboard específico
        dashboardFrame.src = dashboards[section][dashboard].url;
        document.title = dashboards[section][dashboard].title;
        dashboardContainer.classList.remove('hide');
    } else {
        // Volver al inicio si la ruta no es válida
        showHome();
    }
    
    // Actualizar URL sin recargar la página
    window.history.pushState({}, '', path);
}

// Función para mostrar la página de inicio
function showHome() {
    document.querySelector('.home-content').style.display = 'block';
    document.getElementById('dashboard-container').classList.add('hide');
    document.title = 'Sistema de Gestión INEI';
    window.history.pushState({}, '', '/');
}

// Manejar navegación del navegador (botones atrás/adelante)
window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    if (path === '/') {
        showHome();
    } else {
        navigateTo(path);
    }
});

// Inicializar la página según la URL actual
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path === '/') {
        showHome();
    } else {
        navigateTo(path);
    }
});

// Agregar eventos de click a los enlaces de navegación
document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const path = link.getAttribute('href');
        navigateTo(path);
    });
});