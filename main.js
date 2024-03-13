const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    console.log('click');
    //to Do
    // If i want to remove the desktopMenu whtn i click the cartAside
    //i need to close it in the toggleCartAside function
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    // the toggle function will remove or put the class INACTIVE DEPENDING ON ITS CURRENT STATE
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    //We have to put the same logic of the Aside Menu
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside(){
    // if my mobileMenuOpen = True, is because we dont have the class inactive
    //const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    //const isAsideOpen = !aside.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //if MobileMenu is open, we have to close it before open the Aside
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    //if product detail is open, we have to close it before open the Cart Aside
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside(){
    //to avoid open problems with the Shopping Cart
    shoppingCartContainer.classList.add('inactive');
    // we want to take off the class inactive to show the element
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    // we want to take off the class inactive to show the element
    productDetailContainer.classList.add('inactive');
}

console.log('JS working')



// We suppose that we obtain this information from the backend
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Screen',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Smartphone',
    price: 800,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

/*
for (product of productList ){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDivEmpty = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDivEmpty.appendChild(productPrice);
    productInfoDivEmpty.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    //Once we create all the elements, we need to come back in order to add each element inside the other ones

    productInfo.appendChild(productInfoDivEmpty);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    //we create the selector at the beggining since it's always the same
    cardsContainer.appendChild(productCard);
}
*/

//Putting the for inside a function, i am able to call the function when i press a button
//This is creating a layout in HTML from JS
function renderProducts(array){
    for (product of array ){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDivEmpty = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDivEmpty.appendChild(productPrice);
        productInfoDivEmpty.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        //Once we create all the elements, we need to come back in order to add each element inside the other ones
    
        productInfo.appendChild(productInfoDivEmpty);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        //we create the selector at the beggining since it's always the same
        cardsContainer.appendChild(productCard);
    }
}

// we can change the array for one coming from the backend
renderProducts(productList);