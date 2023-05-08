import React from 'react'
import Button from '../Atoms/Button'
import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()

  const onGoToMainPage = () => {
    navigate('/')
  }

  return (
    <div className='not-found p-5'>
      <h2>Excuse me, I don't know what you're looking for</h2>
      <p>Please, go to the main page:</p>
      <Button onClick={onGoToMainPage}>Go to main page</Button>
    </div>
  )
}
