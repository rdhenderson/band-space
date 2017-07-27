const updateTokenOnChange = () => store => next => action => {
  // Get the state before and after the action was performed
  const previousToken = store.getState().token;
  const result = next(action);
  const nextToken = store.getState().token;
  // Respond to changes
  if (nextToken !== previousToken) localStorage.setItem('token', nextToken);

  return result;
}

export default updateTokenOnChange
