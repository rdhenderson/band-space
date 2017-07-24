//Here we import our action types as constants from our actions folder.
import {
  GET_VENUE, GET_VENUE_SUCCESS, GET_VENUE_FAILURE,
  GET_VENUE_LIST, GET_VENUE_LIST_SUCCESS, GET_VENUE_LIST_FAILURE,
  // ADD_VENUE, ADD_VENUE_FAILURE, ADD_VENUE_SUCCESS,
  // ADD_VENUE_EVENT, ADD_VENUE_EVENT_FAILURE, ADD_VENUE_EVENT_SUCCESS,
  // ADD_VENUE_REVIEW, ADD_VENUE_REVIEW_FAILURE, ADD_VENUE_REVIEW_SUCCESS,
  // UPDATE_VENUE, UPDATE_VENUE_FAILURE, UPDATE_VENUE_SUCCESS,
  // REMOVE_VENUE, REMOVE_VENUE_FAILURE, REMOVE_VENUE_SUCCESS,
} from './venueActions';

//It is best practice to define your initial state as a constant that gets passed as an argument to your reducer function
const INITIAL_STATE = {
  venueList: [],
  venue: {},
  error: null,
  loading: false,
};

//REMEMBER: a reducer is just a function that takes in state & action, and returns a new object.
//RECALL: each reducer gets ALL actions, that is why we use a switch on action.type to let
//the specific reducer that relates to the action type know to return a new state object.
//BURN INTO YOUR BRAIN: NEVER MUTATE STATE. ALWAYS RETURN NEW STATE. NEVER MUTATE STATE.
//When we return {...state, newState}, ES6 destructuring strips state into new objects/arrays/ints/etc
export default function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
      case GET_VENUE:
        return { ...state, venue: null, error: null, loading: true};
      case GET_VENUE_SUCCESS://return user, status = authenticated and make loading = false
        return { ...state, venue: action.payload.data.venue, error:null, loading: false}; //<-- authenticated
      case GET_VENUE_FAILURE:// return error and make loading = false
        error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
        return { ...state, venue: null, error: error, loading: false};
      case GET_VENUE_LIST:
        return { ...state, venueList: null, error: null, loading: true};
      case GET_VENUE_SUCCESS:
        return { ...state, venueList: action.payload.data.venues, error:null, loading: false};
      case GET_VENUE_FAILURE:
        error = action.payload.data || {message: action.payload.message};
        return { ...state, venueList: null, error: error, loading: false};
      // case ADD_VENUE_REVIEW:// loading currentUser("me") from jwttoken in local/session storage storage,
      //   return { ...state, error: null, loading: true};
      // case ADD_VENUE_REVIEW_SUCCESS://return user, status = authenticated and make loading = false
      //   return { ...state, venue: action.payload.data, error:null, loading: false}; //<-- authenticated
      // case ADD_VENUE_REVIEW_FAILURE:// return error and make loading = false
      //   error = action.payload.data || { message: action.payload.message};//2nd one is network or server down errors
      //   return { ...state, error: error, loading: false};
      default:
        return state;
    }
}
