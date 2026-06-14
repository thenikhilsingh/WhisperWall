const Router = require("express");
const {
  getAllMessages,
  postMessage,
  deleteMessage,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getAllMessages);
messageRouter.post("/create", postMessage);
messageRouter.delete("/delete/:id", deleteMessage);

module.exports = messageRouter;
