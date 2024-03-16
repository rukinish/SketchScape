// for the nav bar, wen the screen size becomes smaller
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//the back to top to be smooth
function smoothScrolling() {
    window.scroll({ top: 0, behavior: "smooth" });
}