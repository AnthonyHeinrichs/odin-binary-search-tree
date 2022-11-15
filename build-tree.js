import Node from "./tree-node.js";

export default function buildTree(arr, start = 0, end = arr.length - 1) {
  // Return null if start of array is greater than end
  if (start > end) {
    return null;
  }

  // Find center of array and save to variable
  const mid = parseInt((start + end) / 2);
  const root = Node(arr[mid]);

  // Set the left child of the new node by calling buildTree with index - 1 of mid
  root.leftChild = buildTree(arr, start, mid - 1);
  // Set the right child of the new node by calling buildTree with index + 1 of mid
  root.rightChild = buildTree(arr, mid + 1, end);
  // Return the new node
  return root;
}
