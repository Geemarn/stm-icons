import React from 'react'
import { IconProps } from '../IconProps'

export function Close({
  color = '#434343',
  width = '17px',
  height = '17px'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='3.73438'
        y='11.5713'
        width='11.3137'
        height='1.41421'
        rx='0.707107'
        transform='rotate(-45 3.73438 11.5713)'
        fill={color}
      />
      <rect
        x='4.73438'
        y='3.57129'
        width='11.3137'
        height='1.41421'
        rx='0.707106'
        transform='rotate(45 4.73438 3.57129)'
        fill={color}
      />
    </svg>
  )
}
