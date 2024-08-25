import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'

import { GlobalStyle } from '@/styles/GlobalStyle.ts'
import router from './router.tsx'
import { CONSTANTS } from '@/constants.ts'
import { useAtom } from 'jotai'
import { themeAtom } from '@/store'

axios.defaults.baseURL = CONSTANTS.API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.request.use(config => {
  if (localStorage.userInfo) {
    const accessToken = JSON.parse(localStorage.userInfo).accessToken
    if (accessToken && config.headers) config.headers.authorization = `Bearer ${accessToken}`
  }
  return config
})

const Main: React.FC = () => {
  const [theme] = useAtom(themeAtom)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
