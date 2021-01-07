
      const options = {
        fullWidth: true,
        indicators: true,
      }
      document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.carousel')
        var instances = M.Carousel.init(elems, options)
      })

      //search bar
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