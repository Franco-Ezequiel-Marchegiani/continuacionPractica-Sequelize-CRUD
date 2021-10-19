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
    name: {
      type: DataTypes.STRING,
    },
    ranking: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.INTEGER,
    },
  };
  const config = {
    tableName: "genres",
    timestamps: false,
  };
  const Genre = sequelize.define("Genre", cols, config);

  Genre.associate = (modelos) => {
    Genre.hasMany(modelos.Movie, {
      as: "movies",
      foreignKey: "genre_id",
    });
  };
  return Genre;
};
