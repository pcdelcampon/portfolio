/**
 * Internationalization (i18n) Logic
 */

const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_projects: "Portafolio",
        nav_viz: "Viz Lab",
        nav_contact: "Contacto",
        project_back: "<< Volver al portafolio",
        project_repo_btn: "Ver en GitHub",
        proj_cluster_title: "Descubre el perfil único de cada segmento de datos",
        proj_cluster_desc: "Paquete en R que muestra qué define cada cluster o categoría; vista previa retro de la caracterización.",

        hero_greeting: "HOLA, SOY PEDRO",
        hero_title_1: "Estadístico & Científico de Datos",
        hero_title_2: "",
        hero_subtitle: "Profesional de datos que transforma información compleja en insights claros y accionables mediante visualización, modelado y narrativa basada en evidencia. Me apasiona usar datos para entender personas, sistemas y retos reales. Mi objetivo es que los hallazgos sean accesibles, significativos y útiles para tomar mejores decisiones.",
        btn_case_studies: "Ver portafolio",
        btn_talk: "Contáctame",
        btn_linkedin: "<i class=\"fa-brands fa-linkedin\"></i> LinkedIn",

        about_title: "Sobre mí",
        about_p1: "Estadístico y Científico de Datos con más de 12 años de experiencia aprovechando grandes volúmenes de datos para generar insights claros y accionables que apoyan la toma de decisiones estratégicas.",
        about_p2: "Sólida experiencia en muestreo estadístico, análisis multivariado, machine learning, modelado predictivo, big data y visualización de datos, con dominio avanzado de herramientas analíticas modernas y la adaptabilidad para trabajar eficazmente en diversas industrias y entornos analíticos.",
        about_stack: "Habilidades",
        skill_langs: "Python, R, SQL, C, C++",
        skill_ml: "Modelado predictivo, Machine Learning, IA generativa para flujos analíticos",
        skill_multivariate: "Métodos estadísticos multivariados",
        skill_biz_interp: "Interpretación de problemas de negocio; Diseño y desarrollo de métricas",
        skill_survey_impact: "Diseño muestral y estimación para encuestas; Evaluación de impacto",
        skill_data_ops: "Flujos de trabajo y canalización de datos; Automatización de reportes",
        skill_cloud: "Azure Cloud, AWS, Docker",
        skill_spss: "SPSS, SAS y Stata",
        skill_story_viz: "Narrativa analítica; Visualización de datos",
        skill_bi: "Power BI, Google Data Studio",
        skill_geo: "QGIS, ArcGIS",
        skill_tools_ide: "VSCode, Positron, Colab, JupyterLab",
        skill_tools_office: "Microsoft Office, OpenOffice",

        projects_title: "Portafolio",

        proj_1_title: "Motor de Predicción de Churn",
        proj_1_desc: "Reducción del 15% en tasa de abandono mediante análisis de supervivencia y Random Forest optimizado.",

        proj_2_title: "Estadística y Viz: Anuario de Siniestralidad Vial (2017–2022)",
        proj_2_desc: "Indicadores y visualizaciones en R/ggplot2 para los anuarios 2017–2022 de Bogotá, habilitando acciones Vision Zero.",

        proj_3_title: "Pronóstico de Demanda",
        proj_3_desc: "Modelo SARIMA para predicción de inventario retail con precisión del 92% (MAPE).",
        proj_factoclass_title: "FactoClass: dejar que los datos revelen su propia estructura",
        proj_factoclass_desc: "Trabajo temprano en Estadística: combinación factorial + clustering (Ward/K-means) inspirado en Lebart, con guía de Campo Elías Pardo.",

        viz_title: "Visualization Lab",
        viz_desc: "Zona de experimentación donde el código se encuentra con el arte. Gráficos interactivos generados con D3.js.",
        viz_placeholder: "Visualización Cargada",

        footer_title: "¿Requieres entender mejor tus datos? Conversemos",
        footer_desc: "Estoy abierto a nuevas oportunidades en Estadística, Machine Learning, Ciencia de Datos y Visualización. Si quieres preguntar algo o simplemente saludar, estaré encantado de responder.",
        footer_cta: "¡Di hola!",
        footer_copy: "&copy; 2024 Pedro C. Del Campo. Portafolio profesional... Gracias a VibeCoding por hacer este portafolio posible."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Portfolio",
        nav_viz: "Viz Lab",
        nav_contact: "Contact",
        project_back: "<< Back to portfolio",
        project_repo_btn: "View on GitHub",
        proj_cluster_title: "Uncover the unique profile of every data segment",
        proj_cluster_desc: "R package that surfaces what defines each cluster or category; retro-inspired characterization preview.",

        hero_greeting: "HELLO, I'M PEDRO",
        hero_title_1: "Data Scientist & Statistician",
        hero_title_2: "",
        hero_subtitle: "Data Worker who transforms complex data into clear, actionable insights through visualization, modeling, and evidence-based storytelling. I am passionate about using data to understand people, systems, and real-world challenges. My goal is to make insights accessible, meaningful, and useful for better decision-making.",
        btn_case_studies: "View portfolio",
        btn_talk: "Contact me",
        btn_linkedin: "<i class=\"fa-brands fa-linkedin\"></i> LinkedIn",

        about_title: "About Me",
        about_p1: "Data Scientist and Statistician with 12+ years of experience leveraging large datasets to generate clear, actionable insights that support strategic decision-making.",
        about_p2: "Strong expertise in statistical sampling, multivariate analysis, machine learning, predictive modeling, big data, and data visualization, with advanced command of modern analytical tools and the adaptability to work effectively across industries and analytical environments.",
        about_stack: "Skills",
        skill_langs: "Python, R, SQL, C, C++",
        skill_ml: "Predictive Modeling, Machine Learning, Generative AI",
        skill_multivariate: "Multivariate Statistical Methods",
        skill_biz_interp: "Business Problem Interpretation; Metric Design & Development",
        skill_survey_impact: "Survey Sample Design & Estimation; Program Impact Evaluation",
        skill_data_ops: "Data Pipelines & Workflow; Automated Reporting Pipelines",
        skill_cloud: "Azure Cloud, AWS, Docker",
        skill_spss: "SPSS, SAS & Stata",
        skill_story_viz: "Analytical Storytelling; Data Visualization",
        skill_bi: "Power BI, Google Data Studio",
        skill_geo: "QGIS, ArcGIS",
        skill_tools_ide: "VSCode, Positron, Colab, JupyterLab",
        skill_tools_office: "Microsoft Office, OpenOffice",

        projects_title: "Portfolio",

        proj_1_title: "Churn Prediction Engine",
        proj_1_desc: "15% reduction in churn rate using survival analysis and optimized Random Forest.",

        proj_2_title: "Data Science & Viz: Bogotá Road Casualty Yearbook (2017–2022)",
        proj_2_desc: "Designed indicators and ggplot2 visuals for Bogotá’s 2017–2022 road casualty yearbooks, enabling Vision Zero actions.",

        proj_3_title: "Demand Forecasting",
        proj_3_desc: "SARIMA model for retail inventory prediction with 92% accuracy (MAPE).",
        proj_factoclass_title: "FactoClass: letting data reveal their own structure",
        proj_factoclass_desc: "Early Statistics work: factorial + clustering pipeline (Ward/K-means) inspired by Lebart, guided by Campo Elías Pardo.",

        viz_title: "Visualization Lab",
        viz_desc: "Experimentation zone where code meets art. Interactive charts generated with D3.js.",
        viz_placeholder: "Visualization Loaded",

        footer_title: "Need insights from your data? Let’s talk",
        footer_desc: "I’m open to new opportunities in Statistics, Machine Learning, Data Science, and Visualization. If you’d like to ask something, or simply say hello, I’ll be happy to answer.",
        footer_cta: "Say hello!",
        footer_copy: "&copy; 2024 Pedro C. Del Campo. Professional portfolio... Thanks to VibeCoding for making this portfolio possible."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if content has HTML (simple check)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update Toggle Buttons visual state (Flags)
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Base classes for flags
    const activeClass = 'w-6 h-6 cursor-pointer transition-all hover:scale-110 shadow-lg scale-110';
    const inactiveClass = 'w-6 h-6 cursor-pointer transition-all hover:scale-110 opacity-40 grayscale hover:grayscale-0 hover:opacity-100';

    if (btnEs && btnEn) {
        btnEs.className = lang === 'es' ? activeClass : inactiveClass;
        btnEn.className = lang === 'en' ? activeClass : inactiveClass;
    }

    // Toggle content blocks that are language-specific
    document.querySelectorAll('[data-lang]').forEach(element => {
        const targetLang = element.getAttribute('data-lang');
        if (targetLang === lang) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });

    // Save preference
    localStorage.setItem('preferred_language', lang);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Always default to English on load
    setLanguage('en');

    // Add event listeners to toggles
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (btnEs) btnEs.addEventListener('click', () => setLanguage('es'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
});
