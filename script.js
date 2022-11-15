import Tree from "./binary-search-tree.js";

const newTree = Tree([
  5, 4, 2, 1, 9, 94, 5, 43, 24, 5, 22, 7, 90, 209, 23, 34, 54, 3, 2, 123, 424,
  25,
]);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

console.log("Tree is balanced?:", newTree.isBalanced());
console.log("- - - - - - - - - -");
console.log("Level order:", newTree.levelOrder());
console.log("- - - - - - - - - -");
console.log("In order:", newTree.inorder());
console.log("- - - - - - - - - -");
console.log("Pre order:", newTree.preorder());
console.log("- - - - - - - - - -");
console.log("Post order:", newTree.postorder());
console.log("- - - - - - - - - -");
console.log("Deleting nodes 25, 94, 54, 43, 424, 209");
newTree.deleteNode(25);
newTree.deleteNode(94);
newTree.deleteNode(54);
newTree.deleteNode(43);
newTree.deleteNode(424);
newTree.deleteNode(209);
console.log("- - - - - - - - - -");
console.log("Tree is balanced?:", newTree.isBalanced());
console.log("Rebalancing tree");
newTree.rebalance();
console.log("Tree is balanced?:", newTree.isBalanced());
console.log("- - - - - - - - - -");
console.log("Level order:", newTree.levelOrder());
console.log("- - - - - - - - - -");
console.log("In order:", newTree.inorder());
console.log("- - - - - - - - - -");
console.log("Pre order:", newTree.preorder());
console.log("- - - - - - - - - -");
console.log("Post order:", newTree.postorder());
