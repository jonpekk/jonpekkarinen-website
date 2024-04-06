import React from 'react'

type TButtonProps = {
  children: React.ReactNode
}

function Button({ children }: TButtonProps) {
  return (
    <div>{children}</div>
  )
}

export default Button