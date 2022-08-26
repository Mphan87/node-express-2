/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const jsonschema = require("jsonschema");
const userAuthSchema = require("../schemas/userAuth.json");
const ExpressError = require('../helpers/expressError');
const { BadRequestError } = require('../helpers/expressError');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */


router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    

    let user = await User.register({username, password, first_name, last_name, email, phone});
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */


router.post('/login', async function(req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userAuthSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const { username, password } = req.body;
    let user = User.authenticate(username, password);
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;



// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhteWt5eCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYxMzE2NDI4fQ.t6hvuKE99IRXBGMyJG0uae6vQLUDnTZw9ONxmPxR_-A"


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6eyJ1c2VybmFtZSI6Im1waGFuMTc3IiwicGFzc3dvcmQiOiIkMmIkMTAkamhwSk15b3BQRGdVWXZYVlVFclhoLjJvcjFmWFRSZEs3N25BMUNrZTFQVEZtVkN2YVNTN2EiLCJmaXJzdF9uYW1lIjoiTWlrZSIsImxhc3RfbmFtZSI6IlBoYW4iLCJlbWFpbCI6Im1waGFuMTc3QGdtYWlsLmNvbSIsInBob25lIjoiNjI2MjMyMDE0NSIsImFkbWluIjp0cnVlfSwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NjEzMjA5ODR9.AUQRAcBG7SLexyNVcJB7qlX9906Atb2ywBeIDaav1uA"