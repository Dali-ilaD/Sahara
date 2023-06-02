import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { reviewCreate } from "../../../store/review";


function createReviewForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state.session.user)
    const {productId} = useParams();

    useEffect(()=>{
        
    })

    const handleSubmit = () =>{
        const newReview = 
        {
            userId: sessionUser.id,
            productId: productId,
            body: body,
            rating: rating
        }

        dispatch(reviewCreate(newReview));
    }
    

    if(!sessionUser){
        return(
            <>
            <p>In order to create a review, you must be signed in</p>
            <br/>
            <Link to='/login' className='signin-button'>Sign In</Link>
            </>
        )
    }else{
        <form>
            <div class="rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3" />
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2" />
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1" />
  <label for="star1"></label>
</div>
        <input type='textarea' className="review-body" value='body'></input>
            
        </form> 
    }

    
}