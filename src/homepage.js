import Ramen from './ramen.png';
import Taiwan from './taiwan-noodle.png';
import Rice from './rice-noodle.png';

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
    about.innerHTML = 'About';
    nav.appendChild(about);   

    const menu = document.createElement('a');
    menu.classList.add('link')
    menu.innerHTML = 'Menu';
    nav.appendChild(menu);

    const contact = document.createElement('a');
    contact.classList.add('link')
    contact.innerHTML = 'Contact';
    nav.appendChild(contact);

    return nav;
}

function create_header() {
    const content = document.getElementById('content');

    // Create header div
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    // Add title
    const title = document.createElement('h1');
    title.innerHTML = 'Oodles of Noodles';
    title.classList.add('title');
    header.appendChild(title);

    // Add nav bar
    const navbar = create_navbar();
    header.appendChild(navbar);

    content.appendChild(header);
    return;
}

function create_about() {
    // About Section
    const desc = document.createElement('div');
    desc.classList.add('description');

    const para = document.createElement('p');
    para.innerHTML = "Noodle is love, noodle is life";
    desc.appendChild(para);
    // header.appendChild(desc);

    return desc;
}

const create_dish = (name, price) => {
    var description = '';

    const create_element = (picture) => {
        const dish = document.createElement('div');
        dish.classList.add('dish');

        // Add image
        const img = new Image();
        img.src = picture;
        img.classList.add('picture');
        dish.appendChild(img);

        // Add price
        const cost = document.createElement('div');
        cost.innerHTML = price;
        dish.appendChild(cost);

        return dish;
    }

    return {name, price, create_element};
}

const food = (picture) => {
    const temp = new Image();
    temp.src = picture;
    temp.classList.add('picture');
    return temp;
}

function create_menu() {
    // Menu container 
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const ramen = create_dish('Ramen', 10.29);
    const ramen_element = ramen.create_element(Ramen);
    menu.appendChild(ramen_element);

    // const taiwan = food(Taiwan);
    // menu.appendChild(taiwan);

    // const rice = dish(Rice);
    // menu.appendChild(rice);
    
    return menu;
}

function create_main() {
    const content = document.getElementById('content');

    // Create main div
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    // Menu container 
    const menu = create_menu();
    main.appendChild(menu);

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


export {create_header, create_main, create_footer};