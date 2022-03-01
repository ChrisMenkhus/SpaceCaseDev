import Card from './components/Card'
import EmailForm from './components/EmailForm'

import { Button } from '@components/atoms'
import { Section } from '@components/templates'
import { CalendarIcon } from '@heroicons/react/outline'
import OpenCalendlyPopup from '@utils/openCalendlyPopup'
import { forwardRef } from 'react'

type ContactInterface = {}

export const ContactSection = forwardRef<HTMLDivElement, ContactInterface>(
  ({}, ref?) => {
    return (
      <div className="w-screen">
        <Section.Container id="Contact" name="Contact">
          <Section.Header title="Contact" subtitle="Get In Touch" />
          <Section.Content>
            <Card title={'Message Me'}>
              <EmailForm />
            </Card>
            <Card variant="secondary" title="Schedule a Meeting">
              <div className="py-8 m-auto h-full text-xl text-center">
                Let’s schedule a time to get to know each other.
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
        <div className="-mt-24 w-full h-56 gradientbg " />
      </div>
    )
  }
)

ContactSection.displayName = 'ContactSection'
