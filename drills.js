// Linear search
// You probably already have seen linear search in a few different contexts.In a linear search,
// you look through an array 1 - by - 1 until you find what you are looking for.

// Binary search
// Binary search is a faster search method, which only works on sorted arrays.Imagine that you had to guess a number between 1 and 100,
// and someone would tell you whether your guesses were above or below the correct answer.

// Searching and Traversal in a tree
// Depth-first search (DFS)
// In a DFS you start from a given node(usually the root) and traverse as far as you can down.When you reach a node,
// which has no children to visit or all nodes on its path have been visited, you start backtracking.
// Let's take a look at how this works.

// Ordering (below dfs)
// You'll notice in the algorithm that the left branch is visited, then the node itself is handled,
// then the right branch is visited. This is known as an in-order traversal or search. If the node is
// handled before the branches then this is known as pre-order traversal.
// And if the node is handled after the branches then this is known as post-order traversal.
// Each ordering will give you the node values in a different order.
// We will leave the implementation of pre-order and post-order traversals as exercises for you.
// They are very similar to the above in-order traversal except for the order of the visits (left child, parent, right child)
// is different for pre-order (parent, left child, right child) and post-order (left child, right child, parent).

class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  // If there is a left-hand branch then you recursively search the nodes there. You then add the value at the current node to the array. And finally, you recursively search the right-hand branch.
  // This is O(n), as each node needs to be visited.

  // depth-first
  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  // breadth-first
  bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) {
        queue.enqueue(node.left); //add left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // add right child to the queue
      }
    }

    return values;
  }
}

// Breadth-first search (above bfs)
// Breadth - first search works across the rows of a tree.So the top row will be handled 1st,
// then the 2nd row, and so on.The tree is visited level by level.In order to carry out a BFS,
// you need a "first-in, first-out"(FIFO) queue so you can store all the siblings in the queue
// and process them in the correct order.When you visit a node you add it to the queue.
// The nodes are then removed from the queue, and their children are visited, adding more values onto the queue.
// The runtime for this is O(n) because each node needs to be visited once.

// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
// identify the sequence of numbers that each recursive call will search to try and find 8.

let arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
let mid = Math.floor(arr.length) / 2;
// Answer: The beginning starting point is index 5, which is 12. And the beginning endpoint is 18, or the array length.
// Since midway point is larger than the value, we cast aside all values 12 and beyond and decrement our end value to index 4.
// Index 4 is 11. We get this using the mid way point found previously, decrementing it and setting it as end value.
// So now we have 0is our starting point, which hasn't changed in the recursive call, and 4 as the end value.
// 0 + 4 = 4 / 2 = 2. Index 2 is 6, which smaller than the value. So now the recursive call requires the midway point + 1 to be the starting
// point. So now get 2 + 4 (last end point) = 6 / 2 = 3. 3 is now the midway point, and it so happens that item now = value.

// sequence [12, 11, 6, 8]

// Answer: starting point: Similar to above, but since the midway index is smaller than the value
// returns -1.
// 12. index 5. 12 < 16. index 5 + 1
// 14. index 6. 14 < 16. index 6 + 1
// 15. index 7. 15 < 16. index 7 + 1;
// 17. Index 8. 17 > 16. Start > End return - 1
// 4 steps. sequence [12, 14, 15, 17]

// 1) Linear search

// Given the following dataset, find out how many tries it took to search for a particular item in the dataset.
// If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// https://codesandbox.io/s/search-algorithms-bdbqg

// 2) Binary search

// Use the same front end and the dataset from the previous exercise for this exercise.Use array.sort to
// sort the dataset.Then implement a binary search to find a particular value in the dataset.
// Display how many tries it took to search for a particular item in the dataset using binary search.
// If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// [1, 2, 3, 5, 6, 6, 6, 7, 7, 9, 9, 11, 13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23, 24, 25, 25, 26, 26, 27, 27, 27, 28, 28,
// 28, 30, 31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42, 43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53, 53, 54, 55, 56, 62, 63,
// 64, 64, 64, 65, 67, 68, 69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80, 81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91, 93, 97, 98, 98]

// https://codesandbox.io/s/search-algorithms-bdbqg

// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it ?
// Can you express this process as a search algorithm ? Implement your algorithm to find a book whose Dewey and book title is provided.

//  input: array of objects representing library
//  output: { 'dewey': '003.447', 'title': 'I Love Coding' }, ...
//   binary search by dewey,
//  input(library, '003.447',  start, end)
//  get midway point value.
//  is midway point value greater than search value? If yes, go left and discard midway point and all values to right.
// continue left until value is reached.
// is midway point smaller than search value? If yes, go right and discard midway point and all values to left.
// continue right until value is reached.

// findbook(library, dewey, start, end)
// sort library if not sorted yet.
// if midindexVal === value return book
// start either 0 or newStartVal(midindex)
// end either library.length  or newEndVal(midIndex)

// 4. Searching in a BST
// ** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement
//  the traversal to see if your answer is correct.

// 1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91
// and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

/* 

Depth First Traversals:
https://www.youtube.com/watch?v=WLvU5EQVZqY

pre-order (red): F, B, A, D, C, E, G, I, H; [root, left, right]
in-order (yellow): A, B, C, D, E, F, G, H, I; [left, root, right ] - node must be visited twice to be recorded
post-order (green): A, C, E, D, B, H, I, G, F. [ left, right, root ] - node must be visited three times to be recorded 
***Most important: take into account the null nodes that it travels to first and then returns from*** 

  1) in-order: 14 15 19 25 27 35 79 89 90 91 (given)
     pre-order: 35 25 15 14 19 27 89 79 91 90 (given)

     post-order: 14 15 19 27 25 79 90 91 89 35 (ANSWER)
           35
        /      \
       25      89
      /  \    /  \ 
     15  27  79   91
    /  \ / \ /\   /  \
   14  19        90
  / \  / \       / \
     2) pre-order: 5 7 6 9 8 11 10
      post-order: 6 8 10 11 9 7 5
            5
           / \
                7
              /   \ 
             6      9
            / \    /   \
                  8     11
                /  \    / \
                      10 
                      / \
*/

// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

// supports 3 operations: insert, remove, and find.
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  // starts at root level, and recursively calls insert on whichever node it travels to
  // to check key value. Treats successive nodes as root.
  // An example of the best case would be inserting the root only, which would be O(1)
  // worst case is O(n) when tree skews left or right
  insert(newKey, newValue) {
    if (this.key == null) {
      this.key = newKey;
      this.value = newValue;
    } else if (newKey < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(newKey, newValue, this);
      } else {
        this.left.insert(newKey, newValue);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(newKey, newValue);
      } else {
        this.right.insert(newKey, newValue);
      }
    }
  }

  find(searchKey) {
    if (searchKey === this.key) {
      return this.value;
    } else if (searchKey < this.key && this.left) {
      return this.left.find(searchKey);
    } else if (searchKey > this.key && this.right) {
      return this.right.find(searchKey);
    } else {
      throw new Error("Key Error");
    }
  }

  remove(removeKey) {
    if (removeKey == this.key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(sucessor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (removeKey < this.key && this.left) {
      this.left.remove(removeKey);
    } else if (removeKey > this.key && this.right) {
      this.right.remove(removeKey);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
  // inOrder(values = []) {
  //   if (this.left) {
  //     values = this.left.inOrder(values);
  //   }
  //   values.push(this.value);
  //   if (this.right) {
  //     values = this.right.inOrder(values);
  //   }
  //   return values;
  // }
  // // depth first search (pre-order[Curr - L - R])
  // preOrder(values = []) {
  //   values.push(this.value);
  //   if (this.left) {
  //     values = this.left.preOrder(values);
  //   }
  //   if (this.right) {
  //     values = this.right.preOrder(values);
  //   }
  //   return values;
  // }
  // // depth first search (post-order[L - R - Curr])
  // postOrder(values = []) {
  //   if (this.left) {
  //     values = this.left.postOrder(values);
  //   }
  //   if (this.right) {
  //     values = this.right.postOrder(values);
  //   }
  //   values.push(this.value);
  //   return values;
  // }
  // breadth first search

  // https://www.cs.bu.edu/teaching/c/tree/breadth-first/
  // bfs(values = []) {
  //   const queue = new Queue();

  //   while (queue.length) {
  //     const node = queue.dequeue();
  //     values.push(node.value);

  //     if (node.left) {
  //       queue.enqueue(node.left);
  //     }
  //     if (node.right) {
  //       queue.enqueue(node.right);
  //     }
  //   }
  //   return values;
  // }

  // orderOfCommand(root) {
  //   if (!root.value) {
  //     return [];
  //   }

  //   const queue = new Queue();
  //   queue.enqueue(root);
  //   let order = [];
  //   while (queue.first) {
  //     let node = queue.dequeue();
  //     order.push(node.value);

  //     if (node.left) {
  //       queue.enqueue(node.left);
  //     }
  //     if (node.right) {
  //       queue.enqueue(node.right);
  //     }
  //   }
  //   return order;
  // }
}

const treeBST = new BinarySearchTree();
const preOrderData = [
  25,
  15,
  10,
  4,
  12,
  24,
  18,
  22,
  50,
  35,
  31,
  44,
  70,
  66,
  90
];

function fillTree(arr, bst) {
  let tree = bst;
  for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i], arr[i]);
  }
  return tree;
}

fillTree(preOrderData, treeBST);

// root, left, right
function preOrder(bst) {
  let node = bst; // really reps first node once you start notation.
  console.log({ preOrder: node.key });
  // recursion makes this if statement go first, and then when finishes, does below
  if (node.left) {
    preOrder(node.left);
  }
  // notice not an else if
  if (node.right) {
    preOrder(node.right);
  }
}

// preOrder(treeBST);

//left, root, right. 2 visits
function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log({ inOrder: node.key });
  if (node.right) {
    inOrder(node.right);
  }
}

// inOrder(treeBST);

// left, right, root
function postOrder(node) {
  if (node.left) {
    postOrder(node.left);
  }

  if (node.right) {
    postOrder(node.right);
  }

  console.log({ postOrder: node.key });
}

// postOrder(treeBST);

// 6. Find the next commanding officer (BREADTH-FIRST)
// Suppose you have a tree representing a command structure of the Starship USS Enterprise.

//                Captain Picard
//              /                \
//     Commander Riker       Commander Data
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf        LaForge            Crusher
//    /                           /
// Lieutenant                  Lieutenant
// security-officer            Selar

// This tree is meant to represent who is in charge of lower-ranking officers.
// For example, Commander Riker is directly responsible for Worf and LaForge.
// People of the same rank are at the same level in the tree.
// However, to distinguish between people of the same rank, those with more experience are on the left and
// those with less on the right (i.e., experience decreases from left to right).
// Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers
// and outlines the ranking officers in their ranking order so that if officers start dropping like flies,
// we know who is the next person to take over command.

class _Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  // The code for the enqueue operation is implemented as follows:
  enqueue(data) {
    const node = new _Node(data);
    // only happens under null condition
    if (this.first === null) {
      this.first = node;
    }
    // Add to the end of the queue, because last equals something
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    // basically overwrites the first node with the second
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }
}

////////////////////////////////////////////////////

function cmdOfficer(tree, result = []) {
  const queue = new Queue();
  queue.enqueue(tree);

  while (queue.first !== null) {
    const node = queue.dequeue();
    result.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  result.forEach(officers => console.log(officers));
}

function nextOfficer() {
  let BST = new BinarySearchTree();
  BST.insert(5, "Captain Picard");
  BST.insert(3, "Commander Riker");
  BST.insert(6, "Commander Data");
  BST.insert(8, "Lt. Cmdr. Crusher");
  BST.insert(7, "Lieutenant Selar");
  BST.insert(2, "Lt. Cmdr. Worf");
  BST.insert(4, "Lt. Cmdr. LaForge");
  BST.insert(1, "Lt. security-officer");

  cmdOfficer(BST);
}

// nextOfficer();

// 7. Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105].
// If you had to buy shares in the company on a particular day, and sell the shares on a following day,
// write an algorithm to work out what the maximum profit you could make would be.

function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > max) {
      max = arr[i + 1] - arr[i];
    }
  }
  console.log(max);
  return max;
}
// gets 24 for next day
// maxProfit([128, 97, 121, 123, 98, 97, 105]);

function maxProfit2(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = arr[j] - arr[i];
      if (diff > max) {
        max = diff;
      }
    }
  }
  console.log(max);
  return max;
}
// gets 26 for any following day
maxProfit2([128, 97, 121, 123, 98, 97, 105]);
