import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '@atom'
import { useCallback } from 'react'

export const useModal = () => {
  const [modalData, setModalData] = useRecoilState(modalState)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const openModal = useCallback(
    (modalType: string) =>
      setModalData({
        isShow: true,
        modalType: modalType
      }),
    [setModalData]
  )

  const closeModal = useCallback(
    () =>
      setModalData(prev => {
        return { ...prev, isShow: false }
      }),
    [setModalData]
  )

  useEffect(() => {
    if (modalData.isShow) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [modalData.isShow])

  return {
    modalData,
    isVisible,
    openModal,
    closeModal
  }
}
