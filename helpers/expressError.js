/** ExpressError extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *
 *  Since we are using JSONSchema and will return an array of
 *  errors we want to make sure we display that properly
 *  The error-handling middleware will return this.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    if(process.env.NODE_ENV !== "test"){
      console.error(this.stack);
    }
  }
}

class BadRequestError extends ExpressError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}


class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

module.exports = {
  ExpressError,
  BadRequestError,
  UnauthorizedError
};
