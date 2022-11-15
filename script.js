import Tree from './binary-search-tree.js'

const newTree = Tree([5, 4, 2, 1, 9, 94, 5, 43, 24, 5, 22, 7, 90, 209, 23, 34, 54, 3, 2, 123, 424, 25]);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(newTree.root);

// console.log(newTree.levelOrder())
// console.log(newTree.inorder())
// console.log(newTree.preorder())
// console.log(newTree.postorder());
// console.log(newTree.height())

newTree.deleteNode(25)
newTree.deleteNode(94)
newTree.deleteNode(54)
newTree.deleteNode(43)
newTree.deleteNode(424)
newTree.deleteNode(209)

prettyPrint(newTree.root);

console.log(newTree.depth(newTree.root.rightChild))
console.log(newTree.isBalanced())
