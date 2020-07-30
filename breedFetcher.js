const request = require('request');

const args = process.argv.slice(2);
let breed = args[0].substring(0, 3);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request.get(url, (error, _response, body) => {
  if (!error) {
    try {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } catch (err) {
      console.log('breed not found');
    }
  } else {
    console.log('Error');
  }
});