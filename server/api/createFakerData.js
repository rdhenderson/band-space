var jsf = require('json-schema-faker');
const faker = require('faker');
const _ = require('lodash');
const User = require('../models/user.js');
const Group = require('../models/group.js');
const Venue = require('../models/venue.js');
const Review = require('../models/Review.js');

const getFakeUser = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  zipcode: faker.address.zipCode(),
  phone: faker.phone.phoneNumber(),
  password: "12345",
  profile_image: faker.image.imageUrl(200, 200),
});

const getFakeVenue = () => ({
  name: faker.name.findName(),
  address: {
    street: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipcode: faker.address.zipCode(),
  },
  phone: faker.phone.phoneNumber(),
  profile_image: faker.image.avatar(),
  images: [faker.image.imageUrl()],
  description: faker.lorem.paragraph(),
  website: faker.internet.url()
});

const getFakeReview = () => ({
  title: faker.lorem.slug(),
  description: faker.lorem.paragraph(),

})
const getFakeGroup = () => ({
  name: faker.company.productName(),
  description: faker.lorem.paragraph(),
  profile_image: { img: faker.image.imageUrl(200,200)},
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  zipCode: faker.address.zipcode(),
});


function generateUser() {
  const newUser = getFakeUser());
  return new Promise( (resolve, reject) => {
    User.create(newUser, (err, result) => {
      if (err) reject(err);
      return resolve(result);
    });
  });
}
function generateVenue() {
  const newVenue = getFakeVenue());
  return new Promise( (resolve, reject) => {
    Venue.create(newVenue, (err, result) => {
      if (err) reject(err);
      return resolve(result);
    });
  });
}

function generateReview(venueId, userId) {
  const newReview = getFakeVenue());
  _.set(newReview, "venue_id", venueId);
  _.set(newReview, "user_id", userId);
  return new Promise( (resolve, reject) => {
    Review.create(newReview, (err, result) => {
      if (err) reject(err);
      return resolve(result);
    });
  });
}

function generateGroup(userId) {
  const newGroup = getFakeGroup());
  _.set(newGroup, "members[0].user_id", userId);
  return new Promise( (resolve, reject) => {
    Group.create(newGroup, (err, result) => {
      if (err) reject(err);
      return resolve(result);
    });
  });
}



module.exports = {
  generateUsers,
  generateVenues,
  generateGroups,
  generateReviews
};

// console.log(getFakeUser());
// console.log(getFakeVenue());
// console.log(getFakeReview());

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// var schema = {
//   type: 'object',
//   properties: {
//     user: {
//       type: 'object',
//       properties: {
//         id: {
//           $ref: '#/definitions/positiveInt'
//         },
//         name: {
//           type: 'string',
//           faker: 'name.findName'
//         },
//         email: {
//           type: 'string',
//           format: 'email',
//           faker: 'internet.email'
//         }
//       },
//       required: ['id', 'name', 'email']
//     }
//   },
//   required: ['user'],
//   definitions: {
//     positiveInt: {
//       type: 'integer',
//       minimum: 0,
//       exclusiveMinimum: true
//     }
//   }
// };

// const sample = jsf(schema); //.then(function(sample) {
//   console.log(sample);
//   // "[object Object]"
//
//   console.log(sample.user.name);
//   // "John Doe"
