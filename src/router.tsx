import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from '@layouts/Layout'
import Home from '@pages/Home'
import RoutineList from '@pages/RoutineList'
import Login from '@pages/Login'
import Guide from '@pages/Guide'
import ComponentsGuide from '@pages/ComponentsGuide'
import TodoList from '@pages/TodoList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="routine-list" element={<RoutineList />} />
        <Route path="to-do-list" element={<TodoList />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="guide" element={<Guide />} />
      <Route path="components-guide" element={<ComponentsGuide />} />
    </>
  )
)

export default router
