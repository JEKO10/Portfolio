const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const navList = document.querySelector("nav ul");
const navListItems = document.querySelectorAll("nav ul li");
const socials = document.querySelector(".hero ul");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  navList.classList.toggle("hide");
  socials.classList.toggle("hide");
  document.documentElement.classList.toggle("hide");
});

navListItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuBurger.classList.remove("open");
    navList.classList.add("hide");
    socials.classList.add("hide");
    document.documentElement.classList.remove("hide");
  });
});

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  if (window.innerWidth > 768) {
    document.documentElement.classList.remove("hide");
  }
});
