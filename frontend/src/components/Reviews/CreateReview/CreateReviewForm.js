
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { reviewCreate } from "../../../store/review";
import "./CreateReviewForm.css";
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";

function CreateReviewForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { productId } = useParams();

  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    const newReview = {
        review: {
            userId: sessionUser.id,
            productId: productId,
            body: body,
            rating: rating,
          }
    };
    console.log(newReview,'<newReview in handlesubmit')
    
    dispatch(reviewCreate(newReview));
  };

  const handleRatingChange = (selectedRating) => {
    
    setRating(selectedRating === rating ? "" : selectedRating);
  };

  useEffect(() => {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');

    ratingInputs.forEach((input) => {
      input.addEventListener("change", updateRating);
    });

    return () => {
      ratingInputs.forEach((input) => {
        input.removeEventListener("change", updateRating);
      });
    };
  }, []);

  function updateRating(event) {
    event.preventDefault()
    const selectedValue = parseInt(event.target.value);
    console.log(selectedValue,'<selectedValue')
    handleRatingChange(selectedValue);
    setRating(parseInt((selectedValue === rating ? "" : selectedValue)))
  }

  if (!sessionUser) {
    return (
      <>
        <p>In order to create a review, you must be signed in</p>
        <br />
        <NavLink to="/login" className="signin-button">
          Sign In
        </NavLink>
      </>
    );
  } else {
    return (
      <form className="review-form" onSubmit={handleSubmit}>
        
        <div className="rating-container"></div>
            <div className="rating">
            <input
                type="radio"
                id="star5"
                className="rating-radio-button"
                value="5"
                checked={rating === "5"}
                onChange={() => handleRatingChange("5")}
            />
            <label htmlFor="star5"></label>
            <input
                type="radio"
                id="star4"
                className="rating-radio-button"
                value="4"
                checked={rating === "4"}
                onChange={() => handleRatingChange("4")}
            />
            <label htmlFor="star4"></label>
            <input
                type="radio"
                id="star3"
                className="rating-radio-button"
                value="3"
                checked={rating === "3"}
                onChange={() => handleRatingChange("3")}
            />
            <label htmlFor="star3"></label>
            <input
                type="radio"
                id="star2"
                className="rating-radio-button"
                value="2"
                checked={rating === "2"}
                onChange={() => handleRatingChange("2")}
            />
            <label htmlFor="star2"></label>
            <input
                type="radio"
                id="star1"
                className="rating-radio-button"
                value="1"
                checked={rating === "1"}
                onChange={() => handleRatingChange("1")}
            />
            <label htmlFor="star1"></label>
            </div>
        <div className="review-separator"></div>
        <div className="review-body-container">
            <div className="review-body-div">
          <textarea
            className="review-body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
            </div>
        </div>
        <div className="review-separator"></div>
        
        {/* <Button onClick={() => handleSubmit(body, rating); console.log(rating,'<rating in submit button');} id="reviewform-submit-button">Submit</Button> */}
        <Button type="submit"  id="reviewform-submit-button" >Submit</Button>

      </form>
    );
  }
}

export default CreateReviewForm;