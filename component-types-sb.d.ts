/* eslint-disable */
import { StoryblokStory } from 'storyblok-generate-ts'

export interface DividerStoryblok {
  _uid: string;
  component: "divider";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | DividerStoryblok
    | GridStoryblok
    | ImageStoryblok
    | PageStoryblok
    | PageTitleStoryblok
    | RichTextStoryblok
    | TwoThirdsSplitStoryblok
  )[];
  align?: "" | "items-start" | "items-end" | "items-center" | "items-baseline" | "items-stretch";
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface ImageStoryblok {
  asset: AssetStoryblok;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | DividerStoryblok
    | GridStoryblok
    | ImageStoryblok
    | PageStoryblok
    | PageTitleStoryblok
    | RichTextStoryblok
    | TwoThirdsSplitStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PageTitleStoryblok {
  title: string;
  _uid: string;
  component: "pageTitle";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface RichTextStoryblok {
  doc: RichtextStoryblok;
  _uid: string;
  component: "richText";
  [k: string]: any;
}

export interface TwoThirdsSplitStoryblok {
  columns: (
    | DividerStoryblok
    | GridStoryblok
    | ImageStoryblok
    | PageStoryblok
    | PageTitleStoryblok
    | RichTextStoryblok
    | TwoThirdsSplitStoryblok
  )[];
  wideOnLeft?: boolean;
  _uid: string;
  component: "twoThirdsSplit";
  [k: string]: any;
}
