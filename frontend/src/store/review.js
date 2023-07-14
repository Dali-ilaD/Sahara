import csrfFetch from "./csrf";
// import { RECEIVE_CART_ITEMS } from "./cartItem";



export const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
export const REVIEWS_INDEX = 'reviews/REVIEWS_INDEX';
export const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
export const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const createReview = (review) =>({
    type: CREATE_REVIEW,
    review
});

// const reviewsIndex = (reviews) =>({
//     type: REVIEWS_INDEX,
//     reviews
// });

const reviewsIndex = (productId, reviews) => ({
    type: REVIEWS_INDEX,
    productId,
    reviews
  });

const updateReview = (reviewId) =>({
    type: UPDATE_REVIEW,
    reviewId
});

const deleteReview = (reviewId) =>({
    type: DELETE_REVIEW,
    reviewId
});

// export const getReviews = state =>{
//     return state?.reviews ? Object.values(state.reviews) : console.log('getReviews is not getting anything ');
// }

export const getReviews = (productId) => (state) => {
    const test = Object.values(state.reviews).filter((review) => review.product_id == productId);
    // console.log(state.reviews,'======state.reviews')
    // console.log(test, 'test')
    return test;
  };

// export const fetchReviews = (productId) => async (dispatch) =>{
//     const response = await csrfFetch(`/api/products/${productId}/reviews`);
//     if(response.ok){
//         const data = await response.json();
//         dispatch(reviewsIndex(data))
//     }
//     return response;
// }

export const fetchReviews = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}/reviews`);
    if (response.ok) {
      const data = await response.json();
      dispatch(reviewsIndex(productId, data));
    }
    return response;
  }

export const reviewCreate = (reviewData) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData)
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(createReview(data));
    }
    return response;
  }

export const reviewUpdate = (reviewUpdateData, reviewId) => async(dispatch) =>{
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PATCH',
        body: JSON.stringify(reviewUpdateData)
    });
    if(response.ok){
        const updatedReview = await response.json();
        dispatch(updateReview(updatedReview))
    }
    return response;
}

export const reviewDelete = (reviewId) => async(dispatch) =>{
    const response = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: 'DELETE'
    });
    if(response.ok){
        dispatch(deleteReview(reviewId))
    }
    return response;
}

const reviewReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_REVIEW:
            return {...state, [action.review.id]: action.review};
        case REVIEWS_INDEX:
            const updatedReviews = {};
            action.reviews.forEach(review => {
              updatedReviews[review.id] = review;
            });
            return { ...state, ...updatedReviews };
        case UPDATE_REVIEW:
            return {...state, [action.review.id]: action.review};
        case DELETE_REVIEW:
            const newState = {...state};
            delete newState[action.reviewId];
            return newState;
        // case RECEIVE_CART_ITEMS:
        //     return {...state, ...action.reviews};
        default:
            return state;
    }
}

export default reviewReducer;