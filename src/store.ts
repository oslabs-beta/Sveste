import { writable } from "svelte/store";

function createStore() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    addGroup: (key, obj) => {
      update(() => (testStore[key] = obj));
      console.log(testStore);
    },
    deleteGroup: (key) => {
      update(() => delete testStore[key]);
      console.log(testStore);
    },
  };
}

export const testStore = createStore();
