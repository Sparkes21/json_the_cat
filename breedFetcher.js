const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log(typeof body);
    if (error) {
      console.log("error: ", error);
      return;
    }
    //console.log('body:', body); // Print the HTML for the Google homepage.
    const apiResponse = JSON.parse(body);
    if (!apiResponse.length) {
    //console.log("Breed not found")
      callback("Breed not found", null);
      return;
    }
    callback(null, apiResponse[0].description);
  //console.log(data[0].description);
  //console.log(typeof data);
  });
};

module.exports = { fetchBreedDescription };


