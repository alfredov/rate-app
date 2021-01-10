import * as React from 'react'

const TvSelected = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={22}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0a2 2 0 00-2 2v14a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2H2zm3 7V3H3v4h2zm3-4v2H6V3h2zm12 17H4v2h16v-2z"
      fill="#FF5000"
    />
  </svg>
)

export default TvSelected
