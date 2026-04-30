function eventLogger(event) {
  console.log('EVENT', JSON.stringify(event, null, 2));
}

function logInfo(title, message) {
  console.log(title);
  if (message !== undefined) {
    console.log(typeof message === 'string' ? message : JSON.stringify(message));
  }
}

function logError(message, error) {
  console.error(message);
  if (error) {
    console.error(error.stack || error);
  }
}

module.exports = { eventLogger, logInfo, logError };
