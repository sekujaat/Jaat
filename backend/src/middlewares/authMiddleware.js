// src/middlewares/authMiddleware.js

function requireUser(req, res, next) {
  // TODO: replace with proper JWT auth later
  const userId = req.header("x-user-id");

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized: x-user-id header missing" });
  }

  req.user = { id: userId };
  return next();
}

module.exports = {
  requireUser,
};