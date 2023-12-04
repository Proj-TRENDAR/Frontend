import KakaoLogo from '@/assets/image/kakaoLogo.svg'

const KakaoLogin = () => {
  const CLIENT_ID = `${import.meta.env.VITE_KAKAO_REST_API_KEY}`
  const REDIRECT_URI = `${import.meta.env.VITE_KAKAO_REDIRECT_URL}`
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  // FIXME: img 태그를 svg or KakaoLogo를 바로 사용하는 방안 적용
  return <img src={KakaoLogo} alt="Kakao Logo" style={{ cursor: 'pointer' }} onClick={handleLogin} />
}

export default KakaoLogin
