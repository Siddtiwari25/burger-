// MENU TOGGLE
const menuBtn = document.querySelector(".menu-icon");
const nav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ACTIVE NAV
const navItems = document.querySelectorAll(".main-nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("nav--active"));
    item.classList.add("nav--active");
  });
});

// SMOOTH SCROLL
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-id");
    const section = document.querySelector(`[data-id="${id}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// SCROLL ANIMATION (fade in)
const revealElements = document.querySelectorAll(".burger-item");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
