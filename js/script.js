// Change product image
function changeImg(src) {
  document.getElementById("mainImg").src = src;
}

// Accordion
const items = document.querySelectorAll(".acc-item");

items.forEach(item => {
  item.querySelector(".acc-header").addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
