import { idStore, testStore } from "../models/store";

export class Block {
  id: string;
  type: string;
  // parentId: string;
  parent: Block;
  children: Block[];
  value: string;

  constructor(type, parentId = "root0") {
    this.id = idStore.newId(type);
    this.type = type;
    this.parent = type === "root" ? null : this.findById(parentId); // need to change this to refer to the actual Block
    this.children = [];
    this.value = "";
  }

  findById = (id: string) => {
    const search = (node) => {
      if (!node.id) throw `Error: node with id ${id} not found`;
      console.log(node.id === id);
      if (node.id === id) return node;
      for (const child of node.children) {
        search(child);
      }
    };
    return search(testStore.data);
  };
}
