const db = require("../database/models");

const generos = {
  list: (req, res) => {
    db.Genre.findAll().then((resultado) => {
      res.render("genresList", { genres: resultado });
    });
  },
  detail: (req, res) => {
    db.Genre.findByPk(req.params.id).then((resultado) => {
      res.render("genresDetail", { genre: resultado });
    });
  },
};

module.exports = generos;
