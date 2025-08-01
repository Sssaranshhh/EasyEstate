const Home = require("../models/home");
const fs = require("fs");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to easyEstate",
    currPage: "addHome",
    editing: false,
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddHome = (req, res, next) => {
  const { homeName, rentPerMonth, location, rating, description } = req.body;

  if (!req.file) {
    return res.status(422).send("No image provided");
  }

  const houseImage = req.file.path;

  const home = new Home({
    homeName,
    rentPerMonth,
    location,
    rating,
    houseImage,
    description,
  });

  home
    .save()
    .then(() => {
      console.log("Home saved successfully.");
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error saving home:", err);
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.find()
    .then((regHomes) => {
      res.render("host/host-home-list", {
        regHomes,
        pageTitle: "Host Homes",
        currPage: "host-homes",
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => console.log("Error loading host homes:", err));
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  if (!editing) {
    return res.redirect("/host/host-home-list");
  }

  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        console.log("Home not found for editing.");
        return res.redirect("/host/host-home-list");
      }
      res.render("host/edit-home", {
        pageTitle: "Edit Your Home",
        currPage: "host-homes",
        editing: true,
        isLoggedIn: req.session.isLoggedIn,
        home,
        user: req.session.user,
      });
    })
    .catch((err) => {
      console.log("Error in getEditHome:", err);
      res.redirect("/host/host-home-list");
    });
};

exports.postEditHome = (req, res, next) => {
  const { id, homeName, rentPerMonth, location, rating, description } =
    req.body;

  Home.findById(id)
    .then((home) => {
      home.homeName = homeName;
      home.rentPerMonth = rentPerMonth;
      home.rating = rating;
      home.location = location;
      home.description = description;

      if (req.file) {
        fs.unlink(home.houseImage, (err) => {
          if (err) {
            console.log("Error while deleting file ", err);
          }
        });
        home.houseImage = req.file.path;
      }

      home
        .save()
        .then(() => {
          console.log(" Home updated successfully.");
        })
        .catch((err) => {
          console.log("Error while updating.", err);
        });
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while finding home.", err);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findByIdAndDelete(homeId)
    .then(() => {
      console.log("Home deleted successfully.");
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error while deleting home:", error);
    });
};
