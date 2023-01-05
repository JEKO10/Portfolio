const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const navList = document.querySelector("nav ul");
const navListItems = document.querySelectorAll("nav ul li");
const socials = document.querySelector(".hero ul");
const submit = document.querySelector("#submit");
let senderName = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
const alertMessage = document.querySelector("form p");

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
    from_name: senderName.value,
    email_id: email.value,
    message: message.value,
  };

  if (senderName.value && email.value && message.value) {
    emailjs
      .send("service_h26arzu", "template_8mah7dd", params)
      .then(function () {
        message.value = "";
        alertMessage.textContent = "Your message has been sent successfully!";
        alertMessage.style.display = "block";
        setTimeout(() => {
          alertMessage.style.display = "none";
        }, 5000);
      });
  } else {
    alertMessage.textContent = "All fields are required!";
    alertMessage.style.display = "block";
  }
});
