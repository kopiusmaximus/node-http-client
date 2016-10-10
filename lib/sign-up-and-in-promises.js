'use strict';

// gain access to the Node-provided http module
const http = require('http');

// take the command-line arguments for user email and password,
// nest them in a POJO, and convert the POJO into a JSON string
const formData = JSON.stringify({
  credentials: {
    email: process.argv[2],
    password: process.argv[3],
  },
});

// error handle for error events
const onError = (error) => {
  if (typeof error === 'object' &&
      error.response) {
    // log HTTP response status code & message
    console.error(error.response.statusCode, error.response.statusMessage);
    console.error(error.data);
  } else {
    // if no reponse, report error.stack
    console.error(error.stack);
  }
};

// handle successful sign-in
const onSignIn = (response) => {
  console.log(response);
  console.log('Signed in');
};

// handle successful sign-up
const onSignUp = (response) => {
  console.log(response);
  console.log('Signed up');
};

// The stuff that doesn't change for sign-up or sign-in :)
const baseOptions = {
  hostname: 'localhost',
  port: 3000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': formData.length,
  },
};

// create function to sign up or in
const signUpOrIn = (credentials, path) =>
  // (implicitly) return Promise for sign up or in request
  new Promise((resolve, reject) => {
    // create request options using baseOptions as a starting point
    const options = Object.assign({ path }, baseOptions);

    // create new HTTP request
    const request = http.request(options, (response) => {
      // handle response
      let data = '';
      response.setEncoding('utf8');

      // on error, reject promise
      // note that the callback 'reject' gets passed the error
      // if the error occurs here, it is probably a network error
      response.on('error', reject);

      // handle the response data
      response.on('data', (chunk) => {
        data += chunk;
      });

      // handle the end of the response
      response.on('end', () => {
        // if request is successful and response status code is in the
        // desired range, resolve with the response data
        if (response.statusCode >= 200 &&
            response.statusCode < 300) {
          resolve(data);
        } else {
          // if request is 'successful' (i.e. a response was received),
          // but the response itself is not successful (code not 200-299),
          // reject promise and pass response & data to 'reject'
          reject({ response, data });
        }
      });
    });

    // handle error in the request
    request.on('error', reject);

    // write data to the request body
    request.write(credentials);

    // indicate that we are done adding stuff to the request
    // and the request can actually be initiated
    // i.e. start the async process
    request.end();
  });

const signUp = (credentials) => signUpOrIn(credentials, '/sign-up');
const signIn = (credentials) => signUpOrIn(credentials, '/sign-in');

signUp(formData)
.then(onSignUp)
.then(() => signIn(formData))
.then(onSignIn)
.catch(onError);
