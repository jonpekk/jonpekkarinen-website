import { Link as TanstackLink, LinkProps } from "@tanstack/react-router";

interface ILinkProps extends LinkProps {
  isExternal?: boolean,
  href: string
  children: React.ReactNode
  linkColor?: string
  style?: 'default' | 'title'
  customClasses?: string
}

function Link({ isExternal, href, children, linkColor = "text-blue-600", style = 'default', customClasses = '', ...props }: ILinkProps) {

  let classNames = `relative w-fit inline-block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-450 after:origin-left ${linkColor} hover:text-black ${customClasses}`

  switch (style) {
    case 'default':
      break;
    case 'title':
      classNames = `${linkColor} hover:underline ${customClasses}`
      break;
    default:
      break
  }

  if (isExternal) {
    let url;
    if (href.startsWith('https://') || href.startsWith('http://')) {
      url = href
    } else {
      url = `https://${href}`
    }

    return (
      <a
        href={url}
        className={classNames}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <TanstackLink
      to={href}
      className={classNames}
      {...props}
    >
      {children}
    </TanstackLink>
  )
}

export default Link