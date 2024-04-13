import { createFileRoute } from '@tanstack/react-router'
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import MetaHead from '../components/MetaHead'
import { PageStoryblok } from '@/component-types-sb'
import Heading from '../components/Heading/Heading';

// Design inspo - https://dribbble.com/shots/23114007-Photo-Centric-Personal-Blog-Landing-Page
// Another possibility - https://timmyomahony.com/

async function getHomePage() {
  try {
    const storyblokApi = getStoryblokApi()
    const homePageParams = {
      version: import.meta.env.VITE_STORYBLOK_RENDER_TYPE as "published" | "draft" | undefined,
    }
    const homePage = await storyblokApi.get("cdn/stories/home", homePageParams)
    const homePageData: PageStoryblok | undefined = homePage?.data?.story?.content

    const homePageContent = homePageData?.body || []

    return homePageContent
  } catch (err) {
    console.warn(err)
    return null
  }
}

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: getHomePage
})

function HomePage() {
  const data = Route.useLoaderData()

  return data && (
    <MetaHead
      title="Home Page!"
      description="This is the description"
    >
      <div className="flex">
        <div>
          <h1>Jon Pekkarinen</h1>
          <Heading style="h1" tag="h2">Need to fix storybook's font's next time im working on this</Heading>
          {data.map(blok => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
        <div>
        </div>
      </div>
    </MetaHead>
  )
}