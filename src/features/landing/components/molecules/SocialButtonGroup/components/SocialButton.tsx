import { AnchorHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  Icon: IconType
  label: string
}

export const SocialButton = ({ href, Icon, label }: SocialButtonProps) => {
  return (
    <a href={href} className={styles.main} aria-label={label}>
      <div className={styles.ellipseButton}>
        <div className="grid relative place-items-center w-8 h-8">
          <Icon />
        </div>
      </div>
      <span className={styles.text}>{label}</span>
    </a>
  )
}

const styles = {
  main: 'grid place-items-center mx-4 lg:mx-8 text-3xl',
  ellipseButton:
    'grid place-items-center p-0 w-16 h-16 bg-white rounded-full shadow-lg hover:scale-110 transition-all text-dark dark:text-white dark:bg-dark',
  text: 'text-sm mt-2 leading-3 px-2 dark:bg-dark',
}

SocialButton.displayName = 'SocialButtonComponent'
