const DOMElements = {
  nav: document.querySelector(".side-nav"),
  mobileNav: document.querySelector(".mobile-nav"),
  navIcon: document.getElementById("nav-icon"),
  closeNavBtn: document.querySelector(".close-nav-btn"),
  overlay: document.getElementById("overlay"),
  myAccountBtn: document.querySelector(".side-nav__myaccount"),
  sideNavNav: document.querySelector(".side-nav-nav"),
  myAccountNav: document.querySelector(".my-account-nav"),
  mobileNavAccount: document.querySelector(".mobile-nav__myaccount"),
  pagesNav: document.querySelector(".pages-nav"),
  closeAccountNav: document.querySelector(".close-account-nav"),
  indicators: document.querySelectorAll(".indicator"),
  slides: document.querySelectorAll(".carousel-item"),
  carouselContainer: document.querySelector(".carousel"),
  activeCarousel: document.querySelector(".carousel-item.active"),
  activeIndicator: document.querySelector(".indicator.active"),
  orderBtn: document.querySelectorAll(".order-btn"),
};

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


/********************************************/ 
/************Carousel Controller*************/
/********************************************/ 

console.log(DOMElements.activeCarousel);

var currentSlide = 1;
let interval;

function showSlide(slideIndex, clicked) {
  console.log(currentSlide);
  if (currentSlide >= DOMElements.slides.length) {
    currentSlide = 0;
    console.log("reset");
  }
  if (clicked) {
    clearInterval(interval);
  }
  DOMElements.activeCarousel.classList.remove("active");
  DOMElements.activeIndicator.classList.remove("active");

  DOMElements.slides[currentSlide].classList.add("active");
  DOMElements.indicators[currentSlide].classList.add("active");

  DOMElements.activeCarousel = DOMElements.slides[currentSlide];
  DOMElements.activeIndicator = DOMElements.indicators[currentSlide];

  currentSlide++;
}

/***************************************************/ 
/************Mobile Carousel Controller*************/
/***************************************************/ 

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      currentSlide++;

      if (currentSlide >= DOMElements.slides.length) {
        currentSlide = 0;
        console.log("reset");
      }

      DOMElements.activeCarousel.classList.remove("active");
      DOMElements.activeIndicator.classList.remove("active");
    
      DOMElements.slides[currentSlide].classList.add("active");
      DOMElements.indicators[currentSlide].classList.add("active");
    
      DOMElements.activeCarousel = DOMElements.slides[currentSlide];
      DOMElements.activeIndicator = DOMElements.indicators[currentSlide];
    
    } else {
      /* right swipe */
      currentSlide--;
      
      if (currentSlide < 0) {
        currentSlide = DOMElements.slides.length;
        console.log("reset");
      }
      DOMElements.activeCarousel.classList.remove("active");
      DOMElements.activeIndicator.classList.remove("active");
    
      DOMElements.slides[currentSlide].classList.add("active");
      DOMElements.indicators[currentSlide].classList.add("active");
    
      DOMElements.activeCarousel = DOMElements.slides[currentSlide];
      DOMElements.activeIndicator = DOMElements.indicators[currentSlide];
    
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

const navBtnHandler = () => {
  console.log(DOMElements.nav);
  DOMElements.nav.classList.add("display-nav");
  DOMElements.navIcon.style.display = "none";
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
};

const closeNavBtnHandler = () => {
  DOMElements.nav.classList.remove("display-nav");
  DOMElements.navIcon.style.display = "flex";
  DOMElements.overlay.style.position = "static";
  DOMElements.overlay.style.display = "none";
  closeAccountNavHandler();
};

const myAccountBtnHandler = () => {
  console.log(DOMElements.sideNavNav);
  DOMElements.sideNavNav.style.display = "none";
  DOMElements.myAccountNav.classList.add("open-account-nav");
  DOMElements.nav.style.height = "28rem";
};

const closeAccountNavHandler = () => {
  console.log("here2");
  if (DOMElements.mobileNav.contains(DOMElements.myAccountNav)) {
    DOMElements.mobileNav.replaceChild(
      DOMElements.pagesNav,
      DOMElements.myAccountNav
    );
    return;
  }
  DOMElements.sideNavNav.style.display = "block";
  DOMElements.myAccountNav.classList.remove("open-account-nav");
  DOMElements.nav.style.height = "21rem";
};

const mobileNavHandler = () => {
  DOMElements.mobileNav.style.display = "block";
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
};

const closeMobileNavHandler = () => {
  // conssole.log("th")
  DOMElements.mobileNav.style.display = "none";
  DOMElements.overlay.style.position = "static";
  DOMElements.overlay.style.display = "none";
};

const closeOverlayHandler = () => {
  closeMobileNavHandler();
  closeNavBtnHandler();

  if (document.body.contains(document.querySelector("#order"))) {
    closeOrderPopup();
  }
};

myMobileAccountBtnHandler = () => {
  DOMElements.mobileNav.replaceChild(
    DOMElements.myAccountNav,
    DOMElements.pagesNav
  );
  DOMElements.myAccountNav.classList.add("mobile-my-account-nav");
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
};

DOMElements.navIcon.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 780px)").matches) {
    mobileNavHandler();
    console.log("here");
  } else {
    navBtnHandler();
  }
});

// Order button handler
const orderBtnHandler = (btn) => {
  console.log(btn);
  console.log("clicked");

  const src = {
    signup: DOMElements.nav
      .querySelector(".side-nav__register")
      .getAttribute("href"),
    login: DOMElements.nav
      .querySelector(".side-nav__login")
      .getAttribute("href"),
  };

  console.log(src.signup, src.login);
  const orderElement = `
    <div id="order">
      <div class="logo">
          <div class="brand-logo"></div>
          <p>Now TV</p>
      </div>
      <div class="offer">
          <p class="order-text__black">15% OFF</p>
          <p class="limited-offer">Limited offer</p>
      </div>
      <div class="block-access">
          <div class="block"></div>
          <p>You need to <a href=${src.login}>login</a> to redeem this code.</p>
          <hr>
          <p class="order-text__black">Don't have account</p>
          <p>You need to become <span class="pro">PRO</span> to redeem this code.</p>
          <a class="cta" href=${src.signup}>Join Scooltec now</a>
      </div>
      <div class="allow-access">
          <p class="discount-code">SC-5876-5874-L</p>
          <p>Copy the code and paste at check out</p>
          <a class="cta" href="#">Go to website</a>
      </div>
    </div>
  `;
  DOMElements.overlay.style.position = "fixed";
  DOMElements.overlay.style.display = "block";
  console.log(btn.closest("section"));

  document.body.insertAdjacentHTML("afterbegin", orderElement);
  const order = document.querySelector("a.cta");
  order.addEventListener("click", () => {
    closeOrderPopup();
  });
};

const closeOrderPopup = () => {
  document.querySelector("#order").remove();
  DOMElements.overlay.style.position = "static";
  DOMElements.overlay.style.display = "block";
};

window.onload = function () {
  interval = setInterval(showSlide, 3000);

  DOMElements.indicators.forEach((el) => {
    el.addEventListener("click", () => {
      currentSlide = el.id;
      showSlide(currentSlide, true);
    });
  });
};

DOMElements.carouselContainer.addEventListener(
  "touchstart",
  handleTouchStart,
  false
);
DOMElements.carouselContainer.addEventListener(
  "touchmove",
  handleTouchMove,
  false
);
DOMElements.closeNavBtn.addEventListener("click", closeNavBtnHandler);
DOMElements.overlay.addEventListener("click", closeOverlayHandler);
DOMElements.myAccountBtn.addEventListener("click", myAccountBtnHandler);
DOMElements.closeAccountNav.addEventListener("click", closeAccountNavHandler);
DOMElements.mobileNavAccount.addEventListener(
  "click",
  myMobileAccountBtnHandler
);
DOMElements.orderBtn.forEach((btn) =>
  btn.addEventListener("click", orderBtnHandler.bind(null, btn))
);
