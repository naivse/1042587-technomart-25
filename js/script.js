var link = document.querySelectorAll(".popular-goods__item-user-buy, .main-content-catalog__item-user-buy");
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
  if (evt.keyCode === 27) {
    evt.preventDefault();
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
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("contact-us-show-map")) {
      mapPopup.classList.remove("contact-us-show-map");
    }
  }
});

var linkFeedback = document.querySelector(".about__right-offer-find-us");
var popupFeedback = document.querySelector(".contact-us");
var closeFeedback = popupFeedback.querySelector(".contact-us__close-button");
var login = popupFeedback.querySelector("[name=login]");
var form = popupFeedback.querySelector("form");
var email = popupFeedback.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

linkFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("contact-us-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("contact-us-show");
  popupFeedback.classList.remove("contact-us-show-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (login.value || email.value) {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  } else {
    popupFeedback.classList.remove("contact-us-show-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("contact-us-show-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains("contact-us-show")) {
      popupFeedback.classList.remove("contact-us-show");
      popupFeedback.classList.remove("contact-us-show-error");
    }
  }
});
