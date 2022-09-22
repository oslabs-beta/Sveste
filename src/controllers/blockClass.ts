import { idStore, testStore } from "../models/store";

export class Block {
  id: string;
  type: string;
  parentId: string;
  children: Block[];
  value: string;

  constructor(type, parentId = "root0") {
    (this.id = idStore.newId(type)), (this.type = type);
    this.parentId = parentId; // need to change this to refer to the actual Block
    this.children = [];
    this.value = "";
  }
}
