import './bst.styles.scss'; 
import BST from './bst'; 
import { useState, useEffect, useCallback} from 'react';


const BSTTree = () => {
    const bst = new BST(); 
    let [node, setNode] = useState(''); 
    let [order, setOrder] = useState('');
    let [arr, setArr] = useState(''); 

    const insertNode = (arr) => {
        setNode(bst.minHeight(arr));
        setOrder(bst.bfs())
    }
    const handleKeyPress = useCallback(event => {
        const {key, keyCode} = event; 
        if(keyCode === 32 || keyCode === 13) {
            const randomNumber = (min, max)  => { 
                return Math.ceil(Math.random() * (max - min) + min);
            }
            setArr([...arr,randomNumber(-100, 100)]); 
        }
    }) 
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        arr && insertNode(arr); 
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [arr])
    
    return (
        <div>
            <p>Click the space bar or the return key to insert a node</p>
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



