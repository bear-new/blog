function BinarySearchTree() {
    this.root = null;
    // 生成二叉树
    this.insert = function (key) {
        var newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }
    }

    // 中序遍历
    this.inOrderTraverse = function (callBack) {
        inOrderTraverseNode(this.root, callBack);
    }

    // 前序遍历
    this.preOrderTraverse = function (callBack) {
        preOrderTraverseNode(this.root, callBack);
    }

    // 后序遍历
    this.postOrderTraverse = function (callBack) {
        postOrderTraverseNode(this.root, callBack);
    }

    // 获取最小数
    this.min = function () {
        return minNode(this.root);
    }

    // 获取最大数
    this.max = function () {
        return maxNode(this.root);
    }

    // 搜索特定的值
    this.search = function (key) {
        return searchNode(this.root, key);
    }

    // 移除1个节点
    this.remove = function (key) {
        this.root = removeNode(this.root, key);
    }

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    function inOrderTraverseNode(node, callBack) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callBack);
            callBack(node.key);
            inOrderTraverseNode(node.right, callBack);
        }
    }

    function preOrderTraverseNode(node, callBack) {
        if (node !== null) {
            callBack(node.key);
            preOrderTraverseNode(node.left, callBack);
            preOrderTraverseNode(node.right, callBack);
        }
    }

    function postOrderTraverseNode(node, callBack) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callBack);
            postOrderTraverseNode(node.right, callBack);
            callBack(node.key);
        }
    }

    function minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    function maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    function searchNode(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        if (key > node.key) {
            return searchNode(node.right, key);
        }

        return true;
    }

    function removeNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        if (key === node.key) {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            // 将右侧节点最小的值放到移除节点的位置, 再移除右侧最小的节点
            if (node.left !== null && node.right !== null) {
                var aux = minNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        }
    }
}

var tree = new BinarySearchTree();
[5, 4, 6, 7, 2, 1, 3].map(i => {
    tree.insert(i);
})

console.log(tree.root)
tree.inOrderTraverse(i => { console.log(i) }); // 1 2 3 4 5 6 7
tree.preOrderTraverse(i => { console.log(i) }); // 5 4 2 1 3 6 7
tree.postOrderTraverse(i => { console.log(i) }); // 1 3 2 4 7 6 5
console.log('min:', tree.min()); // min: 2
console.log('max:', tree.max()); // max: 34

console.log(tree.search(4)); // true
console.log(tree.search(11)); // false

tree.remove(4);
console.log(tree.root);
