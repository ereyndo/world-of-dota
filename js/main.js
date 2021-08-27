import '../scss/style.scss';

const mainHeader = document.querySelector(".header");
const sidenavBlock = document.querySelector(".header__sidenav");
const sidenavBtn = document.querySelector(".header__sidenav-btn");
const sidenavLinks = document.querySelectorAll(".header__links li");
const sectionOfArticles = document.querySelector(".section-of-articles");
const goToArticlesLink = document.querySelector(".header__links li a[data-articles]");

// -------- if the page wasn't refreshed on the beginning
function checkNavBarPosition() {
    if (window.scrollY >= 200) {
        mainHeader.classList.add("main-header-move-down");
    }
}

checkNavBarPosition();

// -------- change navbar through the scrolling
function changeNavBar() {
    if (window.scrollY >= 200) {
        mainHeader.classList.add("main-header-move-down");
    } else {
        mainHeader.classList.remove("main-header-move-down");
    }
}

// --------------- toggle hamburger button
function toggleSidenav() {
    sidenavBtn.classList.toggle("header__sidenav-btn--active");
    sidenavBlock.classList.toggle("header__sidenav--opened");
    sidenavLinks.forEach(link => {
        link.classList.toggle("fade");
    });
}

// --------------- close navbar if smb follows sidenav links in small screen mode
function closeSmallSidenav() {
    if(document.documentElement.clientWidth <= 600) {
        toggleSidenav();
    }
}

function goToTheSectionOfArticles() {
    const clientY = sectionOfArticles.getBoundingClientRect().top + pageYOffset - mainHeader.offsetHeight;
    window.scrollTo(0, clientY);
}

function addAllTheListeners() {
    window.addEventListener("scroll", changeNavBar);
    sidenavBtn.addEventListener("click", toggleSidenav);
    sidenavLinks.forEach(link => {
        link.addEventListener("click", closeSmallSidenav);
    });
    goToArticlesLink.addEventListener("click", goToTheSectionOfArticles)
}

addAllTheListeners();