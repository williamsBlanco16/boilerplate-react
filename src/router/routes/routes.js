import { Home } from '../../componets/Home'
import { createBrowserRouter } from 'react-router-dom'

const homeRoute = {
  path: '/',
  element: <Home />
}

export const routesRoot = createBrowserRouter([homeRoute])
