import {StoryblokStory} from 'storyblok-generate-ts'

export interface GridStoryblok {
  columns?: (GridStoryblok | PageStoryblok | PageTitleStoryblok | SplitComponentStoryblok)[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (GridStoryblok | PageStoryblok | PageTitleStoryblok | SplitComponentStoryblok)[];
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

export interface SplitComponentStoryblok {
  rightContent?: string;
  leftContent?: string;
  _uid: string;
  component: "splitComponent";
  [k: string]: any;
}
