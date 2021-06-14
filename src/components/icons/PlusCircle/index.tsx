import React from 'react'
import { IconProps } from '../IconProps'

export function PlusCircle({
  color = '#494FB1',
  width = '16px',
  height = '16px'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M8.50065 14.6668C12.1825 14.6668 15.1673 11.6821 15.1673 8.00016C15.1673 4.31826 12.1825 1.3335 8.50065 1.3335C4.81875 1.3335 1.83398 4.31826 1.83398 8.00016C1.83398 11.6821 4.81875 14.6668 8.50065 14.6668Z'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.5 5.3335V10.6668'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.83398 8H11.1673'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect
            width='16'
            height='16'
            fill='transparent'
            transform='translate(0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
