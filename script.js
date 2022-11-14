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
console.log(newTree.root);
