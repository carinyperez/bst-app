import './bst.styles.scss'; 
import BST from './bst'; 
import { useState, useEffect, useCallback} from 'react';

const BSTTree = () => {
    const bst = new BST(); 
    let [node, setNode] = useState(''); 
    let [order, setOrder] = useState('');
    let [arr, setArr] = useState('');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        arr && insertNode(arr); 
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [arr])
 
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

    const removeNode = (event) => {
        setArr(arr.filter(el => el !== parseInt(event.target.innerHTML)))
    }

    return (
            <div>
            <p>Click the space bar or the return key to insert a node</p>
            <p>Mouse click on a node to delete it from the tree</p>
            {order && order.map(el => 
            <div className='tf-tree tf-gap-lg'>
                <ul>
                    <li>
                        <span className="tf-nc" key={el.val}
                        onClick={removeNode}
                        >{el.val}</span>
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



