let icon = document.querySelector("#bar");
let head = document.querySelector("header");

icon.onclick = () => {
    icon.classList.toggle("fa-times");
    head.classList.toggle("active");
}
window.onscroll = () => {
    head.classList.remove("active");
}

