// Make navbar sticky

let navbar = document.getElementById("nav-list");
console.log(navbar.innerHTML)
alert('hey')
let sticky = navbar.offsetTop;

const stickyNavHandler = () => {
  if (window.pageYOffset >= sticky) {
    console.log('here')
    navbar.classList.add('sticky')
    // document.querySelector('body').classList.add('content')
  } else {
    console.log("There")
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function () {stickyNavHandler()};