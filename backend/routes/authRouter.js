const Router = require("express");
const { home, register, login } = require("../controllers/authController");

const authRouter = Router();

authRouter.get("/", home);
authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;
