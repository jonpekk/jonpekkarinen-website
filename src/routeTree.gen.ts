/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as BlogBlogIdImport } from './routes/blog/$blogId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const BlogBlogIdRoute = BlogBlogIdImport.update({
  path: '/blog/$blogId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blogId': {
      preLoaderRoute: typeof BlogBlogIdImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BlogBlogIdRoute,
  AboutIndexRoute,
  BlogIndexRoute,
])

/* prettier-ignore-end */
