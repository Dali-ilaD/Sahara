import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { fetchProducts, getProducts } from "../../store/product";
import './ProductIndex.css'
import { Card } from "semantic-ui-react";



const ProductIndex = () => {
    const products = useSelector(getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    return (
        <>
            <Card.Group itemsPerRow={5}>
                <Card centered className="grid">
                    {
                        products.map(product => <ProductItem
                            product={product}
                            key={product.id}
                        />)
                    }
                </Card>
            </Card.Group>
        </>
    )
}

export default ProductIndex;