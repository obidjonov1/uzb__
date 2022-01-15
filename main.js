const navAnim = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar li");
  // Toggle list
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Items
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkMove 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // Animated Burger
    burger.classList.toggle("toggle");
  });
};
navAnim();
