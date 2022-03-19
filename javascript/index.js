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
const modal = document.getElementById("myModal");
const btn = document.getElementById("modalButton");
const closeButton = document.getElementsByClassName("modal-close")[0];
const innerCloseButton = document.getElementsByClassName("close-button")[0];
btn.onclick = function () {
  modal.classList.add("modal-show");
};
closeButton.onclick = function () {
  modal.classList.remove("modal-show");
};

innerCloseButton.onclick = function () {
  modal.classList.remove("modal-show");
};
window.onclick = function (event) {
  console.log("model clicked");
  if (event.target == modal) {
    modal.classList.remove("modal-show");
  }
};

const toastListener = () => {
  const toast = document.getElementById("toastContainer");
  const toastClose = document.getElementById("toast-close");
  const toastButton = document.getElementById("toast-button");
  toastButton.addEventListener("click", () => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
  toastClose.addEventListener("click", () => {
    toast.classList.remove("show");
  });
  
};
toastListener();
