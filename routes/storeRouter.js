const express = require("express");
const storeRouter = express.Router();
const storeController = require("../controller/storeController");

storeRouter.get("/home-list", storeController.getHomes);

storeRouter.post("/register-home", storeController.postSubmit);

storeRouter.get("/bookings", storeController.getBookings);

storeRouter.post("/bookings", storeController.postBookings);

storeRouter.post("/bookings/delete/:homeId",storeController.postDeleteBooking);

storeRouter.get("/favourite-list", storeController.getFavouriteList);

storeRouter.post("/favourite-list", storeController.postFavouriteList);

storeRouter.post("/favourite-list/delete/:homeId",storeController.postDeleteFavourite);

storeRouter.get("/reserve", storeController.getReservations);

storeRouter.get("/", storeController.getIndex);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);


module.exports = storeRouter;