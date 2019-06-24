var link = document.querySelector(".about__right-offer-find-us");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".contact-us__close-button");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("contact-us-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("contact-us-show");
  popup.classList.remove("contact-us-show-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (login.value || email.value) {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  } else {
    popup.classList.remove("contact-us-show-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("contact-us-show-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("contact-us-show")) {
      popup.classList.remove("contact-us-show");
      popup.classList.remove("contact-us-show-error");
    }
  }
});
