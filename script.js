import buildTree from "./build-tree.js";
import { mergeSort } from "./merge-sort.js"

const Node = (data, leftChild = null, rightChild = null) => {
  return { data, leftChild, rightChild };
};

const Tree = (arr) => {
  // Making sure array is sorted by using merge sort algorithm 
  let sortedArray = mergeSort(arr)
  // Removing duplicates values from array
  sortedArray = [...new Set(sortedArray)]
  // Getting root node and building binary tree
  const root = buildTree(sortedArray);

  // Method to insert node in existing binary tree
  const insertNode = (value, newRoot = root) => {
    // if tree is empty, return a new node
    if (newRoot == null) {
      newRoot = Node(value)
      return newRoot
    }
    /* Compare the inserting element with root and if inserting element 
    is less than root, then recursively call left subtree */
    if (value < newRoot.data) {
      newRoot.leftChild = insertNode(value, newRoot.leftChild)
    }
    // else if it is greater, recursively call right subtree.
    else if (value > newRoot.data) {
      newRoot.rightChild = insertNode(value, newRoot.rightChild)
    }
    return newRoot
  }

  const deleteNode = (value) => {

  }

  return {
    insertNode,
    deleteNode,
    get root() {
      return root;
    },
  };
};

const newTree = Tree([5, 4, 3, 3, 2, 1, 9, 7]);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

newTree.insertNode(10, newTree.root)

prettyPrint(newTree.root)

export { Node }