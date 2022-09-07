import * as React from "react"

const SvgComponent = (props) => (
  <svg height={48} width={48} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m14 20 10 10 10-10z"/>
    <path d="M0 0h48v48H0z" fill="none"/>
  </svg>
)

export default SvgComponent
