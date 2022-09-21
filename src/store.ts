import { writable } from "svelte/store";

// function createStore() {
//   const { subscribe, set, update } = writable({});

//   return {
//     subscribe,
//     addGroup: (key, obj) => {
//       update(() => testStore[key] = obj);
//       console.log(testStore);
//     },
//     deleteGroup: (key) => {
//       update(() => delete testStore[key]);
//       console.log(testStore);
//     }
//   };
// }

function createStore() {
  const data = new Map();
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    data,
    addGroup: (key, obj) => {
      update(() => store.data.set(key, obj));
      // console.log(store);
    },
    deleteGroup: (key) => {
      update(() => store.data.delete(key));
      // console.log(store);
    },
  };
}

export const store = createStore();
