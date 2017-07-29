import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {RadioButton} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import { Spinner } from '../../../components'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);

class AddEventForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
    this.submitEvent = this.submitEvent.bind(this);
  }

  submitEvent(values){
    const newEvent = { ...values };
    // Split out date/time values from date objects to store in database.
    newEvent.date = values.date.toString().split(' ').slice(0,4).join(' ');
    newEvent.time = values.time.toString().split(' ').slice(4).join(' ');
    this.props.addVenueEvent(newEvent);
    this.props.hideModal();
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps) {
          this.setState({ data: true });
      }
  }
  componentDidMount() {
    this.refs.name // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus(); // on TextField

    const initData = {
      venue: this.props.venue._id,
    };
    this.props.initialize(initData);
  }

  render() {
    const {onSubmit, handleSubmit, pristine, survey, reset, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitEvent)}>
        <div>
          <Field
            name="name"
            component={TextField}
            floatingLabelText="Event Name"
            ref="name"
            withRef
          />
        </div>
        <div>
          <Field
            name="venue"
            component={AutoComplete}
            floatingLabelText="Venue"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSource={this.props.venues}
            dataSourceConfig={ {text: 'name', value: '_id'}  }
            ref="venue"
            withRef
          />
        </div>
        <div>
          <Field name="event.type" component={RadioButtonGroup}>
            <RadioButton value="private" label="Private Event" />
            <RadioButton value="public" label="Public Event" />
          </Field>
        </div>

        <div>
          <Field
            name="group"
            component={SelectField}
            hintText="Group"
            floatingLabelText="Group"
          >
            <MenuItem value="alice@redux-pizza.com" primaryText="Alice" />
            <MenuItem value="bob@redux-pizza.com" primaryText="Bob" />
            <MenuItem value="carl@redux-pizza.com" primaryText="Carl" />
          </Field>
        </div>
        <div>
          <Field
            name="date"
            component={DatePicker}
            format={null}
            hintText="Event Date"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="time"
            component={TimePicker}
            format={null}
            hintText="Event Time"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="description"
            component={TextField}
            hintText="Event description"
            floatingLabelText="Event description"
            multiLine
            rows={3}
          />
        </div>

        <div>
          <Field
            name="referral"
            component={AutoComplete}
            floatingLabelText="How did you book the event?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'id'}}
            dataSource={[
              {id: 0, name: 'Facebook'},
              {id: 1, name: 'Yelp'},
              {id: 2, name: 'TV Ad'},
              {id: 3, name: 'Friend'},
              {id: 4, name: 'Other'},
            ]}
          />
        </div>
        <br />
        <br />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}

const selector = formValueSelector('addEventForm');

AddEventForm = connect(state => ({
  survey: selector(state, 'survey'),
  venue: state.venue.venue,
}))(AddEventForm);

AddEventForm = reduxForm({
  form: 'addEventForm',
  initialValues: {
    name: 'Jane Doe',
  },
})(AddEventForm);

export default AddEventForm;
