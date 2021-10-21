const express = require("express");
const router = express.Router();
const moviesController = require("../../controllers/api/moviesController");

router.post("/movie", moviesController.create);
router.delete("/movie/:id", moviesController.destroy);

module.exports = router;
