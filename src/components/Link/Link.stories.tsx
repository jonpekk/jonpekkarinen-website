import Link from "./Link";

export default {
  component: Link,
  title: 'Link',
  tags: ['autodocs'],
};

// isExternal is needed here because otherwise, storybook tries to render
// tanstack router's link, and that throws an error.
// Value of resolving the error seems low at this point
// TODO: Keep an eye on this thread to see if anything comes of it - https://github.com/TanStack/router/discussions/952
export const Default = {
  args: {
    isExternal: true,
    children: "Link Text",
    href: "/"
  }
}