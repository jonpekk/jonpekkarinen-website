import { PageTitleStoryblok } from "@/component-types-sb"
import Heading from "../Heading/Heading"

type TPageTitleProps = {
  text: string
}

type TStoryblokWrapper = {
  blok: PageTitleStoryblok
}

function PageTitle({ text }: TPageTitleProps) {

  return (
    <Heading tag="h1" style="h1">{text}</Heading>
  )
}

export function StoryblokPageTitle({ blok }: TStoryblokWrapper) {
  return (
    <PageTitle
      text={blok.title}
    />
  )
}

export default PageTitle