import {  Rating } from "semantic-ui-react";
import './ReviewItem.css'

function ReviewItem({review, key}) {
    // console.log(review,'<review from reviewItem component')

    const createdAt = new Date(review.created_at);
    const month = createdAt.toLocaleDateString(undefined, { month: 'long' });
    const day = createdAt.getDate();
    const year = createdAt.getFullYear();
    const formattedDate = `${month} ${day} ${year}`;
  
    return (
        <>
        <div className="ui card">
            <div className="content">
                {/* <div class="header">Cute Dog</div> */}
                <Rating className='meta' icon="star" rating={review.rating} maxRating={5} disabled />
                <div className="meta"> Reviewed in the United States 🇺🇸 on {formattedDate}</div>
                <div className="description">
                    <p>{review.body}</p>
                    
                </div>
            </div>
            <div className="extra content">
                
            </div>
        </div>
        
        </>
    )
}

export default ReviewItem;