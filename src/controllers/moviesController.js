const db = require("../database/models");

const movies = {
  list: (req, res) => {
    db.Movie.findAll().then((respuesta) => {
      res.render("moviesList", { movies: respuesta });
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id, {
      include: [{ association: "generos" }],
    })
      .then((respuesta) => {
        //console.log(respuesta);
        res.render("moviesDetail", { movie: respuesta, generos: respuesta });
      })
      .catch((error) => {
        res.redirect("/movies", { error });
      });
  },
  new: (req, res) => {
    const orderBy = { order: [["release_date", "DESC"]] };
    db.Movie.findAll(orderBy).then((respuesta) => {
      res.render("moviesList", { movies: respuesta });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({ order: [["rating", "DESC"]] }).then((resultado) => {
      res.render("recommendedMovies", { movies: resultado });
    });
  },
  addMovie: (req, res) => {
    db.Genre.findAll().then((generos) => {
      //console.log(generos);
      res.render("addMovie", { generos });
    });
  },
  create: (req, res) => {
    db.Movie.create({
      title: req.body.title,
      awards: req.body.premios,
      length: req.body.duracion,
      rating: req.body.rating,
      release_date: req.body.relase_date,
      genre_id: req.body.genero,
    });
    res.redirect("/movies");
  },
  editMovie: (req, res) => {
    let movies = db.Movie.findByPk(req.params.id);
    let generos = db.Genre.findAll();

    Promise.all([movies, generos]).then(function ([movie, generos]) {
      res.render("editMovie", { movie, generos });
    });
  },
  updateMovie: (req, res) => {
    db.Movie.update(
      {
        title: req.body.title,
        awards: req.body.premios,
        length: req.body.duracion,
        rating: req.body.rating,
        release_date: req.body.relase_date,
        genre_id: req.body.genero,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/");
  },
  deleteMovie: (req, res) => {
    db.Movie.findByPk(req.params.id).then((pelicula) => {
      res.render("deleteMovie", { movie: pelicula });
    });
  },
  remove: (req, res) => {
    db.Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/movies");
  },
};

module.exports = movies;
