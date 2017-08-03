
export function normalizeArray(data) {
  const normalizedData = {
    venues: {},
    results: []
  }
  data.forEach( (item) => {
    normalizedData.venues[item._id] = {...item};
    normalizedData.results.push(item._id);
  });
  return normalizedData;
}

export function normalizeItem(data) {
  return {
    results: data._id,
    venues: { [data._id]: data }
  }
}
