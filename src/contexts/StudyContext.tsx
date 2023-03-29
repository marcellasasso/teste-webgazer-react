import React, { ReactNode, SetStateAction } from 'react'

interface StudyContextType {
  startWebgazer: () => void
  isEyeinTheBox: boolean
  isFaceInTheBox: boolean
  currentState: string | null
  setCurrentState: React.Dispatch<SetStateAction<string | null>>
}

export const StudyContext = React.createContext({} as StudyContextType)

interface StudyProviderProps {
  children: ReactNode
}

export function StudyProvider({ children }: StudyProviderProps) {
  const [isEyeinTheBox, setIsEyeinTheBox] = React.useState(false)
  const [isFaceInTheBox, setIsFaceInTheBox] = React.useState(false)
  const [currentState, setCurrentState] = React.useState(null)
  const [gazeData, setGazeData] = React.useState(null)

  function checkIfTheFaceAndEyeIsInTheBox() {
    const webgazerFaceFeedbackBox = document.querySelector(
      '#webgazerFaceFeedbackBox',
    )

    const eyeBox = document.querySelector('#eye-box')

    setIsEyeinTheBox(eyeBox.classList.contains('eye-in-the-box'))
    setIsFaceInTheBox(
      webgazerFaceFeedbackBox.classList.contains('face-in-the-box'),
    )
  }

  function startWebgazer() {
    const script = document.createElement('script')
    const body = document.getElementsByTagName('body')[0]
    script.src = '../../src/lib/webgazer.js'
    body.appendChild(script)
    script.addEventListener('load', () => {
      window.webgazer
        .setGazeListener((data: any) => {
          checkIfTheFaceAndEyeIsInTheBox()

          if (data == null) {
            return
          }

          const xPrediction = data.x // these x coordinates are relative to the viewport
          const yPrediction = data.y // these y coordinates are relative to the viewport

          console.log(xPrediction, yPrediction)

          setGazeData(gazeDataState => [...gazeDataState, {
            x: xPrediction,
            y: yPrediction,
          }])
        })
        .begin()
    })
  }

  return (
    <StudyContext.Provider
      value={{
        startWebgazer,
        isEyeinTheBox,
        isFaceInTheBox,
        currentState,
        setCurrentState,
      }}
    >
      {children}
    </StudyContext.Provider>
  )
}
