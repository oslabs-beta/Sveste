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
  const map = new Map();
  const { subscribe, set, update } = writable({});
  map["subcribe"] = subscribe;
  map["addGroup"] = (key, obj) => {
    update(() => testStore.set(key, obj));
    console.log(testStore);
  };
  map["deleteGroup"] = (key) => {
    update(() => testStore.delete(key));
    console.log(testStore);
  };
  return map;
}

export const testStore = createStore();
