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
        let sortedArrayList = [... new Set(listOfElements)].sort((a,b) => a-b);
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

    //
    
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
//x = [... new Set(x)].sort((a,b) => a-b)
const test = new binarySearchTree();
test.buildTree(x);
test.inoderTraversal();
//mergeSort(x);





// function mergeSort(list){
//     if(list.length < 1){
//         return;
//     }
//     let mid = Math.floor(list.length / 2);
//     let left = list.slice(0,mid);
//     let right = list.slice(mid);
//     console.log("mid num", list[mid]);
//     console.log('mid: ', mid);
//     console.log('left: ', left);
//     console.log("right: ", right);
//     return mergeSort(left);
// }