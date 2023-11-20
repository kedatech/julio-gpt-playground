import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    transform="scale(-1 1)"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#213948"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.4}
      clipPath="url(#a)"
    >
      <path d="M12 3a9 9 0 1 1-5.657 2" />
      <path d="M3 4.5h4v4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
