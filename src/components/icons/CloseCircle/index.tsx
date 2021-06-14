import React from 'react'
import { IconProps } from '../IconProps'

export function CloseCircle({ color = '#434343', width = '16px' }: IconProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 6L6 10'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 6L10 10'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
