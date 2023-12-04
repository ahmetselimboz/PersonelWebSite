let body = document.querySelector("body");
let navLink = document.querySelectorAll(".nav-link");
let icon = document.querySelector("#sun");
let navLogo = document.querySelector(".nav-logo a");
let maintitleh4 = document.querySelector(".main-title-area h4");
let maintexth3 = document.querySelector(".main-text h3");
let maintexth6 = document.querySelector(".main-text h6");

document.querySelector("#sun").addEventListener("click", () => {
  if (icon.className == "bx bx-sun") {
    icon.className = "bx bx-moon";
    body.style.backgroundColor = "var(--black)";
    icon.style.color = "var(--white)";
    navLogo.style.color = "var(--white)";
    navLink.forEach((item) => {
      item.style.color = "var(--white)";
    });
    maintitleh4.style.webkitTextStrokeColor = "var(--white)";
    maintexth3.style.color = "var(--white)";
    maintexth6.style.color = "var(--white)";
  } else {
    icon.className = "bx bx-sun";
    body.style.backgroundColor = "var(--white)";
    icon.style.color = "var(--black)";
    navLogo.style.color = "var(--black)";
    navLink.forEach((item) => {
      item.style.color = "var(--black)";
    });
    maintitleh4.style.webkitTextStrokeColor = "var(--black)";
    maintexth3.style.color = "var(--black)";
    maintexth6.style.color = "var(--black)";
  }
});


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});


const menu = document.querySelector("#menu");
const navPanel = document.querySelector(".res-nav-panel");

menu.addEventListener("click", ()=>{
  navPanel.classList.toggle("res-nav-toggle");
})


