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
        if (testStore.findById(node.id)) {
          testStore.updateBlockVal(node.id, node.value);
        } else {
          testStore.addBlock(node);
        }
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
    findById: (id: string) => {
      const search = (node: Block) => {
        if (!node.id) throw `Error: node with id ${id} not found`;
        if (node.id === id) return node;
        for (let child of node.children) {
          return search(child);
        }
      };
      return search(testStore.data);
    },

    updateBlockVal: (id: string, value: string) => {
      update(() => {
        const target = testStore.findById(id);
        target.value = value;
        console.log(testStore);
        return data;
      });
    },

    addBlock: (block: Block) => {
      update(() => {
        const parent = testStore.findById(block.parentId) || testStore.data;
        parent.children.push(block);
        return data;
      });
    },

    deleteBlock: (targetId: string, parentId: string) => {
      update(() => {
        let target = testStore.findById(targetId);
        let parent = testStore.findById(parentId);
        console.log(targetId, target);
        console.log(parent);
        const i = parent.children.indexOf(target);
        if (i === 0) {
          parent.children.shift();
        } else if (i === parent.children.length) {
          parent.children.pop();
        } else {
          parent.children = parent.children
            .slice(0, i)
            .concat(parent.children.slice(i + 1));
        }
        console.log(data);
        return data;
      });
    },
  };
}

export const blockStore = createBlockStore();
export const idStore = createIdStore();
export const testStore = createTestStore();
