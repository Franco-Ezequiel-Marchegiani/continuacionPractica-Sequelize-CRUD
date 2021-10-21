const express = require("express");
const genresRoutes = require("./genresRouter");
const moviesRoutes = require("./moviesRoutes");

const router = express.Router();
router.use(genresRoutes);
router.use(moviesRoutes);

module.exports = router;
