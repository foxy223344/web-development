/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    /* linked to the html file nav code*/
/* Menu show */
/*func to check if constant exist*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    }) /*press menu icon and the nav bar should open*/
}

/* Menu hide */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    }) /*saem algo, to exit menu*/
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link') /*class navlink in html*/

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
