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

    // Add description
    const desc = document.createElement('div');
    desc.classList.add('description');

    const para = document.createElement('p');
    para.innerHTML = "Here at Oodles, we understand that instant noodles is a staple diet for everyone!";
    desc.appendChild(para);
    header.appendChild(desc);

    content.appendChild(header);
    return;
}

function create_main() {
    const content = document.getElementById('content');

    // Create main div
    const main = document.createElement('div');
    main.setAttribute('id', 'main');




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