const nav = document.querySelector(".nav");
const main = document.querySelector(".main-content");
const banner = document.querySelector(".banner");
const brand = document.querySelector("#brand");
const letters = [...brand.children];
const navlinksNodeList = document.querySelectorAll(".nav-link");
const navlinks = [...navlinksNodeList];
const textRolls = document.querySelectorAll(".text-roll");
const textSlides = document.querySelectorAll(".text-slide");

const timeofday = document.querySelector("#banner-timeofday");

const Greeting = () => {
  const now = new Date();
  const hours = now.getHours();
  if (hours >= 18) {
    return `Good evening`;
  } else if (hours >= 12) {
    return `Good afternoon`;
  } else {
    return `Good morning`;
  }
};
timeofday.innerHTML = Greeting();

// // navbar only on scroll up

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   console.log("down?");

//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".nav").style.top = "0";

//   } else {
//     document.querySelector(".nav").style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// Intersection observers

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const options = {
  rootMargin: convertRemToPixels(-2.5) + "px"
};

const observer = new IntersectionObserver(function(entries, options) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scroll");
      navlinks.forEach(link => link.classList.add("nav-link-scroll"));
      letters.forEach(letter => letter.classList.add("letter-scroll"));
      console.log(convertRemToPixels(-3.5));
    } else {
      nav.classList.remove("nav-scroll");
      navlinks.forEach(link => link.classList.remove("nav-link-scroll"));
      letters.forEach(letter => letter.classList.remove("letter-scroll"));
      if (navLinkNav.classList.contains("nav-open")) {
        toggleNav();
      }
    }
  });
}, options);

observer.observe(banner);

// observer2 refreshes banner roll-in animation when scroll back to top

const observer2 = new IntersectionObserver(function(entries, options) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      textRolls.forEach(textRoll => textRoll.classList.add("text-roll"));
      textSlides.forEach(textSlide => textSlide.classList.add("text-slide"));
    } else {
      textRolls.forEach(textRoll => textRoll.classList.remove("text-roll"));
      textSlides.forEach(textSlide => textSlide.classList.remove("text-slide"));
    }
  });
}, options);

observer2.observe(banner);

// chevron animation

const arrow = document.getElementById("banner-intro3");
arrow.addEventListener("animationend", () => {
  console.log("ended");
  arrow.style.animationDelay = "0s";
  arrow.classList.contains("pulse") ? null : arrow.classList.add("pulse");
});

// Banner clock

// credit: https://codepen.io/gene7299/pen/eJeoPq

var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
hours = hours > 12 ? hours - 12 : hours;
minutes = minutes * 60 + seconds;
hours = hours * 3600 + minutes;
document
  .querySelector(".iconic-clock-second-hand")
  .setAttribute("transform", "rotate(" + 360 * (seconds / 60) + ",192,192)");
document
  .querySelector(".iconic-clock-minute-hand")
  .setAttribute("transform", "rotate(" + 360 * (minutes / 3600) + ",192,192)");
document
  .querySelector(".iconic-clock-hour-hand")
  .setAttribute("transform", "rotate(" + 360 * (hours / 43200) + ",192,192)");

// Navigation

const toggle = document.querySelector(".nav-toggle");
const navLinkNav = document.querySelector(".nav-link-nav");
// const navLinks = document.querySelectorAll(".nav-link");

const toggleNav = () => {
  navLinkNav.classList.toggle("nav-open");
  navLinkNav.classList.toggle("nav-closed");
  toggle.classList.toggle("open");
};
toggle.addEventListener("click", toggleNav);
navLinkNav.addEventListener("click", toggleNav);

//click out of nav to close
main.addEventListener("click", () => {
  if (navLinkNav.classList.contains("nav-open")) {
    toggleNav();
  }
});

// footer

const year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.innerText = thisYear;
