// ************SLIDER ANIMATION***************

const slides = document.querySelectorAll(".header-slider-slide");
const prev = document.querySelector(".header-slider-prevBtn");
const next = document.querySelector(".header-slider-nextBtn");
let index = 0;

prev.addEventListener("click", function () {
  prevSlide();
});

next.addEventListener("click", function () {
  nextSlide();
});

function prevSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[index].classList.remove("active");
  }

  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }

  changeSlide();
  resetTimer();
}

function nextSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[index].classList.remove("active");
  }

  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
  resetTimer();
}

function changeSlide() {
  slides[index].classList.add("active");
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 10000);
}

function autoPlay() {
  nextSlide();
}

let timer = setInterval(autoPlay, 10000);

// **************STICKY NAVBAR******************

const navBar = document.querySelector("nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  navBar.classList.toggle("sticky", window.scrollY > navHeight + 10);
});

// ****************NAVBAR ANIMATION******************

const navBtn = document.querySelector(".nav-button");
const ul = document.querySelector("ul");
const navLinks = document.querySelectorAll(".link-animation");
const navIcon = document.querySelector(".nav-icon");

navBtn.addEventListener("click", function () {
  ul.classList.toggle("show-nav");
  navLinkAnimation();
  navIcon.classList.toggle("fa-bars");
  navIcon.classList.toggle("fa-times");
});

function navLinkAnimation() {
  navLinks.forEach((navLink, index) => {
    if (navLink.style.animation) {
      navLink.style.animation = "";
    } else {
      navLink.style.animation = `navFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }

    navLink.addEventListener("click", function () {
      if (ul.classList.contains("show-nav")) {
        ul.classList.remove("show-nav");
      }

      if (navIcon.classList.contains("fa-times")) {
        navIcon.classList.remove("fa-times");
        navIcon.classList.add("fa-bars");
      }

      removeAnimation();
    });
  });
}
function removeAnimation() {
  navLinks.forEach((link) => {
    link.style.animation = "";
  });
}

// *****************PRELOADER ANIMATION******************************

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader-finish");
});

// *********************SCROLL ANIMATION**************************

const scrollLinks = document.querySelectorAll(".scroll-links");

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    let position = section.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// *********************CLIENTS SLIDER*****************************

window.addEventListener("load", function () {
  autoPlayClient();
});

function autoPlayClient() {
  changeClient();
}
setInterval(autoPlayClient, 4000);

const slideContainer = document.querySelector(".slide_img");
const slideImages = document.querySelectorAll(".slide_images");
const clientBtn = document.querySelector(".cls-tag");
let counter = 0;

const size = slideImages[0].clientWidth;

slideContainer.style.transform = "translateX(" + -size * counter + "px)";

function changeClient() {
  if (counter >= slideImages.length - 1) return;
  slideContainer.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slideContainer.style.transform = "translateX(" + -size * counter + "px)";
}

slideContainer.addEventListener("transitionend", function () {
  // if (slideImages[counter].id === "last-clone") {
  //   slideContainer.style.transition = "none";
  //   counter = slideImages.length - 2;
  //   slideContainer.style.transform = "translateX(" + -size * counter + "px)";
  // }

  if (slideImages[counter].id === "first-clone") {
    slideContainer.style.transition = "none";
    counter = slideImages.length - counter - 1;
    slideContainer.style.transform = "translateX(" + -size * counter + "px)";
  }
});
