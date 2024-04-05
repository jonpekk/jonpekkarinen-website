import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <p>Navigation!</p>
      <Outlet />
    </>
  ),
})