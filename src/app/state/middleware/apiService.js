import axios from 'axios'


const BASE_URL = typeof document === "undefined" ? "http://localhost:3000/api" : "/api";

const apiService = ( ) => ( next ) => ( action ) => {
  console.log("in api service middleware", action);
  const result = next( action );
  console.log("API middleware, action:", result);
  console.log("API middleware, next:", next);
  if ( !action.meta || !action.meta.async ) {
    return result;
  }

  const { path, method = "GET", body, auth } = action.meta;

  if ( !path ) {
    throw new Error( `'path' not specified for async action ${ action.type }` );
  }

  const request = {
    method,
    url: `${BASE_URL}${path}`,
    headers: setHeaders(auth),
    body: (method !== "GET") ? JSON.stringify( body ) : null,
  };

  return axios(request)
  .then( (response) =>
    next({
      type: `${action.type}_SUCCESS`,
      payload: response,
      meta: action.meta,
    })
  .catch( (err) =>
    next({
      type: `${action.type}_FAILURE`,
      payload: response,
      meta: action.meta,
    })
  ))
}


function setHeaders(auth){
  return ({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: (auth) ? localStorage.getItem('jwtToken') : null,
  });
}

export default apiService;
