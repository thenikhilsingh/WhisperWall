const Router = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("the server is running");
});

module.exports = indexRouter;
