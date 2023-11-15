const links = document.getElementById("links")
const burger = document.getElementById("burger")
const navbar = document.getElementById("navbar")

// open navbar links
burger.addEventListener("click", () => {
  links.classList.toggle("open")
  burger.classList.toggle("open")
})
