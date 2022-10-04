const btn = document.querySelector(".btn");
const body = document.querySelector('body');
const slider = document.querySelector('.slider');
let btnMenu = false;

console.log(slider);

btn.addEventListener("click", function() {
    if (!btnMenu) {
        btn.classList.add("open");
        body.classList.add("no-scroll");
        slider.classList.add('slide');
        btnMenu = true;
    }
    else {
        btn.classList.remove('open');
        body.classList.remove("no-scroll");
        slider.classList.remove('slide');
        btnMenu = false;
    }
});