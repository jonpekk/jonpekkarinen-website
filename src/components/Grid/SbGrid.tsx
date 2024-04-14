import { GridStoryblok } from "@/component-types-sb"
import { StoryblokComponent } from "@storyblok/react"

type TGridProps = {
  blok: GridStoryblok
}

function SbGrid({ blok }: TGridProps) {
  const cols = blok.columns?.length || 1
  const classNames = `grid gap-12 md:grid-cols-${cols} md:gap-${12 / cols} ${blok.align || "items-start"}`

  return blok.columns && (
    <div className={classNames}>
      {blok.columns.map(b => (
        <StoryblokComponent blok={b} key={b._uid} />
      ))
      }
    </div>
  )
}

export default SbGrid