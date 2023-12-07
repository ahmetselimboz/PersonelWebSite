let body = document.querySelector("body");
let navLink = document.querySelectorAll(".nav-link");
let icon = document.querySelector("#sun");
let navLogo = document.querySelector(".nav-logo a");
let maintitleh4 = document.querySelector(".main-title-area h4");
let maintexth3 = document.querySelector(".main-text h3");
let maintexth6 = document.querySelector(".main-text h6");
let menuu = document.querySelector("#menu");
let workTitleAreaP = document.querySelector(".work-title-area p");
let workTitleAreaH5 = document.querySelector(".work-title-area h5");
let workCardTextA = document.querySelectorAll(".work-card-text a");
let workCardTextH5 = document.querySelectorAll(".work-card-text h5");

document.querySelector("#sun").addEventListener("click", () => {
  if (icon.className == "bx bx-sun") {
    icon.className = "bx bx-moon";
    body.style.backgroundColor = "var(--black)";
    body.classList.toggle("background");
    icon.style.color = "var(--white)";
    navLogo.style.color = "var(--white)";
    navLink.forEach((item) => {
      item.style.color = "var(--white)";
    });
    maintexth3.style.color = "var(--white)";
    menuu.style.color = "var(--white)";
    workTitleAreaP.style.color = "var(--gray)";
    workTitleAreaH5.style.color = "var(--white)";

    workCardTextA.forEach((item) => {
      item.style.color = "var(--white)";
    });
    workCardTextH5.forEach((item) => {
      item.style.color = "var(--white)";
    });
  } else {
    icon.className = "bx bx-sun";
    body.classList.toggle("background");
    icon.style.color = "var(--black)";
    navLogo.style.color = "var(--black)";
    navLink.forEach((item) => {
      item.style.color = "var(--black)";
    });
    maintexth3.style.color = "var(--black)";
    menuu.style.color = "var(--black)";
    workTitleAreaP.style.color = "var(--gray)";
    workTitleAreaP.style.color = "var(--white)";
   
    workCardTextA.forEach((item) => {
      item.style.color = "var(--black)";
    });
    workCardTextH5.forEach((item) => {
      item.style.color = "var(--black)";
    });
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

menu.addEventListener("click", () => {
  navPanel.classList.toggle("res-nav-toggle");
  menu.classList.toggle("res-nav-color");
  console.log(menu.className);
  if (menu.className == "bx bx-menu res-nav-color") {
    menu.className = "bx bx-x res-nav-color";
  } else {
    menu.className = "bx bx-menu";
  }
});

const ratings = document.querySelectorAll(".rating");

// Iterate over all rating items
ratings.forEach((rating) => {
  // Get content and get score as an int
  const ratingContent = rating.innerHTML;

//   var yuzdeIndex = ratingHTML.indexOf('%'); // "%" karakterinin indeksini bul
// var ratingContent = ratingHTML.slice(yuzdeIndex + 1);


  const ratingScore = parseInt(ratingContent, 10);

  // Define if the score is good, meh or bad according to its value
  const scoreClass =
    ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";

  // Add score class to the rating
  rating.classList.add(scoreClass);

  // After adding the class, get its color
  const ratingColor = window.getComputedStyle(rating).backgroundColor;

  // Define the background gradient according to the score and color
  const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

  // Set the gradient as the rating background
  rating.setAttribute("style", gradient);

  // Wrap the content in a tag to show it above the pseudo element that masks the bar
  rating.innerHTML = `<span>${ratingScore} ${
    ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
  }</span>`;
});