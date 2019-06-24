var link = document.querySelectorAll(".popular-goods__item-user-buy");
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


var mapLink = document.querySelector(".show-map");
var mapPopup = document.querySelector(".contact-us-map");
var mapClose = document.querySelector(".contact-us-map__close-button");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("contact-us-show-map");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("contact-us-show-map");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("contact-us-show-map")) {
      mapPopup.classList.remove("contact-us-show-map");
    }
  }
});










