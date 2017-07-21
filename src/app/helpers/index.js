import axios from 'axios'

const BASE_QUERY_VENUE = '/api/venues'
const BASE_QUERY_USER = '/api/users'
const BASE_QUERY_GROUP = '/api/bands'
const BASE_QUERY_REVIEW = '/api/reviews'

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
  axios.put(query, venue)
  .then( (results) => results )
  .catch( (err) => console.log(err))
}

export async function removeVenue(venueId, token) {
  if (!venueId) throw new Error("Must supply id to remove user");
  const query = `${BASE_QUERY_VENUE}/${venueId}`
  axios.delete(query, {venueId, token})
  .then( (err, results) => results )
  .catch(handleErrors);
}

export async function getUser(userId) {
  const query = (userId) ? `${BASE_QUERY_USER}/${userId}` : BASE_QUERY_USER;
  axios.get(query)
  .then( (results) => results )
  .catch( (err) => console.log(err))
}

export async function findUserByEmail(email) {
  const query = `${BASE_QUERY_USER}/email/${email}`;
  axios.get(query).then( (err, user) => {
    if (!user) return new Error('No user matches your request');
    return user;
  })
}

export async function getUserList(userId) {
  const query = BASE_QUERY_USER;
  axios.get(query).then( (err, results) => results.map( (user) => {
    return { name: user.name, _id: user._id } ;
  }))
}

export async function addUser(user) {
  const query = BASE_QUERY_USER;
  axios.post(query, user)
  .then( ( results) => results )
  .catch( (err) => err)
}

export async function updateUser(user) {

  const query = (user._id) ? `${BASE_QUERY_USER}/${user._id}` : BASE_QUERY_USER;
  axios.put(query, user)
  .then( (results) => results )
  .catch( (err) => console.log(err))
}

export async function removeUser(userId, token) {
  if (!userId) throw new Error("Must supply id to remove user");
  const query = `${BASE_QUERY_USER}/${userId}`;
  axios.delete(query, {userId, token})
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

export async function addGroupMember(groupId, member) {
  let member_id;
  if (member._id) {
    member_id = user._id;
  } else if (user.email && user.email.length > 0) {
    const user = await findUserByEmail(member.email);
    member_id = user._id;
  } else {
    return new Error("Must provide valid email or user id.");
  }
  const groupQuery = `${BASE_QUERY_GROUP}/member/${member_id}`;
  const userQuery = `${BASE_QUERY_USER}/group/${groupId}`;
  axios.put(userQuery);
  axios.put(query).then( (err, results) => results );
}

export async function removeGroupMember(groupId, member) {
  let member_id;
  if (member._id) {
    member_id = user._id;
  } else if (user.email && user.email.length > 0) {
    const user = await findUserByEmail(member.email);
    member_id = user._id;
  } else {
    return new Error("Must provide valid email or user id.");
  }
  const groupQuery = `${BASE_QUERY_GROUP}/${groupId}/member/${member_id}`;
  const userQuery = `${BASE_QUERY_USER}/${memberId}/group/${groupId}`;
  axios.delete(userQuery);
  axios.delete(groupQuery).then( (err, results) => results );
}
export async function updateGroup(group) {
  const query = (group._id) ? `${BASE_QUERY_GROUP}/${group._id}` : BASE_QUERY_GROUP;
  axios.put(query, group).then( (err, results) => results );
}

export async function removeGroup(groupId, token) {
  if (!groupId) throw new Error("Must supply id to remove group");
  const query = `${BASE_QUERY_group}/${groupId}`;
  axios.delete(query, {groupId, token})
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
  axios.put(query, {review, token}).then( (err, results) => results );
}

export async function removeReview(reviewId, token) {
  if (!reviewId) throw new Error("Must supply id to remove review");
  const query = `${BASE_QUERY_REVIEW}/${reviewId}`;
  axios.delete(query, {reviewId, token})
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
