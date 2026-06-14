const User = require("../models/User");

const joinClubController = async (req, res) => {
  try {
    const { id } = req.params;
    const { userEnteredPassword } = req.body;
    if (userEnteredPassword !== process.env.JOIN_CLUB_PASSWORD) {
      return res.status(403).json({ message: "Invalid club password" });
    }
    await User.findByIdAndUpdate(id, {
      isClubMember: true,
    });
    res.status(200).json({
      message: "Successfully joined the club!",
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error!" });
  }
};

module.exports = joinClubController;
