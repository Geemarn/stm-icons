import React from 'react'
import { IconProps } from '../IconProps'

export function Link({
  color = '#434343',
  width = '17px',
  height = '16px'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M7.17773 8.66648C7.46404 9.04923 7.82931 9.36594 8.24877 9.59511C8.66823 9.82428 9.13207 9.96056 9.60883 9.9947C10.0856 10.0288 10.5641 9.96006 11.012 9.793C11.4598 9.62594 11.8665 9.36453 12.2044 9.02648L14.2044 7.02648C14.8116 6.39781 15.1476 5.5558 15.14 4.68181C15.1324 3.80782 14.7818 2.97178 14.1638 2.35375C13.5458 1.73573 12.7097 1.38516 11.8357 1.37757C10.9617 1.36997 10.1197 1.70595 9.49107 2.31315L8.3444 3.45315'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.84518 7.33332C9.55888 6.95057 9.19361 6.63387 8.77415 6.40469C8.35469 6.17552 7.89085 6.03924 7.41408 6.0051C6.93732 5.97095 6.45879 6.03974 6.01095 6.2068C5.56312 6.37386 5.15644 6.63527 4.81852 6.97332L2.81852 8.97332C2.21133 9.60199 1.87534 10.444 1.88294 11.318C1.89053 12.192 2.2411 13.028 2.85912 13.646C3.47715 14.2641 4.31319 14.6146 5.18718 14.6222C6.06117 14.6298 6.90318 14.2938 7.53185 13.6867L8.67185 12.5467'
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
            transform='translate(0.511719)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
