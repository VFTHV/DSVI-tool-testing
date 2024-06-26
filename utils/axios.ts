import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://sdg-ai-lab-dsvi-tool-server.onrender.com/',
  // baseURL: 'http://localhost:3000/',
  // this option allows to receive cookies for this nextJS app
  // withCredentials: true,
  timeout: 1000 * 5,
  timeoutErrorMessage:
    'Error: server slow start or unknown error occurred! Try again!!!',
})

export default customFetch
