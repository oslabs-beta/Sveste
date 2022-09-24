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

function createBlockStore() {
  const data = {};
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    data,
    set,
    upsertBlock: (node: Block) => {
      update(() => {
        data[node.id] = node;
        testStore.addBlock(node);
        return data;
      });
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
        const parent = block.parent || testStore.data;
        parent.children.push(block);
        console.log(data);
        return data;
      });
    },

    deleteBlock: (node: Block) => {
      update(() => {
        const parent = node.parent;
        const i = parent.children.indexOf(node);
        if (i === 0) {
          parent.children.shift();
        } else if (i === parent.children.length) {
          parent.children.pop();
        } else {
          parent.children = parent.children
            .slice(0, i)
            .concat(parent.children.slice(i + 1));
        }
        return data;
      });
    },
  };
}

export const blockStore = createBlockStore();
export const idStore = createIdStore();
export const testStore = createTestStore();
