var jwt = require('jsonwebtoken');

function generateToken(user) {
  //Dont use password and other sensitive fields
  //Use fields that are useful in other parts of the app/collections/models
  var u = {
    name: user.name,
    admin: user.admin,
    moderator: user.moderator,
    email: user.email,
    _id: user._id.toString(),
    google: user.google,
    facebook: user.facebook,
    spotify: user.spotify,
    profile_image: user.profile_image,
    // bands: user.bands,
    // reviews: user.reviews,
    // isEmailVerified: user.isEmailVerified //used to prevent creating posts w/o verifying emails
  };

  return token = jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}


//strips internal fields like password and verifyEmailToken etc
function getCleanUser(user) {
  if(!user) return {};

  var u = user.toJSON();
  return {
    _id: u._id,
    name: u.name,
    email: u.email,
    // bands: u.bands,
    // reviews: u.reviews,
    admin: u.admin,
    moderator: u.moderator,
    google: user.google,
    facebook: user.facebook,
    spotify: user.spotify,
    // createdAt: u.createdAt,
    // updatedAt: u.updatedAt,
    profile_image: u.profile_image,
    isEmailVerified: u.isEmailVerified
  }
}

module.exports = {
  getCleanUser: getCleanUser,
  generateToken: generateToken
}
