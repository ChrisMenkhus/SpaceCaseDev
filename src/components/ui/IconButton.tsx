import React from 'react'
import Image from 'next/image'
import createClassName from '@utils/createClassName'

interface IconButtonProps {
  imgSrc: string
  alt: string
  handleClick: () => void
  className?: string
}

function IconButton({
  imgSrc,
  handleClick,
  className = '',
  alt,
}: IconButtonProps) {
  return (
    <div
      className={createClassName([
        'grid place-items-center w-full h-auto group ',
        className,
      ])}
    >
      <div
        className={createClassName([
          'p-[0.10rem] w-auto h-auto  m-auto rounded-full  bg-white hover:bg-dark transition-all hover:shadow-lg',
        ])}
      >
        <button
          aria-label={alt}
          className={createClassName([
            'h-auto w-auto rounded-full bg-light p-8',
          ])}
        >
          <div
            className={createClassName([
              'relative h-12 w-12 animate-bounce transition-all m-auto',
            ])}
          >
            <Image src={imgSrc} alt="chat icon" layout="fill" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default IconButton
