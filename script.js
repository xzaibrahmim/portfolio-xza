// scroll stikcy
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// click masuk menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

// click remove menu

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}