function setHeaders(auth){
  return ({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: (auth) ? localStorage.getItem('jwtToken') : null,
  });
}

export default setHeaders
