import React from 'react'

export default function Popover({ msg }) {
  return (
    <div className="absolute top-0 left-[-80px] rounded-md bg-white p-4 shadow-md">
      <span>{msg}</span>
    </div>
  )
}
