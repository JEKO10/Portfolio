const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const navList = document.querySelector("nav ul");
const navListItems = document.querySelectorAll("nav ul li");
const socials = document.querySelector(".hero ul");
const submit = document.querySelector("#submit");

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
  if (window.innerWidth > 768) {
    document.documentElement.classList.remove("hide");
    menuBurger.classList.remove("open");
    navList.classList.add("hide");
    socials.classList.add("hide");
    document.documentElement.classList.remove("hide");
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const params = {
    from_name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send("service_h26arzu", "template_8mah7dd", params)
    .then(function (res) {
      alert("Status " + res.status);
    });
});
