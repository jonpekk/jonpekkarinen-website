import { createFileRoute } from '@tanstack/react-router'
import MetaHead from '../components/MetaHead'

export const Route = createFileRoute('/')({
  component: HomePage
})

function HomePage() {
  return (
    <MetaHead
      title="Home Page"
      description="This is the description"
    >
      <div className="flex">
        <div>
          <h1>Jon Pekkarinen (Remove tailwind CND from index.html before going live)</h1>
          <p>Software Engineer</p>
        </div>
        <div>
          Image here
        </div>
      </div>
    </MetaHead>
  )
}