import { createHtmlElement } from './utils.js';

export function createHeader() {
    const header = document.createElement('header');
    header.appendChild(createNav());
    header.appendChild(createHero());
    return header;
}

export function createMain() {
    const main = document.createElement('main');
    const fragment = document.createDocumentFragment();
    const sections = [
        createAbout(),
        createMenu('Menu', 'We change our menu every season. Here is what we are currently dishing up.', 'images/menu.jpg'),
        createSchedule(),
        createGallery(),
        createAward(),
        createFooter()
    ];

    sections.forEach(section => {
        fragment.appendChild(section);
    });

    main.appendChild(fragment);
    return main;
}

export function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('container');
    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('burger');

    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        burgerDiv.appendChild(div);
    }
    const navbar = createNavbar();
    const sidebar = createSidebar();

    function createNavbar() {
        const row = document.createElement('div');
        row.classList.add('row');
        const navmenu = document.createElement('ul');
        navmenu.classList.add('navmenu');
        const menuItems = [{
                text: 'About',
                href: '#about'
            },
            {
                text: 'Menu',
                href: '#menu'
            },
            {
                text: 'Info',
                href: '#award'
            },
            {
                text: 'Gallery',
                href: '#gallery'
            },
        ]
        menuItems.forEach((menuItem) => {
            const li = document.createElement('li');
            li.classList.add('navmenu-item');
            const link = createHtmlElement('a', null, ['navmenu-item__link'], menuItem.text);
            link.href = menuItem.href;
            li.appendChild(link);
            navmenu.appendChild(li);
        });
        const logo = document.createElement('a'),
            logoImg = document.createElement('img');
        logo.classList.add('logo');
        logoImg.src = 'images/logo.svg';
        logoImg.addEventListener('click', () => {
            const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            history.pushState({}, document.title, baseUrl);
            location.reload();

        });
        logo.appendChild(logoImg);

        const socialLinksDiv = document.createElement('div');
        socialLinksDiv.classList.add('social-links');

        const socialLinks = [{
                src: 'images/social-1.svg',
            },
            {
                src: 'images/social-2.svg',
            },
            {
                src: 'images/social-3.svg',
            }
        ];
        socialLinks.forEach((socialLink) => {
            const a = document.createElement('a');
            a.href = '#';
            a.classList.add('social-link');

            const img = document.createElement('img');
            img.src = socialLink.src;

            a.appendChild(img);
            socialLinksDiv.appendChild(a);
        });

        row.appendChild(navmenu);
        row.appendChild(logo);
        row.appendChild(socialLinksDiv);
        row.appendChild(burgerDiv);
        return row
    }

    function createSidebar() {
        const sidebar = document.createElement('aside');
        sidebar.classList.add('sidebar');
        const sidebarTitle = createHtmlElement('p', null, ['sidebar-title'], 'Navigation');
        const sidebarMenu = document.createElement('ul');
        sidebarMenu.classList.add('navmenu', 'sidebar-links');
        const sidebarItems = [{
                text: 'About',
                href: '#about'
            },
            {
                text: 'Menu',
                href: '#menu'
            },
            {
                text: 'Info',
                href: '#schedule'
            },
            {
                text: 'Gallery',
                href: '#gallery'
            }
        ];
        sidebarItems.forEach((sidebarItem) => {
            const sidebarLink = createHtmlElement('a', null, ['navmenu-item__link'], sidebarItem.text);
            sidebarLink.href = sidebarItem.href;
            sidebarLink.addEventListener('click', () => {
                sidebar.classList.remove('active');
                document.querySelector('.overlay').style.display = 'none';
                document.querySelector('body').style.overflow = 'visible'
            });
            sidebarMenu.appendChild(sidebarLink);
        });
        const sidebarSocials = document.createElement('div');
        sidebarSocials.classList.add('social-links', 'sidebar-socials')
        const sidebarSocialLinks = [{
                src: 'images/social-1.svg',
            },
            {
                src: 'images/social-2.svg',
            },
            {
                src: 'images/social-3.svg',
            }
        ];
        sidebarSocialLinks.forEach((sidebarSocialLink) => {
            const link = document.createElement('a');
            link.classList.add('social-link');
            link.href = '#';

            const linkImg = document.createElement('img');
            linkImg.src = sidebarSocialLink.src;

            link.appendChild(linkImg);
            sidebarSocials.appendChild(link);
        });

        sidebar.appendChild(sidebarTitle);
        sidebar.appendChild(sidebarMenu);
        sidebar.appendChild(sidebarSocials);

        return sidebar;
    }

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    nav.appendChild(overlay);
    nav.appendChild(navbar);
    nav.appendChild(sidebar);
    burgerDiv.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    return nav;
}

export function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('container');
    const heroImg = document.createElement('img');
    heroImg.src = 'images/hero.jpg';

    heroContainer.appendChild(heroImg);
    hero.appendChild(heroContainer);
    return hero;
}

export function createAbout() {
    const about = document.createElement('section');
    about.id = 'about';
    const aboutTitle = createHtmlElement('h5', 'null', ['title'], 'About Us');
    const aboutText = createHtmlElement('p', 'null', ['text'], `Tucked away in the corner of Wellington, Latte Cafe is a local neighbourhood cafe
    and bar. Latte is all about doing what we love, in a city that we love. We keep stocked with local
    produce and pastries. Bring your family for a bite, or meet your friends for a coffee or warm drink.`);
    about.appendChild(aboutTitle);
    about.appendChild(aboutText);
    return about;
}

export function createMenu(title, text, imgSrc) {
    const menu = document.createElement('section');
    menu.id = 'menu';
    const container = document.createElement('div');
    container.classList.add('container');
    const row = document.createElement('div');
    row.classList.add('row');
    const left = document.createElement('div');
    left.classList.add('menu-left');
    const right = document.createElement('div');
    right.classList.add('menu-right');

    const menuTitle = createHtmlElement('h5', null, ['title'], title);
    const menuText = createHtmlElement('p', null, ['text'], text);
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const foodBtn = createHtmlElement('button', null, ['btn', 'active'], 'Food Menu');
    const drinksBtn = createHtmlElement('button', null, ['btn'], 'Drinks Menu');
    const takeawayBtn = createHtmlElement('button', null, ['btn'], 'Takeaway Menu');
    buttons.appendChild(foodBtn);
    buttons.appendChild(drinksBtn);
    buttons.appendChild(takeawayBtn);
    const menuImg = document.createElement('img');
    menuImg.src = imgSrc;
    right.appendChild(menuImg);
    left.appendChild(menuTitle);
    left.appendChild(menuText);
    left.appendChild(buttons);
    row.appendChild(left);
    row.appendChild(right);
    container.appendChild(row);
    menu.appendChild(container);
    return menu;
}

export function createSchedule() {
    const schedule = document.createElement('section');
    schedule.id = 'schedule';
    const scheduleContainer = document.createElement('div');
    scheduleContainer.classList.add('container');
    const scheduleRow = document.createElement('div');
    scheduleRow.classList.add('row');
    const scheduleData = [{
            title: 'Location',
            text: '101 Cuba St, Te Aro, Wellington'
        },
        {
            title: 'Hours',
            text: 'Tuesday to Friday 7AM - 3PM  Saturday to Sunday 8AM - 3PM'
        },
        {
            title: 'Mondays?',
            text: 'We are closed on Mondays to reflect and refuel'
        }
    ];
    scheduleData.forEach(item => {
        const scheduleContent = document.createElement('div');
        scheduleContent.classList.add('schedule-content');
        const scheduleTitle = createHtmlElement('h5', null, ['title'], item.title);
        const scheduleText = createHtmlElement('p', null, ['schedule-text'], item.text);
        scheduleContent.appendChild(scheduleTitle);
        scheduleContent.appendChild(scheduleText);
        scheduleRow.appendChild(scheduleContent);
    });
    scheduleContainer.appendChild(scheduleRow);
    schedule.appendChild(scheduleContainer);
    return schedule;
}

export function createGallery() {
    const gallery = document.createElement('section');
    gallery.id = 'gallery';
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('container');
    const galleryGrid = document.createElement('div');
    galleryGrid.classList.add('grid');
    const galleryColumn1 = document.createElement('div');
    galleryColumn1.classList.add('column-1');
    const galleryColumn2 = document.createElement('div');
    galleryColumn2.classList.add('column-2');
    const galleryImg1 = document.createElement('img');
    galleryImg1.src = 'images/grid-1.jpg';
    const galleryImg2 = document.createElement('img');
    galleryImg2.src = 'images/grid-2.jpg';
    const galleryImg3 = document.createElement('img');
    galleryImg3.src = 'images/grid-3.jpg';
    galleryColumn1.appendChild(galleryImg1);
    galleryColumn1.appendChild(galleryImg2);
    galleryColumn2.appendChild(galleryImg3);
    galleryGrid.appendChild(galleryColumn1);
    galleryGrid.appendChild(galleryColumn2);
    galleryContainer.appendChild(galleryGrid);
    gallery.appendChild(galleryContainer);

    return gallery;
}

export function createAward() {
    const award = document.createElement('section');
    award.id = 'award';
    const awardContainer = document.createElement('div');
    awardContainer.classList.add('container');
    const awardRow = document.createElement('div');
    awardRow.classList.add('row');
    const awardTitle = createHtmlElement('h2', null, ['award-heading'], 'Award winning cafe and bar.');
    const awardTextDiv = document.createElement('div');
    awardTextDiv.classList.add('award-text');
    const awardText = document.createElement('p');
    awardText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`
    awardTextDiv.appendChild(awardText);
    awardRow.appendChild(awardTitle);
    awardRow.appendChild(awardTextDiv);
    awardContainer.appendChild(awardRow);
    award.appendChild(awardContainer);

    return award
}

export function createFooter() {
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Developed by © 2023 ';
    const footerLink = document.createElement('a');
    footerLink.textContent = 'NophtCodes';
    footerText.appendChild(footerLink);
    footer.appendChild(footerText);

    return footer;
}

export function sidebarFunc() {
    const burger = document.querySelector('.burger'),
        sidebar = document.querySelector('aside'),
        overlay = document.querySelector('.overlay'),
        body = document.querySelector('body');
    burger.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
    });
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
        body.style.overflow = 'visible';
    });
}


