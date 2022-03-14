import { Button } from '@components/atoms'
import { MailIcon } from '@heroicons/react/outline'

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

export default EmailForm
