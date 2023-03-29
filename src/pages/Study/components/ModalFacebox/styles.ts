import styled from 'styled-components'

export const ModalFaceboxContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: flex-start;
  align-items: flex-start;

  /* &.show {
    display: flex;
  } */
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin: 15px;
  padding: 20px;
  background: ${(props) => props.theme.white};
  position: relative;
`

export const Facebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  #title {
    width: 100%;
  }

  #webgazerGazeDot {
    /* display: none !important; */
  }

  #webgazerVideoContainer {
    position: unset !important;
  }

  #webgazerFaceFeedbackBox {
    position: relative !important;
  }

  #facebox-wrapper {
    border: 4px solid $blue;
    border-radius: 2px;
  }
`

export const EyeBox = styled.div`
  position: absolute;
  width: 90px;
  height: 30px;
  top: calc(50% - 50px);
  left: calc(50% - 45px);
  opacity: 0.7;
  background: ${(props) => props.theme.black};
`

export const Video = styled.video`
  display: none;
`

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
`
