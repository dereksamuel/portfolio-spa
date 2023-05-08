import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Cursor from '@atoms/Cursor'
import GeneralBorder from '@molecules/GeneralBorder'
import Menu from '@molecules/Menu'

import { StoreContext } from '@/context/store'
import aboutMe from '../context/modules/about_me.json'
import projects from '../context/modules/projects.json'

import '@/styles/globals.scss'
import useLoadHoudini from '@/hooks/useLoadHoudini'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import Script from 'next/script'

function App({ Component, pageProps }) {
  const [value, setValue] = useState({
    mode3dLoading: false,
    modelLoading: false,
    about_me: aboutMe,
    projects,
  })
  const router = useRouter()
  useLoadHoudini()

  return (
    <StoreContext.Provider value={{ value, setValue }}>
      <GeneralBorder>
        <Menu />
        <SwitchTransition>
          <CSSTransition key={router.pathname} in={!!router.pathname} timeout={200} classNames="my-node" unmountOnExit>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>
        <Cursor />
      </GeneralBorder>
      <Script language="javascript+paint">
        {`
          class Bezel {
            static get inputProperties() {
              return ['--bezel-color', '--bezel-width', '--bezel-radius', '--bezel-filled', '--bezel-filled-bg', '--bezel-color-bg']
            }
          
            static get inputArguments() {
              return ['*']
            }
          
            static get contextOptions() {}
          
            parseValue(val) {
              return val.toString().replace(' ', '').replace(/px|%/g, '').split(' ')
            }
          
            paint(ctx, geom, properties, args) {
              ctx.lineWidth = properties.get('--bezel-width')
              ctx.strokeStyle = properties.get('--bezel-color')
              const inset = ctx.lineWidth / 2
              const [topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius] = this.parseValue(properties.get('--bezel-radius'))
          
              const width = geom.width
              const height = geom.height
          
              ctx.lineTo(topLeftRadius, inset)
              ctx.lineTo(width - topRightRadius, inset)
              ctx.lineTo(width - inset, topRightRadius)
              ctx.lineTo(width - inset, height - bottomRightRadius)
              ctx.lineTo(width - bottomRightRadius, height - inset)
              ctx.lineTo(bottomLeftRadius, height - inset)
              ctx.lineTo(inset, height - bottomLeftRadius)
              ctx.lineTo(inset, topLeftRadius)
              ctx.closePath()
  
              if (properties.get('--bezel-color-bg')?.length) {
                ctx.fillStyle = properties.get('--bezel-color-bg')
              }
              if (properties.get('--bezel-filled-bg')[0].trim() === 'true') {
                ctx.fill()
              }
              ctx.stroke()
            }
          }
  
          registerPaint('bezel', Bezel)
        `}
      </Script>
      <Script>
        {`
        if ("paintWorklet" in CSS) {
          const src = document.querySelector('script[language$="paint"]').innerHTML
          const blob = new Blob([src], {
            type: "text/javascript",
          })
          CSS.paintWorklet.addModule(URL.createObjectURL(blob))
        }  
      `}
      </Script>
    </StoreContext.Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
