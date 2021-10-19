const db = require("../database/models");

const actors = {
  list: (req, res) => {
    db.Actor.findAll().then((resultado) => {
      res.render("actorsList", { actors: resultado });
    });
  },
  ratingDetail: (req, res) => {
    db.Actor.findByPk(req.params.id).then((resultado) => {
      res.render("actorsDetailRanting", { actor: resultado });
    });
  },
};

module.exports = actors;
