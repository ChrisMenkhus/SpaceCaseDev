import { SocialButton } from './components'

import makeStyles from '@utils/makeStyles'
import { HTMLAttributes } from 'react'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { HiDocumentSearch } from 'react-icons/hi'

type SocialButtonGroupProps = HTMLAttributes<HTMLDivElement>

export const SocialButtonGroup = ({
  className = '',
}: SocialButtonGroupProps) => {
  return (
    <div
      className={makeStyles([
        'flex justify-center items-center md:mt-8',
        className,
      ])}
    >
      <SocialButton
        href="https://github.com/ChrisMenkhus/"
        Icon={FaGithubAlt}
        label="GitHub"
      />

      <SocialButton
        href="https://www.linkedin.com/in/solonaut/"
        Icon={FaLinkedin}
        label="Linkedin"
      />

      <SocialButton
        href="https://docs.google.com/document/d/1raeQUTJWEO_oZCbnPIIPK8V6YyYmOk3v-e1DXViigsI/edit?usp=sharing"
        Icon={HiDocumentSearch}
        label="Resume"
      />
    </div>
  )
}

SocialButtonGroup.displayName = 'SocialButtonGroupComponent'
