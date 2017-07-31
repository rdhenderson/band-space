import React from 'react'
import { Field, reduxForm } from 'redux-form'

const TestForm = (props) => {
  const { handleSubmit, onSubmit, pristine, reset, submitting } = props
  return (
    <form className="reviewModal" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name of the Event</label>
        <div>
          <Field className="reviewModal__input" name="name" component="input" type="text"/>
        </div>
      </div>
      <div>
        <label>Date of the Event</label>
        <div>
          <Field placeholder="mm/dd/yy" className="reviewModal__input" name="date" component="input" type="text"/>
        </div>
      </div>
      <div style={{marginTop: "10px"}}>
        <label>Professionalism</label>
        <div className="reviewModal__radio">
          <label><Field name="survey.professionalism" component="input" type="radio" value="1"/> 1</label>
          <label><Field name="survey.professionalism" component="input" type="radio" value="2"/> 2</label>
          <label><Field name="survey.professionalism" component="input" type="radio" value="3"/> 3</label>
          <label><Field name="survey.professionalism" component="input" type="radio" value="4"/> 4</label>
          <label><Field name="survey.professionalism" component="input" type="radio" value="5"/> 5</label>
        </div>
      </div>
      <div>
        <label>Ambiance</label>
        <div className="reviewModal__radio">
          <label><Field name="survey.ambiance" component="input" type="radio" value="1"/> 1</label>
          <label><Field name="survey.ambiance" component="input" type="radio" value="2"/> 2</label>
          <label><Field name="survey.ambiance" component="input" type="radio" value="3"/> 3</label>
          <label><Field name="survey.ambiance" component="input" type="radio" value="4"/> 4</label>
          <label><Field name="survey.ambiance" component="input" type="radio" value="5"/> 5</label>
        </div>
      </div>
      <div>
        <label>Crowd</label>
        <div className="reviewModal__radio">
          <label><Field name="survey.crowd" component="input" type="radio" value="1"/> 1</label>
          <label><Field name="survey.crowd" component="input" type="radio" value="2"/> 2</label>
          <label><Field name="survey.crowd" component="input" type="radio" value="3"/> 3</label>
          <label><Field name="survey.crowd" component="input" type="radio" value="4"/> 4</label>
          <label><Field name="survey.crowd" component="input" type="radio" value="5"/> 5</label>
        </div>
      </div>
      <div>
        <label>Sound</label>
        <div className="reviewModal__radio">
          <label><Field name="survey.sound" component="input" type="radio" value="1"/> 1</label>
          <label><Field name="survey.sound" component="input" type="radio" value="2"/> 2</label>
          <label><Field name="survey.sound" component="input" type="radio" value="3"/> 3</label>
          <label><Field name="survey.sound" component="input" type="radio" value="4"/> 4</label>
          <label><Field name="survey.sound" component="input" type="radio" value="5"/> 5</label>
        </div>
      </div>
      <div>
        <label>Value</label>
        <div className="reviewModal__radio">
          <label><Field name="survey.value" component="input" type="radio" value="1"/> 1</label>
          <label><Field name="survey.value" component="input" type="radio" value="2"/> 2</label>
          <label><Field name="survey.value" component="input" type="radio" value="3"/> 3</label>
          <label><Field name="survey.value" component="input" type="radio" value="4"/> 4</label>
          <label><Field name="survey.value" component="input" type="radio" value="5"/> 5</label>
        </div>
      </div>
      <div>
        <label>On an overall scale of meh (1) to Amazing!(5) how would you rate this venue?</label>
        <div className="reviewModal__radio">
          <label><Field name="rating" component="input" type="radio" value="1"/> 1</label>
          <label><Field name="rating" component="input" type="radio" value="2"/> 2</label>
          <label><Field name="rating" component="input" type="radio" value="3"/> 3</label>
          <label><Field name="rating" component="input" type="radio" value="4"/> 4</label>
          <label><Field name="rating" component="input" type="radio" value="5"/> 5</label>
        </div>
      </div>
      <div>
        <label>Any other notes?</label>
        <div>
          <Field maxlength="50" className="reviewModal__textArea" name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button className="normal-btn" type="submit" disabled={pristine || submitting}>Submit</button>
        <button className="normal-btn" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(TestForm)
