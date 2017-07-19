//Here we import our action types as constants from our actions folder.
import { USER_LOGIN, USER_LOGOUT } from '../actions/userActions';

//It is best practice to define your initial state as a constant that gets passed as an argument to your reducer function
const initialState = {
  user: {},
  token: ""
};

//REMEMBER: a reducer is just a function that takes in state & action, and returns a new object.
//RECALL: each reducer gets ALL actions, that is why we use a switch on action.type to let
//the specific reducer that relates to the action type know to return a new state object.
//BURN INTO YOUR BRAIN: NEVER MUTATE STATE. ALWAYS RETURN NEW STATE. NEVER MUTATE STATE.
//When we return {...state, newState}, ES6 destructuring strips state into new objects/arrays/ints/etc
export default function reducer(state = initialState, action){
    const user = (action.payload) ? action.payload.user : state.user;
    const token = (action.payload) ? action.payload.token : state.token;
    switch (action.type) {
      case USER_LOGIN:
        return {...state, user, token }
      case USER_LOGOUT:
        return {...state, user, token }
      default:
        return state;
    }
}
