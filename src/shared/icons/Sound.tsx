import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    stroke="#eee"
    strokeWidth={0}
    viewBox="-4.08 -4.08 32.16 32.16"
    {...props}

  >
    <g fill="#999" stroke="none">
      <path
        fillRule="evenodd"
        d="M10.4 1.8C11.553.262 14 1.078 14 3v18.121c0 1.933-2.469 2.742-3.612 1.184L6.494 17H4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2.5l3.9-5.2ZM12 3 8.1 8.2a2 2 0 0 1-1.6.8H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.494a2 2 0 0 1 1.612.816L12 21.121V3Z"
        clipRule="evenodd"
      />
      <path d="M16.214 4.174A1.003 1.003 0 0 1 17.196 3c.467 0 .869.328.95.788C18.424 5.353 19 8.965 19 12s-.576 6.646-.854 8.212a.959.959 0 0 1-.95.788 1.003 1.003 0 0 1-.982-1.174C16.507 18.107 17 14.807 17 12c0-2.807-.493-6.107-.786-7.826ZM21.41 5c-.675 0-1.17.694-1.013 1.351C20.676 7.524 21 9.438 21 12s-.324 4.476-.603 5.649c-.157.657.338 1.351 1.013 1.351.362 0 .687-.206.8-.55.293-.893.79-2.927.79-6.45s-.497-5.557-.79-6.45c-.113-.344-.438-.55-.8-.55Z" />
    </g>
  </svg>
)
export default SvgComponent
