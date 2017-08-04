// import actionTransformMiddleware from 'action-transform-middleware'
// import { normalizeItem, normalizeArray } from '../../utils/normalizeData.js'

// const flattenApiData = (name) => name.toLowerCase();
// const normalizeResponse = ()
const normalizeMiddleware = store => next => action => {
  // Pass on the action if it doesn't have an api response
  console.log("Middleware triggered:", action);

  if (!action.payload || !action.payload.status || !action.payload.data)
    return next(action);

  const {payload: {data}} = action;
  action.response = (data.length) ? normalizeArray(data) : normalizeItem(data)
  next(action);
}

export default normalizeMiddleware

function normalizeArray(data) {
  const normalizedData = {
    entities: {},
    results: []
  }
  data.forEach( (item) => {
    normalizedData.entities[item._id] = {...item};
    normalizedData.results.push(item._id);
  });
  return normalizedData;
}

function normalizeItem(data) {
  return {
    results: data._id,
    entities: { [data._id]: data }
  }
}

function normalizeData(data){

}
