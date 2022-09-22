import { Block } from "../controllers/blockClass";
import { writable } from "svelte/store";

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

function createTestStore() {
  const data = new Block("root");
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    data,
    addBlock: (block: Block) => {
      update(() => {
        const target = block.parent || testStore.data;
        target.children.push(block);
        return data;
      });
    },
    deleteBlock: (block: Block) => {
      update(() => {
        const target = block.parent || testStore.data;
        const i = target.children.indexOf(block);
        console.log(i);
        if (i === 0) {
          target.children.shift();
        } else if (i === target.children.length) {
          target.children.pop();
        } else {
          target.children = target.children
            .slice(0, i)
            .concat(target.children.slice(i + 1));
        }
        console.log(testStore.data);
        return data;
      });
    },
  };
}

export const idStore = createIdStore();
export const testStore = createTestStore();
