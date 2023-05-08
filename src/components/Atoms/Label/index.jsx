import React from 'react'
import styles from './_.module.scss'

function Label() {
  return (
    <article className={`${styles.label} py-6 px-9`} data-testid="label">
      <h1 className="text-4xl">
        <strong>[Subject]: Derek Paul</strong>
      </h1>
      <p className="text-xl font-medium">Power: Front-end Developer</p>
      {/* <Button>Tell me</Button> */}
    </article>
  )
}

export default Label
