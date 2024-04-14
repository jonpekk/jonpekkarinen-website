import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './output.css'
import { routeTree } from './routeTree.gen'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import { StoryblokPageTitle } from './components/PageTitle/PageTitle'
import StoryblokRichText from './components/StoryblokRichText/StoryblokRichText'
import SbImage from './components/Image/SbImage'
import SbGrid from './components/Grid/SbGrid'
import Divider from './components/Divider/Divider'
import SbTwoThirdsSplit from './components/TwoThirdsSplit/SbTwoThirdsSplit'


// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Initialize storyblok
storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    pageTitle: StoryblokPageTitle,
    richText: StoryblokRichText,
    image: SbImage,
    grid: SbGrid,
    divider: Divider,
    twoThirdsSplit: SbTwoThirdsSplit
  },
  apiOptions: {
    region: 'us'
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
