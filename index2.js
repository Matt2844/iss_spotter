// index 2.js

const { fetchMyIP } = require('./iss_promised');

fetchMyIP().then(body => console.log(body)); 
