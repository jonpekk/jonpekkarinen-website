import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navigation from '../components/Navigation/Navigation'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Outlet />
    </>
  ),
})