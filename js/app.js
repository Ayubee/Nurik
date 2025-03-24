const clickBtn = document.querySelector(".burger-checkbox");
const burger = document.querySelector(".nav__list");
clickBtn.addEventListener("click", () => {
  burger.classList.toggle("none");
  console.log(1);
});
