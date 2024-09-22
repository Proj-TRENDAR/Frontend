import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import MainLayout from '@layouts/Main'
import LoginLayout from '@layouts/Login'
import GuideLayout from '@layouts/Guide'
import Home from '@pages/Home'
import RoutineList from '@pages/RoutineList'
import Login from '@pages/Login'
import KakaoLogin from '@pages/Login/Kakao'
import Guide from '@pages/Guide'
import ComponentsGuide from '@pages/ComponentsGuide'
import WeeklyTodoList from '@pages/WeeklyTodoList'
import EventCreate from '@pages/EventCreate'
import EventDetail from '@pages/EventDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="routine-list" element={<RoutineList />} />
        <Route path="to-do-list" element={<WeeklyTodoList />} />
        <Route path="event-create" element={<EventCreate />} />
        <Route path="event/:idx" element={<EventDetail />} />
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
