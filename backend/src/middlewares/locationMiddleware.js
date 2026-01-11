// src/middlewares/locationMiddleware.js

function attachLocation(req, res, next) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    req.socket.remoteAddress ||
    null;

  const country = req.headers["x-country"] || null;
  const city = req.headers["x-city"] || null;

  req.location = { ip, country, city };
  return next();
}

module.exports = {
  attachLocation,
};