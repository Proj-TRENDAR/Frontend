import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const KakaoLogin = () => {
  const navigate = useNavigate()
  const userInfoAtom = atomWithStorage('userInfo', {
    accessToken: null,
    userName: null,
    id: null,
  })
  const [, setUserInfo] = useAtom(userInfoAtom)

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
    const config = {
      method: 'get',
      url: '/web-server/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { code, social: 'kakao' },
    }
    axios(config)
      .then((res: any) => {
        console.log(res)
        setUserInfo({
          accessToken: res.data.accessToken,
          userName: res.data.userName,
          id: res.data.id,
        })
        navigate('/')
      })
      .catch((err: any) => {
        console.log(err)
        setUserInfo({
          accessToken: null,
          userName: null,
          id: null,
        })
        //temp
        alert('로그인에 실패하였습니다.')
        navigate('/login')
      })
  }, [])
  return <></>
}

export default KakaoLogin
