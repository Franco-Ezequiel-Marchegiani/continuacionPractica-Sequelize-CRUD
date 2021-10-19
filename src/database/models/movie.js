/* El alias debe ser en inglés
Si se escribe en mayúscula y en individual, puede 
comunicarse correctamente con sql */
module.exports = (sequelize, DataTypes) => {
  const cols = {
    /* No es 100% necesario el declarar el ID
    Lo declara por default */
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
  };
  config = {
    tableName: "movies",
    timestamps: false,
  };
  const Movie = sequelize.define("Movie", cols, config);

  Movie.associate = (modelos) => {
    Movie.belongsTo(modelos.Genre, {
      as: "generos",
      foreignKey: "genre_id",
    });
    Movie.belongsToMany(modelos.Actor, {
      as: "movies_actors",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return Movie;
};
