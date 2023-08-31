//////////////////
////////////////
//////////////////
$("#main").toggleClass(localStorage.toggled);




function myFunction() {

    var element = document.body;
    element.classList.toggle("dark-mode");

    const x = document.getElementById("theme");
    if (x.innerHTML === "light") {
        x.innerHTML = "DARK";
    } else {
        x.innerHTML = "light";
    }
    localStorage.setItem("darkmode", "dark-mode");
    document.body = localStorage.getItem("darkmode");
    darkLight();
};





// swiper configration
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: -10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: -30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: -30,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
})