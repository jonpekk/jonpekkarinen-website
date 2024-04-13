import React from 'react'

type THeadingProps = {
  style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: React.ReactNode
}

function Heading({
  style,
  tag,
  children,
  ...props
}: THeadingProps) {

  const Tag = tag


  return (
    <Tag className={`${style}-style`} {...props}>{children}</Tag>
  )
}

export default Heading