const { Genre } = require("../../database/models");

const generos = {
  list: async (req, res) => {
    const generos = await Genre.findAll();

    res.json({
      meta: {
        status: 200,
        total: generos.length,
        url: "api/genres",
      },
      data: generos,
    });
  },
  detail: async (req, res) => {
    const genero = await Genre.findByPk(req.params.id);
    if (genero) {
      res.json({
        meta: {
          status: 200,
          total: generos.length,
          url: "api/genres/" + req.params.id,
        },
        data: genero,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          total: generos.length,
          url: "api/genres/" + req.params.id,
        },
        data: "No se encontró el género con el id " + req.params.id,
      });
    }
  },
};

module.exports = generos;
