import Cookies from 'js-cookie'
import { writable } from 'svelte/store'

const token = null

const { subscribe, set } = writable(token)

const init = () => {
  console.log('getting token')
  const x = Cookies.get('token')
  console.log('x', x)
  if (x) set(x)
  return x
}

const getToken = () => {
  return Cookies.get('token')
}

const storeToken = (t) => {
  console.log('storing token', t)
  set(t)
  Cookies.set('token', t)
}

const reset = () => {
  set(null)
}

export default {
  getToken,
  subscribe,
  reset,
  set,
  storeToken,
  init
}
