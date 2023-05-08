import React, { useContext } from 'react'

import AboutSection from '../../Molecules/AboutSection'
import Button from '../../Atoms/Button'
import Derek from '../../Atoms/Derek'
import Scene from '../../Atoms/Scene'
import Loader from '../../Atoms/Loader'

import derekPic from '../../../assets/images/derekPic.png'
import styles from './_.module.scss'
import { StoreContext } from '../../../context/store'

function MainSection() {
  const { value, setValue } = useContext(StoreContext)

  const onLoadModel = () => {
    setValue({
      ...value,
      mode3dLoading: true,
      modelLoading: true,
    })
  }

  return (
    <div className={`${styles['main-section']} p-5`}>
      <div>
        {value.mode3dLoading ? (
          <Scene>
            <Derek />
          </Scene>
        ) : (
          <figure>
            <img src={derekPic} alt="derekPic" className={`${styles['derek-pic']} mb-8`} />
          </figure>
        )}
        {(!value.mode3dLoading || value.modelLoading) && (
          <div className={styles[value.modelLoading ? 'btn-loading' : '']}>
            <Button theme="secondary" onClick={onLoadModel} disabled={value.modelLoading} withoutShadow={value.modelLoading}>
              {value.modelLoading ? (
                <>
                  <Loader />
                  <span>Loading</span>
                </>
              ) : (
                'Load my 3D model'
              )}
            </Button>
          </div>
        )}
      </div>
      <AboutSection />
    </div>
  )
}

export default MainSection
