import { createFileRoute, notFound } from '@tanstack/react-router'
import { getStoryblokApi, ISbStories, ISbStoryData } from "@storyblok/react/rsc";
import MetaHead from '@/src/components/MetaHead'
import { BlogIndexStoryblok, BlogStoryblok } from '@/component-types-sb';
import Link from '@/src/components/Link/Link';
import Heading from '@/src/components/Heading/Heading';
import PageTitle from '@/src/components/PageTitle/PageTitle';
import { StoryblokStory } from 'storyblok-generate-ts'

async function getBlogIndex() {
  try {
    const storyblokApi = getStoryblokApi()
    const blogPageParams = {
      version: import.meta.env.VITE_STORYBLOK_RENDER_TYPE as "published" | "draft" | undefined,
      resolve_relations: 'blogIndex.featuredBlog'
    }
    const blogPage = await storyblokApi.get(`cdn/stories/blog/`, blogPageParams)
    const blogPageData: BlogIndexStoryblok = blogPage.data.story.content

    const blogParams = {
      version: import.meta.env.VITE_STORYBLOK_RENDER_TYPE as "published" | "draft" | undefined,
      content_type: 'blog'
    }
    const blogsRes = await storyblokApi.get(`cdn/stories`, blogParams)
    const blogs: ISbStories = blogsRes

    return { blogPageData, blogs }

  } catch (err) {
    throw notFound()
  }
}

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
  loader: getBlogIndex,
  notFoundComponent: () => <p>Custom 404</p>
})

function BlogIndex() {
  const { blogPageData, blogs } = Route.useLoaderData();

  const featuredBlog = blogPageData.featuredBlog as StoryblokStory<BlogStoryblok>

  const featuredBlogContent = featuredBlog.content

  return (
    <MetaHead
      title={blogPageData.pageTitle}
      description={`${blogPageData.pageTitle} - Jon Pekkarinen`}
    >
      <PageTitle text={blogPageData.pageTitle} />
      <div className='py-10'>
        <Heading tag='h2' style='h4'>Featured Content</Heading>
        <p>{featuredBlogContent.title}</p>
      </div>
      <div className='grid md:grid-cols-3 gap-6 md:gap-0'>
        <div className='md:col-span-1'>
          <Heading tag='h2' style='h4'>All Blogs</Heading>
        </div>
        <ul className='col-span-2'>
          {blogs.data.stories.map((blog: ISbStoryData) => (
            <li key={blog.content._uid} className='pb-14'>
              <Link href={blog.slug} linkColor='text-black' style="title"><Heading tag='h3' style='h3'>{blog.content.title}</Heading></Link>
              {blog.published_at && <p>{blog.published_at}</p>}
              <p className='leading-normal'>{blog.content.introText}</p>
            </li>
          ))}
        </ul>
      </div>
    </MetaHead>
  )
}