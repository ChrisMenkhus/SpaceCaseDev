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

  let isActiveLink = router.pathname === to

  const styles = makeStyles([
    className,
    isActiveLink && 'border-primary text-primary border-b-2 ',
  ])

  return (
    <Link href={to} passHref>
      <a className={styles}>{name}</a>
    </Link>
  )
}