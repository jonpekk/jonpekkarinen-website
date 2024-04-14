import { SplitComponentStoryblok } from "@/component-types-sb"
import StoryblokRichText from "../StoryblokRichText/StoryblokRichText"


type TSplitComponentProps = {
  blok: SplitComponentStoryblok
}

function SplitComponent({ blok }: TSplitComponentProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <StoryblokRichText
        document={blok.splitComponentText}
      />
      <div className={`${blok.imageOnLeft ? "md:order-first" : ""}`}>
        <img
          src={blok.splitComponentImage.filename}
          alt={blok.splitComponentImage.alt || ""}
          className="w-full h-full object-contain rounded"
        />
      </div>
    </div>
  )
}

export default SplitComponent