import {create_header, create_main, create_about, create_menu, create_footer} from './homepage.js';
import './style.css';


create_header();
create_main();
create_footer();

const about = document.getElementById('link-about');
about.addEventListener('click', create_about);
// about.click();

const menu = document.getElementById('link-menu');
menu.addEventListener('click', create_menu);
menu.click();

const contact = document.getElementById('link-contact');
contact.addEventListener('click', console.log('hello'));

// const parent = document.getElementById('content');
// const element = document.createElement('div');
// element.innerHTML = 'Oodles of Nodlees';
// element.classList.add('hello');

// parent.appendChild(element);