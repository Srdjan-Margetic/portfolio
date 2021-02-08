"use strict";

const mainInfo = document.querySelector(".move-info");
const navLinks = document.querySelectorAll(".navigation__list li");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation__list");
const svg = document.querySelectorAll(".svg_heading path");
const projects = document.querySelector(".company__projects");
const projectsTitle = document.querySelector(".company__projects h2");
console.log(projectsTitle);
const projectsUl = document.querySelector(".company_projects-list");
const projectsList = document.querySelectorAll(".company__projects-list li");

document.addEventListener("DOMContentLoaded", () => {
  function resize() {
    if (window.innerWidth > 768 && nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      mainInfo.classList.remove("move-left");
      burger.classList.remove("toggle");
      burgerMenuLoad();
    }
  }
  window.onresize = resize;
});

const navBurger = () => {
  burger.addEventListener("click", () => {
    //Toggle navigation
    nav.classList.toggle("nav-active");
    mainInfo.classList.toggle("move-left");

    if (nav.classList.contains("nav-active") === false) {
      nav.style.transition = "0.5s ease-out";
      setTimeout(() => {
        nav.style.transition = "";
      }, 500);
    }

    //Animate Burger menu
    burgerMenuLoad();
    // Burget Animation
    burger.classList.toggle("toggle");
  });
};

//Animate Burger menu
function burgerMenuLoad() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navigationFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
}

navBurger();

// Load About me title
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < svg.length; i++) {
    svg[i].style.animation = `svg-animation 2s ease forwards ${i / 7 + 0.3}s`;

    setTimeout(() => {
      svg[i].style.animation = `svg-fill-white 1s ease forwards`;
      svg[i].style.strokeDasharray = "none";
    }, 3670);
  }
});

// Change background on hover
projectsList.forEach((el) => {
  el.addEventListener("mouseover", () => {
    let bg = el.getAttribute("data-bg");
    let bgTitle = el.textContent;
    console.log(bgTitle);
    projects.style.background = `url(../../img/projects/${bg}) no-repeat center /cover`;

    console.log(projectsTitle);
    projectsTitle.textContent = bgTitle;
    projectsTitle.style.color = " #08fdd7";

    // projectsTitle = bgTitle;
  });

  el.addEventListener("mouseout", () => {
    projects.style.background = `url(../../img/office.jpg) no-repeat center /cover`;
    projectsTitle.textContent = "Company Projects";
    projectsTitle.style.color = "#fff";
  });
});
