

// const menuMobile = document.querySelector('.menu-mobile-bar');
const menuHamburger = document.querySelector('.menu-mobile__hamburger');
const menuMobile = document.querySelector('.menu-mobile-bar');
const menuMobileButton = document.querySelectorAll('.menu-mobile-bar__button');
const cardWrapperText = document.querySelectorAll('.projects__card-wrapper-text');
const cardImg = document.querySelectorAll('.projects__card-img');
const card = document.querySelectorAll('.projects__card');


const changeNavMobileVisibility = () => {
    menuMobile.classList.toggle('menu-active');
}
const changeCardImgRotate = (el) => {
    el.classList.toggle('active-card-img');
}
const changeCardTextRotate = (el) => {
    el.classList.toggle('active-card-text');
}
menuHamburger.addEventListener("click", changeNavMobileVisibility)
;

menuMobileButton.forEach(el => el.addEventListener('click', changeNavMobileVisibility));

card.forEach(el => el.addEventListener('click', function(){
    let id = this.getAttribute('id');
    let elImg = document.querySelector('.img-' + id);
    let elText = document.querySelector('.text-' + id);
    console.log(elImg)
    changeCardImgRotate(elImg);
    changeCardTextRotate(elText);
}));



