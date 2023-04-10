gsap.from('.nav_link', { duration: 2, delay: 1.4, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('.pizza-picture', { duration: 1, delay: 1, x: '-100vw', ease: 'power2.in', opacity: 0 })
gsap.from('#pasta', { duration: 1.5 , delay: 1.5, x: '-80vw', ease: 'power2.in', opacity: 1 })
gsap.fromTo('.logo', { opacity: 0, scale: 0, rotation: 120 }, { duration: 1, delay: 1.5, opacity: 1, scale: 1, rotation: 0 })
gsap.from('.about', { duration: 6, delay: 1.4, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('.pizza_delivery_boy', { duration: 6, delay: 2.0, x: '-100vw', ease: 'power2.in', opacity: 0 })
gsap.from('.card-text', { duration: 7, delay: 1.4, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('.card-price', { duration: 8, delay: 2.4, y: '10vw', ease: 'power2.in', opacity: 0 })


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#hamburger_menu, .nav_menu");
const section = document.querySelector("section");



hamburger.addEventListener("click", onClickMenu);
    

function onClickMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    section.classList.toggle("active");

}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





