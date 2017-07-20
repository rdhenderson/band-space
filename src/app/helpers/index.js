import axios from 'axios'

const BASE_QUERY_VENUE = '/api/venues/'
const BASE_QUERY_USER = '/api/users/'
const BASE_QUERY_GROUP = '/api/groups/'
const BASE_QUERY_REVIEW = '/api/reviews/'

const handleErrors = ( err ) => {
  console.log("ERROR", err);
}

export async function getVenue(venueId) {
  const query = (venueId) ? `${BASE_QUERY_VENUE}/${venueId}` : BASE_QUERY_VENUE;
  axios.get(query).then( (err, results) => results );
}

export async function getVenueList(venueId) {
  const query = BASE_QUERY_VENUE;
  axios.get(query).then( (err, results) => results.map( (venue) => {
    return { name: venue.name, _id: venue._id } ;
  }))
}

export async function addVenue(venue) {
  const query = BASE_QUERY_VENUE;
  axios.post(query, venue).then( (err, results) => results );
}

export async function updateVenue(venue) {
  const query = (venue._id) ? `${BASE_QUERY_VENUE}/${venue._id}` : BASE_QUERY_VENUE;
  axios.post(query, venue).then( (err, results) => results );
}

export async function getUser(userId) {
  const query = (userId) ? `${BASE_QUERY_USER}/${userId}` : BASE_QUERY_USER;
  axios.get(query).then( (err, results) => results );
}

export async function getUserLists(userId) {
  const query = BASE_QUERY_USER;
  axios.get(query).then( (err, results) => results.map( (user) => {
    return { name: user.name, _id: user._id } ;
  }))
}

export async function addUser(user) {
  const query = BASE_QUERY_USER;
  axios.post(query, user).then( (err, results) => results );
}

export async function updateUser(user) {
  const query = (user._id) ? `${BASE_QUERY_USER}/${user._id}` : BASE_QUERY_USER;
  axios.post(query, user).then( (err, results) => results );
}

export async function removeUser(userId, token) {
  if (!userId) throw new Error("Must supply id to remove user");
  const query = (user._id) ? `${BASE_QUERY_USER}/${user._id}` : BASE_QUERY_USER;
  axios.delete(query, {user, token})
  .then( (err, results) => results )
  .catch(handleErrors);
}

export async function getGroup(groupId) {
  const query = (groupId) ? `${BASE_QUERY_GROUP}/${groupId}` : BASE_QUERY_GROUP;
  axios.get(query).then( (err, results) => results );
}

export async function getGroupList(userId) {
  const query = BASE_QUERY_GROUP;
  axios.get(query).then( (err, results) => results.map( (group) => {
    return {name: group.name, _id: group._id}
  }));
}

export async function addGroup(group) {
  const query = BASE_QUERY_GROUP;
  axios.post(query, group).then( (err, results) => results );
}

export async function updateGroup(group) {
  const query = (group._id) ? `${BASE_QUERY_GROUP}/${group._id}` : BASE_QUERY_GROUP;
  axios.post(query, group).then( (err, results) => results );
}

export async function removegroup(groupId, token) {
  if (!groupId) throw new Error("Must supply id to remove group");
  const query = (group._id) ? `${BASE_QUERY_group}/${group._id}` : BASE_QUERY_GROUP;
  axios.delete(query, {group, token})
  .then( (err, results) => results )
  .catch(handleErrors);
}

export async function getReview(reviewId) {
  const query = (groupId) ? `${BASE_QUERY_REVIEW}/${groupId}` : BASE_QUERY_REVIEW;
  axios.get(query).then( (err, results) => results );
}

export async function getReviewList(userId) {
  const query = BASE_QUERY_REVIEW;
  axios.get(query).then( (err, results) => results.map( (group) => {
    return {name: review.name, _id: review._id}
  }));
}

export async function addReview(review, token) {
  const query = BASE_QUERY_REVIEW;
  axios.post(query, review).then( (err, results) => results );
}

export async function updateReview(review, token) {
  const query = (review._id) ? `${BASE_QUERY_REVIEW}/${review._id}` : BASE_QUERY_REVIEW;
  axios.post(query, {review, token}).then( (err, results) => results );
}

export async function removeReview(reviewId, token) {
  if (!reviewId) throw new Error("Must supply id to remove review");
  const query = (review._id) ? `${BASE_QUERY_REVIEW}/${review._id}` : BASE_QUERY_REVIEW;
  axios.delete(query, {review, token})
  .then( (err, results) => results )
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
