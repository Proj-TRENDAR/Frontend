import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from '@layouts/Layout'
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
      <Route path="login" element={<Login />} />
      <Route path="guide" element={<Guide />} />
    </>
  )
)

export default router
