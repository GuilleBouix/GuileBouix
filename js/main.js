// Icono Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

// Scroll Section Active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Scroll Section Active
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-content, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .skills-content', { origin: 'right' });

// Toggle Language
function toggleLanguage() {
    var languageButton = document.getElementById('language');
    var logo = document.getElementById('logo');
    var home = document.getElementById('nav-home');
    var presentation = document.getElementById('presentacion');
    var skills = document.getElementById('nav-skills');
    var projects = document.getElementById('nav-projects');
    var contact = document.getElementById('nav-contact');
    var downloadCV = document.getElementById('downloadCV');
    var sendMessage = document.getElementById('sendMessage');
    
    var quicksellText = document.getElementById('quicksell-p');
    var mindappText = document.getElementById('mindapp-p');
    var tasktodoText = document.getElementById('tasktodo-p');
    var converterText = document.getElementById('converter-p');
    var translatortext = document.getElementById('translator-p');
    var calculatorText = document.getElementById('calculator-p');

    var footerText = document.getElementById('footer-text');
    var title = document.getElementById('title')

    fullName = document.getElementById('full-name');
    email = document.getElementById('email');
    mobileNumber = document.getElementById('mobile-number');
    subject = document.getElementById('subject');
    message = document.getElementById('textarea');

    if (languageButton.textContent == 'ENG') {
        languageButton.textContent = 'ESP';
        logo.textContent = 'Portafolio';
        home.textContent = 'Inicio';
        skills.textContent = 'Habilidades';
        projects.textContent = 'Proyectos';
        contact.textContent = 'Contacto';
        presentation.textContent = 'Soy desarrollador de software y web. Soy de la provincia de Misiones, Argentina. Me encanta aprender nuevas tecnologías y convertir mis ideas creativas en realidad con ellas. Aunque disfruto trabajando tanto en frontend como en backend, mi verdadera pasión está en el desarrollo backend con Python.';
        title.innerText = 'Guille Bouix | Portafolio';

        downloadCV.textContent = 'Descargar CV';
        sendMessage.value = 'Enviar Mensaje';

        fullName.setAttribute('placeholder', 'Nombre Completo');
        email.setAttribute('placeholder', 'Dirección de Correo Electrónico');
        mobileNumber.setAttribute('placeholder', 'Número de Teléfono Móvil');
        subject.setAttribute('placeholder', 'Asunto');
        message.setAttribute('placeholder', 'Tu Mensaje');

        footerText.textContent = 'Copyright © 2024 by Guillermo Bouix | Todos los Derechos Reservados.' ;

        const changeName = (id, html) => {
            document.getElementById('name').innerHTML = html;
            }
            changeName("name", "Hola, soy <span>Guille Bouix</span></h1>");

        const changeSkillsTitle = (id, html) => {
            document.getElementById('skills-heading').innerHTML = html;
            }
            changeSkillsTitle("skills-heading", "Mis <span>Habilidades</span></h1>");
        
        const changeProjectsTitle = (id, html) => {
            document.getElementById('portfolio-heading').innerHTML = html;
            }
            changeProjectsTitle("portfolio-heading", "Mis <span>Proyectos</span></h1>");

        const changeContactTitle = (id, html) => {
            document.getElementById("contact-heading").innerHTML = html;
            }
            changeContactTitle("contact-heading", "<span>Contáctame</span></h1>");

        quicksellText.textContent = 'QuickSell es un sistema de gestión de ventas y stock diseñado para satisfacer las necesidades de una amplia variedad de comerciantes y vendedores. Está dirigido a automatizar tareas relacionadas con las ventas, el registro de productos y el control de inventario.';
        mindappText.textContent = 'MindApp es una aplicación web diseñada para ejercitar y mejorar tu memoria de una manera divertida y desafiante. Esta aplicación pone a prueba tus habilidades de memorización al mostrar palabras en la pantalla durante un período de tiempo especificado.';
        tasktodoText.textContent = 'Tasks To Do! es una aplicación web que te permite gestionar eficientemente tus tareas diarias, permitiéndote anotar tus pendientes, asignarles nombres y establecer horarios o fechas para su realización.';
        converterText.textContent = 'Desktop app desarrollado para realizar la conversión de números enteros a sus equivalentes en los sistemas binario, octal y hexadecimal.';
        translatortext.textContent = 'Este proyecto es un mini traductor de palabras. Permite la fácil traducción de palabras entre español e inglés (y viceversa).';
        calculatorText.textContent = 'Calculadora digital desarrollada en Python como una aplicación de escritorio y con JavaScript como una aplicación web. Permite operaciones básicas como suma, resta, multiplicación y división.';

    } else {
        languageButton.textContent = 'ENG';
        logo.textContent = 'Portfolio';
        home.textContent = 'Home';
        skills.textContent = 'Skills';
        projects.textContent = 'Projects';
        contact.textContent = 'Contact';
        downloadCV.textContent = 'Download CV';
        sendMessage.value = 'Send Message';
        presentation.textContent = "I'm a software and web developer. I'm from the province of Misiones, Argentina. I love learning new technologies and bringing my creative ideas to life with them. While I enjoy working on both frontend and backend, my true passion lies in backend development with Python.";
        title.innerText = 'Guille Bouix | Portfolio';

        fullName.setAttribute('placeholder', 'Full Name');
        email.setAttribute('placeholder', 'Email Address');
        mobileNumber.setAttribute('placeholder', 'Mobile Number');
        subject.setAttribute('placeholder', 'Subject');
        message.setAttribute('placeholder', 'Your Message');

        const changeName = (id, html) => {
            document.getElementById('name').innerHTML = html;
            }
            changeName("name", "Hi, I'm <span>Guille Bouix</span></h1>");
        
        const changeSkillsTitle = (id, html) => {
            document.getElementById('skills-heading').innerHTML = html;
            }
            changeSkillsTitle("skills-heading", "My <span>Skills</span></h1>");

        const changeProjectsTitle = (id, html) => {
            document.getElementById('portfolio-heading').innerHTML = html;
            }
            changeProjectsTitle("portfolio-heading", "My <span>Projects</span></h1>");

        const changeContactTitle = (id, html) => {
            document.getElementById("contact-heading").innerHTML = html;
            }
            changeContactTitle("contact-heading", "Contact <span>Me</span></h1>");

        quicksellText.textContent = 'QuickSell is a sales and stock management system designed to meet the needs of a wide variety of merchants and sellers. It is aimed at automating tasks related to sales, product registration, and inventory control.';
        mindappText.textContent = 'MindApp is a web application designed to exercise and enhance your memory in a fun and challenging way. This application provides you with the opportunity to test your memorization skills by displaying words on the screen for a specified period of time.';
        tasktodoText.textContent = 'Tasks To Do! is a web application that allows you to efficiently manage your daily tasks, enabling you to jot down your to-dos, assign them names, and set schedules or dates for completion.';
        translatortext.textContent = 'This project is a mini word translator. It allows for easy translation of words between Spanish and English. The graphical interface features key elements for an intuitive user experience.';
        converterText.textContent = 'This is a project dedicated to simplifying the conversion of integer numbers to their equivalents in binary, octal, and hexadecimal systems.';
        calculatorText.textContent = 'Digital calculator developed in Python as a desktop application and with JavaScript as a web application. It allows for basic operations such as addition, subtraction, multiplication, and division.';
    
        footerText.textContent = 'Copyright © 2024 by Guillermo Bouix | All Rights Reserved.' ;

    }
}

