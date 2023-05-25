import { writable } from 'svelte/store'

const token = null

const { subscribe, set } = writable(token)


const reset = () => {
  set(null)
}

export default {
  subscribe,
  reset,
  set,
}
