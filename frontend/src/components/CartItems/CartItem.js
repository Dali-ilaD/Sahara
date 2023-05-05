import { useDispatch} from "react-redux";
import React from "react";
import { deleteCartItem, updateCartItems } from "../../store/cartItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



const CartItem = ({cartItem, product}) =>{
    const dispatch = useDispatch();
    const handleRemoveCartItem = () =>{
        dispatch(deleteCartItem(cartItem.id))
    }
   const handleDecrement = () =>{
    let updatedCartItem = {quantity: cartItem.quantity -= 1}
    if(updatedCartItem.quantity === 0){
        dispatch(deleteCartItem(cartItem.id))
    }else{
        dispatch(updateCartItems(updatedCartItem, cartItem.id))
    }
   }

   const handleIncrement = () =>{
    let updatedCartItem = {quantity: cartItem.quantity += 1}
    dispatch(updateCartItems(updatedCartItem, cartItem.id))
   }
    return(
        <>
            <div className="cart-item-container">
                <h2 className="cart-item-name">{product.name}</h2>
                <div className="cart-item-quantity">
                   <p> 
                    Quantity:{cartItem.quantity}
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>
                   </p>
                </div>
                <div className="cart-item-price">Price:{product.price}</div>
                <Link to={`/products/${product.id}`}><img src={product.photoUrl} alt='' className="cart-item-photo"/></Link>
            </div>
            <button onClick={handleRemoveCartItem} className="cart-item-delete">Delete</button>
        </>
    )
}

export default CartItem;