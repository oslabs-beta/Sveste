import { writable } from "svelte/store";

function createTestStore() {
  const data = new Map();
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    data,
    createGroup: () => {
      let key = idStore.newId("group");
      let obj = new Map();
      obj.set("id", key);
      update(() => data.set(key, obj));
      console.log(testStore);
      return obj;
    },
    deleteGroup: (key) => {
      update(() => data.delete(key));
      console.log(testStore);
    },
  };
}

function createIdStore() {
  const data = new Map();
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    data,
    newId: (type: string) => {
      let id: number;
      update(() => {
        let val = data.has(type) ? data.get(type) : -1;
        data.set(type, val + 1);
        id = data.get(type);
        return "done";
      });
      return type + id;
    },
  };
}

export const testStore = createTestStore();
export const idStore = createIdStore();
