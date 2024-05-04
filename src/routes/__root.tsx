// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import * as React from 'react'
import {
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { DehydrateRouter } from '@tanstack/react-router-server/client'
import Navigation from '../components/Navigation/Navigation'
import '@/src/output.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import { StoryblokPageTitle } from '@/src/components/PageTitle/PageTitle'
import StoryblokRichText from '@/src/components/StoryblokRichText/StoryblokRichText'
import SbImage from '@/src/components/Image/SbImage'
import SbGrid from '@/src/components/Grid/SbGrid'
import Divider from '@/src/components/Divider/Divider'
import SbTwoThirdsSplit from '@/src/components/TwoThirdsSplit/SbTwoThirdsSplit'

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


export const Route = createRootRouteWithContext()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
        <script
          type="module"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            `,
          }}
        />
        <script type="module" src="/@vite/client" />
        <script type="module" src="/src/entry-client.tsx" />
        <link rel='stylesheet' href='/src/output.css' />
      </head>
      <body>
        <Navigation />
        <main>
          <Outlet />
        </main>
        <TanStackRouterDevtools position="bottom-right" />
        <DehydrateRouter />
      </body>
    </html>
  )
}
