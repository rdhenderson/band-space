
export function normalizeArray(data, key) {
  const normalizedData = {
    venues: {},
    results: []
  }
  data.forEach( (item) => {
    normalizedData[key][item._id] = {...item};
    normalizedData.results.push(item._id);
  });
  return normalizedData;
}

export function normalizeItem(data, key) {
  return {
    results: data._id,
    [key]: { [data._id]: data }
  }
}

export function normalizeData(data, key){
  if (data.length) return normalizeArray(data, key)
  return normalizeItem(data, key)

}
