import { openPopupWidget } from 'react-calendly'

const CALENDLY_URL = 'https://calendly.com/chrismenkhus-dev/30-minute-meeting'

export default function OpenCalendlyPopup() {
  return openPopupWidget({ url: CALENDLY_URL })
}
