import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    className='animate-spin'
    {...props}
  >
    <path
      stroke="#999"
      strokeLinecap="round"
      strokeWidth={3.556}
      d="M20 12a8 8 0 0 1-11.76 7.061"
    />
  </svg>
)
export default SvgComponent
