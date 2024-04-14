import { TwoThirdsSplitStoryblok } from "@/component-types-sb"
import { StoryblokComponent } from "@storyblok/react"

type TSplitProps = {
  blok: TwoThirdsSplitStoryblok
}

function TwoThirdsSplit({ blok }: TSplitProps) {
  return (
    <div className="grid gap-12 md:grid-cols-3">
      {blok.columns.map((b, index) => (
        <div key={b._uid} className={`${(blok.wideOnLeft && index === 0) || (!blok.wideOnLeft && index === 1) ? "md:col-span-2" : "md:col-span-1"}`}>
          <StoryblokComponent blok={b} />
        </div>
      ))

      }

    </div>
  )
}

export default TwoThirdsSplit