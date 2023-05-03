import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './ProductItem.css'


const ProductItem = ({product}) => {


return (
    <>
    <li>
        <div className="product-item-container">
        
        <div className="product-image">
        <Link to={`/products/${product.id}`}><img src={product?.photo}></img></Link>
         </div>
         <br/>
        <h2 className="product-name">
            <Link to={`/products/${product.id}`}>{product?.name}</Link>
        </h2>
        
        </div>
    </li>
    </>
)


}

export default ProductItem;