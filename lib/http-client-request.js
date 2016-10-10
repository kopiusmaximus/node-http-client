'use strict';

const http = require('http');

const method = (process.argv[2] || 'get').toUpperCase();

const data = JSON.stringify({
  key: 'value',
});

const headers = {
  'Content-Type': 'application/json',
  'Content-Length': data.length,
};

// check to see if the verb is a POST or PATCH
// it it's either (hence '.some'), set 'sendData' to 'true'; otherwise, 'false'
const sendData = ['POST', 'PATCH'].some(e => e === method);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/upload',
  method,
};

if (sendData) {
  options.headers = headers;
}

const request = http.request(options, (response) => {
  // now we're in a callback function that listens for a response event
  let data = '';
  response.setEncoding('utf8');

  // event triggered by...
  response.on('error', console.error);

  // event triggered by the response body coming back
  response.on('data', (chunk) => {
    data += chunk;
  });
  // event triggered by the response ending
  response.on('end', () => {
    console.log(data);
  });
});

request.on('error', console.error);

// if we are sending data, write the data to the request body
if (sendData) {
  request.write(data);
}

// tells the API that my request is complete, and now you can do the stuff
request.end();
