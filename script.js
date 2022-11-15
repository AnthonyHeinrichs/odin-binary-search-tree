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

  const minValue = (root) => {
    let minv = root.data;
    /* Go through the root's left child node until the child node 
    returns null, then we have min value */
      while (root.leftChild != null)
      {
        minv = root.leftChild.data;
        root = root.leftChild;
      }
      return minv;
  } 

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

  const deleteNode = (value, newRoot = root) => {
    // Check if root is null and return root if true
    if (newRoot == null) {
      return newRoot
    }

    // Find node through recursive calls for ancestors of nodes to be removed
    if (value < newRoot.data) {
      newRoot.leftChild = deleteNode(value, newRoot.leftChild)
    } else if (value > newRoot.data) {
      newRoot.rightChild = deleteNode(value, newRoot.rightChild)
    }

    else {
      // If left child of node is null, return right child
      if (newRoot.leftChild == null)
          return newRoot.rightChild;
      // If right child of node is null, return left child
      else if (newRoot.rightChild == null)
          return newRoot.leftChild;

      // Set successor (smallest in the right subtree)
      newRoot.data = minValue(newRoot.rightChild);

      // Delete the inorder successor
      newRoot.rightChild = deleteNode(newRoot.data, newRoot.rightChild);
    }
    return newRoot;
  }

  const find = (value, newRoot = root) => {
    /* Check first if root is null or if passed value is the root value, t
    hen return root */
    if (newRoot == null || newRoot.data == value) {
      return newRoot
    }
    /* If value to find is less than root value, 
    then recursively call find() with roots left child */
    if (value < newRoot.data) {
      return find(value, newRoot.leftChild)
    } else {
    /* else value to find must be bigger, 
    then recursively call find() with roots right child */
      return find(value, newRoot.rightChild)
    }
  }

  const levelOrder = (arr = [], queue = [], newRoot = root) => {
    // If there is no tree, return null tree
    if (newRoot === null) {
      return newRoot;
    }
    // Read root data and push it to array
    arr.push(newRoot.data);

    // Go through each child at the main level and push to queue arr
    queue.push(newRoot.leftChild);
    queue.push(newRoot.rightChild);

    // Move down one level and recursively call levelOrder
    while (queue.length) {
      // Get the root of the next level
      const nextLevelRoot = queue[0];
      // Remove first element from queue and return
      queue.shift();
      // Call levelOrder again with new root
      levelOrder(arr, queue, nextLevelRoot)
    }
    return arr;
  }

  return {
    minValue,
    insertNode,
    deleteNode,
    find,
    levelOrder,
    get root() {
      return root;
    },
  };
};



const newTree = Tree([5, 4, 2, 1, 9, 94, 5, 43, 24, 5, 22, 7]);

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

console.log(newTree.levelOrder())

export { Node }