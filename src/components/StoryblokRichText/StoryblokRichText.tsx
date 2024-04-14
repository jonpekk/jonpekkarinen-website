import { render } from 'storyblok-rich-text-react-renderer';
import { RichtextStoryblok } from '@/component-types-sb';

type TRichTextProps = {
  document: RichtextStoryblok
}
function StoryblokRichText({ document }: TRichTextProps) {
  // document is the rich text object you receive from Storyblok,
  // in the form { type: "doc", content: [ ... ] }
  return <div>{render(document)}</div>;
}

export default StoryblokRichText