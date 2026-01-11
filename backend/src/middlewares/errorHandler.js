// src/middlewares/errorHandler.js

function notFoundHandler(req, res, next) {
  res.status(404).json({ error: "Route not found" });
}

function errorHandler(err, req, res, next) {
  console.error("Unhandled error:", err);

  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;
  const message =
    err.message || "Something went wrong on the server";

  res.status(status).json({ error: message });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};