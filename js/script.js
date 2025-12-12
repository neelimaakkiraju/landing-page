// Function to change the main product image
function changeImg(src) {
  document.getElementById("mainImg").src = src;
}

// Mobile Menu Toggle Functionality
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobile-nav');

// Checks if elements exist and adds the click listener
if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        // Toggles the 'active' class on the icon (for the hamburger to 'X' animation)
        menuToggle.classList.toggle('active');
        // Toggles the 'active' class on the navigation menu (for slide-in/out)
        mobileNav.classList.toggle('active');
    });
}

// Accordion with Smooth Animation and +/- Icon Logic
const items = document.querySelectorAll(".acc-item");

items.forEach(item => {
  item.querySelector(".acc-header").addEventListener("click", () => {
    
    // Determine the current state of the clicked item
    const isActive = item.classList.contains("active");

    // 1. Collapse All Items and Reset Icons
    items.forEach(i => {
        i.classList.remove("active");
        const body = i.querySelector(".acc-body");
        if (body) {
            // Clear inline max-height to trigger CSS transition to 0
            body.style.maxHeight = null; 
        }
        // Reset icon to '+'
        const icon = i.querySelector(".acc-icon");
        if (icon) {
             icon.textContent = '+';
        }
    });

    // 2. Expand the clicked item if it was previously closed
    if (!isActive) {
        item.classList.add("active");
        const body = item.querySelector(".acc-body");
        if (body) {
            // Set max-height to the content's full scrollHeight for a smooth expansion
            body.style.maxHeight = body.scrollHeight + "px";
        }
        // Change icon to '-'
        const icon = item.querySelector(".acc-icon");
        if (icon) {
             icon.textContent = '-';
        }
    }
  });
});