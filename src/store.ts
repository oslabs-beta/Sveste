import { writable } from "svelte/store";

/**
 * @function createTestStore adds and deletes components to a Map as you interact
 * with the Test Form. This is the source of truth for any function generating test code.
 * @returns {Map} - the data store. You should only access this via a subscribed variable.
 */
function createTestStore() {
  const data = new Map();
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    data,
    /**
     * @method createGroup - creates a new Group with a unique ID in testStore.
     * @returns {object} a new Group object.
     */
    createGroup: () => {
      let key = idStore.newId("group");
      let obj = new Map();
      obj.set("id", key);
      update(() => data.set(key, obj));
      console.log(testStore);
      return obj;
    },
    /**
     * @method deleteGroup - deletes a group from testStore.
     * @arg key - the unique ID of the group.
     * @returns {object} - a new Group object.
     */
    deleteGroup: (key) => {
      update(() => data.delete(key));
      console.log(testStore);
    },
  };
}

/**
 * @function createIdStore builds unique ids for different types of elements.
 * Use the `upsertID` method to increment a new ID. Use a subscribed variable to
 * Retrieve the latest ID number.
 * @returns {Map} - the store. You should only access this via a subscribed variable.
 */
function createIdStore() {
  const data = new Map();
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    data,
    /**
     * @method nextId creates a new ID, or increments from the last one if
     * the component type already exists.
     * @param {string} type - the type of component you're creating an ID for.
     * @return {string} - your new id.
     */
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
