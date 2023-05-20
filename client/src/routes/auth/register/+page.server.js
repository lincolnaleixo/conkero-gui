import axios from 'axios'
import { API_URL } from '../../../services/config'

export const actions = {
  default: async ({ request, cookies }) => {
    console.log('signing up..')
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    const payload = { email, password }

    const response = await axios.post(`${API_URL}/auth/signup`, payload)
    const resData = response.data
    console.log('response from signup', resData)
    if (resData.error) return { error: resData.error }
    cookies.set('token', resData.data.token)
    return { data: resData.data.user, error: null }
  }
}
