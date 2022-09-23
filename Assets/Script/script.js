// Dropdown Navbar
const dropdown = () => {
    const element = {
        toggle: document.querySelector('.dropdown-toggle'),
        icon: document.querySelector('.dropdown-icon'),
        menu: document.querySelector('.dropdown-menu')
    }
    element.toggle.addEventListener('click', () => {
        element.icon.classList.toggle('rotate')
        element.menu.classList.toggle('active')
    })
}
// Mobile Navbar
const mobileNavbar = () => {
    const element = {
        toggler: document.querySelector('.navbar-toggle'),
        navBar: document.querySelector('nav ul'),
        navLinks: document.querySelectorAll('.nav-link')
    }
    element.toggler.addEventListener('click', () => {
        element.toggler.classList.toggle('toggle-animation')
        element.navBar.classList.toggle('navbar-slide')
        element.navLinks.forEach((link, index) => {
            if (link.style.animation)
                link.style.animation = ''
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        })
    })
}
// Mobile Searchbar
const mobileSearchBar = () => {
    const element = {
        toggler: document.querySelector('.search-toggle'),
        menu: document.querySelector('.search')
    }
    element.toggler.addEventListener('click', () => {
        element.toggler.classList.toggle('search-toggle-active')
        element.menu.classList.toggle('search-active')
    })
}

const app = () => {
    dropdown()
    mobileNavbar()
    mobileSearchBar()
}