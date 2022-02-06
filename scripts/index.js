// on complete document load js
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre code").forEach((el) => {
    el.innerHTML = el.innerHTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    hljs.highlightElement(el);
  });
});

const navbarItems = document.querySelectorAll(".navbar-link");
navbarItems[0].classList.add("active");
let prevTarget = navbarItems[0];
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("navbar-link")) {
    if (prevTarget) prevTarget.classList.remove("active");
    event.target.classList.add("active");
    prevTarget = event.target;
  }
});
