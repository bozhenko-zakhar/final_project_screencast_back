export const notFoundHandler = (req, res) => {
  res.status(404).json({ msg: "Route not found" });
};