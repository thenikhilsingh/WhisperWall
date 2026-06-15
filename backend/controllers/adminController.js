const User = require("../models/User.js");
const Message = require("../models/Message.js");

const becomeAnAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { userEnteredPassword } = req.body;
    if (userEnteredPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(403).json({ message: "Invalid Admin password" });
    }
    await User.findByIdAndUpdate(id, {
      isAdmin: true,
    });
    res.status(200).json({
      message: "You are an Admin now!",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, { password: 0 });
    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({ message: "No User Found!" });
    }
    return res
      .status(200)
      .json({ message: "users fetched successfully!", allUsers });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const allMessages = await Message.find().populate("author", "fullName");
    if (!allMessages || allMessages.length === 0) {
      return res.status(404).json({ message: "No Message Found!" });
    }
    return res
      .status(200)
      .json({ message: "messages fetched successfully!", allMessages });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.status(200).json({ message: "message deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "message is not deleted!" });
  }
};

module.exports = { becomeAnAdmin, getAllUsers, getAllMessages, deleteMessage };
