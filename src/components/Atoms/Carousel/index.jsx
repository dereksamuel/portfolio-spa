import React, { useEffect } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

import Button from '../Button'
import styles from './_.module.scss'

import comicCssSrc from '../../../assets/images/comic_css.png'
import comicSrc from '../../../assets/images/comic.png'
import landingSrc from '../../../assets/images/landing.png'
import errorSrc from '../../../assets/images/error.png'

function Carousel() {
  let currChildEl = 0
  const projects = [
    {
      href: 'https://dereksamuel.github.io/HOLDING/',
      src: comicCssSrc,
      name: 'COMIC in web 100% with CSS',
    },
    {
      href: 'https://github.com/dereksamuel/amaris_test_consulting',
      src: landingSrc,
      name: 'Landing page with auth and DB',
    },
    {
      href: 'https://404-error-dk.netlify.app/',
      src: errorSrc,
      name: 'Error 404 in 3D',
    },
    {
      href: 'https://github.com/dereksamuel/comic-web',
      src: comicSrc,
      name: 'Rank for comics',
    },
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const carouselEl = document.getElementById('carousel')
      const carouselContent = document.getElementById('carousel-content')
      const childrenEls = carouselContent.children
      const n = childrenEls.length
      const gap = carouselEl.dataset.gap || 0
      const bfc = 'bfc' in carouselEl.dataset

      const theta = (2 * Math.PI) / n

      setupCarousel(n, parseFloat(getComputedStyle(childrenEls[0]).width))
      window.addEventListener('resize', () => {
        setupCarousel(n, parseFloat(getComputedStyle(childrenEls[0]).width))
      })

      function setupCarousel(n, s) {
        const apothem = s / (2 * Math.tan(Math.PI / n))
        carouselContent.style.transformOrigin = `50% 50% ${-apothem}px`

        for (var i = 0; i < n; i++) {
          childrenEls[i].style.paddingLeft = `${gap}px`
          childrenEls[i].style.paddingRight = `${gap}px`
        }

        for (i = 1; i < n; i++) {
          childrenEls[i].style.transformOrigin = `50% 50% ${-apothem}px`
          childrenEls[i].style.transform = `rotateY(${i * theta}rad)`
        }

        if (bfc) {
          for (i = 0; i < n; i++) {
            childrenEls[i].style.backfaceVisibility = 'hidden'
          }
        }
      }

      clearTimeout(timeout)
    }, 300)
  }, [])

  function onPrevOrNext(e, id) {
    e.stopPropagation()
    const carouselContent = document.getElementById('carousel-content')

    if (id === 'next') {
      currChildEl++
    } else {
      currChildEl--
    }

    const theta = (2 * Math.PI) / carouselContent.children.length
    carouselContent.style.transform = `rotateY(${currChildEl * -theta}rad)`
  }

  return (
    <div className={`${styles.carousel} px-1 md:px-8 py-5`} id="carousel" data-gap="150">
      <div className={styles['carousel-content']} id="carousel-content">
        {projects.map((project, index) => (
          <div className={styles['carousel-content__item']} key={index}>
            <a href={project.href} target="__blank">
              <img src={project.src} alt={project.name} className={styles['carousel-card']} />
            </a>
            <p className="pt-3">{project.name}</p>
          </div>
        ))}
      </div>
      <div className={styles['carousel-content--mobile']}>
        {projects.map((project, index) => (
          <div id="carousel-content__item--mobile" className={styles['carousel-content__item--mobile']} key={index}>
            <a href={project.href} target="__blank">
              <img src={project.src} alt={project.name} className={styles['carousel-card--mobile']} />
            </a>
            <p className="pt-3">{project.name}</p>
          </div>
        ))}
      </div>
      <nav>
        <Button withIcon onClick={(e) => onPrevOrNext(e, 'prev')}>
          <IoMdArrowDropleft />
        </Button>
        <Button withIcon onClick={(e) => onPrevOrNext(e, 'next')}>
          <IoMdArrowDropright />
        </Button>
      </nav>
    </div>
  )
}

export default Carousel
