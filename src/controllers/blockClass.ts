import { idStore, testStore } from "../models/store";

export class Block {
  id: string;
  type: string;
  parentId: string;
  parent: Block;
  children: Block[];
  value: string;

  constructor(type, parentId = "root0") {
    this.id = idStore.newId(type);
    this.type = type;
    this.parentId = parentId;
    this.parent = type === "root" ? null : testStore.findById(parentId);
    this.value = "";
    this.children = [];
  }

  findById = (targetId: string, root: Block) => {
    const search = (node) => {
      if (!node.id) throw `Error: node with id ${targetId} not found`;
      if (node.id === targetId) return node;
      for (const child of node.children) {
        search(child);
      }
    };
    return search(root);
  };
}
