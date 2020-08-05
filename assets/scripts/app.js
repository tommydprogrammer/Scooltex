// Make navbar sticky

let navbar = document.getElementById("nav-list");

let sticky = navbar.offsetTop;

const stickyNavHandler = () => {
  if (window.pageYOffset >= sticky) {
    // console.log('here')
    navbar.classList.add("sticky");
    // document.querySelector('body').classList.add('content')
  } else {
    // console.log("There")
    navbar.classList.remove("sticky");
  }
};

window.onscroll = function () {
  stickyNavHandler();
};

//Carousel Logic

const indicators = document.querySelectorAll(".indicator");
const slides = document.querySelectorAll(".carousel-item");
let activeCarousel = document.querySelector(".carousel-item.active");
let activeIndicator = document.querySelector(".indicator.active");
console.log(activeCarousel);

var currentSlide = 1;
let interval

function showSlide(slideIndex, clicked) {
  if (clicked) {
    clearInterval(interval)
  }
  activeCarousel.classList.remove("active");
  activeIndicator.classList.remove("active")

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active")

  activeCarousel = slides[currentSlide];
  activeIndicator = indicators[currentSlide]

  currentSlide++;
}


window.onload = function () {
 interval = setInterval(showSlide, 3000);

  indicators.forEach((el) => {

    el.addEventListener("click", () => {

      currentSlide = el.id;
      showSlide(currentSlide, true);
    });
  });
};
