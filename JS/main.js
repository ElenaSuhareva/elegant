const btn = document.querySelector(".close-btn");
const discount = document.querySelector(".discount");

const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation-list");
const content = document.querySelector(".content");


btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  discount.classList.toggle("hide");
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navigation.classList.toggle("open");
  content.classList.toggle("hide");
});

