import React, { ReactNode, SetStateAction } from 'react'

interface GazeData {
  x: number
  y: number
}

interface StudyContextType {
  webgazerLoaded: boolean
  startStudy: () => void
  startWebgazer: () => void
  stopWebgazer: () => void
  isEyeinTheBox: boolean
  isFaceInTheBox: boolean
  currentState: string | null
  setCurrentState: React.Dispatch<SetStateAction<string | null>>
  gazeData: GazeData[]
}

export const StudyContext = React.createContext({} as StudyContextType)

interface StudyProviderProps {
  children: ReactNode
}

export function StudyProvider({ children }: StudyProviderProps) {
  const [webgazer, setWebgazer] = React.useState(null)
  const [studyStarted, setStudyStarted] = React.useState(false)
  const [startTimestamp, setStartTimestamp] = React.useState(null)
  const [isEyeinTheBox, setIsEyeinTheBox] = React.useState(false)
  const [isFaceInTheBox, setIsFaceInTheBox] = React.useState(false)
  const [currentState, setCurrentState] = React.useState(null)
  const [gazeData, setGazeData] = React.useState([])

  const seconds = 10
  const milliseconds = seconds * 1000

  const webgazerLoaded = !!webgazer

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

  function startStudy() {
    setStartTimestamp(Date.now())
    setStudyStarted(true)
  }

  function stopWebgazer() {
    webgazer.pause()
  }

  function startWebgazer() {
    webgazer
      .setGazeListener((data: any) => {
        checkIfTheFaceAndEyeIsInTheBox()

        if (data == null) {
          return
        }

        const timestamp = Date.now()
        const xPrediction = data.x // these x coordinates are relative to the viewport
        const yPrediction = data.y // these y coordinates are relative to the viewport

        setGazeData((gazeDataState) => [
          ...gazeDataState,
          {
            x: xPrediction,
            y: yPrediction,
            timestamp,
          },
        ])
      })
      .begin()
  }

  React.useEffect(() => {
    const script = document.createElement('script')
    const body = document.getElementsByTagName('body')[0]
    script.src = '../../src/lib/webgazer.js'
    body.appendChild(script)
    script.addEventListener('load', () => {
      setWebgazer(window.webgazer)
    })
  }, [])

  React.useEffect(() => {
    console.log(gazeData)
  }, [gazeData])

  return (
    <StudyContext.Provider
      value={{
        webgazerLoaded,
        startStudy,
        startWebgazer,
        stopWebgazer,
        isEyeinTheBox,
        isFaceInTheBox,
        currentState,
        setCurrentState,
        gazeData,
      }}
    >
      {children}
    </StudyContext.Provider>
  )
}
