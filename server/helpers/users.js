var jwt = require('jsonwebtoken');

function generateToken(user) {
  //Dont use password and other sensitive fields
  //Use fields that are useful in other parts of the app/collections/models
  var u = {
    name: user.name,
    username: user.username,
    admin: user.admin,
    moderator: user.moderator,
    email: user.email,
    _id: user._id.toString(),
    // image: user.image,
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
    username: u.username,
    email: u.email,
    admin: u.admin,
    moderator: u.moderator,
    // createdAt: u.createdAt,
    // updatedAt: u.updatedAt,
    // image: u.image,
    isEmailVerified: u.isEmailVerified
  }
}

module.exports = {
  getCleanUser: getCleanUser,
  generateToken: generateToken
}
