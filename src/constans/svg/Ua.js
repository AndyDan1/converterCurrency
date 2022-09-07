import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 28 20"
    {...props}
  >
    <path fill="#fff" d="M0 0h28v20H0V0z" />
    <path
      fill="#156DD1"
      fillRule="evenodd"
      d="M0 10.667h28V0H0v10.667z"
      clipRule="evenodd"
    />
    <path
      fill="#FFD948"
      fillRule="evenodd"
      d="M0 20h28v-9.333H0V20z"
      clipRule="evenodd"
    />
  </svg>
)

export default SvgComponent
