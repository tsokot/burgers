// let list = document.querySelector('.slider__list');
// let widthContainer = document.querySelector('.slider').clientWidth;

// function calcWidthList() {
//     const itemsCount = list.children.length;
//     const widthList = itemsCount * widthContainer; 

//     list.style.width = `${widthList}px`;

//     return widthList;
// }

// window.addEventListener('load', calcWidthList);


// const left = document.querySelector(".slider__page-prev");
// const right = document.querySelector(".slider__page-next");
// const items = document.querySelector(".slider__list");

// right.addEventListener("click", function(e) {
//   loop("right", e);
// });
 
// left.addEventListener("click", function(e) {
//   loop("left", e);
// });

// function loop(direction, e) {
//   e.preventDefault();
//   if (direction === "right") {
//     items.appendChild(items.firstElementChild);
//   } else {
//     items.insertBefore(items.lastElementChild, items.firstElementChild);
//   }
// }

let list = document.querySelector('.slider__list');
let widthContainer = document.querySelector('.slider').clientWidth;
let controls = document.querySelector('.slider__pages');
var pos = 0;

function calcWidthList() {
    const itemsCount = list.children.length;
    const widthList = itemsCount * widthContainer; 

    list.style.width = `${widthList}px`;
}

function handlerClick(event) {
  event.preventDefault();
    if (event.target.tagName === 'A') {
        slide(event.target);
    }
}

function slide(target) {
    const vector = target.dataset.vector;// prev or next

    switch (vector) {
        case 'next':
            slideTo(vector);
            break;
        case 'prev':
            slideTo(vector);
            break;
    }
}

function slideTo(vector) {
    const active = document.querySelector('.vision');

    if (vector === 'next') {
        var nextElement = active.nextElementSibling;
    } else {
        var prevElement = active.previousElementSibling;
    }

    if (nextElement) {
        pos -= widthContainer;
        active.classList.remove('vision');
        nextElement.classList.add('vision');
        translate(pos);
    } else if (prevElement) {
        pos += widthContainer;
        active.classList.remove('vision');
        prevElement.classList.add('vision');
        translate(pos);
    }
}

function translate(pos) {
    list.style.transform = `translateX(${pos}px)`;
}

controls.addEventListener('click', handlerClick);

window.addEventListener('load', calcWidthList);

