import React from 'react'
import { StudyContext } from '../../../../contexts/StudyContext'

export function StudyControl() {
  const { startWebgazer } = React.useContext(StudyContext)

  return (
    <div>
      <button onClick={startWebgazer}>iniciar webgazer</button>
    </div>
  )
}
