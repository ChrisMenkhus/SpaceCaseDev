import React from 'react'
import Image from 'next/image'
import createClassName from '@utils/createClassName'

interface ButtonProps {
  children: string
  variant?: 'primary' | 'secondary' | 'basic' | 'borderless'
  size?: 'tiny' | 'small' | 'regular' | 'big'
  imgSrc?: string | null
  alt: string
  handleClick: () => void
  className?: string
}

function Button({
  children,
  variant = 'primary',
  size = 'regular',
  alt,
  imgSrc = null,
  handleClick,
  className = '',
}: ButtonProps) {
  return (
    <div
      className={createClassName([
        'p-[0.1rem] w-auto h-auto min-w-[12rem] rounded',
        variant === 'primary' ? 'gradientbg shadow-lg' : null,
        variant === 'secondary'
          ? 'border-2 border-black shadow-none bg-white bg-gradient-to-br from-white to-white m-1 p-4'
          : null,
        variant === 'basic' ? 'border-2 border-black bg-white p-[0rem]' : null,
        size === 'big' ? '' : null,
        className,
      ])}
    >
      <button
        aria-label={alt}
        className={createClassName([
          'grid grid-cols-5 grid-rows-1 px-2 w-full h-full text-center bg-white text-primary rounded',
        ])}
      >
        <div
          className={createClassName([
            'col-span-4 text-base text-left pl-1 pr-1',
            variant === 'basic' ? '' : null,
            size === 'small' ? 'text-xs px-1' : null,
            size === 'regular' ? 'text-lg px-1' : null,
            size === 'big' ? 'text-2xl pl-2 py-1  ' : null,
            imgSrc || 'col-span-full text-center indent-0 pr-1',
          ])}
        >
          {children}
        </div>
        {imgSrc ? (
          <div
            className={createClassName([
              'grid place-items-center my-1 pr-1 relative',
              size === 'small' ? '' : null,
              size === 'big' ? 'pr-1' : null,
            ])}
          >
            <Image src={imgSrc} alt="chat icon" layout="fill" />
          </div>
        ) : null}
      </button>
    </div>
  )
}

export default Button
