import { SplitComponentStoryblok } from "@/component-types-sb"
import { storyblokEditable } from "@storyblok/react"

type TSplitComponentProps = {
  blok: SplitComponentStoryblok
}

function SplitComponent({ blok }: TSplitComponentProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <p>{blok.leftContent}</p>
      <p>{blok.rightContent}</p>
    </div>
  )
}

export default SplitComponent