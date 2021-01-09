//slider activation
const options = {
  fullWidth: true,
  indicators: true,
}
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel')
  var instances = M.Carousel.init(elems, options)
})

//select bar activation
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
})

//dropdown activation
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});

//search bar selector
const search = document.querySelector('.search')
const openIcon = document.querySelector('.search-open-icon')
const closeIcon = document.querySelector('.search-close-icon')

openIcon.addEventListener('click', () => {
  search.classList.remove('hide-search')
  closeIcon.classList.remove('hide')
  openIcon.classList.add('hide')
})
closeIcon.addEventListener('click', () => {
  search.classList.add('hide-search')
  openIcon.classList.remove('hide')
  closeIcon.classList.add('hide')
})

//product image selector
const productImage = document.querySelector(".product-image img")
const productSubImages = document.querySelectorAll(".product-sub-image")

productSubImages.forEach(subImage => {
  subImage.addEventListener("click", function (e) {
    const subImageUrl = this.children[0].getAttribute("src")
    productImage.setAttribute("src", subImageUrl)
  })
})

//sidebar selector
const sidebar = document.querySelector(".sidebar")
const menu = document.querySelector(".menu-btn")
const overlay = document.querySelector(".overlay")

menu.addEventListener("click", function () {
  sidebar.classList.toggle("show")
  overlay.classList.toggle("hide")
})
overlay.addEventListener("click", function () {
  sidebar.classList.remove("show")
  overlay.classList.add("hide")
})