const request = require('request');


const fetchBreedDescription = function (breedName, envelope) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, _response, body) => {
    if (error) {
      envelope(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      envelope(`Failed to find ${breedName}`, null);
      return;
    }
    envelope(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
