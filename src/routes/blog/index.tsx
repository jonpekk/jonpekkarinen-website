import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex
})

function BlogIndex() {
  return (
    <p>From the blog</p>
  )
}