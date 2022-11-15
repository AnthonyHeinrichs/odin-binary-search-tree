import Tree from './binary-search-tree.js'

const newTree = Tree([5, 4, 2, 1, 9, 94, 5, 43, 24, 5, 22, 7]);

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

console.log(newTree.levelOrder())
console.log(newTree.inorder())
console.log(newTree.preorder())
console.log(newTree.postorder());
console.log(newTree.height())
console.log(newTree.depth(newTree.root.rightChild))

