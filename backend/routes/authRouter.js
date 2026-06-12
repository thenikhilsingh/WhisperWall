const Router = require("express");
const { home, register } = require("../controllers/authController");

const authRouter = Router();

authRouter.get("/", home);
authRouter.post("/register", register);

module.exports = authRouter;
