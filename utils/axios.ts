import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://sdg-ai-lab-dsvi-tool-server.onrender.com/',
  // baseURL: 'http://localhost:3000/',
  // this option allows to receive cookies for this nextJS app
  // withCredentials: true,
  timeout: 1000 * 5,
  timeoutErrorMessage: 'Server may take 1 min to start. Please try again!',
})

export default customFetch
