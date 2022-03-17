import { useRouter } from 'next/router'

const useUrlQuery = () => {
  const router = useRouter()
  const query = router.query
  console.log('query object', query)
  return Array.isArray(query) ? query[0] : query || ''
}

export default useUrlQuery
