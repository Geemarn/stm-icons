import React from 'react'
import { IconProps } from '../IconProps'

export function ChevronUp({ color = '#434343' }: IconProps) {
  return (
    <svg
      width='11'
      height='6'
      viewBox='0 0 11 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.95672 0.227048L9.93014 4.20751C9.99606 4.27289 10.0484 4.35067 10.0841 4.43637C10.1198 4.52207 10.1382 4.61399 10.1382 4.70683C10.1382 4.79966 10.1198 4.89158 10.0841 4.97728C10.0484 5.06298 9.99606 5.14076 9.93014 5.20614C9.79838 5.33712 9.62014 5.41064 9.43435 5.41064C9.24855 5.41064 9.07031 5.33712 8.93855 5.20614L5.42224 1.725L1.94109 5.20614C1.80933 5.33712 1.63108 5.41064 1.44529 5.41064C1.2595 5.41064 1.08126 5.33712 0.949492 5.20614C0.883042 5.14101 0.830178 5.06334 0.793962 4.97763C0.757746 4.89192 0.7389 4.79987 0.738514 4.70683C0.7389 4.61378 0.757746 4.52173 0.793962 4.43602C0.830178 4.35031 0.883042 4.27264 0.949492 4.20751L4.92292 0.227048C4.98878 0.155663 5.0687 0.0986931 5.15766 0.0597272C5.24663 0.0207614 5.3427 0.000644772 5.43982 0.000644774C5.53694 0.000644775 5.63301 0.0207614 5.72197 0.0597272C5.81093 0.0986931 5.89086 0.155663 5.95672 0.227048V0.227048Z'
        fill={color}
      />
    </svg>
  )
}