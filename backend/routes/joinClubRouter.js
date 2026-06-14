const Router = require("express");
const joinClubController = require("../controllers/joinClubController");

const joinClubRouter = Router();

joinClubRouter.put("/:id", joinClubController);

module.exports = joinClubRouter;
