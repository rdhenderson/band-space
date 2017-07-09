//Here we create our action types as CONSTANTS in order to make error handling more straightforward.
//If you do not do this, you can get a silent fail, which you don't want to happen. Trust me.
export const INC_COUNT = 'INC_COUNT';
export const DEC_COUNT = 'DEC_COUNT';

//As always, an action is just a function that returns a type and a payload. The payload in this case is
//plus or minus one, so we can increment or decrement our counter.
export function incrementCount() {
  return {
    type: INC_COUNT,
    payload: 1
  }
}

export function decrementCount() {
  return {
    type: DEC_COUNT,
    payload: -1
  }
}
