const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});
