const Router = require("express");
const {
  becomeAnAdmin,
  getAllUsers,
  getAllMessages,
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware.js");
const adminMiddleware = require("../middlewares/adminMiddleware.js");

const adminRouter = Router();

adminRouter.put("/become-an-admin/:id", authMiddleware, becomeAnAdmin);
adminRouter.get("/users", authMiddleware, adminMiddleware, getAllUsers);
adminRouter.get("/messages", authMiddleware, adminMiddleware, getAllMessages);

module.exports = adminRouter;
