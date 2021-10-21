const { Movie } = require("../../database/models");

const movies = {
  create: async (req, res) => {
    const pelicula = await Movie.create(req.body);
    res.send({
      meta: {
        status: 201,
        url: "api/movie",
      },
      data: pelicula,
    });
  },
  destroy: async (req, res) => {
    const movieDeleted = await Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      meta: {
        status: 201,
        url: "api/movie",
      },
      data: movieDeleted,
    });
  },
};

module.exports = movies;
