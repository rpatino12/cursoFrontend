const desktopMenu = document.querySelector('.desktop-menu');
const userEmailButton = document.querySelector('.navbar-email p');

const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenuButton = document.querySelector('nav .menu');

const shoppingCartMenu = document.querySelector('.my-order');
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCartCloseButton = document.querySelector('.shopping-cart-close-button');

userEmailButton.addEventListener('click', toggleDesktopMenu);

burgerMenuButton.addEventListener('click', toggleMobileMenu);

shoppingCartButton.addEventListener('click', toggleShoppingCartMenu);
shoppingCartCloseButton.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
    const isShoppingCartMenuOpen = !shoppingCartMenu.classList.contains('inactive');

    if (isShoppingCartMenuOpen) {
        shoppingCartMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartMenuOpen = !shoppingCartMenu.classList.contains('inactive');

    if (isShoppingCartMenuOpen) {
        shoppingCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive');
}