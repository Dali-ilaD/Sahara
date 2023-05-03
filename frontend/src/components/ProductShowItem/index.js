import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProduct, fetchProduct } from "../../store/product";
function ProductShowItem(){
    
const { productId } = useParams();
const dispatch = useDispatch();
const product = useSelector(getProduct(productId))

useEffect(()=>{
    dispatch(fetchProduct(productId))
},[dispatch, productId]);


return (
    
        <div className="product-show-page">
            <div className="product-header">
                <h2>{product?.name}</h2>
            </div>
            <div className="product-show-details">
                <div className="product-price">{product?.price}</div>
                <div className="product-description">{product?.description}</div>
                <div><img src={product?.photoUrl}></img></div>
            </div>
        </div>
    
)
   
}

export default ProductShowItem;