import { useEffect } from 'react'

export default function useMouse($cursor) {
  const onMouseMovement = (event) => {
    if ($cursor.current) {
      $cursor.current.setAttribute('style', `top: ${+event.pageY}px; left: ${+event.pageX}px`)
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMovement)

    return () => {
      document.removeEventListener('mousemove', onMouseMovement)
    }
  }, [])
}
