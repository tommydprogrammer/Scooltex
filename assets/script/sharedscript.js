// progress Bar 
$(document).ready(function(){
  $({property: 0}).animate({property: 105}, {
    duration: 2500,
    step: function() {
      var _percent = Math.round(this.property);
      $("#progress").css("width",  _percent+"%");
      if(_percent == 105) {
        $("#progress").addClass("done");
      }
    },
  });
});


// Make navbar sticky

let navbar = document.getElementById("nav-list");

const navbarHeight = 126;

const stickyNavHandler = () => {
  if (window.pageYOffset >= navbarHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

window.onscroll = function () {
  stickyNavHandler();
};

//Carousel Logic
const carousel = {
  indicators: document.querySelectorAll(".indicator"),
  slides: document.querySelectorAll(".carousel-item"),
  activeCarousel: document.querySelector(".carousel-item.active"),
  activeIndicator: document.querySelector(".indicator.active"),
};
console.log(carousel.activeCarousel);

var currentSlide = 1;
let interval;

function showSlide(slideIndex, clicked) {
  console.log(currentSlide);
  if (currentSlide >= carousel.slides.length) {
    currentSlide = 0;
    console.log("reset");
  }
  if (clicked) {
    clearInterval(interval);
  }
  carousel.activeCarousel.classList.remove("active");
  carousel.activeIndicator.classList.remove("active");

  carousel.slides[currentSlide].classList.add("active");
  carousel.indicators[currentSlide].classList.add("active");

  carousel.activeCarousel = carousel.slides[currentSlide];
  carousel.activeIndicator = carousel.indicators[currentSlide];

  currentSlide++;
}

window.onload = function () {
  interval = setInterval(showSlide, 3000);

  carousel.indicators.forEach((el) => {
    el.addEventListener("click", () => {
      currentSlide = el.id;
      showSlide(currentSlide, true);
    });
  });
};

// Side navigation bar handler
const sidenav = {
  nav: document.querySelector(".side-nav"),
  mobileNav: document.querySelector('.mobile-nav'),
  navIcon: document.getElementById("nav-icon"),
  closeNavBtn: document.querySelector(".close-nav-btn"),
  overlay: document.getElementById("overlay"),
  myAccountBtn: document.querySelector(".side-nav__myaccount"),
  sideNavNav: document.querySelector(".side-nav-nav"),
  myAccountNav: document.querySelector(".my-account-nav"),
  mobileNavAccount: document.querySelector(".mobile-nav__myaccount"),
  pagesNav: document.querySelector(".pages-nav"),
  closeAccountNav: document.querySelector('.close-account-nav')
};

// console.log(sidenav.name)

const navBtnHandler = () => {
  console.log(sidenav.nav);
  sidenav.nav.classList.add("display-nav");
  sidenav.navIcon.style.display = "none";
  sidenav.overlay.style.position = "fixed";
};

const closeNavBtnHandler = () => {
  sidenav.nav.classList.remove("display-nav");
  sidenav.navIcon.style.display = "flex";
  sidenav.overlay.style.position = "static";
  closeAccountNavHandler()
};

const myAccountBtnHandler = () => {
  console.log(sidenav.sideNavNav)
  sidenav.sideNavNav.style.display = 'none';
  sidenav.myAccountNav.classList.add('open-account-nav')
  sidenav.nav.style.height = '28rem'
}

const closeAccountNavHandler = () => {
    console.log('here2');
    if (sidenav.mobileNav.contains(sidenav.myAccountNav)) {
      sidenav.mobileNav.replaceChild(sidenav.pagesNav, sidenav.myAccountNav);
      return
    }
    sidenav.sideNavNav.style.display = 'block';
    sidenav.myAccountNav.classList.remove('open-account-nav')
    sidenav.nav.style.height = '21rem'
}

const mobileNavHandler = () => {
  sidenav.mobileNav.style.display = 'block';
  sidenav.overlay.style.position = 'fixed';
}

const closeMobileNavHandler = () => {
  console.log("th")
  sidenav.mobileNav.style.display = 'none';
  sidenav.overlay.style.position = 'static';
} 

const closeOverlayHandler = () => {
  closeMobileNavHandler();
  closeNavBtnHandler();
}

myMobileAccountBtnHandler = () => {
  sidenav.mobileNav.replaceChild(sidenav.myAccountNav, sidenav.pagesNav)
  // sidenav.pagesNav.replaceWith(sidenav.myAccountNav)
  sidenav.myAccountNav.classList.add('mobile-my-account-nav')
  sidenav.overlay.style.position = 'fixed';
}

sidenav.navIcon.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 780px)").matches) {
    mobileNavHandler()
    console.log('here')
  } else {
    navBtnHandler()
  }

});
sidenav.closeNavBtn.addEventListener("click", closeNavBtnHandler);
sidenav.overlay.addEventListener("click", closeOverlayHandler);
sidenav.myAccountBtn.addEventListener("click", myAccountBtnHandler);
sidenav.closeAccountNav.addEventListener('click', closeAccountNavHandler)
sidenav.mobileNavAccount.addEventListener('click', myMobileAccountBtnHandler)