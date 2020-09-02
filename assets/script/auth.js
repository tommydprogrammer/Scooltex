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
//   indicators: document.querySelectorAll(".indicator"),
//   slides: document.querySelectorAll(".carousel-item"),
//   carouselContainer: document.querySelector(".carousel"),
//   activeCarousel: document.querySelector(".carousel-item.active"),
//   activeIndicator: document.querySelector(".indicator.active"),
//   orderBtn: document.querySelectorAll(".order-btn"),
};

const navBtnHandler = () => {
  console.log(DOMElements.nav);
  DOMElements.nav.classList.add("display-nav");
  DOMElements.navIcon.style.display = "none";
  DOMElements.overlay.style.position = "fixed";
};

const closeNavBtnHandler = () => {
  DOMElements.nav.classList.remove("display-nav");
  DOMElements.navIcon.style.display = "flex";
  DOMElements.overlay.style.position = "static";
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
};

const closeMobileNavHandler = () => {
  // conssole.log("th")
  DOMElements.mobileNav.style.display = "none";
  DOMElements.overlay.style.position = "static";
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
};

DOMElements.navIcon.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 780px)").matches) {
    mobileNavHandler();
    console.log("here");
  } else {
    navBtnHandler();
  }
});

DOMElements.closeNavBtn.addEventListener("click", closeNavBtnHandler);
DOMElements.overlay.addEventListener("click", closeOverlayHandler);
DOMElements.myAccountBtn.addEventListener("click", myAccountBtnHandler);
DOMElements.closeAccountNav.addEventListener("click", closeAccountNavHandler);
DOMElements.mobileNavAccount.addEventListener(
  "click",
  myMobileAccountBtnHandler
);
// DOMElements.orderBtn.forEach((btn) =>
//   btn.addEventListener("click", orderBtnHandler.bind(null, btn))
// );

// Get name of file uploaded and render it in the DOM
let fileInput = document.querySelectorAll(".upload");
console.log(fileInput);
fileInput.forEach((el) => {
  console.log(el);
  el.onchange = () => {
    if (el.files.length > 0) {
      const fileName = el.parentNode.querySelector(".file-name");
      fileName.textContent = el.files[0].name;
      fileName.classList.add("show-file-name");
      console.log(fileName);
    }
  };
});

const fileName = fileInput[0].parentNode.querySelector(".file-name");
console.log(fileName);
