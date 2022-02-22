import makeStyles from '@utils/makeStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = {
  name: string
  to: string
  className?: string
}

export const ActiveLink = ({ name, to, className = '' }: ActiveLinkProps) => {
  const router = useRouter()

  let currentPathName = router.pathname.split('/')[1]
  let nextPathName = to.substring(1)
  let isActiveLink = currentPathName === nextPathName

  const styles = makeStyles([
    'border-b-2 border-transparent hover:border-dark dark:hover:border-light transition-all',
    className,
    isActiveLink && 'border-secondary text-secondary border-b-2 ',
  ])

  return (
    <Link href={to} passHref>
      <a className={styles}>{name}</a>
    </Link>
  )
}
