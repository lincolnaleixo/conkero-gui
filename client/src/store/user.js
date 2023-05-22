import { writable } from 'svelte/store'

const user = {}

const { subscribe, set } = writable(user)

const reset = () => {
  set(null)
}

export default {
  subscribe,
  reset,
  set
}
