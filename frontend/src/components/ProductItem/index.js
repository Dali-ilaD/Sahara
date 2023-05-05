import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './ProductItem.css'


const ProductItem = ({product}) => {


return (
    <>
    
        <div className="product-item-container">
        
        <div className="product-image-container">
        <Link to={`/products/${product.id}`}><img src={product?.photoUrl} alt=''className="product-image"></img></Link>
         </div>
         <br/>
        <h3 className="product-name">
            <Link to={`/products/${product.id}`}>{product?.name}</Link>
        </h3>
        <div className="product-price-container">
            <h2 className="product-price">
            ${product?.price}
            </h2>
        </div>

        
        </div>
    
    </>
)


}

export default ProductItem;