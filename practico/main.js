const desktopMenu = document.querySelector('.desktop-menu');
const userEmailButton = document.querySelector('.navbar-email p');

const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenuButton = document.querySelector('nav .menu');

userEmailButton.addEventListener('click', toggleDesktopMenu);

burgerMenuButton.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}