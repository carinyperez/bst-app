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
            {order && order.map(el =>
            <div class="tf-tree tf-gap-lg">
                <ul>
                    <li>
                        <span class="tf-nc" key={el.val}>{el.val}</span>
                        <ul>
                            <li><span class="tf-nck" key={el}>{el.left ? el.left.val : ''}</span></li>
                            <li><span key={el}>{el.right ? el.right.val : ''}</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
            )}
        </div>     
    )
}

export default BSTTree; 
