import React from "react"

const RightChevron = props => {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width={width || "1em"}
      height={height || "1em"}
      style={{
        msTransform: "rotate(360deg)",
        WebkitTransform: "rotate(360deg)",
        transform: "rotate(360deg)",
      }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 8 8"
    >
      <path d="M2.5 0L1 1.5L3.5 4L1 6.5L2.5 8l4-4l-4-4z" fill="#FFF" />
    </svg>
  )
}

export default RightChevron
