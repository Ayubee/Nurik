const clickBtn = document.querySelector(".burger-checkbox");
const burger = document.querySelector(".nav__list__2");
clickBtn.addEventListener("click", () => {
  burger.classList.toggle("none");
  console.log(1);
});
