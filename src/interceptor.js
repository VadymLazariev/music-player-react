import axios from 'axios'

export default {
  setupInterceptors: store => {
    axios.interceptors.response.use(response => {
      return response
    }, error => {
      if (error.response.status === 401) {
        //store.dispatch(logoutUser());
        console.log('log out');
      }
      return Promise.reject(error)
    })
  },
}