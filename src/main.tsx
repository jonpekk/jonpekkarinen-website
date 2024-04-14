import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './output.css'
import { routeTree } from './routeTree.gen'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import SplitComponent from './components/SplitComponent/SplitComponent'
import { StoryblokPageTitle } from './components/PageTitle/PageTitle'


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
    splitComponent: SplitComponent,
    pageTitle: StoryblokPageTitle
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
