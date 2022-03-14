import { useRouter } from 'next/router'

const useUrlQuery = () => {
  const router = useRouter()
  const queryObj = router.query
  const { query } = queryObj
  return Array.isArray(query) ? query[0] : query || ''
}

export default useUrlQuery
