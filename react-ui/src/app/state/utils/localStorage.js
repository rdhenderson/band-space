/**********************************************************************
 * Attempt to load state from local storage
 * @method loadState
 * @return {Object}  parsed state object or undefined
 **********************************************************************/

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState);
  }
  catch(err) {
    return undefined;
  }
}

/***********************************************************
 * Save serialized state to local storage                  *
 * @method saveState                                       *
 * @param  {Object}  state current redux state to be saved *
 * @return {none}        no return value                   *
 ***********************************************************/

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch(err) {
    if (!process.env.HEROKU_ENV) console.log("Saving store failed. Check privacy settings.");
  }
}
