import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from "../redux/actions/productActions";


const ProductList = () => {

    const  products = useSelector((state)=> state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
        const response = await 
            axios.get("https://jsonplaceholder.typicode.com/photos")
            .catch((err)=>{
                console.log("Err",err);
            });
            const limit = 24;
        dispatch(setProducts(response.data.slice(0, limit)));    
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("Products: ", products);

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductList
