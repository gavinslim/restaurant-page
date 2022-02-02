import {create_header, create_main, create_about, create_menu, create_contact, create_footer} from './homepage.js';
import './style.css';

create_header();
create_main();
create_footer();

const about = document.getElementById('link-about');
about.addEventListener('click', create_about);
about.click();

const menu = document.getElementById('link-menu');
menu.addEventListener('click', create_menu);

const contact = document.getElementById('link-contact');
contact.addEventListener('click', create_contact);
