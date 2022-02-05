import { Button } from '@components/Elements/Button'
import createClassName from '@utils/createClassName'
import { FC } from 'react'
import { MailIcon } from '@heroicons/react/outline'

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
        size="lg"
        variant="secondary"
        icon={<MailIcon />}
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
        'flex z-10 flex-col justify-center items-center m-auto mt-0  w-80 h-full bg-white shadow-lg sm:mt-auto md:mx-8 min-h-[30rem]',
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

export { BottomBackground, SimpleCard, SimpleCardText, Form }
