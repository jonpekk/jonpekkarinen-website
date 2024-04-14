import { createFileRoute } from '@tanstack/react-router'
import { getStoryblokApi, StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import MetaHead from '../components/MetaHead'
import { PageStoryblok } from '@/component-types-sb'

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
      title="Jon Pekkarinen - Welcome!"
      description="I am a full stack developer out of Boston with a passion for code and movies"
    >
      <div className="flex">
        <div>
          {data.map(blok => (
            <div key={blok._uid} className="pb-6 md:pb-12 lg:pb-16" {...storyblokEditable(blok)}>
              <StoryblokComponent blok={blok} />
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
    </MetaHead>
  )
}