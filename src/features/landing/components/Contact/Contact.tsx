import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { CalendarIcon, MailIcon } from '@heroicons/react/outline'
import createClassName from '@utils/createClassName'
import OpenCalendlyPopup from '@utils/openCalendlyPopup'
import * as data from 'public/data/home'
import { FC } from 'react'

function Form({}: {}) {
  return (
    <form
      action="https://formsubmit.co/e283962fbedec3fd99c4f6a71c9503eb"
      method="POST"
      className="flex-col flexcenter"
    >
      <label htmlFor="name" className="w-full text-left">
        name
      </label>
      <input
        type="text"
        name="name"
        required
        className="mb-4 w-full border-2 border-primary"
      />
      <label htmlFor="email" className="w-full text-left">
        email
      </label>
      <input
        type="email"
        name="email"
        required
        className="mb-4 w-full border-2 border-primary"
      />
      <label htmlFor="message" className="w-full text-left">
        message
      </label>
      <textarea
        name="message"
        required
        className="mb-4 w-full h-24 min-h-full align-text-top border-2 border-primary"
      />
      <Button
        type="submit"
        size="lg"
        variant="secondary"
        icon={MailIcon}
        className="mt-4"
      >
        Send message
      </Button>
    </form>
  )
}

const BottomBackground: FC = ({ children }) => {
  return <div className=" -mt-24 w-full h-56 gradientbg ">{children}</div>
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
      className={createClassName([
        'flex z-10 flex-col justify-center items-center m-auto mt-0  w-80 h-full bg-white shadow-lg sm:mt-auto md:mx-8 min-h-[30rem] rounded overflow-hidden',
        variant === 'primary' ? '' : null,
        variant === 'secondary' ? 'mt-16' : null,
      ])}
    >
      <div
        className={createClassName([
          'mt-0 flex flex-col justify-center items-center w-full h-20',
          variant === 'primary' ? 'bg-primary' : null,
          variant === 'secondary' ? 'bg-secondary' : null,
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
    <Section.Container
      id="Contact"
      name="Contact"
      // ref={contactSectionRef}
    >
      <Section.Header
        title={data.Contact.section.name}
        subtitle={data.Contact.section.altname || ''}
      />
      <Section.Content>
        <SimpleCard title={data.Contact.text || ''}>
          <Form />
        </SimpleCard>
        <SimpleCard variant="secondary" title={data.Contact.text2 || ''}>
          <SimpleCardText>{data.Contact.text3 as string}</SimpleCardText>
          <Button
            size="lg"
            variant="primary"
            icon={CalendarIcon}
            onClick={OpenCalendlyPopup}
          >
            {data.Contact.button2 as string}
          </Button>
        </SimpleCard>
      </Section.Content>
      <BottomBackground>
        <Section.Footer></Section.Footer>
      </BottomBackground>
    </Section.Container>
  )
}
