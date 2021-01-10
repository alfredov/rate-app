import * as React from 'react'

const Tv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={23}
    viewBox="0 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#999" d="M5 21h16v2H5zM9 4v2H7V4zM6 4v4H4V4z" />
    <rect
      x={1}
      y={1}
      width={24}
      height={18}
      rx={2}
      stroke="#999"
      strokeWidth={2}
    />
  </svg>
)

export default Tv
