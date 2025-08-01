const path = require("path");
const express = require("express");
const hostRouter = express.Router();

const rootDir = require("../utils/path");
const hostController = require("../controller/hostController");

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.post("/add-home", hostController.postAddHome);

hostRouter.get("/host-home-list", hostController.getHostHomes);

hostRouter.get("/edit-home/:homeId", hostController.getEditHome);

hostRouter.post("/edit-home/", hostController.postEditHome);

hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome);

module.exports = hostRouter;