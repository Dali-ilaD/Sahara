import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './ProductItem.css'


const ProductItem = ({product}) => {


return (
    <>
    <div>
        <div className="product-item-container">
        
        <div className="product-image">
        <Link to={`/products/${product.id}`}><img src={product?.photoUrl}></img></Link>
         </div>
         <br/>
        <h2 className="product-name">
            <Link to={`/products/${product.id}`}>{product?.name}</Link>
        </h2>
        
        </div>
    </div>
    </>
)


}

export default ProductItem;