import { deleteComment, getComments, uploadComment } from '@API'
import { Modal } from '@components/modal/Modal'
import ModalPortal from '@components/modal/Portal'
import { useModal } from '@hooks'
import { CommonXBtn } from '@components/icons'
import { CommentType } from '@types'
import { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface Random {
  $getColor?: any
  $isActive?: boolean
}

const initailUserInput = {
  comment: '',
  username: ''
}
export const CommentsBox = ({ videoId }: { videoId: string }) => {
  const [comments, setComments] = useState<CommentType[]>([])
  const commentInputRef = useRef<HTMLTextAreaElement>(null)
  const [userInput, setUserInput] = useState({
    comment: '',
    username: ''
  })
  const [gradientAnimation, setGradientAnimation] = useState(false)

  const startGradientAnimation = () => {
    setGradientAnimation(true)
    setTimeout(() => {
      setGradientAnimation(false)
    }, 1000)
  }
  const { openModal, closeModal } = useModal()
  const [selectedCommentId, setSelectedCommentId] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getComments(videoId)
      setComments(data)
    }
    fetchData()
  }, [])

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setUserInput(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleUploadForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const uploadedData = (await uploadComment({
      commentInput: userInput.comment,
      usernameInput: userInput.username,
      videoId
    })) as CommentType[]
    setUserInput(initailUserInput)
    setComments(prevData => [uploadedData[0], ...prevData])
  }

  const handleDeleteModalOpen = async (id: number) => {
    setSelectedCommentId(id)
    openModal('댓글삭제')
  }

  const handleClickDelete = async () => {
    closeModal()
    setComments(comments.filter(comment => comment.id !== selectedCommentId))
    await deleteComment(selectedCommentId)
  }

  useEffect(() => {
    if (commentInputRef.current) {
      const textarea = commentInputRef.current
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [userInput.comment])

  const getRandomColor = () => {
    const colorArr = [
      '#04d9ff',
      '#ff9933',
      '#fe4164',
      '#fe019a',
      '#bc13fe',
      '#ff073a',
      '#2C2731',
      '#4E495C',
      '#8C84A8'
    ]
    const randomIndex = Math.floor(Math.random() * colorArr.length)
    return colorArr[randomIndex]
  }

  return (
    <TotalContainer>
      <InputContainer onSubmit={handleUploadForm}>
        <div>
          <UserNameInput
            id="commentUsername"
            type="text"
            placeholder="nickname"
            name="username"
            value={userInput.username}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <div></div>
          <label
            htmlFor="commentUsername"
            className="a11y-hidden">
            댓글 작성 유저
          </label>
        </div>
        <div>
          <label
            htmlFor="commentInput"
            className="a11y-hidden">
            댓글 달기
          </label>
          <CommentInput
            $isActive={gradientAnimation}
            onClick={startGradientAnimation}
            id="commentInput"
            placeholder="comments"
            name="comment"
            value={userInput.comment}
            onChange={handleInputChange}
            ref={commentInputRef}
            autoComplete="off"
          />
          <div></div>
        </div>
        {/* <CommentInputDiv></CommentInputDiv> */}
        <BtnWrap>
          <CreateCommentsBtn type="submit">작성 하기</CreateCommentsBtn>
          <CancelCommentBtn type="button">취소 하기</CancelCommentBtn>
        </BtnWrap>
      </InputContainer>

      <CommentsList>
        {comments?.map(comment => (
          <>
            <CommentWrap key={comment.id}>
              <CommentWriter $getColor={getRandomColor}>
                {comment.username.slice(0, 3) || '익명'}
              </CommentWriter>
              <Comment>{comment.text}</Comment>
              <CommentDeleteBtn
                type="button"
                onClick={() => handleClickDelete(comment.id)}>
                <CommonXBtn isWhite={true} />
              </CommentDeleteBtn>
            </CommentWrap>
          </>
        ))}
      </CommentsList>
      <ModalPortal>
        <Modal onClick={handleClickDelete} />
      </ModalPortal>
    </TotalContainer>
  )
}

const TotalContainer = styled.div`
  margin: 80px auto;
  max-width: calc(100% - 100px);
`

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

const animatingKeyframes = keyframes`
from{
  transform: scale(0);

}
to{
  transform: scale(1);
}
`
const animating = css`
  &:focus {
    border-bottom: none;
  }
  & + div {
    width: 100%;
    transform: scale(0);
    height: 1px;
    background: linear-gradient(
      to right,
      #f41b3b 0%,
      #ae46b9 25%,
      #8f76fc 50%,
      #1884f7 100%
    );
  }

  &:focus + div {
    animation: ${animatingKeyframes} 0.5s forwards;
  }
`

const UserNameInput = styled.input`
  background-color: ${props => props.theme.main.bg_color};
  outline: none;
  color: #fff;
  padding: 18px;
  width: 160px;
  height: 32px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #fff;

  ${animating} & + div {
    width: 160px;
  }
`

const CommentInput = styled.textarea<Random>`
  background-color: ${props => props.theme.main.bg_color};
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  padding: 18px;
  width: 100%;
  resize: none;
  font-size: 14px;
  position: relative;

  ${animating}
`

const BtnWrap = styled.div`
  display: flex;
  margin-top: 40px;
`
const CreateCommentsBtn = styled.button`
  background-color: ${props => props.theme.main.ft_color_r};
  padding: 12px 20px;
  text-align: center;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
`

const CancelCommentBtn = styled.button`
  background-color: ${props => props.theme.main.ft_color_g};
  text-align: center;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 120px;
  padding: 12px 20px;
`

// 댓글 리스트 전체 묶음
const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`

// 댓글 개별 컨트롤 묶음
const CommentWrap = styled.li`
  border-bottom: 1px solid #fff;
  position: relative;
  display: flex;
  gap: 30px;
  height: auto;
  padding: 18px;

  &:first-child {
    margin-top: 20px;
  }
`

// 댓쓴이
const CommentWriter = styled.p<Random>`
  background-color: ${props => props.$getColor()};
  color: #fff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 600;
`

// 댓글
const Comment = styled.p`
  white-space: pre-wrap;
  word-wrap: break-word;
  padding-right: 45px;
  height: auto;
`

// 댓글 삭제
const CommentDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  position: absolute;
  right: 10px;
`
