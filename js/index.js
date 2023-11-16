let body = document.querySelector("body");
let navLink = document.querySelectorAll(".nav-link");
let icon = document.querySelector(".nav-mode i");
let navLogo = document.querySelector(".nav-logo a");
let maintitleh4 = document.querySelector(".main-title-area h4");
let maintexth3 = document.querySelector(".main-text h3");
let maintexth6 = document.querySelector(".main-text h6");

document.querySelector(".nav-mode").addEventListener("click", () => {
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
