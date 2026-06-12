const Router = require("express");
const { home, register, login } = require("../controllers/authController");
const { registerValidator } = require("../validators/authValidator");
const { loginValidator } = require("../validators/authValidator");

const authRouter = Router();

authRouter.get("/", home);
authRouter.post("/register", registerValidator, register);
authRouter.post("/login", loginValidator, login);

module.exports = authRouter;
