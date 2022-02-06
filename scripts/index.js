// on complete document load js 

const navbarItems = document.querySelectorAll(".docs-navbar-item");
navbarItems[0].classList.add("active");
let prevTarget = navbarItems[0];

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
  
document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("docs-navbar-item") 
    // || event.target.parentNode.classList.contains("docs-navbar-item")
  ) {
    
    let target = event.target;
    let targetId = target.getAttribute("target");
    let targetElement = document.getElementById(targetId);
    console.log(targetElement);
    //scroll to target
    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    
    if (prevTarget) {
      prevTarget.classList.remove("active");
    }
    event.target.classList.add("active");
    prevTarget = event.target;
  }
});

