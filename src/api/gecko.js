// index.js
const axios = require("axios");

// Define a handler function for the serverless function
module.exports = (req, res) => {
  // Use axios to make a GET request to coingecko API
  // You don't need an API key for coingecko
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;

  // Use the get method to make a GET request to the URL
  axios
    .get(url)
    .then((response) => {
      // Get the response data from the response object
      const data = response.data;

      // Extract the ethereum.usd field from the data
      const ethPrice = data.ethereum.usd;

      // Send the ethPrice as a JSON object
      res.json({ ethPrice });
    })
    .catch((error) => {
      // If something went wrong, send an error message as a JSON object
      res.json({ error: error.message });
    });
};
