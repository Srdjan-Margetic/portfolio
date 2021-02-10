"use strict";

const mainInfo = document.querySelector(".move-info");
const navLinks = document.querySelectorAll(".navigation__list li");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation__list");
const svg = document.querySelectorAll(".svg_heading path");
const projectsCompany = document.querySelector(".company__projects");
const projectsPersonal = document.querySelector(".personal__projects");
const projectsTitleCompany = document.querySelector(".company__projects h2");
const projectsTitlePersonal = document.querySelector(".personal__projects h2");
const projectsUlCompany = document.querySelector(".company_projects-list");
const projectsUlPersonal = document.querySelector(".personal_projects-list");
const projectsListCompany = document.querySelectorAll(".company__projects-list li");
const projectsListPersonal = document.querySelectorAll(".personal__projects-list li");

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

// Load About me/Projects title
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
projectsListCompany.forEach((el) => {
  el.addEventListener("mouseover", () => {
    let bgCompany = el.getAttribute("data-companyBg");
    let bgTitle = el.textContent;
    console.log(bgTitle);
    projectsCompany.style.background = `url(../../img/projects/${bgCompany}) no-repeat center /cover`;

    // console.log(projectsTitle);
    projectsTitleCompany.textContent = bgTitle;
    projectsTitleCompany.style.color = " #08fdd7";

    // projectsTitle = bgTitle;
  });

  el.addEventListener("mouseout", () => {
    projectsCompany.style.background = `url(../../img/office.jpg) no-repeat center /cover`;
    projectsTitleCompany.textContent = "Company Projects";
    projectsTitleCompany.style.color = "#fff";
  });
});

projectsListPersonal.forEach((el) => {
  el.addEventListener("mouseover", () => {
    let bgPersonal = el.getAttribute("data-personalBg");
    let bgTitlePersonal = el.textContent;
    projectsPersonal.style.background = `url(../../img/projects/${bgPersonal}) no-repeat center /cover`;
    projectsTitlePersonal.textContent = bgTitlePersonal;
    projectsTitlePersonal.style.color = " #08fdd7";
  });

  el.addEventListener("mouseout", () => {
    projectsPersonal.style.background = `url(../../img/home.jpg) no-repeat center /cover`;
    projectsTitlePersonal.textContent = "Personal Projects";
    projectsTitlePersonal.style.color = "#fff";
  });
});

// Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert("We are not able to find your location!");
    }
  );
}


console.log(`https://www.google.com/maps/@44.7837198,20.4172,15z`);
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         console.log("kjk");
//         const { latitude } = position.coords;
//         const { longitude } = position.coords;
//         console.log(latitude, longitude);
//         console.log(position);
//       },
//       function () {
//         alert("Could not get your position");
//       }
//     );
//   }
