import makeStyles from '@utils/makeStyles'
import { IconType } from 'react-icons'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { HiDocumentSearch } from 'react-icons/hi'

const SocialButton = ({
  ...props
}: {
  href: string
  icon: IconType
  label: string
}) => {
  return (
    <a {...props} className={styles.main} aria-label={props.label}>
      <div className={styles.ellipseButton}>
        <div className="grid relative place-items-center w-8 h-8">
          <props.icon />
        </div>
      </div>
      <span className={styles.text}>{props.label}</span>
    </a>
  )
}

export const SocialButtonGroup = ({
  className = '',
}: {
  className?: string
}) => {
  return (
    <div
      className={makeStyles([
        'flex justify-center items-center md:mt-8',
        className,
      ])}
    >
      <SocialButton
        href="https://github.com/ChrisMenkhus/"
        icon={FaGithubAlt}
        label="GitHub"
      />

      <SocialButton
        href="https://www.linkedin.com/in/solonaut/"
        icon={FaLinkedin}
        label="Linkedin"
      />

      <SocialButton
        href="https://docs.google.com/document/d/1oDRiRERHm9KubdwktoU7MtR5XTMyZr6Y5Rp2a7SrsHM/edit?usp=sharing"
        icon={HiDocumentSearch}
        label="Resume"
      />
    </div>
  )
}

const styles = {
  main: 'grid place-items-center mx-4 lg:mx-8 text-3xl',
  ellipseButton:
    'grid place-items-center p-0 w-16 h-16 bg-white rounded-full shadow-lg hover:scale-110 transition-all text-dark dark:text-white dark:bg-dark',
  text: 'text-sm mt-2 leading-3 px-2 dark:bg-dark',
}

SocialButtonGroup.displayName = 'SocialButtonGroupComponent'
