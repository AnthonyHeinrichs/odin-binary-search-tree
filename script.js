import buildTree from "./build-tree.js";

const Node = (data, leftChild = null, rightChild = null) => {
  return { data, leftChild, rightChild };
};

const Tree = (arr) => {
  const root = buildTree(arr);

  return {
    get root() {
      return root;
    },
  };
};

const newTree = Tree([1, 2, 3, 4, 5]);

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