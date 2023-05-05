import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { fetchProducts, getProducts } from "../../store/product";
import './ProductIndex.css'



const ProductIndex = () =>{
    const products = useSelector(getProducts);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts())
    },[dispatch]);

    return(
        <>
        <div className="grid">
        
            {
            products.map(product => <ProductItem 
                product = {product}
                key={product.id}
            />)
            }
       
        </div>
        </>
    )
}

export default ProductIndex;