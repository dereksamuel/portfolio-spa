/* eslint-disable no-array-constructor */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './_.module.scss'

function Hability({ src, name, qualify }) {
  return (
    <div className={`${styles.hability} grid py-5 mt-3`}>
      <figure className={`${styles['hability__container-img']} flex items-center justify-center`}>
        <img src={src} alt={name} width={30} height={30} />
        <figcaption>{name}</figcaption>
      </figure>
      <ul className={`${styles['container-bars']} flex`}>
        {new Array(1, 1, 1, 1, 1, 1, 1).map((key, index) => (
          <li key={index} className={styles[`container-bars__item${index + 1 <= qualify ? '--active' : ''}`]}></li>
        ))}
      </ul>
    </div>
  )
}

Hability.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualify: PropTypes.number.isRequired,
}

export default Hability
