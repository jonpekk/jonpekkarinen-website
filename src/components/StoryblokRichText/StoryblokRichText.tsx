import { render, MARK_BOLD, MARK_LINK, NODE_OL, NODE_UL, NODE_LI } from 'storyblok-rich-text-react-renderer';
import { RichTextStoryblok } from '@/component-types-sb';
import Link from '../Link/Link';

type TRichTextProps = {
  blok: RichTextStoryblok
}
function StoryblokRichText({ blok }: TRichTextProps) {
  // document is the rich text object you receive from Storyblok,
  // in the form { type: "doc", content: [ ... ] }
  return (
    <div className="font-extralight text-2xl">
      {render(blok.doc, {
        markResolvers: {
          [MARK_BOLD]: (children) => <strong className="font-medium">{children}</strong>,
          [MARK_LINK]: (children, { href, linktype }) => <Link href={href as string} isExternal={linktype === 'url'}>{children}</Link>
        },
        nodeResolvers: {
          [NODE_OL]: (children) => <ol className="list-decimal pl-8 py-4">{children}</ol>,
          [NODE_UL]: (children) => <ul className="list-disc pl-8 py-4">{children}</ul>,
          [NODE_LI]: (children) => <li className="py-1">{children}</li>
        }
      })}
    </div>);
}

export default StoryblokRichText