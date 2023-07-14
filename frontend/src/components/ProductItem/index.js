import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './ProductItem.css'
import {Image, Card} from 'semantic-ui-react';

const ProductItem = ({product}) => {

    const currentDate = new Date();
    const futureDate = new Date();
    const weekintofuture = new Date();
    futureDate.setDate(currentDate.getDate() + 2);
    weekintofuture.setDate(currentDate.getDate() + 7);
  
    const formattedDate = futureDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });

    const formattedDateWeekInFuture = weekintofuture.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
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
            <Card.Content className="product-price-container">
                <h2 className="product-price">
                ${product?.price}
                </h2>
            </Card.Content>
            <Card.Content className="product-shipping-container">
                <p className="product-shipping">
                FREE delivery {formattedDateWeekInFuture} on $25 of items shipped by Amazon
Or fastest delivery {formattedDate}
                </p>
            </Card.Content>

        
        </Card>
    
    </>
)


}

export default ProductItem;