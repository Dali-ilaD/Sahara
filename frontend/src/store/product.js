import { RECEIVE_CART_ITEMS } from "./cartItem";
import csrfFetch from "./csrf";


export const RECEIVE_PRODUCT = 'product/receiveProduct';
export const RECEIVE_PRODUCTS ='product/receiveProducts';
export const SEARCH_PRODUCTS = 'product/receiveProducts';

const receiveProduct = product =>({
    type: RECEIVE_PRODUCT,
    payload: product
});

const receiveProducts = products =>({
    type: RECEIVE_PRODUCTS,
    products
});

const searchProducts = products => ({
    type: SEARCH_PRODUCTS,
    products
});

export const getProduct = productId => state => {
    return state?.product ? state.product[productId] : null;
}

export const getProducts = state =>{
    return state?.product ? Object.values(state.product) : [];
}

export const getProductsAsObjects = state =>{
    return state?.product ? state.product : {};
}

export const fetchProduct = productId => async dispatch =>{
    const response = await csrfFetch(`/api/products/${productId}`);
    
    const data = await response.json();
    dispatch(receiveProduct(data));
    return response;
}

export const fetchProducts = (filters) => async dispatch =>{
    const filterParams = new URLSearchParams(filters);
    const response = await csrfFetch(`/api/products?${filterParams}`)
    const data = await response.json();
    dispatch(receiveProducts(data))
    return response;
}

export const searchProduct = searchString => async dispatch =>{
    const response = await csrfFetch(`/api/products?search=${searchString}`);
    const data = await response.json();
    dispatch(searchProducts(data));
    return response;
}



function productReducer(state = {}, action){
    switch(action.type){
        case RECEIVE_PRODUCT:
            return { ...state, [action.payload.product.id]: action.payload.product};
        case RECEIVE_PRODUCTS:
            return { ...action.products}
        case RECEIVE_CART_ITEMS:
            return {...state, ...action.products};
        case SEARCH_PRODUCTS:
            return {...state, ...action.searchproducts};
        default:
            return state;
    }
}

export default productReducer;