export const CONSTANTS = {
  get API_URL() {
    const url = '/web-server' // import.meta.env.VITE_API_URL
    if (!url) {
      throw new Error('API_URL 환경변수가 설정되지 않았습니다.')
    }
    return url
  },
}

export const API_PATHS = {
  login: '/auth/login',
  logout: '/auth/logout',
  todo: '/todo',
}
