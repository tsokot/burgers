let burger  = document.querySelector('.burgermenu');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.dropmenu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burgermenu--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);