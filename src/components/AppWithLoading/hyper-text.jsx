import React from "react"

export function HyperText({ children, className = "" }) {
  return (
    <h1 className={className}>
      {children}
    </h1>
  )
}