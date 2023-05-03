import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { fetchProducts, getProducts } from "../../store/product";



const ProductIndex = () =>{
    const products = useSelector(getProducts);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts())
    },[dispatch]);

    return(
        <>
        <ul>
            {
            products.map(product => <ProductItem 
                product = {product}
                key={product.id}
            />)
            }
        </ul>
        </>
    )
}

export default ProductIndex;