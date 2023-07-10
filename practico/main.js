const desktopMenu = document.querySelector('.desktop-menu');
const userEmailButton = document.querySelector('.navbar-email p');

const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenuButton = document.querySelector('nav .menu');

const shoppingCartMenu = document.querySelector('.my-order');
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCartCloseButton = document.querySelector('.shopping-cart-close-button');

const cardsContainer = document.querySelector('.main-container .cards-container')

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

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 1300,
    image: 'https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg'
});
productList.push({
    name: 'Coffee Machine',
    price: 600,
    image: 'https://images.pexels.com/photos/4050463/pexels-photo-4050463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'PS4 Controller',
    price: 100,
    image: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Headphones',
    price: 150,
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(array) {
    for (const product of array) {
        // Creamos con JS los elementos de las Product Cards
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.classList.add('product-img');
        productImage.setAttribute('src', product.image);
        productImage.setAttribute('alt', product.name);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const addToCartIcon = document.createElement('img');
        addToCartIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    
        // Insertamos dentro de cada elemento padre, sus elementos hijos
        productInfoFigure.appendChild(addToCartIcon);
    
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImage, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

for (let i = 0; i < 3; i++) {
    renderProducts(productList);
}