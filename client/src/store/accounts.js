import { writable } from 'svelte/store'

const accounts = []

const { subscribe, set } = writable(accounts)

const reset = () => {
  set(null)
}

export default {
  subscribe,
  reset,
  set
}
