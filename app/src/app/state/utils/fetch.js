import axios from "axios";

const BASE_URL = '/api'

export function fetch( url, method, body, auth=false ) => {
  const request = {
    method,
    url: `${BASE_URL}/path`,
    headers: setHeaders(auth),
    body: (method !== "GET") ? JSON.stringify( body ) : null,
  };
  return axios(request)
    .then( (response) => {
      return new Promise( ( resolve, reject ) => {
        if (response.status >= 200 && < 300) resolve(response);
        reject({})
    }
};
function setHeaders(auth){
  return ({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: (auth) ? localStorage.getItem('jwtToken') : null,
  });
}
