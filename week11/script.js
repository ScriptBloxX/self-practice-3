// normal error
class SimpleError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SimpleError';
  }
}

// captureStackTrace
class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
}

// test
try {
  throw new SimpleError('test');
} catch (error) {
  console.log('err:', error.name);
  console.log('Stack Trace:', error.stack);
}


try {
  function fetchUserData(userId) {
    if (!userId) {
      throw new APIError('test', 400);
    }
  }
  fetchUserData(null);
} catch (error) {
  console.log('err:', error.name);
  console.log('Stack Trace:', error.stack);
}
