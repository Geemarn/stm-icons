import React from 'react'
import { IconProps } from '../IconProps'

export function Car({
  color = '#434343',
  width = '17px',
  height = '12px'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.1 4.00001H13.844L12.844 1.50401C12.6654 1.06021 12.3583 0.679918 11.962 0.411933C11.5657 0.143948 11.0984 0.000502963 10.62 9.83821e-06H5.82C5.26423 -0.00158084 4.72514 0.189763 4.29473 0.54138C3.86433 0.892998 3.5693 1.38309 3.46 1.92801L3.044 4.00001H2.9C2.26348 4.00001 1.65303 4.25287 1.20294 4.70295C0.752856 5.15304 0.5 5.76349 0.5 6.40001V8.80001C0.5 9.01218 0.584285 9.21567 0.734315 9.3657C0.884344 9.51573 1.08783 9.60001 1.3 9.60001H2.1C2.1 10.2365 2.35286 10.847 2.80294 11.2971C3.25303 11.7472 3.86348 12 4.5 12C5.13652 12 5.74697 11.7472 6.19706 11.2971C6.64714 10.847 6.9 10.2365 6.9 9.60001H10.1C10.1 10.2365 10.3529 10.847 10.8029 11.2971C11.253 11.7472 11.8635 12 12.5 12C13.1365 12 13.747 11.7472 14.1971 11.2971C14.6471 10.847 14.9 10.2365 14.9 9.60001H15.7C15.9122 9.60001 16.1157 9.51573 16.2657 9.3657C16.4157 9.21567 16.5 9.01218 16.5 8.80001V6.40001C16.5 5.76349 16.2471 5.15304 15.7971 4.70295C15.347 4.25287 14.7365 4.00001 14.1 4.00001ZM9.3 1.60001H10.62C10.7789 1.60145 10.9337 1.65015 11.0648 1.73991C11.1958 1.82967 11.2972 1.95642 11.356 2.10401L12.116 4.00001H9.3V1.60001ZM5.028 2.24001C5.0654 2.05659 5.16594 1.89209 5.31211 1.77515C5.45829 1.65821 5.64084 1.59624 5.828 1.60001H7.7V4.00001H4.676L5.028 2.24001ZM4.5 10.4C4.34177 10.4 4.1871 10.3531 4.05554 10.2652C3.92398 10.1773 3.82145 10.0523 3.7609 9.90616C3.70035 9.75998 3.6845 9.59912 3.71537 9.44394C3.74624 9.28875 3.82243 9.14621 3.93431 9.03432C4.0462 8.92244 4.18874 8.84625 4.34393 8.81538C4.49911 8.78451 4.65997 8.80036 4.80615 8.86091C4.95233 8.92146 5.07727 9.02399 5.16518 9.15555C5.25308 9.28711 5.3 9.44178 5.3 9.60001C5.3 9.81218 5.21571 10.0157 5.06569 10.1657C4.91566 10.3157 4.71217 10.4 4.5 10.4ZM12.5 10.4C12.3418 10.4 12.1871 10.3531 12.0555 10.2652C11.924 10.1773 11.8214 10.0523 11.7609 9.90616C11.7003 9.75998 11.6845 9.59912 11.7154 9.44394C11.7462 9.28875 11.8224 9.14621 11.9343 9.03432C12.0462 8.92244 12.1887 8.84625 12.3439 8.81538C12.4991 8.78451 12.66 8.80036 12.8061 8.86091C12.9523 8.92146 13.0773 9.02399 13.1652 9.15555C13.2531 9.28711 13.3 9.44178 13.3 9.60001C13.3 9.81218 13.2157 10.0157 13.0657 10.1657C12.9157 10.3157 12.7122 10.4 12.5 10.4ZM14.9 8.00001H14.276C14.0511 7.75253 13.7769 7.55479 13.471 7.41948C13.1652 7.28416 12.8344 7.21427 12.5 7.21427C12.1656 7.21427 11.8348 7.28416 11.529 7.41948C11.2231 7.55479 10.9489 7.75253 10.724 8.00001H6.276C6.05105 7.75253 5.77687 7.55479 5.47103 7.41948C5.16518 7.28416 4.83444 7.21427 4.5 7.21427C4.16556 7.21427 3.83482 7.28416 3.52897 7.41948C3.22313 7.55479 2.94895 7.75253 2.724 8.00001H2.1V6.40001C2.1 6.18784 2.18429 5.98435 2.33431 5.83432C2.48434 5.6843 2.68783 5.60001 2.9 5.60001H14.1C14.3122 5.60001 14.5157 5.6843 14.6657 5.83432C14.8157 5.98435 14.9 6.18784 14.9 6.40001V8.00001Z'
        fill={color}
      />
    </svg>
  )
}
