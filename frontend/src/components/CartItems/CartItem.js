import { useDispatch} from "react-redux";
import React from "react";
import { deleteCartItem, updateCartItems } from "../../store/cartItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Grid, GridColumn, GridRow, Header, Image } from "semantic-ui-react";


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
            <Grid.Row  className="cart-item-container">
                <Grid.Column width={2}>
                    <Link to={`/products/${product.id}`}><Image src={product.photoUrl} alt='' className="cart-item-photo"/></Link>
                </Grid.Column>
                <Grid.Column width={6} >
                    <Grid> 
                        <GridRow>
                            <GridColumn>
                                <Header size="medium" className="cart-item-name">{product.name}</Header>
                            </GridColumn>
                            <GridColumn>
                                <Header size="large" className="cart-item-price">Price:{product.price}</Header>
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            {/* <GridColumn> */}
                                <div className="cart-item-quantity">
                                <p> 
                                    Quantity:{cartItem.quantity}
                                    <Button onClick={handleIncrement}>+</Button>
                                    <Button onClick={handleDecrement}>-</Button>
                                </p>
                                </div>
                            {/* </GridColumn> */}
                            <GridColumn>
                                <Button onClick={handleRemoveCartItem} className="cart-item-delete">Delete</Button>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </>
    )
}

export default CartItem;