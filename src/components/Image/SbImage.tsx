import { ImageStoryblok } from "@/component-types-sb"

type TImageProps = {
  blok: ImageStoryblok
}

function SbImage({ blok }: TImageProps) {
  return (
    <img
      src={blok.asset.filename}
      alt={blok.asset.alt || ""}
      className="w-full object-contain rounded"
    />
  )
}

export default SbImage