import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from '@layouts/Layout'
import LoginLayout from '@layouts/Login'
import Home from '@pages/Home'
import RoutineList from '@pages/RoutineList'
import Login from '@pages/Login'
import Guide from '@pages/Guide'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="routine-list" element={<RoutineList />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="guide" element={<Guide />} />
      </Route>
    </>
  )
)

export default router
