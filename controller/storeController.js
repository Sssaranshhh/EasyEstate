const Home = require("../models/home");
const User = require("../models/user");

exports.getHomes = (req, res, next) => {
  Home.find()
    .then((regHomes) => {
      res.render("store/home-list", {
        regHomes,
        pageTitle: "Home List",
        currPage: "Home",
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => console.log("Error fetching homes:", err));
};

exports.postSubmit = (req, res, next) => {
  Home.find()
    .then((regHomes) => {
      res.render("store/home-list", {
        regHomes,
        pageTitle: "Home",
        currPage: "Home",
        isLoggedIn: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log("Error in postSubmit:", err));
};

exports.getBookings = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("bookings");

  res.render("store/bookings", {
    regHomes: user.bookings,
    pageTitle: "My Bookings",
    currPage: "bookings",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.postBookings = async (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const homeId = req.body.id;
  const userId = req.session.user._id;

  const user = await User.findById(userId);

  if (!user.bookings.includes(homeId)) {
    user.bookings.push(homeId);
    await user.save();
  }

  res.redirect("/bookings");
};

exports.postDeleteBooking = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;

  const user = await User.findById(userId);
  if (user.bookings.includes(homeId)) {
    user.bookings = user.bookings.filter(
      (book) => book.toString() !== homeId
    );
    await user.save();
  }

  res.redirect("/bookings");
};

exports.getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("favourites");

  res.render("store/favourite-list", {
    regHomes: user.favourites,
    pageTitle: "Favourites",
    currPage: "favourites",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.postFavouriteList = async (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const homeId = req.body.id;
  const userId = req.session.user._id;

  const user = await User.findById(userId);

  if (!user.favourites.includes(homeId)) {
    user.favourites.push(homeId);
    await user.save();
  }

  res.redirect("/favourite-list");
};

exports.postDeleteFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;

  const user = await User.findById(userId);
  if (user.favourites.includes(homeId)) {
    user.favourites = user.favourites.filter(
      (fav) => fav.toString() !== homeId
    );
    await user.save();
  }

  res.redirect("/favourite-list");
};

exports.getReservations = (req, res, next) => {
  Home.find()
    .then((regHomes) => {
      res.render("store/reserve", {
        isLoggedIn: req.session.isLoggedIn,
        regHomes,
        pageTitle: "My Reservations",
        currPage: "reserve",
        user: req.session.user,
      });
    })
    .catch((err) => console.log("Error in getReservations:", err));
};

exports.getIndex = (req, res, next) => {
  Home.find()
    .then((regHomes) => {
      res.render("store/index", {
        regHomes,
        pageTitle: "Index",
        currPage: "index",
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => console.log("Error in getIndex:", err));
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        console.log("Home Not Found!");
        return res.redirect("/homes");
      }
      res.render("store/home-detail", {
        home,
        pageTitle: "Home Detail",
        currPage: "home-detail",
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((err) => console.log("Error in getHomeDetails:", err));
};