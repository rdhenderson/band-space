import axios from 'axios'

const BASE_QUERY_VENUE = '/api/venues'
const BASE_QUERY_USER = '/api/users'
const BASE_QUERY_GROUP = '/api/bands'
const BASE_QUERY_REVIEW = '/api/reviews'

const handleErrors = ( err ) => {
  console.log("ERROR", err);
}

export async function refreshToken(token){
  if (!token) token = localStorage.getItem('jwtToken');
  return axios({
    method: 'get',
    url: `/api/users/me/from/token?token=${token}`,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( ({token}) => {
    localStorage.setItem('jwtToken', token);
    return token;
  });
}

export async function getVenue(venueId, cb) {
    const query = (venueId) ? `${BASE_QUERY_VENUE}/${venueId}` : BASE_QUERY_VENUE;
    return axios.get(query).then( (results) => results );
}

export async function getVenueList(venueId) {
  const query = BASE_QUERY_VENUE;
  return axios.get(query).then( (results) => results.map( (venue) => {
    return { name: venue.name, _id: venue._id } ;
  }))
}

export async function addVenue(venue) {
  const query = BASE_QUERY_VENUE;
  return axios.post(query, venue).then( (results) => results );
}

export async function updateVenue(venue) {
  const query = (venue._id) ? `${BASE_QUERY_VENUE}/${venue._id}` : BASE_QUERY_VENUE;
  return axios.put(query, venue).then( (results) => results );
}

export async function removeVenue(venueId, token) {
  if (!venueId) throw new Error("Must supply id to remove user");
  const query = `${BASE_QUERY_VENUE}/${venueId}`
  return axios.delete(query, {venueId, token})
  .then( (results) => results )
  .catch(handleErrors);
}

export async function getUser(userId) {
  const query = (userId) ? `${BASE_QUERY_USER}/${userId}` : BASE_QUERY_USER;
  return axios.get(query)
  .then( (results) => results)
  .catch((err) => console.log(err));
}

export async function findUserByEmail(email) {
  const query = `${BASE_QUERY_USER}/email/${email}`;
  return axios.get(query).then( (user) => {
    if (!user) return new Error('No user matches your request');
    return user;
  })
}

export async function getUserList(userId) {
  const query = BASE_QUERY_USER;
  return axios.get(query).then( (results) => results.map( (user) => {
    return { name: user.name, _id: user._id } ;
  }))
}

export async function addUser(user) {
  const query = BASE_QUERY_USER;
  return axios.post(query, user).then( (results) => results );
}

export async function updateUser(user, token=false) {
  if (!token) token = localStorage.getItem('jwtToken');
  console.log("users ID", user._id);
  const query = (user._id) ? `${BASE_QUERY_USER}/${user._id}` : BASE_QUERY_USER;
  return axios({
    method: 'put',
    url: `${query}?token=${token}`,
    data: user,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( (results) => refreshToken(token)

 )
}

export async function removeUser(userId, token=false) {
  if (!token) token = localStorage.getItem('jwtToken');
  if (!userId) throw new Error("Must supply id to remove user");
  const query = `${BASE_QUERY_USER}/${userId}`;
  return axios({
    method: 'delete',
    url: `${query}?token=${token}`,
    data: userId,
    headers: {'Authorization': `Bearer ${token}`}
  })
  .then( (results) => results )
  .catch(handleErrors);
}

export async function getGroup(groupId) {
  const query = (groupId) ? `${BASE_QUERY_GROUP}/${groupId}` : BASE_QUERY_GROUP;
  return axios.get(query).then( (results) => results );
}

export async function getGroupList(userId) {
  const query = BASE_QUERY_GROUP;
  return axios.get(query).then( (results) => results.map( (group) => {
    return {name: group.name, _id: group._id}
  }));
}

export async function addGroup(group) {
  const query = BASE_QUERY_GROUP;
  return axios.post(query, group).then( (results) => results );
}

export async function addGroupMember(groupId, member, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  const query = `${BASE_QUERY_USER}/group/${groupId}/member`;
  return axios({
    method: 'post',
    url: `${query}?token=${token}`,
    data: member,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( (results) => results );
}

export async function removeGroupMember(groupId, member, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  const query = `${BASE_QUERY_GROUP}/${groupId}/member`;
  return axios({
    method: 'delete',
    url: `${query}?token=${token}`,
    data: member,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( (results) => results );
}

export async function updateGroup(group, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  const query = (group._id) ? `${BASE_QUERY_GROUP}/${group._id}` : BASE_QUERY_GROUP;
  return axios({
    method: 'put',
    url: `${query}?token=${token}`,
    data: group,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( (results) => results );
}

export async function removeGroup(groupId, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  if (!groupId) throw new Error("Must supply id to remove group");
  const query = `${BASE_QUERY_GROUP}/${groupId}`;
  return axios({
    method: 'delete',
    url: `${query}?token=${token}`,
    headers: {'Authorization': `Bearer ${token}`}
  })
  .then( (results) => results )
  .catch(handleErrors);
}

export async function getReview(reviewId) {
  const query = (reviewId) ? `${BASE_QUERY_REVIEW}/${reviewId}` : BASE_QUERY_REVIEW;
  return axios.get(query).then( (results) => results );
}

export async function getReviewList() {
  const query = BASE_QUERY_REVIEW;
  return axios.get(query).then( (results) => results.map( (review) => {
    return {name: review.name, _id: review._id}
  }));
}

export async function addReview(review, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  const query = BASE_QUERY_REVIEW;
  return axios({
    method: 'post',
    url: `${query}?token=${token}`,
    data: review,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( (results) => results );
}

export async function updateReview(review, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  const query = (review._id) ? `${BASE_QUERY_REVIEW}/${review._id}` : BASE_QUERY_REVIEW;
  return axios({
    method: 'put',
    url: `${query}?token=${token}`,
    data: review,
    headers: {'Authorization': `Bearer ${token}`}
  }).then( (results) => results );
}

export async function removeReview(reviewId, token) {
  if (!token) token = localStorage.getItem('jwtToken');
  if (!reviewId) throw new Error("Must supply id to remove review");
  const query = `${BASE_QUERY_REVIEW}/${reviewId}`;
  return axios({
    method: 'delete',
    url: `${query}?token=${token}`,
    headers: {'Authorization': `Bearer ${token}`}
  })
  .then( (results) => results )
  .catch(handleErrors);
}

const helper = {
  venue : {
    get : getVenue,
    list : getVenueList,
    add : addVenue,
    update : updateVenue,
    remove : removeVenue,
  },
  user : {
    get : getUser,
    list : getUserList,
    add : addUser,
    findByEmail : findUserByEmail,
    update : updateUser,
    remove : removeUser,
  },
  group : {
    get : getGroup,
    list : getGroupList,
    add : addGroup,
    addMember : addGroupMember,
    removeMember : removeGroupMember,
    update : updateGroup,
  },
  review : {
    get : getReview,
    list : getReviewList,
    add : addReview,
    remove : removeReview,
    update : updateReview,
  },
}

export default helper;
