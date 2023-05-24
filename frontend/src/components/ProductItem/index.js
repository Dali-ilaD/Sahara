import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './ProductItem.css'
import {Image, Card, CardHeader} from 'semantic-ui-react';

const ProductItem = ({product}) => {


return (
    <>
    
        <Card className="product-item-container">
        
            <Card.Content  className="product-image-container">
                <Link to={`/products/${product.id}`}><Image src={product?.photoUrl} alt=''className="product-image"></Image></Link>
            </Card.Content>
            <br/>
            <Card.Content className="product-name">
                <Link to={`/products/${product.id}`}>{product?.name}</Link>
            </Card.Content>
            <div className="product-price-container">
                <h2 className="product-price">
                ${product?.price}
                </h2>
            </div>

        
        </Card>
    
    </>
)


}

export default ProductItem;