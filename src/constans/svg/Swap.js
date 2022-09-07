import * as React from "react"

const SvgComponent = (props) => (
  <svg height={48} width={48} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.98 22 6 30l7.98 8v-6H28v-4H13.98v-6zM42 18l-7.98-8v6H20v4h14.02v6L42 18z" />
    <path d="M0 0h48v48H0z" fill="none" />
  </svg>
)

export default SvgComponent