import * as React from 'react'

const Movies = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={26}
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.959 10.057h-4.895a1.75 1.75 0 01-1.38-.648L3.539 1.552C2.746.54 1 1.052 1 2.3v22.269c0 .238.211.432.472.432h3.193c.764 0 1.383-.567 1.383-1.266v-5.286c2.437 0 4.648 1.308 5.65 3.342l.064.13c.313.635 1.004 1.043 1.765 1.043h.054c.695 0 1.326-.373 1.612-.953l.109-.22c1.002-2.034 3.213-3.342 5.65-3.342v5.286c0 .699.62 1.266 1.383 1.266h3.193c.26 0 .472-.194.472-.432V2.242c0-1.234-1.793-1.732-2.675-.635l-6.006 7.825c-.32.394-.824.625-1.36.625"
      stroke="#999"
      strokeWidth={2}
    />
  </svg>
)

export default Movies
