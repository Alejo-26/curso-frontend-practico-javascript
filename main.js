const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    console.log('click')
    // the toggle function will remove or put the class INACTIVE DEPENDING ON ITS CURRENT STATE
    desktopMenu.classList.toggle('inactive');
}
console.log('JS working')
