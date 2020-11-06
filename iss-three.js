// ISS III

const { getLatLon } = require('./iss');
const request = require('request');


const ipURL = 'http://ip-api.com/json/99.230.93.8' // ip address object

// getLatLon(ipURL)

const fetchISSFlyOverTimes = (data, callback) => {
  const latLonObject = getLatLon(data);
  console.log(latLonObject);

  console.log(callbac("anexample"));

}

fetchISSFlyOverTimes(ipURL)