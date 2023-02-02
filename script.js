
var exit = document.querySelector(".close");
var popup = document.querySelector(".pop_up");
var product = document.querySelectorAll(".open-card");
var body = document.querySelector("body");


for (let index = 0; index < product.length; index++) {
    product[index].addEventListener('click', function () {
        popup.style.display = 'block';
        if (popup.style.display == 'block') {
            body.classList.add("modal-open");

        }
    });

}
exit.addEventListener('click', function () {
    popup.style.display = 'none';
    body.classList.remove("modal-open");
});