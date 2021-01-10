import * as React from 'react'

const  MoviesSelected = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.064 9.057a1.75 1.75 0 01-1.38-.648L2.539.552C1.746-.46 0 .052 0 1.3v22.269c0 .238.211.432.472.432h3.193c.764 0 1.383-.567 1.383-1.266v-5.286c2.437 0 4.648 1.308 5.65 3.342l.064.13c.313.635 1.004 1.043 1.765 1.043.75 0 1.38-.373 1.666-.953l.109-.22c1.002-2.034 3.213-3.342 5.65-3.342v5.286c0 .699.62 1.266 1.383 1.266h3.193c.26 0 .472-.194.472-.432V1.242C25 .008 23.207-.49 22.325.607l-6.006 7.825c-.32.394-.824.625-1.36.625h-4.895z"
      fill="#FF5000"
    />
  </svg>
)

export default MoviesSelected
