//BST: is balance if height of left/right subtree of root differe by at most 1
// right/left subtree is balance

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
    constructor(){
        this.root = null
    }
    //build tree
    buildTree(listOfElements){
        let sortedArrayList = [... new Set(listOfElements)].sort((a,b) => a - b);
        this._insert(sortedArrayList);
    }   
    _insert(sortedArrayList){
        if(sortedArrayList.length < 1){
            return;
        }
        const middleElementIndex = Math.floor(sortedArrayList.length / 2);
        const leftSubArry = sortedArrayList.slice(0, middleElementIndex);
        const rightSubArry = sortedArrayList.slice(middleElementIndex + 1);
        this._insertRecursive(sortedArrayList[middleElementIndex]);

        this._insert(rightSubArry);
        this._insert(leftSubArry);
    }

    _insertRecursive(elementValue){
        const newNode =  new Node(elementValue);
        //base case root is empty
        if(this.root === null){
            this.root = newNode;
            return;
        }
        else{
            this._insertNode(this.root, newNode);
        }
    }
    _insertNode(currentNode, newNode){
        //go left
        if(newNode.value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode;
            }
            else{
                this._insertNode(currentNode.left, newNode);
            }
        }
        //go right
        else if(newNode.value > currentNode.value){
            if(currentNode.right === null){
                currentNode.right = newNode;
            }
            else{
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    deleteNode(value, root = this.root){
        if(root === null){
            return  null;
        }   
        //locate value node in the tree
        if(root.value > value){// value located  on left subtree
            root.left =  this.deleteNode(value, root.left);
            return root;
        }
        else if(root.value < value){//value located on right  subtree
            root.right  = this.deleteNode(value, root.right);
            return root;
        }

        if(root.left === null && root.right === null){
            return null;//node has no child
        }
        else if(root.left === null){//node has one child
            return root.right;
        }
        else if(root.right === null){
            return root.left;
        }
        else{//node has two children
            let minValue = this._findMinValue(root.right);
            root.value = minValue;
            root.right = this.deleteNode(minValue, root.right);//delete minimum node in the subright tree
            return root;
        }
    }
    _findMinValue(node){
        while(node.left !== null){
            node = node.left
        }
        return node.value;
    }
    
     //display
    inoderTraversal(node = this.root){
        if(node != null){
            this.inoderTraversal(node.left);
            console.log(node.value);
            this.inoderTraversal(node.right)
        }
    }

}

let x =[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const test = new binarySearchTree();
test.buildTree(x);
test.inoderTraversal();
console.log(test.deleteNode(8));
test.inoderTraversal();

