const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recomended);
router.get("/movies/detail/:id", moviesController.detail);

//Añadir pelicula
router.get("/movies/add", moviesController.addMovie);
router.post("/movies/create", moviesController.create);

//Editar película
router.get("/movies/edit/:id", moviesController.editMovie);
router.put("/movies/update/:id", moviesController.updateMovie);

//Eliminar película
router.get("/movies/delete/:id", moviesController.deleteMovie);
router.delete("/movies/delete/:id", moviesController.remove);

module.exports = router;
