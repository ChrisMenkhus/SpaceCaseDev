import { SvgWrapper } from '@components/Elements/SvgWrapper'
import React from 'react'

export default function ScrollDownIcon({
  ...props
}: SVGElement & JSX.IntrinsicElements): JSX.Element {
  console.log(props.className)
  return (
    <SvgWrapper className={props.className}>
      <path
        d="M7.4962 5.9983C7.4962 3.6548 9.5126 1.755 12 1.755s4.5038 1.8998 4.5038 4.2432v6.7603c0 2.3434-2.0164 4.2431-4.5038 4.2431s-4.5038-1.8997-4.5038-4.2431V5.9983Z"
        fill="url(#a)"
        stroke="url(#b)"
        strokeWidth="1.5"
      />
      <path
        d="M11.9618 5.7466V3.8767"
        stroke="#FFF"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="m14.2519 19.3391-2.2901 2.1575-2.29-2.1575"
        stroke="url(#c)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="a"
          x1="12"
          y1="-.4026"
          x2="5.5188"
          y2=".3679"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0276FF" />
          <stop offset="1" stopColor="#8002FF" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="12"
          y1="-.4026"
          x2="5.5188"
          y2=".3679"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0276FF" />
          <stop offset="1" stopColor="#8002FF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="11.9618"
          y1="19.0338"
          x2="9.1354"
          y2="20.2411"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0276FF" />
          <stop offset="1" stopColor="#8002FF" />
        </linearGradient>
      </defs>
    </SvgWrapper>
  )
}

ScrollDownIcon.displayName = 'ScrollDownIcon'
