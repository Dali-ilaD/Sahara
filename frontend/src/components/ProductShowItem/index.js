import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProduct, fetchProduct } from "../../store/product";
import { createCartItems, getCartItems, updateCartItems } from "../../store/cartItem";
import { Button, Grid, Image, Header, GridRow } from 'semantic-ui-react'
import CreateReviewForm from "../Reviews/CreateReview/CreateReviewForm";
import './ProductShowItem.css'

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
    <>
    
        <Grid className="product-show-page">
            <Grid.Column width={6} className="product-header">
                <Image src={product?.photoUrl} alt=''></Image>
            </Grid.Column>
            <Grid.Column width={5} className="product-show-details">
                <Header size='huge'>{product?.name}</Header>
                {console.log(product)}
                <Header size="large" className="product-price">{product?.price}</Header>
                <Header size="tiny" className="product-description">{product?.description}</Header>
            </Grid.Column>
            <Grid.Column width={2}>
                <Button onClick={handleAddToCart} className="addtocart-button">Add to Cart</Button>
            </Grid.Column>
        </Grid>
        <GridRow className="review-form-container">
            <CreateReviewForm />
        </GridRow>
    </>
)
   
}

export default ProductShowItem;