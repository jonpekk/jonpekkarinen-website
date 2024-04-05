import { createFileRoute } from '@tanstack/react-router'
import MetaHead from '../components/MetaHead'

async function getHomePage() {
  try {
    const response = await fetch('public/data/homePage.json')
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const json = await response.json()

    return json
  } catch (err) {
    console.warn(err)
    return {}
  }
}

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: getHomePage
})

function HomePage() {
  const data = Route.useLoaderData()

  // Next step, convert hero into its own, reusable split component.
  // Everything from here on should be built with the intention of putting a CMS behind it.
  // Should I just use next? Not sure. This is probably some good practice with more complex loaders.

  return data.Hero?.heading && (
    <MetaHead
      title="Home Page!"
      description="This is the description"
    >
      <div className="flex">
        <div>
          <h1>{data.Hero.heading}</h1>
          <p>{data.Hero.subHeading}</p>
        </div>
        <div>
          Image here
        </div>
      </div>
    </MetaHead>
  )
}