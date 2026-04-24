export const authenticate = (req, res, next) => {
  req.user = {
    _id: "507f1f77bcf86cd799439011",
  };

  next();
};