import { normalizeArray, normalizedItem } from './normalizeData.js'
import { genTestVenues } from './genData.js'

const testVenue = genTestVenues(2);


const venues = {
    [testVenue[0]._id] : {...testVenue[0]},
    [testVenue[1]._id] : {...testVenue[1]},
  };

const results = [];
testVenue.forEach( (item) => results.push(item._id));

const normalizedResult = { venues, results };

it('normalizes venue information', () => {
  expect(normalizeArray(testVenue)).toEqual(normalizedResult);
});
