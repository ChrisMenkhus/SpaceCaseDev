import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { CalendarIcon, MailIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import OpenCalendlyPopup from '@utils/openCalendlyPopup'

function EmailForm({}: {}) {
  return (
    <form
      action="https://formsubmit.co/e283962fbedec3fd99c4f6a71c9503eb"
      method="POST"
      className="flex-col flexcenter"
    >
      <label htmlFor="name" className="w-full text-left">
        Name
      </label>
      <input
        type="text"
        name="name"
        required
        className="mb-4 w-full border-2 border-primary"
      />
      <label htmlFor="email" className="w-full text-left">
        Email
      </label>
      <input
        type="email"
        name="email"
        required
        className="mb-4 w-full border-2 border-primary"
      />
      <label htmlFor="message" className="w-full text-left">
        Message
      </label>
      <textarea
        name="message"
        required
        className="mb-4 w-full h-24 min-h-full align-text-top border-2 border-primary"
      />
      <Button
        type="submit"
        size="lg"
        variant="primary"
        icon={MailIcon}
        className="mt-4"
      >
        Send Message
      </Button>
    </form>
  )
}

const BottomBackground = () => {
  return <div className="-mt-24 w-full h-56 gradientbg " />
}

function SimpleCardText({ children }: { children: string }) {
  return (
    <div className="py-8 m-auto h-full text-xl text-center">{children}</div>
  )
}

function SimpleCard({
  children,
  title,
  variant = 'primary',
}: {
  children: JSX.Element | JSX.Element[]
  title: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <div
      className={makeStyles([
        'flex z-10 flex-col justify-center items-center m-auto mt-0  w-80 h-full bg-white dark:bg-dark shadow-lg sm:mt-auto md:mx-8 min-h-[30rem] rounded overflow-hidden',
        variant === 'primary' && '',
        variant === 'secondary' && 'mt-16',
      ])}
    >
      <div
        className={makeStyles([
          'mt-0 flex flex-col justify-center items-center w-full h-20',
          variant === 'primary' && 'bg-primary',
          variant === 'secondary' && 'bg-secondary',
        ])}
      >
        <h1 className="text-xl text-white">{title}</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-4 pb-8 m-auto w-full h-full ">
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="w-screen">
      <Section.Container
        id="Contact"
        name="Contact"
        // ref={contactSectionRef}
      >
        <Section.Header title="Contact" subtitle="Get In Touch" />
        <Section.Content>
          <SimpleCard title={'Message Me'}>
            <EmailForm />
          </SimpleCard>
          <SimpleCard variant="secondary" title="Schedule a Meeting">
            <SimpleCardText>
              {'Let’s schedule a time to get to know each other.'}
            </SimpleCardText>
            <Button
              size="lg"
              variant="secondary"
              icon={CalendarIcon}
              onClick={OpenCalendlyPopup}
            >
              Open Calendar
            </Button>
          </SimpleCard>
        </Section.Content>
      </Section.Container>
      <BottomBackground />
    </div>
  )
}
