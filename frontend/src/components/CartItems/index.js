import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, getCartItems } from "../../store/cartItem";
import { useEffect } from "react";
import CartItem from "./CartItem";
import {  getProductsAsObjects } from "../../store/product";
import { Grid } from "semantic-ui-react";



const CartItems = () =>{

    const cartstate = useSelector(getCartItems);
    const dispatch = useDispatch();
    const products = useSelector(getProductsAsObjects);
    // const sessionUser = useSelector(state => state.session.user);
    // if (!sessionUser) return <Redirect to="/" />;


    useEffect(() =>{
        dispatch(fetchCartItems());

    },[dispatch])



    return(

        <>
            <Grid celled >
                
                {/* {console.log(cartstate, 'cartstate', products, 'products')} */}

                {
                    cartstate?.map(ele => <CartItem
                        cartItem = {ele}
                        product = {products[ele.productId]}
                        // product = {products[cartItem.productId]}
                        // quantity = {cartItem.quantity}
                        // key = {cartItem.id}
                    />)
                }    
            </Grid>        
        </>
    )

}

export default CartItems;