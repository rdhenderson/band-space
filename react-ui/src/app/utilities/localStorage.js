
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    return JSON.parse(serializedState);
  }
  catch {
    return undefined;
  }
}
