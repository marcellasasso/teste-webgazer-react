import { StudyProvider } from '../../contexts/StudyContext.js'
import { ModalFacebox } from './components/ModalFacebox/index.js'
import { StudyControl } from './components/StudyControl/index.js'

export function Study() {
  return (
    <div>
      <StudyProvider>
        <StudyControl />

        <ModalFacebox />
      </StudyProvider>
    </div>
  )
}
