/* eslint-disable react/no-unknown-property */
import React, { Suspense, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { StoreContext } from '../../../context/store'
import styles from './_.module.scss'

function Scene({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [dpr, setDpr] = useState(0.65)
  const [loading, setLoading] = useState(true)
  const { value, setValue } = useContext(StoreContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setValue({
        ...value,
        modelLoading: false,
      })
      clearTimeout(timer)
    }, 1500)
  }, [])

  return (
    <>
      {!loading && (
        <Canvas dpr={dpr} className={styles.canvas} shadows camera={{ position: [0, 1, 6], fov: 20 }}>
          {/* <ambientLight color="yellow" /> */}
          <directionalLight intensity={1} position={[0, 0, 50]} color="white" />
          <Suspense fallback={null}>{children}</Suspense>
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI - Math.PI / 2} />
        </Canvas>
      )}
    </>
  )
}

Scene.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Scene
