let mode = document.querySelector(".nav-mode");
let body = document.querySelector("body");
let navLink = document.querySelectorAll(".nav-link");
let icon = document.querySelector(".nav-mode i");
let navLogo = document.querySelector(".nav-logo a");

mode.addEventListener("click", ()=>{
    if(icon.className == "bx bx-sun"){
        icon.className = "bx bx-moon";
        body.style.backgroundColor = "var(--black)";
        icon.style.color = "var(--white)";
        navLogo.style.color = "var(--white)";
        navLink.forEach(item=>{
            item.style.color = "var(--white)";
        })
        
    }
    else{
        icon.className = "bx bx-sun";
        body.style.backgroundColor = "var(--white)"
        icon.style.color = "var(--black)";
        navLogo.style.color = "var(--black)";
        navLink.forEach(item=>{
            item.style.color = "var(--black)";
        })
    }
})


