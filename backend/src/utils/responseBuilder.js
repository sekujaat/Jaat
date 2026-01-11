// src/utils/responseBuilder.js

function success(res, data = {}, status = 200) {
  return res.status(status).json({
    success: true,
    data,
  });
}

function fail(res, message = "Something went wrong", status = 400, code = null) {
  return res.status(status).json({
    success: false,
    error: {
      message,
      code,
    },
  });
}

module.exports = {
  success,
  fail,
};