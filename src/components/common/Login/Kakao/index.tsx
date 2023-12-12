import KakaoLogo from '@/assets/image/kakaoLogo.svg?react'

export default function KakaoLogin() {
  const CLIENT_ID = `${import.meta.env.VITE_KAKAO_REST_API_KEY}`
  const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URL}`
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  return (
    <>
      <KakaoLogo style={{ cursor: 'pointer' }} onClick={handleLogin} />
    </>
  )
}
