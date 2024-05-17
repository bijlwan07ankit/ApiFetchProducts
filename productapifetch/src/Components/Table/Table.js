
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "../Table/Table.module.css";

export default function Table(){
    
    const [product, setProduct]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]
);
const fetchData= async ()=>{
    try{
        const response = await axios.get('https://dummyjson.com/products');
        setProduct(response.data.products)
        console.log(response.data.products);
        
    }
    catch(error){
    console.log("error fething data: ", error);
    }
};

    return(
       
       <div>
        <h1 className={styles.title}>Product List</h1>
        <table>
            <thead>
                <tr className={styles.row}>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            {product.map((product) => (
                        <tr key={product.id} className={styles.row}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>
                                <img src={product.thumbnail} alt={product.title} width="50" />
                            </td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
    </div>
       
);
}

