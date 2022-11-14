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

  

  return {
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

prettyPrint(newTree.root)

export { Node }