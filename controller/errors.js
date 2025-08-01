exports.pageNotFound = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Error: 404!",
    currPage: "404",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};