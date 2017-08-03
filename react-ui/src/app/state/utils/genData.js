const faker = require('faker');
const uuid = require('uuid/v4');

const getFakeUser = () => ({
  _id: uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  zipcode: faker.address.zipCode(),
  phone: faker.phone.phoneNumber(),
  password: "12345",
  groups: [],
  profile_image: faker.image.imageUrl(200, 200),
});

const getFakeVenue = () => {
  const venue = {
    _id: uuid(),
    name: faker.name.findName(),
    address: {
      street: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
    },
    phone: faker.phone.phoneNumber(),
    profile_image: faker.image.avatar(),
    review: [],
    images: [],
    description: faker.lorem.paragraph(),
    website: faker.internet.url()
  };
  return venue;
}

const getFakeEvent = (venue) => ({
  _id: uuid(),
  name: faker.lorem.slug(),
  venue: venue,
  description: faker.lorem.paragraph(),
  review: [],
  images: [],
  description: faker.lorem.paragraph(),
  website: faker.internet.url()
});

const getFakeReview = (subject, author) => ({
  _id: uuid(),
  title: faker.lorem.slug(),
  subject: subject,
  author: author,
  notes: faker.lorem.paragraph(),
  rating: faker.random.number(5),
  survey: {
    ambiance: faker.random.number(5),
    musicality: faker.random.number(5),
    professionalism: faker.random.number(5),
    crowd: faker.random.number(5),
    value: faker.random.number(5),
    sound: faker.random.number(5),
    showmanship: faker.random.number(5),
  }

})

const getFakerMember = () => ({
  user_id: null,
  name: faker.person.findName(),
  instrument: faker.lorem.slug(),
});

const getFakeGroup = (member) => ({
  _id: uuid(),
  name: faker.company.productName(),
  description: faker.lorem.paragraph(),
  profile_image: { img: faker.internet.url()},
  members: [
    {
      user_id: member._id,
      name: member.name,
      instrument: faker.lorem.slug(),
    },
    getFakerMember(),
    getFakerMember()
  ],
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  zipCode: faker.address.zipcode(),
});

export const genTestVenues = (number) => {
  let results = [];
  for (let i = 0; i < number; i++) {
    results.push(getFakeVenue())
  }
  return results;
}
