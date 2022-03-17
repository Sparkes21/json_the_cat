const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log(typeof body);
  if (error) {
    console.log("error: ", error)
    return
  };
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Breed not found")
    return
  };
  console.log(data[0].description);
  //console.log(typeof data);
});

