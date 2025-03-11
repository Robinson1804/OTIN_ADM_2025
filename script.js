// Configuración de URLs de los dashboardsa
const dashboardUrls = {
    gerencial: {
        poi: 'https://app.powerbi.com/view?r=eyJrIjoiYjQxMWY2MzAtNGJiYy00ODlhLThmYjUtNTM2ZGZiODU3OTVlIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9',// Actualizado
        permanencia: 'https://app.powerbi.com/view?r=eyJrIjoiOWExZDUzNTctOGVmYi00ZjhjLWFlYTEtZGE2OGFlZGU1NTBkIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9', // Actualizado
        metodologiaabc: 'https://app.powerbi.com/view?r=eyJrIjoiZWY1NmM5MDgtZWE2Ni00MTBkLTlmOGEtODhkZGQ5MWZhYWEwIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9', // Actualizado
        acuerdos: 'https://app.powerbi.com/view?r=eyJrIjoiZTNlNTZmMzMtZmI2Yi00OWI3LTkzNzctYzliOGNjMTA5YjgzIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9', // Actualizado
        coordinador: 'https://app.powerbi.com/view?r=eyJrIjoiZTQ2NjJhMDgtNGQzNy00MzdkLWExYzItODI0MTQ0YjQ2ZmMzIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9',// Actualizado
        scrum: 'https://app.powerbi.com/view?r=eyJrIjoiZDc1NDY3YTktNzVjNy00YjBlLTkzMDgtYThjMWM4NmZkNjJkIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9',// Actualizado
        logros: 'https://app.powerbi.com/view?r=eyJrIjoiNjcwNWZjMDctNTZhMC00YzJjLWE3ODktMTdlY2U1M2NlYzQyIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9'// Actualizado
    },
    operacional: {
        pagos: 'https://app.powerbi.com/view?r=eyJrIjoiNjE3MTIzN2UtZTUwYy00ZjUyLTg5NjQtMmRkZjA4ZmQ4NDY0IiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
        presupuesto: 'https://app.powerbi.com/view?r=eyJrIjoiZDRmNjNhODctYTljNS00OWYwLThhYTMtY2E1ZDUzZTYwZTBlIiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
        adquisiciones: 'https://app.powerbi.com/view?r=eyJrIjoiMjJiNjMzMGQtYjQ3Zi00YTQyLThmZTUtNGNmZWEwMjgxY2EwIiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
        documentacion: 'https://app.powerbi.com/view?r=eyJrIjoiNTU1YTNhMjQtY2YyNC00ZmMzLThiN2MtODM0ZGYxNmJjYzk1IiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9',
        evidencia: 'https://app.powerbi.com/view?r=eyJrIjoiZWNiOGIwZTktMDBiYi00OTgyLTk0ZjctNWRlYTJhYzQyYzk1IiwidCI6ImRlZmJhNDcxLWM4M2YtNGExMC04ZTU5LTcxZjFlMDczNWNhOCJ9'
    },
    otros: {
        edades: 'https://app.powerbi.com/view?r=eyJrIjoiNGViN2E3YjMtZWFiMS00YmYyLThiZmQtMGVlYjc3NzdiNTkyIiwidCI6IjJkZDI2MmI5LTc4NDctNGM1NC05NTMwLTk0MThlMGY4MWNkYSIsImMiOjR9',
    }
        
};

// Función para ir a la página principal
function goToMain() {
    // Mostrar contenido principal y ocultar dashboard
    document.getElementById('landingContent').classList.remove('hide');
    document.getElementById('dashboardContainer').classList.add('hide');
    
    // Actualizar URL y título
    window.history.pushState({}, '', 'index.html');
    document.title = 'Sistema de Gestión OTIN';
}

// Función para cargar un dashboard específico
function loadDashboard(section, type) {
    // Obtener URL del dashboard
    const url = dashboardUrls[section][type];
    if (!url) {
        console.error('URL no encontrada para:', section, type);
        return;
    }

    // Cargar dashboard en el iframe
    const dashboardFrame = document.getElementById('dashboardFrame');
    dashboardFrame.src = url;

    // Mostrar dashboard y ocultar contenido principal
    document.getElementById('landingContent').classList.add('hide');
    document.getElementById('dashboardContainer').classList.remove('hide');

    // Actualizar URL y título
    const title = getTitleForDashboard(section, type);
    window.history.pushState({}, '', `index.html?section=${section}&dashboard=${type}`);
    document.title = `${title} - Sistema de Gestión OTIN`;
}

// Función para obtener el título del dashboard
function getTitleForDashboard(section, type) {
    const titles = {
        gerencial: {
            poi: 'POI',
            permanencia: 'Permanencia',
            metodologiaabc: 'Metodología ABC',
            acuerdos: 'Actas',
            coordinador: 'Evaluación de Coordinadores',
            scrum: 'Evaluación de Scrum Masters',
            logros: 'Logros del Mes'
        },
        operacional: {
            pagos: 'Seguimiento de Pagos',
            presupuesto: 'Presupuesto',
            adquisiciones: 'Adquisiciones',
            documentacion: 'Monitoreo Documentación',
            evidencia: 'Nivel de Calidad de la Evidencia'
        },
        otros: {
            edades: 'Edades',
           
        }
    };
    return titles[section]?.[type] || 'Dashboard';
}

// Manejar la navegación del navegador (botones atrás/adelante)
window.onpopstate = function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    const dashboard = urlParams.get('dashboard');

    if (section && dashboard) {
        loadDashboard(section, dashboard);
    } else {
        goToMain();
    }
};

// Inicializar la página según la URL actual
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    const dashboard = urlParams.get('dashboard');

    if (section && dashboard) {
        loadDashboard(section, dashboard);
    } else {
        goToMain();
    }

    // Agregar evento para manejar errores de carga del iframe
    const dashboardFrame = document.getElementById('dashboardFrame');
    dashboardFrame.onerror = function() {
        console.error('Error al cargar el dashboard');
        // Puedes agregar aquí lógica adicional para manejar errores
    };
};

// Función para manejar errores
function handleError(message) {
    console.error(message);
    // Puedes agregar aquí lógica adicional para mostrar errores al usuario
    // Por ejemplo, mostrar un mensaje en la interfaz
}
