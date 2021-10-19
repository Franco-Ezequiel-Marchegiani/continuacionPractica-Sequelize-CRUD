module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  };
  const config = {
    tableName: "actors",
    timestamps: false,
  };
  const Actor = sequelize.define("Actor", cols, config);

  Actor.associate = (modelos) => {
    Actor.belongsToMany(modelos.Movie, {
      as: "actors_movies",
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });
  };

  return Actor;
};
