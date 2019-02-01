var input = document.querySelector(".searchform__input");
var btn = document.querySelector(".searchform__btn");

btn.addEventListener('click', function(e) {
    e.preventDefault();
    input.classList.toggle('active');
    input.classList.toggle('focus');
});
