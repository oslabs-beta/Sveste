import { writable } from "svelte/store";

function createStore() {
  const data = new Map();
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    data,
    addGroup: (key, obj) => {
      update(() => store.data.set(key, obj));
    },
    deleteGroup: (key) => {
      update(() => store.data.delete(key));
    },
  };
}

export const store = createStore();
