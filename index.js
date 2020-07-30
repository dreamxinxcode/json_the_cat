const fetchBreedDescription = require('./breedFetcher');

const args = process.argv.slice(2);
let breedName = args[0].substring(0, 3);


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});