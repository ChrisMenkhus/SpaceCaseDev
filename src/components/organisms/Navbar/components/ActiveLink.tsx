import makeStyles from '@utils/makeStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from 'src/stores/context/AppContext'

type ActiveLinkProps = {
  name: string
  to: string
  className?: string
}

const ActiveLink = ({ name, to, className = '' }: ActiveLinkProps) => {
  const router = useRouter()

  const context = useContext(AppContext)

  const closeMobileNavMenu = () => {
    context?.actions.setShowMobileNavMenu(false)
  }

  let currentPathName = router.pathname.split('/')[1]
  let nextPathName = to.substring(1)
  let isActiveLink = currentPathName === nextPathName

  return (
    <Link href={to} passHref>
      <a
        className={makeStyles([
          'border-b-2 border-transparent hover:border-primary  transition-all',
          className,
          isActiveLink && 'border-primary text-primary border-b-2 ',
        ])}
        onClick={() => {
          closeMobileNavMenu()
        }}
      >
        {name}
      </a>
    </Link>
  )
}

ActiveLink.displayName = 'ActiveLinkComponent'
export default ActiveLink
