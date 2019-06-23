var link = document.querySelectorAll(".main-content-catalog__item-user-buy");
var popup = document.querySelector(".basket-add");
var close = popup.querySelector(".basket-add__close-button");
var closeContinue = popup.querySelector(".basket-add__button-continue");

link.forEach(function (evt) {
  evt.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("card-show")
  })
});

closeContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("card-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("card-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (popup.classList.contains("card-show")) {
      popup.classList.remove("card-show");
    }
  }
});
