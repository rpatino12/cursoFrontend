const desktopMenu = document.querySelector('.desktop-menu');
const userEmailButton = document.querySelector('.navbar-email p');

userEmailButton.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}