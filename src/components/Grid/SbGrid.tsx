import { GridStoryblok } from "@/component-types-sb"
import { StoryblokComponent } from "@storyblok/react"

type TGridProps = {
  blok: GridStoryblok
}

function SbGrid({ blok }: TGridProps) {

  const cols = blok.columns?.length || 1
  const blokAlign = blok.align || "items-start"
  let classNames = "grid gap-12 "

  switch (cols) {
    case 1:
      classNames += "md:grid-cols-1 md:gap-12"
      break
    case 2:
      classNames += " md:grid-cols-2 md:gap-6"
      break
    case 3:
      classNames += "md:grid-cols-3 md:gap-4"
      break
    default:
      break
  }
  // const classNames = `grid gap-12 md:grid-cols-${cols} md:gap-${12 / cols} ${blok.align || "items-start"}`

  return blok.columns && (
    <div className={`${classNames} ${blokAlign}`}>
      {blok.columns.map(b => (
        <StoryblokComponent blok={b} key={b._uid} />
      ))
      }
    </div>
  )
}

export default SbGrid