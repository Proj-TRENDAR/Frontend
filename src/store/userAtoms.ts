import { atomWithStorage } from 'jotai/utils'

export const userInfoAtom = atomWithStorage('userInfo', {
  accessToken: null,
  userName: null,
  id: null,
})
