import Node from "./tree-node.js";
import buildTree from "./build-tree.js";
import { mergeSort } from "./merge-sort.js";

const Tree = (arr) => {
  // Making sure array is sorted by using merge sort algorithm
  let sortedArray = mergeSort(arr);
  // Removing duplicates values from array
  sortedArray = [...new Set(sortedArray)];
  // Getting root node and building binary tree
  const root = buildTree(sortedArray);

  const minValue = (root) => {
    let minv = root.data;
    /* Go through the root's left child node until the child node 
    returns null, then we have min value */
    while (root.leftChild != null) {
      minv = root.leftChild.data;
      root = root.leftChild;
    }
    return minv;
  };

  // Method to insert node in existing binary tree
  const insertNode = (value, newRoot = root) => {
    // if tree is empty, return a new node
    if (newRoot == null) {
      newRoot = Node(value);
      return newRoot;
    }
    /* Compare the inserting element with root and if inserting element 
    is less than root, then recursively call left subtree */
    if (value < newRoot.data) {
      newRoot.leftChild = insertNode(value, newRoot.leftChild);
    }
    // else if it is greater, recursively call right subtree.
    else if (value > newRoot.data) {
      newRoot.rightChild = insertNode(value, newRoot.rightChild);
    }
    return newRoot;
  };

  const deleteNode = (value, delRoot = root) => {
    // Check if root is null and return root if true
    if (delRoot == null) {
      return delRoot;
    }

    // Find node through recursive calls for ancestors of nodes to be removed
    if (value < delRoot.data) {
      delRoot.leftChild = deleteNode(value, delRoot.leftChild);
    } else if (value > delRoot.data) {
      delRoot.rightChild = deleteNode(value, delRoot.rightChild);
    } else {
      // If left child of node is null, return right child
      if (delRoot.leftChild == null) return delRoot.rightChild;
      // If right child of node is null, return left child
      else if (delRoot.rightChild == null) return delRoot.leftChild;

      // Set successor (smallest in the right subtree)
      delRoot.data = minValue(delRoot.rightChild);

      // Delete the inorder successor
      delRoot.rightChild = deleteNode(delRoot.data, delRoot.rightChild);
    }
    return delRoot;
  };

  const find = (value, findRoot = root) => {
    /* Check first if root is null or if passed value is the root value, t
    hen return root */
    if (findRoot == null || findRoot.data == value) {
      return findRoot;
    }
    /* If value to find is less than root value, 
    then recursively call find() with roots left child */
    if (value < findRoot.data) {
      return find(value, findRoot.leftChild);
    } else {
      /* else value to find must be bigger, 
    then recursively call find() with roots right child */
      return find(value, findRoot.rightChild);
    }
  };

  const levelOrder = (arr = [], queue = [], showRoot = root) => {
    // If there is no tree, return null tree
    if (showRoot === null) {
      return showRoot;
    }
    // Read root data and push it to array
    arr.push(showRoot.data);

    // Go through each child at the main level and push to queue arr
    queue.push(showRoot.leftChild);
    queue.push(showRoot.rightChild);

    // Move down one level and recursively call levelOrder
    while (queue.length) {
      // Get the root of the next level
      const nextLevelRoot = queue[0];
      // Remove first element from queue and return
      queue.shift();
      // Call levelOrder again with new root
      levelOrder(arr, queue, nextLevelRoot);
    }
    return arr;
  };

  const inorder = (arr = [], showRoot = root) => {
    if (showRoot == null) {
      return showRoot;
    }
    // Traverse to furtherst left child of root through recursion
    inorder(arr, showRoot.leftChild);
    // If furthest left or right child, push that node data to array
    arr.push(showRoot.data);
    // Then traverse to furthest right child through recurssion
    inorder(arr, showRoot.rightChild);
    return arr;
  };

  const preorder = (arr = [], showRoot = root) => {
    if (showRoot == null) {
      return showRoot;
    }
    // First push root data to array before each traversal
    arr.push(showRoot.data);
    // Traverse to furtherst left child of root through recursion
    preorder(arr, showRoot.leftChild);
    // Then traverse to furthest right child through recurssion
    preorder(arr, showRoot.rightChild);
    return arr;
  };

  const postorder = (arr = [], showRoot = root) => {
    if (showRoot == null) {
      return showRoot;
    }
    // Traverse to furtherst left child of root through recursion
    postorder(arr, showRoot.leftChild);
    // Then traverse to furthest right child through recurssion
    postorder(arr, showRoot.rightChild);
    // Then push to array after traversing to lowest children first
    arr.push(showRoot.data);
    return arr;
  };

  const height = (readRoot = root) => {
    // First check that there is a root node, return height of 0 if not
    if (readRoot == null) {
      return 0;
    }
    // Recursively call height on left children to compare with right children
    let leftChildHeight = height(readRoot.leftChild);
    // Recursively call height on right children to compare with left children
    let rightChildHeight = height(readRoot.rightChild);
    // If left child is greater than right child, add 1 to left child and return
    if (leftChildHeight > rightChildHeight) {
      return leftChildHeight + 1;
    } else {
      // Else, add 1 to right child and return
      return rightChildHeight + 1;
    }
  };

  const depth = (node, readRoot = root, num = 0) => {
    if (node == null) {
      return  `Node doesn't exist`
    }

    if (readRoot == null) {
      return `Tree doesn't exist`
    }

    if (node === readRoot) {
      return num
    }

    if (node.data < readRoot.data) {
      return depth(node, readRoot.leftChild, num += 1)
    } else {
      return depth(node, readRoot.rightChild, num += 1)
    }
  }

  return {
    minValue,
    insertNode,
    deleteNode,
    find,
    levelOrder,
    inorder,
    preorder,
    postorder,
    height,
    depth,
    get root() {
      return root;
    },
  };
};

export default Tree;
