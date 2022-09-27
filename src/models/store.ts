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
        const parent = blockStore.data[node.parentId] || testStore.data;
        node.parent = parent;
        parent.children.push(data[node.id]);
        testStore.update(() => testStore.data);
        return data;
      });
    },
    deleteBlock: (node: Block) => {
      update(() => {
        const targetId = node.id;
        // remove ref parent
        const parent = node.parent || testStore.data;
        console.log(parent);
        let i = 0;
        let target = 0;
        while (i < parent.children.length) {
          let child = parent.children[i];
          if (child.id == targetId) {
            target = i;
          }
          i++;
        }
        if (i === 0) {
          parent.children.shift();
        } else if (i === parent.children.length) {
          parent.children.pop();
        } else {
          parent.children = parent.children
            .slice(0, i)
            .concat(parent.children.slice(i + 1));
        }
        testStore.update(() => testStore.data);
        data[targetId].id = `old_${targetId}`;
        console.log(data);
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
    update,
  };
}

export const blockStore = createBlockStore();
export const idStore = createIdStore();
export const testStore = createTestStore();
