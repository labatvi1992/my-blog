if (document.getElementsByClassName("page-header")) {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset
    var bgParallax = document.querySelector(".page-header")
    if (bgParallax) {
      var limit = bgParallax.offsetTop + bgParallax.offsetHeight
      if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit) {
        bgParallax.style.backgroundPositionY =
          50 - ((10 * scrollPosition) / limit) * 3 + "%"
      } else {
        bgParallax.style.backgroundPositionY = "50%"
      }
    }
  })
}
