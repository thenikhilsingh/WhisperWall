const Router = require("express");
const {
  home,
  register,
  login,
  user,
} = require("../controllers/authController");
const { registerValidator } = require("../validators/authValidator");
const { loginValidator } = require("../validators/authValidator");
const authMiddleware = require("../middlewares/authMiddleware.js");

const authRouter = Router();

authRouter.get("/", home);
authRouter.post("/register", registerValidator, register);
authRouter.post("/login", loginValidator, login);
authRouter.get("/user", authMiddleware, user);

module.exports = authRouter;
