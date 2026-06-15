const Router = require("express");
const {
  getAllMessages,
  postMessage,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getAllMessages);
messageRouter.post("/create", postMessage);

module.exports = messageRouter;
