import { openPopupWidget } from 'react-calendly'

const calendlyUrl = 'https://calendly.com/chrismenkhus-dev/30-minute-meeting'

export default function OpenCalendlyPopup() {
  return openPopupWidget({ url: calendlyUrl })
}
