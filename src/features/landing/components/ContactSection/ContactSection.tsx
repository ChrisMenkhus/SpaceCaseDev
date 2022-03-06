import Card from './components/Card'
import EmailForm from './components/EmailForm'

import { Button } from '@components/atoms'
import { Section } from '@components/templates'
import { CalendarIcon } from '@heroicons/react/outline'
import OpenCalendlyPopup from '@utils/openCalendlyPopup'
import { useContext } from 'react'
import { Context } from 'src/stores/Context'

type ContactProps = React.HTMLAttributes<HTMLDivElement>

export const ContactSection = ({ ...props }: ContactProps) => {
  const context = useContext(Context)

  return (
    <div className="w-screen" ref={context?.contactRef}>
      <Section.Container id="Contact" name="Contact">
        <Section.Header title="Contact" subtitle="Get In Touch" />
        <Section.Content>
          <Card title={'Message Me'}>
            <EmailForm />
          </Card>
          <Card title="Schedule a Meeting" variant="secondary">
            <div className="py-8 m-auto h-full text-xl text-center">
              Lets schedule a time to get to know each other.
            </div>
            <Button
              size="lg"
              variant="secondary"
              icon={CalendarIcon}
              onClick={OpenCalendlyPopup}
            >
              Open Calendar
            </Button>
          </Card>
        </Section.Content>
      </Section.Container>
      <div className="flex -mt-24 w-screen h-56 gradientbg"></div>
    </div>
  )
}

ContactSection.displayName = 'ContactSection'
