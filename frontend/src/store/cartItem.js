import csrfFetch from "./csrf";

export const RECEIVE_CART_ITEMS = 'cart_items/RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'cart_items/RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'cart_items/REMOVE_CART_ITEM';

const receiveCartItems = (cartItems, products) =>({
    type: RECEIVE_CART_ITEMS,
    cartItems,
    products
});

const receiveCartItem = cartItem =>({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const removeCartItem = cartItemId =>({
    type: REMOVE_CART_ITEM,
    cartItemId
});

export const getCartItems = state =>{
    // console.log(state,'state', state.cartItems, 'state.cartItem')
    return state?.cartItems ? Object.values(state.cartItems) : [];
}

export const fetchCartItems = () => async (dispatch) =>{
    const response = await csrfFetch('/api/cart_items');
    if(response.ok){
        const data = await response.json();
        // console.log(data,'data')
        dispatch(receiveCartItems(data.cartItems, data.products))
    }
    return response;
};

export const createCartItems = cartItem => async (dispatch) =>{
    const response = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })

    const data = await response.json();
    dispatch(receiveCartItem(data));
    return response;
}

export const updateCartItems = (cartItem, id) => async (dispatch) =>{
    const response = await csrfFetch(`/api/cart_items/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(cartItem)
    })

    const data = await response.json();
    dispatch(receiveCartItem(data));
    return response;
}

export const deleteCartItem = cartItemId => async(dispatch) =>{
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`,{
        method:'DELETE'
    });

    if(response.ok){
        dispatch(removeCartItem(cartItemId))
    }
}



const cartItemReducer = (state = {}, action) =>{
    switch(action.type){
        case RECEIVE_CART_ITEM:
            return { ...state,  ...action.cartItem };
        case RECEIVE_CART_ITEMS:
            // console.log(state,'state', action,'action')
            return {...state,  ...action.cartItems};
        case REMOVE_CART_ITEM:
            const newState = {...state};
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    }
}


export default cartItemReducer;