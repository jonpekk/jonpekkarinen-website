import { createFileRoute } from '@tanstack/react-router'
import { component } from './component'

export const Route = createFileRoute('/about')({
  component
})