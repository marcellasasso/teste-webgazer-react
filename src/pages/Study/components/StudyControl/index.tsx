import React from 'react'
import { StudyContext } from '../../../../contexts/StudyContext'

export function StudyControl() {
  const { webgazerLoaded, startWebgazer, stopWebgazer, startStudy } =
    React.useContext(StudyContext)

  return (
    <div>
      {webgazerLoaded && (
        <>
          <button onClick={startWebgazer}>iniciar webgazer</button>
          <button onClick={startStudy}>iniciar estudo</button>
          <button onClick={stopWebgazer}>parar webgazer</button>
        </>
      )}
    </div>
  )
}
