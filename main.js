const topMenu = document.getElementById("tad-top-menu");
const toggleTopMenuIcon = document.getElementById("tad-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("tad-topmenu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    if (topMenu.classList.contains("tad-topmenu-expanded")) {
      topMenu.classList.remove("tad-topmenu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
