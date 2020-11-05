// iss.js 

const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};


// ISS part II

let ipAPI = 'http://ip-api.com/json/99.230.93.8' // ip address object


const getLatLon = (url) => {
  request(url, (error, response, body) => {

    const data = JSON.parse(body);
    const ipObj = {
      latitude: data.lat,
      longitude: data.lon
    }
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    console.log(ipObj);

  });
}

getLatLon(ipAPI)


module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };

