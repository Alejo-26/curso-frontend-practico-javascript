const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);


function toggleDesktopMenu(){
    console.log('click');
    //to Do
    // If i want to remove the desktopMenu whtn i click the cartAside
    //i need to close it in the toggleCartAside function
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    // the toggle function will remove or put the class INACTIVE DEPENDING ON ITS CURRENT STATE
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    //We have to put the same logic of the Aside Menu
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

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
    aside.classList.toggle('inactive');

}

console.log('JS working')
