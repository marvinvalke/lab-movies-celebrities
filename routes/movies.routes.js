const MovieModel = require("../models/Movie.model");
const CelebrityModel = require("../models/Celebrity.model");
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render("../views/movies/movies.hbs", { movies });
    })
    .catch((err) => {
      next(err);
    });
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
      //console.log('error here')
      res.redirect("/movies");
    })
    .catch(() => {
      //console.log('error in the catch')
      res.render("../views/movies/new-movie.hbs");
    });
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;

  MovieModel.findById(id)
    .populate("cast")
    .then((movie) => {
      console.log(movie);

      res.render("../views/movies/movie-details.hbs", { movie });
    })
    .catch(() => {
      next("Single movie fetch failed");
    });
});
router.post("/movies/:id/delete", (req, res, next) => {
    
    const{id} = req.params
    
    MovieModel.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
    next (err)
    })
  
});
module.exports = router;
