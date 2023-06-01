// index.js
const axios = require("axios");

// Define a handler function for the serverless function
module.exports = (req, res) => {
  // Use axios to make a GET request to etherscan API
  // You need to get an API key from https://etherscan.io/apis
  const apiKey = "3BG8AYUPAAQKZDVIZVBGGVENB49D84NDMA";
  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`;

  // Use the get method to make a GET request to the URL
  axios
    .get(url)
    .then((response) => {
      // Get the response data from the response object
      const data = response.data;

      // Check if the API returned a success result
      if (data.status === "1") {
        // Extract the ethusd field from the result
        const ethPrice = data.result.ethusd;

        // Send the ethPrice as a JSON object
        res.json({ ethPrice });
      } else {
        // If the API returned an error, send it as a JSON object
        res.json({ error: data.message });
      }
    })
    .catch((error) => {
      // If something went wrong, send an error message as a JSON object
      res.json({ error: error.message });
    });
};
