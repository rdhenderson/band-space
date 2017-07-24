import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const ReviewFieldArray = ( props ) => {
  console.log("Review Props", props);
  const reviews = props.fields.reviews || [];
  return (
    <ul>
      <li>
        <button type="button" onClick={() => reviews.push()}>Add Review</button>
      </li>
      {reviews.map((review, reviewIndex) =>
        <li key={reviewIndex}>
          <button
            type="button"
            title="Remove review"
            onClick={() => reviews.remove(reviewIndex)}/>
          <div>
            <Field name={review} component={reviewProps =>
              <div>
                <input type="text" {...reviewProps} placeholder={`review #${reviewIndex + 1}`}/>
                {reviewProps.touched && reviewProps.error && <span>{reviewProps.error}</span>}
              </div>
            }/>
          </div>
        </li>
      )}
      {reviews.error && <li className="error">{reviews.error}</li>}
    </ul>
)};

export default ReviewFieldArray;
