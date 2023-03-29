import {
  ModalFaceboxContainer,
  ButtonContainer,
  EyeBox,
  Facebox,
  Video,
  ModalContent,
} from './styles.js'

export function ModalFacebox() {
  return (
    <ModalFaceboxContainer>
      <ModalContent>
        <Facebox>
          <h2 id="title">Sua face e olhos estão dentro das caixas?</h2>

          <div id="facebox-wrapper"></div>

          <ButtonContainer>
            <button>Sim</button>
          </ButtonContainer>
        </Facebox>

        <EyeBox id="eye-box" />

        <Video
          id="videoRec"
          width="400"
          height="400"
          playsInline
          muted
          autoPlay
        />
      </ModalContent>
    </ModalFaceboxContainer>
  )
}
