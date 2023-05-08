import { useEffect, useState } from 'react'

export default function useLoadHoudini() {
  const [customProp, setCustomProp] = useState([])

  useEffect(() => {
    if ('paintWorklet' in CSS) {
      if (customProp.find((cp) => cp !== '--bezel-color')) {
        console.log('paintWorklet')
        window.CSS.registerProperty({
          name: '--bezel-color',
          syntax: '<color>',
          inherits: false,
          initialValue: 'false',
        })
        setCustomProp([...customProp, '--bezel-color'])
      }
      CSS.paintWorklet.addModule('js/bezel.js')
    }
  }, [])

  return customProp
}
