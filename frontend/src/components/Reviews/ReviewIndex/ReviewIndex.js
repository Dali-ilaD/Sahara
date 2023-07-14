import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { GridRow } from "semantic-ui-react";
import ReviewItem from "./ReviewItem";
import { fetchReviews, getReviews } from "../../../store/review";
import { useEffect } from "react";
// import { useState } from "react";



function ReviewIndex() {
    const { productId } = useParams()
    const reviews = useSelector(getReviews(productId))
    // const reviews = useSelector((state) =>{state.reviews})
    // const reviews = useSelector((state) => state.reviews[productId] || []);

    const dispatch = useDispatch();
    // const [filteredReviews, setFilteredReviews] = useState([]);

    useEffect(() => {
        dispatch(fetchReviews(productId))
    }, [dispatch, productId])

    useEffect(() => {
        console.log(reviews, '<reviews (updated)')
        // console.log(filteredReviews, '<filteredReviews (updated)');
    }, [reviews]);

    // useEffect(() => {
    //     console.log(reviews, '<reviews (before filtering)');
    //     const filtered = reviews.filter((review) => review.product_id === productId);
    //     console.log(filtered, '<filtered after filtering reviews  ReviewIndex');
    //     setFilteredReviews(filtered);
    // }, [reviews, productId]);

    // console.log(productId,'< supposed to be currentProductId')
    console.log(reviews, '<reviews from reviewIndex component')
    // console.log(filteredReviews,'<filteredReviews from reviewINdex component')
    return (
        <GridRow className="review-index-container">
            {reviews.map((review) => (
                <ReviewItem
                    key={review.id}
                    review={review}
                />
            ))}
        </GridRow>
    )
}

export default ReviewIndex;