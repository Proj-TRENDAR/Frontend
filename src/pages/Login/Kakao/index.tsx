import { useEffect } from 'react'
import axios from 'axios'

export default function KakaoLogin() {
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
        // TODO: 로그인 시 route 기능 및 토큰 저장 추가
        console.log(res)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])
  return <></>
}
