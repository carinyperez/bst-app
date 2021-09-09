import './bst.styles.scss'; 
import BST from './bst'; 
import { useState, useEffect } from 'react';


const BSTTree = () => {
    const bst = new BST(); 
    let [node, setNode] = useState(''); 
    let [order, setOrder] = useState(''); 

    const handleClick = () => {
        let arr = [1, 2, 3, 4, 5, 6, 7]; 
        setNode(bst.minHeight(arr));
        setOrder(bst.bfs())
    }
    return (
        <div>
            <button onClick={() => handleClick()}>Insert Node</button>
            {
                order && 
                <div class="tf-tree tf-gap-lg">
                    <ul>
                        <li>
                            <span class="tf-nc" key={order.val}>{order.val}</span>
                            <ul>
                                <li>
                                    <span class="tf-nc" key={order.val}>{order.left ? order.left.val : ''}</span>
                                    <ul>
                                        <li><span class="tf-nc" key={order.val}>{order.left.left ? order.left.left.val : ''}</span></li>
                                        <li><span class="tf-nc" key={order.val}>{order.left.right ? order.left.right.val : ''}</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="tf-nc" key={order.val}>{order.right ? order.right.val : ''}</span>
                                    <ul>
                                        <li><span class="tf-nc" key={order.val}>{order.right.left ? order.right.left.val : ''}</span></li>
                                        <li><span class="tf-nc" key={order.val}>{order.right.right ? order.right.right.val : ''}</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            }
        </div> 
    )    
}

export default BSTTree; 
