function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("출력했단꼐", req.isAuthenticated());
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("출력했단꼐", req.isAuthenticated());
    res.redirect("/");
  }
  next();
}

module.exports = { checkAuthenticated, checkNotAuthenticated };
