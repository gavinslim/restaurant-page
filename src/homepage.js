import Ramen from './ramen.png';
import Taiwan from './taiwan-noodle.png';
import Rice from './rice-noodle.png';
import Pho from './pho.png';
import Logo from './logo.png';
import Udon from './tempura.png';
import Korean from './korean.png';

// const dish = (name) => {
//     this.name = name;
//     const price;
//     const description;

//     return {name, price, description}
// }

function create_navbar() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navbar');

    const about = document.createElement('a');
    about.classList.add('link');
    about.setAttribute('id', 'link-about');
    about.innerHTML = 'ABOUT';
    nav.appendChild(about);   

    const menu = document.createElement('a');
    menu.classList.add('link')
    menu.setAttribute('id', 'link-menu');
    menu.innerHTML = 'MENU';
    nav.appendChild(menu);

    const contact = document.createElement('a');
    contact.classList.add('link')
    contact.setAttribute('id', 'link-contact');
    contact.innerHTML = 'CONTACT';
    nav.appendChild(contact);

    return nav;
}

function create_header() {
    const content = document.getElementById('content');

    // Create header div
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    // // Add title
    // const title = document.createElement('h1');
    // title.innerHTML = 'Oodles of Noodles';
    // title.classList.add('title');
    // header.appendChild(title);

    // Add nav bar
    const navbar = create_navbar();
    header.appendChild(navbar);

    content.appendChild(header);
    return;
}

// About Section
function create_about() {

    // Get main and clear existing content
    const main = document.getElementById('main');
    main.innerHTML = '';

    // section-container
    const body = document.createElement('div');
    body.classList.add('section-container');
    
    // about-container
    const desc = document.createElement('div');
    desc.setAttribute('id', 'about-container');

    // Logo
    const logo = new Image();
    logo.src = Logo;
    logo.setAttribute('id', 'logo');
    desc.appendChild(logo);

    // Restaurant name
    const title = document.createElement('h1');
    title.setAttribute('id', 'rest-title');
    title.innerHTML = "OODLES of NOODLES";
    desc.appendChild(title);

    // Restaurant description 
    const para = document.createElement('p');
    para.setAttribute('id', 'rest-description');
    para.innerHTML = "Opened in 2016, Oodles of Noodles was born as a means to serve the wide variety of noodle dishes the asian community has to offer. From ramen to rice noodles, our dishes aim to create a sense of comfort and content to those who enjoy these simple carbs.";
    
    desc.appendChild(para);
    body.appendChild(desc);
    main.appendChild(body);
}

const create_dish = (name, price, description) => {
    const create_element = (picture) => {
        const dish = document.createElement('div');
        dish.classList.add('dish');

        // Add image
        const img = new Image();
        img.src = picture;
        img.classList.add('dish-picture');
        dish.appendChild(img);

        // Add dish name
        const dish_name = document.createElement('div');
        dish_name.classList.add('dish-name');
        dish_name.innerHTML = name;
        dish.appendChild(dish_name);

        // Add description
        const desc = document.createElement('div');
        desc.classList.add('dish-description');
        desc.innerHTML = description;
        dish.appendChild(desc);

        // Add price
        const cost = document.createElement('div');
        cost.classList.add('dish-cost');
        cost.innerHTML = price;
        dish.appendChild(cost);

        return dish;
    }

    return {name, price, description, create_element};
}

function create_menu() {

    // Get main and clear existing section
    const main = document.getElementById('main');
    main.innerHTML = '';

    // Menu container 
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Shio Ramen
    const ramen_desc = 'Pork chasu, soft-boiled egg, and ramen in a light clear broth with a side of green onions, bamboo, and seaweed';
    const ramen = create_dish('Shio Ramen', 12, ramen_desc);
    const ramen_element = ramen.create_element(Ramen);
    menu.appendChild(ramen_element);

    // Taiwanese Beef Noodle
    const beef_noodle_desc = 'Braised beef served with a rich and slightly spicy broth and '
    const beef_noodle = create_dish('Taiwanese Beef Noodle', 12, beef_noodle_desc);
    const beef_element = beef_noodle.create_element(Taiwan);
    menu.appendChild(beef_element);

    // Spicy Rice Noodle 
    const spicy_noodle_desc = 'Spicy beef broth served with rice noodle, fish cake, beansprout'
    const spicy_noodle = create_dish('Spicy Rice Noodle', 10, spicy_noodle_desc);
    const spicy_noodle_element = spicy_noodle.create_element(Rice);
    menu.appendChild(spicy_noodle_element);

    // Pho
    const pho_desc = 'Spicy beef broth served with rice noodle, fish cake, beansprout'
    const pho = create_dish('Beef Pho', 10, pho_desc);
    const pho_element = pho.create_element(Pho);
    menu.appendChild(pho_element);

    // Tempura Udon
    const udon_desc = 'Spicy beef broth served with rice noodle, fish cake, beansprout'
    const udon = create_dish('Tempura Udon', 10, udon_desc);
    const udon_element = udon.create_element(Udon);
    menu.appendChild(udon_element);

    // Korean Spicy Beef
    const korean_desc = 'Spicy beef broth served with rice noodle, fish cake, beansprout'
    const korean = create_dish('Korean Spicy Beef', 10, korean_desc);
    const korean_element = korean.create_element(Korean);
    menu.appendChild(korean_element);

    main.appendChild(menu);
}

function create_main() {
    const content = document.getElementById('content');

    // Create main div
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    // About container 
    // const about = create_about();
    // main.appendChild(about);

    // Menu container 
    // const menu = create_menu();
    // main.appendChild(menu);

    content.appendChild(main);
    return;    
}

function create_footer() {
    const content = document.getElementById('content');

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    // Copyright
    const copyright = document.createElement('div');
    copyright.innerHTML = 'Copyright © 2021 Gavin Lim';

    // Github
    const github = document.createElement('div');
    github.classList.add('github');

    const href = document.createElement('a');
    href.href = 'https://github.com/gavinslim';
    href.target = '_blank';

    const fab = document.createElement('i');
    fab.classList.add('fab', 'fa-github');
    href.appendChild(fab);
    github.appendChild(href);

    footer.appendChild(copyright);
    footer.appendChild(github);
    content.appendChild(footer);
    return;    
}


export {create_header, create_main, create_about, create_menu, create_footer};