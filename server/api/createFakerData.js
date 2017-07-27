var jsf = require('json-schema-faker');
const faker = require('faker');

const User = require('../models/user.js');

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
  description: faker.lorem.paragraph()
})

function generateUsers(n=10) {
  let userArray = []
  for (let i = 0; i < n; i++) {
    userArray.push(getFakeUser());
  }
  const dbPromise = userArray.map( (user) => User.create(user));
  return Promise.all(dbPromise).then( (err, results) => {
    console.log("Error", err);
    console.log("Results", results);
    return results;
  });
}

module.exports = generateUsers

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
