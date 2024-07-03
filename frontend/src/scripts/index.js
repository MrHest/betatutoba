// frontend/src/scripts/index.js
import '../styles/style.css';
import '../styles/responsive.css';
import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});


// Pastikan tidak ada impor dari backend
// import pool from '../../backend/src/configs/database'; // Jangan lakukan ini


// import 'regenerator-runtime';
// import '../styles/style.css';
// import '../styles/responsive.css';
// import App from './views/app'; 

// const app = new App({
//     button: document.querySelector('#hamburgerButton'),
//     drawer: document.querySelector('#navigationDrawer'),
//     content: document.querySelector('#mainContent'),
//   });

//   window.addEventListener('hashchange', () => {
//     app.renderPage();
//   });
   
//   window.addEventListener('load', () => {
//     app.renderPage();
//   });
