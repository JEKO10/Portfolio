const form = document.querySelector(".form");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.value = "";
  //   setInterval(() => {
  //     message.placeholder = "Your message";
  //   }, 2500);
  //   message.placeholder = "Thank you for writing!";
});
