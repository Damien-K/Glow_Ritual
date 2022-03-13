const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const item = document.querySelector(".carousel-slide");
const cardclick = document.querySelectorAll(".product-card");


// click to go to product page

document.querySelectorAll(".product-card").forEach(elem => elem.addEventListener("click",
 () => {
    window.location.href = "backend/product.html";
  }));



// cardclick.addEventListener('click', () => {

// window.location.href = "backend/product.html"

    // if (counter >= carouselImages.length - 1) {
    //     return;
    // }

    // carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // counter++;
    // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });












//counter 
let counter = 1
const size = carouselImages[0].clientWidth;
console.log(size)
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button liteners

nextBtn.addEventListener('click', () => {

    if (counter >= carouselImages.length - 1) {
        return;
    }

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});

prevBtn.addEventListener("mouseover", ()=>{

    console.log('ssup')
    item.classList.remove("marquee");

}) ;

nextBtn.addEventListener("mouseover", ()=>{

    console.log('ssup')
    item.classList.remove("marquee");

}) ;


item.addEventListener("mouseover", ()=>{

    console.log('ssup')
    item.classList.remove("marquee");

}) ;
item.addEventListener("mouseout", ()=>{

    console.log('ssup')
    item.classList.add("marquee");

}) ;
// function func()
// {  // not needed since item is already global, 
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button"); 
  
// }

// function func1()
// {  
//     item.element.classList.add("marquee");
// }



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})







//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
//     setInterval(function () {
//         var size = randomValue(sArray);
//         $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
//         $('.individual-bubble').animate({
//             'bottom': '100%',
//             'opacity': '-=0.7'
//         }, 4000, function () {
//             $(this).remove()
//         });
//     }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});





