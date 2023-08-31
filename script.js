//////////////////
////////////////
//////////////////













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



function toggleDark() {
    const container = document.body;
    const dataTheme = container.getAttribute("data-theme");
    let theme = localStorage.getItem("data-theme");

    if (dataTheme === "light") {
        container.setAttribute("data-theme", "dark");
        document.getElementById("night").style.display = "block";
        document.getElementById("light").style.display = "none";
        localStorage.toggled("data-theme", "dark");

    } else {

        container.setAttribute("data-theme", "light");
        document.getElementById("night").style.display = "none";
        document.getElementById("light").style.display = "block";
        localStorage.setItem("data-theme", "light");
    }
}