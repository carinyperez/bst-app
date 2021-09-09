class Node {
    constructor(val) {
        this.val = val; 
        this.right = null; 
        this.left = null; 
    }
}

class BST {
    constructor() {
        this.root = null; 
    }
    // add a node 
    insert(val){
        let newNode = new Node(val);
        // no root 
        if(!this.root) {
            this.root = newNode;
            return this 
        } else {
            let current = this.root; // 1            
             // infinite loop 
            while(true) {
                // if(val === current.value) return undefined; 
                if(newNode.val >= current.val) {
                    console.log('Go right'); 
                    if(current.right === null) {
                        current.right = newNode;
                        return this;  
                    } else {
                        current = current.right;
                    }
                } else { 
                    console.log('Go left');
                    if(current.left === null) {
                        current.left = newNode; 
                        return this; 
                    } else {
                        current = current.left; 
                    }
                }
            }
        }
    }
    minHeight(arr) { 
        let middle = Math.floor(arr.length/2);
        let rightSubtree = arr.slice(middle + 1, arr.length); 
        let leftSubtree = arr.slice(0, middle);
        this.insert(arr[middle]); 
        while (middle) {
            console.log(arr); 
            console.log(`Middle is ${arr[middle]}`);
            console.log(rightSubtree,leftSubtree);
            this.minHeight(rightSubtree);
            this.minHeight(leftSubtree);
            break; 
        }
        return this; 
    } 
    bfs() {
        let queue = []; // ![] is false, so empty is truthy, !0 is true so 0 is falsy, but non-empty array is true 
        let visited = []; // data returned at the end 
        let current = this.root;  
        // place the root node in the queue 
        queue.push(current); 
        while(queue.length) {
            current = queue.shift(); // current is set to removed node 
            visited.push(current); 
            // null is a falsy value 
            // if current.left is not null then it's true 
            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right); 
            }

        }
        return visited[0] 
    }
}

export default BST; 