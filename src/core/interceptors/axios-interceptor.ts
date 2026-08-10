import axios from 'axios'

export function axiosInterceptor() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }

      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json'
      }

      if (!config.headers['Accept']) {
        config.headers['Accept'] = 'application/json'
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  )
}
