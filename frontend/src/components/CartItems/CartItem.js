import { useDispatch} from "react-redux";
import React from "react";
import { deleteCartItem } from "../../store/cartItem";



const CartItem = ({cartItem, product}) =>{
    const dispatch = useDispatch();
    const handleRemoveCartItem = () =>{
        dispatch(deleteCartItem(cartItem.id))
    }
   
    return(
        <>
            <div className="cart-item-container">
                <h2 className="cart-item-name">{product.name}</h2>
                <div className="cart-item-quantity">
                   <p> 
                    Quantity:{cartItem.quantity}
                   </p>
                </div>
                <div className="cart-item-price">Price:{product.price}</div>
                <img src={product.photoUrl} alt='' className="cart-item-photo"/>
            </div>
            <button onClick={handleRemoveCartItem} className="cart-item-delete">Delete</button>
        </>
    )
}

export default CartItem;