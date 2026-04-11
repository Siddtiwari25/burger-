// MENU TOGGLE
const menuBtn = document.querySelector(".menu-icon");
const nav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// NAV ACTIVE SWITCH
const navItems = document.querySelectorAll(".main-nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("nav--active"));
    item.classList.add("nav--active");
  });
});

// SCROLL TO SECTION (based on data-id)
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-id");
    const section = document.querySelector(`[data-id="${id}"]`);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
