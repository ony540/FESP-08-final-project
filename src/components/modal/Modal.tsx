import { COMMENT_TEXT } from '@constants'
import { useModal } from '@hooks'
import styled from 'styled-components'

interface ModalProps {
  onClick: () => void
}

export const Modal = ({ onClick }: ModalProps) => {
  const { isVisible, closeModal } = useModal()

  if (!isVisible) {
    return null
  }

  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalWrapper>
        <p>{COMMENT_TEXT.QUESTION_MODAL_COMMENT_DELETE}</p>
        <ButtonBox>
          <button
            type="button"
            onClick={closeModal}
            aria-label="모달 닫기">
            {COMMENT_TEXT.CANCEL}
          </button>
          <button
            onClick={onClick}
            type="button">
            {COMMENT_TEXT.DELETE}
          </button>
        </ButtonBox>
      </ModalWrapper>
    </ModalBackdrop>
  )
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`

const ModalWrapper = styled.article`
  width: 252px;
  height: 110px;
  z-index: 61;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.main.ft_color_w};
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.main.hr_color_b};

  p {
    display: inline-block;
    font-size: ${({ theme }) => theme.customSize.large};
    margin: 23px 0 22px;
  }
`

const ButtonBox = styled.div`
  display: flex;
  height: calc(100% - 61px);
  border-top: 0.5px solid ${({ theme }) => theme.main.ft_color_g};
  border-radius: 0 0 10px 10px;

  button {
    width: 100%;
    font-size: ${({ theme }) => theme.customSize.medium};
  }

  button:nth-child(2) {
    border-left: 0.5px solid ${({ theme }) => theme.main.ft_color_g};
    color: ${({ theme }) => theme.main.ft_color_r};
  }
`
