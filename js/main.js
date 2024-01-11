const navLinks = document.getElementById("nav-links");
function toggleNavMenu(e) {
  e.classList.contains("fa-bars")
    ? (navLinks.classList.remove("-translate-x-full"),
      navLinks.classList.add("translate-x-0"),
      e.classList.remove("fa-bars"),
      e.classList.add("fa-xmark"))
    : (navLinks.classList.remove("translate-x-0"),
      navLinks.classList.add("-translate-x-full"),
      e.classList.remove("fa-xmark"),
      e.classList.add("fa-bars"));
}
