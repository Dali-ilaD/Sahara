import csrfFetch from "./csrf";


const RECEIVE_PRODUCT = 'product/receiveProduct';
const RECEIVE_PRODUCTS ='product/receiveProducts';


const receiveProduct = product =>({
    type: RECEIVE_PRODUCT,
    payload: product
});

const receiveProducts = products =>({
    type:RECEIVE_PRODUCTS,
    products
});

export const getProduct = productId => state => {
    return state?.product ? state.product[productId] : null;
}

export const getProducts = state =>{
    return state?.product ? Object.values(state.product) : [];
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

function productReducer(state = {}, action){
    switch(action.type){
        case RECEIVE_PRODUCT:
            return { ...state, [action.payload.product.id]: action.payload.product};
        case RECEIVE_PRODUCTS:
            return {...action.products}
        default:
            return state;
    }
}

export default productReducer;