import { Link as TanstackLink, LinkProps } from "@tanstack/react-router";

interface ILinkProps extends LinkProps {
  isExternal?: boolean,
  href: string
  children: React.ReactNode
}

function Link({ isExternal, href, children, ...props }: ILinkProps) {

  if (isExternal) {
    return (
      <a
        href={href}
        className="relative after:block after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-450 after:origin-left"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <TanstackLink
      to={href}
      className="relative after:block after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-450 after:origin-left"
      {...props}
    >
      {children}
    </TanstackLink>
  )
}

export default Link