import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProduct, fetchProduct } from "../../store/product";
import { createCartItems, getCartItems, updateCartItems } from "../../store/cartItem";
function ProductShowItem(){
    
const { productId } = useParams();
const dispatch = useDispatch();
const product = useSelector(getProduct(productId))
const sessionUser = useSelector(state => state.session.user);
const cart = useSelector(getCartItems);

useEffect(()=>{
    dispatch(fetchProduct(productId))
},[dispatch, productId]);



const handleAddToCart = () =>{
    const newCartItem = {product_id: productId, quantity: 1, user_id:sessionUser.id}
    let inCart = false;
    let existingItem = {};
    console.log(cart,'cart')
    cart.forEach(cartItem =>{
        console.log(cartItem.productId, 'product', productId, 'productid')
        if(parseInt(cartItem.productId) === parseInt(productId)){
            inCart = true;
            existingItem = cartItem
        }

    })

        if(inCart){
            let updatedItem = {quantity: existingItem.quantity += 1}
            
            dispatch(updateCartItems(updatedItem, existingItem.id));
        }else{
             dispatch(createCartItems(newCartItem));
        }
}

return (
    
        <div className="product-show-page">
            <div className="product-header">
                <h2>{product?.name}</h2>
            </div>
            <div className="product-show-details">
                <div className="product-price">{product?.price}</div>
                <div className="product-description">{product?.description}</div>
                <div><img src={product?.photoUrl} alt=''></img></div>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    
)
   
}

export default ProductShowItem;