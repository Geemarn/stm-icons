import React from 'react'
import { IconProps } from '../IconProps'

export function Group({
  color = '#434343',
  width = '25px',
  height = '24px'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.5 12C3.72222 11.1429 4.38889 9 7.5 9C10.6111 9 11.2778 11.1429 11.5 12'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 8C8.60457 8 9.5 7.10457 9.5 6C9.5 4.89543 8.60457 4 7.5 4C6.39543 4 5.5 4.89543 5.5 6C5.5 7.10457 6.39543 8 7.5 8Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 12C13.7222 11.1429 14.3889 9 17.5 9C20.6111 9 21.2778 11.1429 21.5 12'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 8C18.6046 8 19.5 7.10457 19.5 6C19.5 4.89543 18.6046 4 17.5 4C16.3954 4 15.5 4.89543 15.5 6C15.5 7.10457 16.3954 8 17.5 8Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 21C8.72222 20.1429 9.38889 18 12.5 18C15.6111 18 16.2778 20.1429 16.5 21'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 16C13.6046 16 14.5 15.1046 14.5 14C14.5 12.8954 13.6046 12 12.5 12C11.3954 12 10.5 12.8954 10.5 14C10.5 15.1046 11.3954 16 12.5 16Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
