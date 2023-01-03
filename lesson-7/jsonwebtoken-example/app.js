const jwt = require("jsonwebtoken")
require("dotenv").config()

const {SECRET_KEY} = process.env;

const payload = {
    id: "63adbfcbf73e808b55c70475"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWRiZmNiZjczZTgwOGI1NWM3MDQ3NSIsImlhdCI6MTY3MjMzMTg1NSwiZXhwIjoxNjcyNDE0NjU1fQ.V1MSLBG27BlgLfHxOv2KwYut9VEfD2qwMTKwqwNzCQo"
    const result = jwt.verify(token, SECRET_KEY);
    // console.log(result)
    const result2 = jwt.verify(invalidToken, SECRET_KEY)
}
catch(error) {
    console.log(error.message);
}