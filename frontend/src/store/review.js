import csrfFetch from "./csrf";


export const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
export const REVIEWS_INDEX = 'reviews/REVIEWS_INDEX';
export const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
export const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const createReview = (review) =>({
    type: CREATE_REVIEW,
    review
});

const reviewsIndex = (reviews) =>({
    type: REVIEWS_INDEX,
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

export const getReviews = state =>{
    return state?.reviews ? Object.values(state.reviews) : [];
}

export const fetchReviews = () => async (dispatch) =>{
    const response = await csrfFetch('/api/reviews');
    if(response.ok){
        const data = await response.json();
        dispatch(reviewsIndex(data))
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
            return {...state, ...action.reviews};
        case UPDATE_REVIEW:
            return {...state, [action.review.id]: action.review};
        case DELETE_REVIEW:
            const newState = {...state};
            delete newState[action.review.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;