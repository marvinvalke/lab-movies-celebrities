const MovieModel = require("../models/Movie.model");
const CelebrityModel = require("../models/Celebrity.model");
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/movies", (req, res, next) => {
  res.render("../views/movies/movies.hbs");
});

router.get("/movies/create", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrities) => {
      res.render("../views/movies/new-movie.hbs", { celebrities });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/movies/create", (req, res, next) => {
  const { title, genre, pilot, cast } = req.body;
  MovieModel.create({ title, genre, pilot, cast })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {
      res.render("../views/movies/new-movie.hbs");
    });
});

module.exports = router;
