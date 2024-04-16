import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'

import { userInfoAtom } from '@/store'
import { login } from '@/api/Auth/authApi.ts'

const KakaoLogin = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [isRequest, setRequest] = useState(false)

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
    const kakaoLogin = async (): Promise<void> => {
      try {
        const result = await login(code, 'kakao')
        console.log('data', result)
        setUserInfo({
          accessToken: result.accessToken,
          userName: result.userName,
          id: result.id,
        })
      } catch (err) {
        console.debug('로그인 실패', err)
        // NOTICE: 배포 시 주석 삭제
        // setUserInfo({
        //   accessToken: null,
        //   userName: null,
        //   id: null,
        // })
      } finally {
        setRequest(true)
      }
    }
    kakaoLogin()
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
