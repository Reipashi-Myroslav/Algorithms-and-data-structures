class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function buildTree() {
    const root = new Node(29);
    root.left = new Node(14);
    root.right = new Node(39);
    root.left.left = new Node(9);
    root.left.right = new Node(19);
    root.right.left = new Node(30);
    root.right.right = new Node(49);
    root.left.right.left = new Node(18);
    root.left.right.right = new Node(24);
    return root;
  }
  
  function end9(root) {
    let count = 0;
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      if (node.val % 10 === 9) count++;
    }
    traverse(root);
    return count;
  }
  
  function findPairs(root) {
    const result = [];
    function countEvens(node) {
      if (!node) return 0;
      const left = countEvens(node.left);
      const right = countEvens(node.right);
      if (left === right && left > 0) result.push(node.val);
      let sum = left + right;
      if (node.val % 2 === 0) {
      sum += 1;
    }
      return sum;
    }
    countEvens(root);
    if (result.length > 0) {
      return result;
    } else {
      return "Немає";
    }
  }
  
  const tree = buildTree();
  console.log("Елементи з закінченням на 9:", end9(tree));
  console.log("Вузли з однаковою кількістю парних:", findPairs(tree));