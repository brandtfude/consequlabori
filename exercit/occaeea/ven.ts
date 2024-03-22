
const functions = require('@google-cloud/functions-framework');

/**
 * HTTP function that returns a message.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('helloHttp', (req, res) => {
  // This function will fail to execute successfully.
  throw new Error('This is an error.');
});

// Define an error handler function that returns a new value.
functions.http('helloHttpWithError', (req, res) => {
  // This function will fail to execute successfully.
  throw new Error('This is an error.');
}, (err) => {
  // Return a new value to be returned from the function.
  return {
    error: err.message,
  };
});

// Define an error handler function that returns a Promise.
functions.http('helloHttpWithPromiseError', (req, res) => {
  // This function will fail to execute successfully.
  throw new Error('This is an error.');
}, (err) => {
  // Return a Promise that resolves to a new value.
  return Promise.resolve({
    error: err.message,
  });
});
