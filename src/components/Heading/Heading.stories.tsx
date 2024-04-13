import Heading from "./Heading";

export default {
  component: Heading,
  title: 'Heading',
  tags: ['autodocs'],
};

export const Default = {
  decorators: [
    () => (
      <>
        <Heading style='h1' tag='h1'>Heading 1</Heading>
        <Heading style='h2' tag='h2'>Heading 2</Heading>
        <Heading style='h3' tag='h3'>Heading 3</Heading>
        <Heading style='h4' tag='h4'>Heading 4</Heading>
        <Heading style='h5' tag='h5'>Heading 5</Heading>
        <Heading style='h6' tag='h6'>Heading 6</Heading>
      </>
    )
  ]
}

export const H1 = {
  args: {
    children: "Heading 1",
    tag: 'h1',
    style: 'h1'
  }
}

export const H2 = {
  args: {
    children: "Heading 2",
    tag: 'h2',
    style: 'h2'
  }
}

export const H3 = {
  args: {
    children: "Heading 3",
    tag: 'h3',
    style: 'h3'
  }
}

export const H4 = {
  args: {
    children: "Heading 4",
    tag: 'h4',
    style: 'h4'
  }
}

export const H5 = {
  args: {
    children: "Heading 5",
    tag: 'h5',
    style: 'h5'
  }
}

export const H6 = {
  args: {
    children: "Heading 6",
    tag: 'h6',
    style: 'h6'
  }
}
