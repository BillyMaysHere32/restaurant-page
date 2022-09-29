import { initializeWebsite } from './homepage.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

initializeWebsite();

let switchTabModule = (function() {

    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', initializeWebsite);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);

})();