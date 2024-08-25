import axios from 'axios'
import { API_PATHS } from '@/constants.ts'

export const changeTheme = async (themeColor: number): Promise<{ themeColor: number } | null> => {
  try {
    const result = await axios.put(API_PATHS.changeTheme, { themeColor })
    if (result.status === 200) {
      return { themeColor: result.data.themeColor }
    } else {
      console.log('Unexpected response status:', result.status)
      return null
    }
  } catch (err) {
    console.error('err', err)
    return null
  }
}
