<<<<<<< HEAD
﻿

AOS.init({
    duration: 1000,
    once: false
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (header) {
        header.classList.toggle("sticky", window.scrollY > 20);
    }
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

if (menuBtn && navigation) {

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    });

    navigationItems.forEach((item) => {
        item.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
        });
    });

}

const scrollBtn = document.querySelector(".scrollToTop-btn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            scrollBtn.classList.add("active");
        } else {
            scrollBtn.classList.remove("active");
        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


=======
//access by id
let heading=document.getElementById("heading");
console.dir(heading);
>>>>>>> a463507062cf5f742dcce4afd8a4d4b77a75c6b0
