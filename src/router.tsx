import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from '@layouts/Layout'
import LoginLayout from '@layouts/Login'
import GuideLayout from '@layouts/Guide'
import Home from '@pages/Home'
import RoutineList from '@pages/RoutineList'
import Login from '@pages/Login'
import KakaoLogin from '@pages/Login/Kakao'
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
      <Route element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="login/kakao" element={<KakaoLogin />} />
      </Route>
      <Route element={<GuideLayout />}>
        <Route path="guide" element={<Guide />} />
      </Route>
      <Route path="components-guide" element={<ComponentsGuide />} />
    </>
  )
)

export default router
