import { deleteComment, getComments, uploadComment } from '@API'
import { Modal } from '@components/modal/Modal'
import ModalPortal from '@components/modal/Portal'
import { useModal } from '@hooks'
import { CommonXBtn } from '@components/icons'
import { CommentType } from '@types'
import { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { getRandomColor } from '@utils'
import { COMMENT_TEXT } from '@constants'

interface Random {
  $getColor?: any
}

const initailUserInput = {
  comment: '',
  username: '',
  profileColor: ''
}

export const CommentsBox = ({ videoId }: { videoId: string }) => {
  const [comments, setComments] = useState<CommentType[]>([])
  const commentInputRef = useRef<HTMLTextAreaElement>(null)
  const [selectedCommentId, setSelectedCommentId] = useState<number>(0)
  const { openModal, closeModal } = useModal()
  const [userInput, setUserInput] = useState(initailUserInput)

  useEffect(() => {
    const fetchSupaBaseComments = async () => {
      const data: any = await getComments(videoId)
      setComments(data)
    }
    fetchSupaBaseComments()
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
      profileColor: getRandomColor(),
      videoId
    })) as CommentType[]
    setUserInput(initailUserInput)
    setComments(prevData => [uploadedData[0], ...prevData])
  }

  const handleDeleteModalOpen = async (id: number) => {
    setSelectedCommentId(id)
    openModal(COMMENT_TEXT.MODAL_DELETE)
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
      textarea.style.height = `${textarea.scrollHeight - 8}px`
    }
  }, [userInput.comment])

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
            {COMMENT_TEXT.COMMENT_UPLOAD_USER}
          </label>
        </div>
        <div>
          <label
            htmlFor="commentInput"
            className="a11y-hidden">
            {COMMENT_TEXT.COMMENT_UPLOAD}
          </label>
          <CommentInput
            id="commentInput"
            placeholder="comments"
            name="comment"
            value={userInput.comment}
            onChange={handleInputChange}
            ref={commentInputRef}
            autoComplete="off"
          />
          <div className="animating"></div>
        </div>
        <BtnWrap>
          <CreateCommentsBtn type="submit">
            {COMMENT_TEXT.COMMENT_WRITE}
          </CreateCommentsBtn>
          <CancelCommentBtn type="button">
            {COMMENT_TEXT.COMMENT_CANCEL}
          </CancelCommentBtn>
        </BtnWrap>
      </InputContainer>

      <CommentsList>
        {comments?.map(comment => (
          <>
            <CommentWrap key={comment.id}>
              <CommentWriter $getColor={comment.profile_color || ''}>
                {comment.username.slice(0, 3) || COMMENT_TEXT.ANONYMOUS}
              </CommentWriter>
              <Comment>{comment.text}</Comment>
              <CommentDeleteBtn
                type="button"
                onClick={() => handleDeleteModalOpen(comment.id)}>
                <CommonXBtn isSmall={true} />
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
  transform: scale(0,1);

}
to{
  transform: scale(1);
}
`
const animating = css`
  &:focus-visible {
    border-bottom: 1.4px solid transparent;
  }
  & + div {
    position: relative;
    top: -1.4px;
    width: 100%;
    transform: scale(0, 1);
    height: 1.4px;
    background: linear-gradient(
      to right,
      #f41b3b 0%,
      #ae46b9 25%,
      #8f76fc 50%,
      #1884f7 100%
    );
  }

  &:focus-visible + div {
    animation: ${animatingKeyframes} 0.5s forwards;
  }
`

const UserNameInput = styled.input`
  background-color: ${props => props.theme.themMode.body};
  color: ${props => props.theme.themMode.fontColor};
  outline: none;
  border: none;
  border-bottom: 1.4px solid ${props => props.theme.themMode.fontColor};
  padding: 18px;
  width: 160px;
  height: 32px;
  font-size: 16px;

  ${animating}

  & + div {
    width: 160px;
  }
`

const CommentInput = styled.textarea`
  background-color: ${props => props.theme.themMode.body};
  color: ${props => props.theme.themMode.fontColor};
  outline: none;
  border: none;
  border-bottom: 1.4px solid ${props => props.theme.themMode.fontColor};
  padding: 18px;
  width: 100%;
  resize: none;
  font-size: 16px;

  ${animating}

  & + div {
    top: -3.6px;
  }
`

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`
export const CreateCommentsBtn = styled.button`
  background-color: ${p => p.theme.themMode.hoverOutlineColor};
  color: #fff;
  padding: 12px 20px;
  text-align: center;
  border-radius: 8px;

  &:focus-visible {
    outline: 1px solid skyblue;
  }
`

const CancelCommentBtn = styled(CreateCommentsBtn)`
  background-color: ${props => props.theme.main.ft_color_g};
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
  border-bottom: 1px solid ${props => props.theme.themMode.fontColor};
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
  background-color: ${props => props.$getColor};
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
