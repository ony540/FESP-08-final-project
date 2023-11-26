import { atom } from 'recoil'

export type ModalType = {
  isShow: boolean
  modalType: string
}

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isShow: false,
    modalType: ''
  }
})
