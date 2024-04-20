import { createFileRoute, notFound } from '@tanstack/react-router'
import { getStoryblokApi, StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import MetaHead from '@/src/components/MetaHead'
import { BlogStoryblok } from '@/component-types-sb';
import PageTitle from '@/src/components/PageTitle/PageTitle';

async function getBlogPost(id: string) {
  try {
    const storyblokApi = getStoryblokApi()
    const blogPostParams = {
      version: import.meta.env.VITE_STORYBLOK_RENDER_TYPE as "published" | "draft" | undefined,
    }
    const blogPost = await storyblokApi.get(`cdn/stories/blog/${id}`, blogPostParams)
    const blogPostData: BlogStoryblok = blogPost.data.story.content

    const blogPostContent = blogPostData

    return { blogPostContent, blogPost }
  } catch (err) {
    throw notFound()
  }
}

export const Route = createFileRoute('/blog/$blogId')({
  component: BlogPage,
  loader: ({ params: { blogId } }) => getBlogPost(blogId),
  notFoundComponent: () => <p>Custom 404</p>

})

function BlogPage() {
  const { blogPostContent, blogPost } = Route.useLoaderData()

  return blogPost && (
    <MetaHead
      title={blogPost.data.story.name}
      description={blogPostContent?.introText || "Jon Pekkarinen - Blog"}
    >
      <div className="pb-6 md:pb-12 lg:pb-16 pt-20 md:pt-48">
        <PageTitle text={blogPostContent.title} />
      </div>
      <>
        {blogPostContent.body.map(blok => (
          <div key={blok._uid} className="pb-6 md:pb-12 lg:pb-16" {...storyblokEditable(blok)}>

            <StoryblokComponent blok={blok} />
          </div>
        ))}
      </>
    </MetaHead>
  )
}