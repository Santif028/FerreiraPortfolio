import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      translation: {
        greeting: 'Hola, me llamo',
        name: 'Santiago Ferreira',
        profession: 'y soy Desarrollador Web.',
        home: 'INICIO',
        about: 'ACERCA DE MÍ',
        projects: 'PROYECTOS',
        skills: 'APTITUDES',
        contact: 'CONTACTO',
        skillsDescription: 'Tecnologías con las que trabajo',
        aboutDescription:
          'Mi nombre es Santiago Uriel Ferreira y soy de Argentina. Soy desarrollador web Full-Stack, me apasionan tanto la música como la mecánica y estoy siempre expectante sobre lo que puede venir, las nuevas tecnologías que puedo aprender y cómo puedo mejorar mis códigos.',
        downloadCV: 'Descargar CV',
        selectProject: 'Seleccione un Proyecto para visualizar los Detalles',
        year: 'Año',
        tags: 'Etiquetas',
        deploy: 'Deploy',
        projectDescriptions: {
          'Nocaut': 'Primer proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse a finales de junio 2022. Es una página web con 5 htmls, un formulario de contacto, donde use SASS para compilar mi CSS y Bootstrap para lograr el navbar. También considerado mi primer proyecto.',
          'Space Invaders based game': 'Segundo proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse a finales de septiembre 2022. Este proyecto es una interpretación mía de Space Invaders echa en Javascript puro, donde utilizo manipulación de DOM, clases, operadores lógicos, ciclos for, y también particlesJS para lograr el fondo.',
          'React.js Ecommerce': 'Tercer proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse a finales de noviembre 2022. Frontend diseñado en React.js para un ecommerce, con base de datos montada en Firebase, utilice Sweet Alert 2 y Material UI para llegar al resultado final.',
          'Express.js Ecommerce Backend': 'Último proyecto final que terminé para el curso de desarrollo Full-Stack de Coderhouse en agosto 2023. API Rest realizada para un ECommerce con Express.js, donde hago uso de Passport, Mongoose, Handlebars para el server side rendering, Bcrypt, Faker, Stripe para la pasarela de pago y Swagger para documentar mi API.',
        },
        formName: 'Nombre',
        formEmail: 'Correo electrónico',
        formWebsite: 'Sitio web',
        formMessage: 'Mensaje',
        alertError: 'Se produjo un error al procesar la solicitud',
        swalButton: 'Aceptar',
        swalText: '¡La solicitud se ha completado correctamente!',
        swalTitle: 'Éxito',
        spanish: 'Español',
        english: 'Inglés',
      },
    },
    en: {
      translation: {
        greeting: 'Hello, my name is',
        name: 'Santiago Ferreira',
        profession: 'and I am a Web Developer.',
        home: 'HOME',
        about: 'ABOUT ME',
        projects: 'PROJECTS',
        skills: 'SKILLS',
        contact: 'CONTACT',
        skillsDescription: 'Technologies I work with',
        aboutDescription:
          'My name is Santiago Uriel Ferreira and I am from Argentina. I am a Full-Stack web developer, passionate about both music and mechanics, and always eager to learn new technologies and improve my code.',
        downloadCV: 'Download CV',
        selectProject: 'Select a Project to View Details',
        year: 'Year',
        tags: 'Tags',
        deploy: 'Deploy',
        "projectDescriptions": {
          "Nocaut": "First final project I completed for the Coderhouse Full-Stack development course in late June 2022. It is a website with 5 HTML pages, a contact form, where I used SASS to compile my CSS and Bootstrap to achieve the navbar. Also considered my first project.",
          "Space Invaders based game": "Second final project I completed for the Coderhouse Full-Stack development course in late September 2022. This project is my interpretation of Space Invaders made in pure Javascript, where I use DOM manipulation, classes, logical operators, FOR loops, and also particlesJS to achieve the background.",
          "React.js Ecommerce": "Third final project I completed for the Coderhouse Full-Stack development course in late November 2022. Frontend designed in React.js for an ecommerce, with a database hosted on Firebase, I used Sweet Alert 2 and Material UI to achieve the final result.",
          "Express.js Ecommerce Backend": "Last final project I completed for the Coderhouse Full-Stack development course in August 2023. Rest API made for an ECommerce with Express.js, where I use Passport, Mongoose, Handlebars for server-side rendering, Bcrypt, Faker, Stripe for payment gateway, and Swagger to document my API."
        },
        formName: 'Name',
        formEmail: 'E-Mail',
        formWebsite: 'Website',
        formMessage: 'Message',
        alertError: 'An error occurred while processing the request',
        swalButton: 'Accept',
        swalText: 'The request has been completed successfully!',
        swalTitle: 'Success',
        spanish: 'Spanish',
        english: 'English',
      },
    },
  },
});

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
