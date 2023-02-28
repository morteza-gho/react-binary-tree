import React, { useState, useEffect } from 'react';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const createNode = (index, array) => {
  if (index >= array.length || array[index] === null) {
    return null;
  }
  const node = new Node(array[index]);
  node.left = createNode(2 * index + 1, array);
  node.right = createNode(2 * index + 2, array);
  return node;
}

const renderNode = (node) => {
  if (node === null) {
    return null;
  }
  return (
    <div className="node">
      <p className="value">{node.value}</p>
      <div className="left">{renderNode(node.left)}</div>
      <div className="right">{renderNode(node.right)}</div>
    </div>
  );
}

const BinaryTree = () => {

  const [root, setRoot] = useState(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    const array = input.split(' ').map(String);
    const rootNode = createNode(0, array);
    setRoot(rootNode);
  }, [input]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className='wrapper'>

      <h1 className='title'>Enter names and use space to create nodes</h1>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Enter Name..." />

      {root && root.value ? <div className="tree">{renderNode(root)}</div> : null}
    </div>
  );
}

export default BinaryTree;
