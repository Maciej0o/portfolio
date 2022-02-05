

// const menuMobile = document.querySelector('.menu-mobile-bar');
const menuHamburger = document.querySelector('.menu-mobile__hamburger');
const menuMobile = document.querySelector('.menu-mobile-bar');
const menuMobileButton = document.querySelectorAll('.menu-mobile-bar__button');
const changeNavMobileVisibility = () => {
    menuMobile.classList.toggle('menu-active');
}
console.log(menuHamburger)
menuHamburger.addEventListener("click", changeNavMobileVisibility)
;

menuMobileButton.forEach(el => el.addEventListener('click', changeNavMobileVisibility));


