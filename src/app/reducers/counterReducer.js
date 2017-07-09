//Here we import our action types as constants from our actions folder.
import { INC_COUNT, DEC_COUNT } from '../actions/countActions';

//It is best practice to define your initial state as a constant that gets passed as an argument to your reducer function
const initialState = {
  count: 0
}

//REMEMBER: a reducer is just a function that takes in state & action, and returns a new object.
//RECALL: each reducer gets ALL actions, that is why we use a switch on action.type to let
//the specific reducer that relates to the action type know to return a new state object.
//BURN INTO YOUR BRAIN: NEVER MUTATE STATE. ALWAYS RETURN NEW STATE. NEVER MUTATE STATE.
//When we return {...state, newState}, ES6 destructuring strips state into new objects/arrays/ints/etc
export default function reducer(state = initialState, action){
    let newCount = state.count + action.payload;
    switch (action.type) {
      case INC_COUNT:
        return {...state, count: newCount}
      case DEC_COUNT:
        return {...state, count: newCount}
      default:
        return state;
    }
}
