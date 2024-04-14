import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: AboutPage
})

function AboutPage() {
  return (
    <p>Hello from the about page</p>
  )
}