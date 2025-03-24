const clickBtn = document.querySelector("#btn");
const burger = document.querySelector(".nav__list");
clickBtn.addEventListener("click", () => {
  burger.classList.toggle("none");
});
