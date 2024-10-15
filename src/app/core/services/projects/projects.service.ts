import { Injectable } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Project[] = [
    {
      title: 'E-Commerce',
      description: 'The CUTM Result Portal is a web application designed to help students and administrators view and manage academic results efficiently. This repository contains the codebase for the portal, including frontend templates, backend logic, and database configurations.',
      image: 'assets/images/Ecommerce.PNG',
      link: 'https://ecommerce-t-kappa.vercel.app/',
      tags: ['Angular', 'Typescript', 'Tailwind', 'Api']
    },
    {
      title: 'CRUD',
      description: 'This app allows you to save, delete, and visit different websites easily. It’s a simple yet powerful CRUD application.',
      image: 'assets/images/crud.PNG',
      link: 'https://crud-theta-amber.vercel.app',
      tags: ['HTML', 'JavaScript', 'SCSS']
    },
    {
      title: 'Games',
      description: `This project using native JS with Object-Oriented Programming (OOP), allows you to Browse a variety of games and click on any game to view its detailed information, It is fully responsive and communicates with an API to fetch game data.`,
      image: 'assets/images/games.PNG',
      link: 'https://oop-theta.vercel.app',
      tags: ['OOP', 'JavaScript', 'HTML']
    },
    {
      title: 'Login System',
      description: ' it’s built entirely using native JavaScript. In this project, I dynamically created and styled the UI elements using document.createElement and appendChild methods. The design is responsive and user-friendly using Bootstrap, and I used local storage to store user’s data.',
      image: 'assets/images/loginsSystem.PNG',
      link: 'https://login-system-ecru-theta.vercel.app/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Live Weather',
      description: 'weather forecast app using native JavaScript and API integration! This app fetches real-time weather data and displays forecasts for multiple days, complete with temperatures, and conditions. It also includes a search feature to check the weather in different cities. Bootstrap was used for a clean and responsive layout.',
      image: 'assets/images/weather.PNG',
      link: 'https://yaraaamohsen.github.io/live-weather/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Todo List',
      description: 'A simple web application built with Node.js and Express to search for YouTube videos and download them in different qualities.',
      image: 'assets/images/todo.png',
      link: 'https://todo-list-jet-nine.vercel.app',
      tags: ['Angular', 'Typescript', 'Tailwind']
    },
    {
      title: 'Movie Production',
      description: 'The Fitness Tracker Application is a React-based web application designed to help users monitor their fitness activities. It features an overview of their progress, activity cards, friends list, and more, making it easy to keep track of fitness goals and stay motivated.',
      image: 'assets/images/movies.PNG',
      link: 'https://movie-production.vercel.app',
      tags: ['Angular', 'Typescript', 'SCSS']
    },
    {
      title: 'Mealify',
      description: 'This project smoothly adapts to different screen sizes while using animations to bring interactions to life. Combining responsiveness with motion adds depth to the user experience.',
      image: 'assets/images/Mealify.PNG',
      link: 'https://yaraaamohsen.github.io/mealify/',
      tags: ['HTML', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Yummy',
      description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, SCSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
      image: 'assets/images/Yummy.PNG',
      link: 'https://yummy-tau-one.vercel.app',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Transaction App',
      description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, SCSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
      image: 'assets/images/TransactionApp.PNG',
      link: 'https://yaraaamohsen.github.io/TransactionApp/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Egyption Party',
      description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, SCSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
      image: 'assets/images/EgyptionParty.PNG',
      link: 'https://yaraaamohsen.github.io/EgyptionParty/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Daniel',
      description: 'project using Bootstrap and some cool JavaScript techniques! 🎨In this project, I implemented counters, changed the navbar background color dynamically, and added smooth transitions with the hover effect. Its all about enhancing the user experience with small but impactful details.',
      image: 'assets/images/Daniel.PNG',
      link: 'https://yaraaamohsen.github.io/Daniel/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'DevFolio',
      description: 'Nep-Tasks is a user-friendly web-based Todo List application designed to help you manage your tasks efficiently. The application is built with HTML, SCSS, JavaScript, and utilizes Bootstrap for styling and FontAwesome for icons.',
      image: 'assets/images/devFolio.PNG',
      link: 'https://yaraaamohsen.github.io/DevFolio/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Grid Masterclass',
      description: 'Grid made it easy to create a clean, organized layout that adjusts to different screen sizes.',
      image: 'assets/images/grid.PNG',
      link: 'https://yaraaamohsen.github.io/grid-masterclass/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Fokir',
      description: 'A personal portfolio website built with HTML, CSS, and JavaScript, showcasing interactive animations, smooth scrolling. It features a dynamically typed introduction using Typed.js and Font Awesome icons for enhanced design',
      image: 'assets/images/Fokir.PNG',
      link: 'https://yaraaamohsen.github.io/fokir/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Bakery',
      description: 'A visually appealing static bakery website built with HTML and CSS. It showcases various bakery items with smooth scrolling effects and engaging animations, offering an intuitive browsing experience.',
      image: 'assets/images/Bakery.PNG',
      link: 'https://yaraaamohsen.github.io/Bakery/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
  ];

}
