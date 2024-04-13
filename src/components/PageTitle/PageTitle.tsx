import { PageTitleStoryblok } from "@/component-types-sb"

type TPageTitleProps = {
  blok: PageTitleStoryblok
}

function PageTitle({ blok }: TPageTitleProps) {

  console.log(blok)

  return (
    <h1 className="font-light font-outfit">{blok.title}</h1>
  )
}

export default PageTitle