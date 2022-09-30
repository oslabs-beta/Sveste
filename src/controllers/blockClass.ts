import { idStore, testStore, blockStore } from "../models/store";

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
    this.parent = blockStore[parentId];
    this.value = "";
    this.children = [];
  }
}
