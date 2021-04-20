export class Node {
  constructor(data, payloads) {
    this.data = data;
    this.payloads = payloads;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data, payload) {
    var match = this.search(this.root, data);
    if (match != null) {
      match.payloads.push(payload);
      return;
    }

    var newNode = new Node(data, [payload]);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    else if (data < node.data) return this.search(node.left, data);
    // if data is less than node's data
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    else return node;
  }

  searchData(data) {
    return this.search(this.root, data);
  }
}
