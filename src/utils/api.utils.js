import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://mongodb://localhost:27017/virtual-gatherings',
    })

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          }
        }
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          window.location = '/'
        }
        throw error
      }
    )
  }

  signup = async (signupInfo) => {
    try {
      await this.api.post('/signup', signupInfo)
    } catch (error) {
      throw error.response.data.message
    }
  }

  login = async (loginInfo) => {
    try {
      const { data } = await this.api.post('/login', loginInfo)
      localStorage.setItem('token', data.token)
    } catch (error) {
      throw error.response.data.message
    }
  }

  getMeetings = async () => {
    try {
      const { data } = await this.api.get('/online-meetings')
      return data
    } catch (error) {
      throw error
    }
  }

  putUsername = async (username) => {
    try {
      await this.api.put('/user/edit-username', username)
    } catch (error) {
      throw error
    }
  }

  putPassword = async (password) => {
    try {
      await this.api.put('/user/edit-password', password)
    } catch (error) {
      throw error
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Api()
