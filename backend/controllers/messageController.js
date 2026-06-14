const Message = require("../models/Message");

const getAllMessages = async (req, res) => {
  try {
    const allMsg = await Message.find().populate("author", "fullName"); // it will show authorname in place of his id
    res
      .status(200)
      .json({ message: "Message fetched successfully", data: allMsg });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get messages",
      error,
    });
  }
};

const postMessage = async (req, res) => {
  try {
    const msg = req.body;
    const createdMessage = await Message.create(msg);
    res
      .status(201)
      .json({ message: "Message created successfully", data: createdMessage });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create message",
      error,
    });
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

module.exports = { getAllMessages, postMessage, deleteMessage };
