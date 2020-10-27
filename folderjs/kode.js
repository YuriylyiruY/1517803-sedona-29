const Knopk=document.querySelector(".appointment-button");
const loginPopup = document.querySelector(".form-check-in");
Knopk.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});
