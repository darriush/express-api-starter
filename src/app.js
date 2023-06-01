// index.js
const XMLHttpRequest = require('xhr2');

// Define a handler function for the serverless function
module.exports = (req, res) => {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Use xhr2 to make a GET request to coingecko API
  // You don't need an API key for coingecko
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;

  // Set the response type to json
  xhr.responseType = 'json';

  // Open the request
  xhr.open('GET', url);

  // Set a callback function for when the request is done
  xhr.onload = () => {
    // Check if the status code is 200 (OK)
    if (xhr.status === 200) {
      // Get the response data from the xhr object
      const data = xhr.response;

      // Extract the ethereum.usd field from the data
      const ethPrice = data.ethereum.usd;

      // Send the ethPrice as a JSON object
      res.json({ ethPrice });
    } else {
      // If the status code is not 200, send an error message as a JSON object
      res.json({ error: `Request failed with status code ${xhr.status}` });
    }
  };

  // Set a callback function for when the request fails
  xhr.onerror = () => {
    // Send an error message as a JSON object
    res.json({ error: 'Request failed' });
  };

  // Send the request
  xhr.send();
};
