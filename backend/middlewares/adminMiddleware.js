const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Access Denied. User is not an admin!" });
    }
    next(); //if user is admin move forward or proceed to next middleware
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = adminMiddleware;
