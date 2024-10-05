// creating an Event Listener Scroll for navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// creating function for toggle nav
function toggleNav() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("active");
}
