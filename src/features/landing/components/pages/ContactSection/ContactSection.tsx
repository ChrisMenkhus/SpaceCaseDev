import Card from './components/Card'
import EmailForm from './components/EmailForm'

import { Button } from '@components/atoms'
import { SocialButtonGroup } from '@components/organisms'
import { Section } from '@components/templates'
import { CalendarIcon } from '@heroicons/react/outline'
import OpenCalendlyPopup from '@utils/openCalendlyPopup'

type ContactProps = React.HTMLAttributes<HTMLDivElement>

export const ContactSection = ({ ...props }: ContactProps) => {
  return (
    <div className="w-screen">
      <Section.Container id="Contact" name="Contact">
        <Section.Header title="Contact" subtitle="Get In Touch" />
        <Section.Content>
          <Card title={'Message Me'}>
            <EmailForm />
          </Card>
          <Card title="Schedule a Meeting" variant="secondary">
            <div className="py-8 m-auto h-full text-xl text-center">
              Lets schedule a time to get to know eachother.
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
      <div className="grid place-items-center -mt-24 w-screen h-full min-h-[20rem] gradientbg">
        <div className="py-24">
          <SocialButtonGroup className="text-white" />
        </div>
      </div>
    </div>
  )
}

ContactSection.displayName = 'ContactSection'
