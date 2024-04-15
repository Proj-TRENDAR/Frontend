import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'

import { userInfoAtom } from '@/store'

const KakaoLogin = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [isRequest, setRequest] = useState(false)

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
    const config = {
      method: 'get',
      url: '/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { code, social: 'kakao' },
    }

    axios(config)
      .then((res: any) => {
        console.debug(res)
        setUserInfo({
          accessToken: res.data.accessToken,
          userName: res.data.userName,
          id: res.data.id,
        })
      })
      .catch((err: any) => {
        console.debug(err)
      })
      .then(() => {
        setRequest(true)
      })
  }, [])

  useEffect(() => {
    if (isRequest) {
      if (userInfo.accessToken) {
        navigate('/')
      } else {
        alert('로그인에 실패하였습니다.')
        navigate('/login')
      }
    }
  }, [isRequest])

  return <></>
}

export default KakaoLogin
