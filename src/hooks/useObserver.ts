import { useCallback, useEffect, useRef } from 'react'

export const useObserver = (
  hasNextPage: boolean,
  fetchNextPage: () => void,
  isLoading: boolean
) => {
  //스크롤 감지를 위한 IntersectionObserver API
  const observerRef = useRef<HTMLDivElement>(null)

  const handleObserver = useCallback(
    entries => {
      const [target] = entries
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage]
  )

  useEffect(() => {
    const element = observerRef.current
    const option = { threshold: 0 }
    const observer = new IntersectionObserver(handleObserver, option)
    if (element) {
      observer.observe(element)
      return () => observer.unobserve(element)
    }
  }, [fetchNextPage, handleObserver, isLoading])

  return observerRef
}
